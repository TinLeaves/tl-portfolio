import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import { FaNodeJs, FaJava, FaReact, FaBootstrap, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiPython, SiMysql, SiMongodb, SiJavascript, SiTypescript, SiPostgresql, SiKotlin, SiR, SiExpress, SiJquery, SiNpm, SiJira } from "react-icons/si";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FaRegHandPointUp } from "react-icons/fa";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Device detection hook (same logic as in useScrollAnimation)
function useDeviceDetection() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    // Detect touch capability
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(hasTouch);

    // Detect screen size - include tablets (up to 1024px)
    const updateScreenSize = () => {
      setIsMobileOrTablet(window.innerWidth < 1024); // lg breakpoint - includes tablets
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return { isTouchDevice, isMobileOrTablet };
}

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

export default function SkillsSwiper() {
  const { elementRef: sectionRef, isVisible, scrollProgress } = useScrollAnimation(0.1);
  const { isTouchDevice, isMobileOrTablet } = useDeviceDetection();
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showIndicator, setShowIndicator] = useState(false);
  const [userHasInteracted, setUserHasInteracted] = useState(false);
  const [fingerControlled, setFingerControlled] = useState(false);
  const [inactivityTimer, setInactivityTimer] = useState(null);
  
  // Show indicator with delay when component becomes visible
  useEffect(() => {
    if (isVisible && !userHasInteracted) {
      // Add slight delay to prevent flashing
      const timeout = setTimeout(() => {
        setShowIndicator(true);
        setFingerControlled(true);
      }, 500); // 500ms delay
      
      return () => clearTimeout(timeout);
    }
  }, [isVisible, userHasInteracted]);
  
  // Finger-controlled auto advance
  useEffect(() => {
    if (!fingerControlled || userHasInteracted) return;
    
    const interval = setInterval(() => {
      if (swiperRef.current && swiperRef.current.swiper && fingerControlled && !userHasInteracted) {
        swiperRef.current.swiper.slideNext();
      }
    }, 2500); // Synchronized with UI/UX standards - 2.5 seconds
    
    return () => clearInterval(interval);
  }, [fingerControlled, userHasInteracted]);
  
  // Reset finger control after inactivity with smooth transition
  const resetInactivityTimer = () => {
    if (inactivityTimer) {
      clearTimeout(inactivityTimer);
    }
    const timer = setTimeout(() => {
      // Gradual state reset with longer delays to prevent flashing
      setTimeout(() => setUserHasInteracted(false), 100);
      setTimeout(() => setFingerControlled(true), 300);
      setTimeout(() => setShowIndicator(true), 800); // Longer delay before showing
    }, 4000); // Longer inactivity timeout - 4 seconds
    setInactivityTimer(timer);
  };
  
  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (inactivityTimer) {
        clearTimeout(inactivityTimer);
      }
    };
  }, [inactivityTimer]);
  
  // Remove permanent highlighting on mobile - center card should always be highlighted
  const usePermanentHighlight = false;

  const skills = [
    { Icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
    { Icon: SiTypescript, name: "TypeScript", color: "text-blue-400" },
    { Icon: SiPython, name: "Python", color: "text-yellow-500" },
    { Icon: FaJava, name: "Java", color: "text-red-500" },
    { Icon: FaReact, name: "React", color: "text-cyan-400" },
    { Icon: SiNextdotjs, name: "Next.js", color: "text-white" },
    { Icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
    { Icon: SiExpress, name: "Express.js", color: "text-gray-400" },
    { Icon: SiTailwindcss, name: "Tailwind", color: "text-blue-500" },
    { Icon: SiMysql, name: "MySQL", color: "text-blue-600" },
    { Icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-700" },
    { Icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
    { Icon: FaGitAlt, name: "Git", color: "text-red-400" },
    { Icon: FaBootstrap, name: "Bootstrap", color: "text-purple-400" },
    { Icon: SiJquery, name: "jQuery", color: "text-blue-500" },
    { Icon: FaFigma, name: "Figma", color: "text-pink-500" },
    { Icon: SiKotlin, name: "Kotlin", color: "text-purple-500" },
    { Icon: SiR, name: "R", color: "text-blue-600" },
    { Icon: SiJira, name: "Jira", color: "text-blue-500" },
    { Icon: SiNpm, name: "npm", color: "text-red-500" },
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="transition-all duration-300"
             style={{
               opacity: scrollProgress,
               transform: `translateY(${(1 - scrollProgress) * 20}px)`
             }}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 sm:mb-16 text-center bg-gradient-to-r from-blue-300 via-teal-400 to-blue-500 bg-clip-text text-transparent tracking-tight">
            Technical Skills
          </h2>
        </div>
        
        <div className="transition-all duration-300"
             style={{
               opacity: Math.max(0, scrollProgress - 0.3) / 0.7,
               transform: `translateY(${(1 - Math.max(0, scrollProgress - 0.3) / 0.7) * 30}px)`
             }}>
          
          {/* Swiper 3D Carousel */}
          <div className="relative max-w-5xl mx-auto">
            <Swiper
              ref={swiperRef}
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3}
              spaceBetween={0}
              loop={true}
              speed={300}
              autoplay={fingerControlled && !userHasInteracted ? false : {
                delay: 2500,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: false,
              }}
              pagination={false}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              modules={[EffectCoverflow, Navigation, Autoplay]}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.realIndex);
                // If slide changed but finger isn't controlling, user is interacting
                if (!fingerControlled) {
                  setUserHasInteracted(true);
                  setShowIndicator(false);
                  setFingerControlled(false);
                  resetInactivityTimer();
                }
              }}
              onTouchStart={() => {
                setUserHasInteracted(true);
                setShowIndicator(false);
                setFingerControlled(false);
                resetInactivityTimer();
              }}
              onSliderMove={() => {
                setUserHasInteracted(true);
                setShowIndicator(false);
                setFingerControlled(false);
                resetInactivityTimer();
              }}
              onTouchMove={() => {
                setUserHasInteracted(true);
                setShowIndicator(false);
                setFingerControlled(false);
                resetInactivityTimer();
              }}
              onTouchEnd={() => {
                resetInactivityTimer();
              }}
              onSwiper={(swiper) => {
                // Additional interaction detection
                const originalSlideNext = swiper.slideNext;
                const originalSlidePrev = swiper.slidePrev;
                
                swiper.slideNext = function(...args) {
                  if (!fingerControlled) {
                    setUserHasInteracted(true);
                    setShowIndicator(false);
                    setFingerControlled(false);
                    resetInactivityTimer();
                  }
                  return originalSlideNext.apply(this, args);
                };
                
                swiper.slidePrev = function(...args) {
                  if (!fingerControlled) {
                    setUserHasInteracted(true);
                    setShowIndicator(false);
                    setFingerControlled(false);
                    resetInactivityTimer();
                  }
                  return originalSlidePrev.apply(this, args);
                };

                // Add mouse interaction detection
                swiper.el.addEventListener('mouseenter', () => {
                  if (showIndicator) {
                    setUserHasInteracted(true);
                    setShowIndicator(false);
                    setFingerControlled(false);
                    resetInactivityTimer();
                  }
                });

                // Add keyboard interaction detection
                swiper.el.addEventListener('keydown', () => {
                  if (showIndicator) {
                    setUserHasInteracted(true);
                    setShowIndicator(false);
                    setFingerControlled(false);
                    resetInactivityTimer();
                  }
                });
              }}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
              className="skills-swiper"
            >
              {skills.map((skill, index) => {
                // Check if this is the center/active slide
                const isActive = index === activeIndex;
                
                // Always apply highlight styles to active slide
                const cardBaseStyles = isActive 
                  ? "relative w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-2xl bg-gradient-to-br from-blue-500/10 to-teal-500/10 dark:from-blue-500/15 dark:to-teal-500/15 border border-blue-400/50 dark:border-blue-400/60 transition-all duration-500 backdrop-blur-sm overflow-hidden flex items-center justify-center shadow-lg shadow-blue-500/20 scale-105"
                  : "relative w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-2xl bg-white/90 dark:bg-zinc-800/90 border border-gray-200 dark:border-zinc-600 transition-all duration-500 backdrop-blur-sm overflow-hidden flex items-center justify-center group-hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-blue-500/10 group-hover:to-teal-500/10 group-hover:border-blue-400/50";
                
                const glowStyles = isActive
                  ? "absolute -inset-1 bg-gradient-to-r from-blue-500 via-teal-500 to-blue-500 rounded-2xl opacity-20 transition-opacity duration-500 -z-10 blur-sm"
                  : "absolute -inset-1 bg-gradient-to-r from-blue-500 via-teal-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-sm";
                
                const iconStyles = isActive
                  ? `w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 ${skill.color} scale-110 transition-transform duration-300 drop-shadow-sm`
                  : `w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 ${skill.color} group-hover:scale-110 transition-transform duration-300`;
                
                const textStyles = isActive
                  ? "mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg font-semibold text-blue-700 dark:text-blue-300 transition-colors duration-300 text-center leading-tight"
                  : "mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300 text-center leading-tight";

                return (
                  <SwiperSlide key={skill.name}>
                    <div className="group flex flex-col items-center p-3 sm:p-4 cursor-pointer">
                      <div className={`${cardBaseStyles} skill-card`}>
                        <div className={`${glowStyles} skill-glow`}></div>
                        <skill.Icon className={`${iconStyles} skill-icon`} />
                      </div>
                      <span className={`${textStyles} skill-text`}>
                        {skill.name}
                      </span>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

          </div>
          
          {/* Swipe Indicator - always present but finger hidden when user interacts */}
          <div className="flex items-center justify-center mt-6">
            <div className="relative w-64 h-8 flex items-center justify-center overflow-hidden">
              {/* Finger - controls the carousel */}
              <div className="absolute left-0 right-0 flex items-center justify-center" style={{
                opacity: showIndicator && fingerControlled && !userHasInteracted ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out',
                pointerEvents: 'none',
                zIndex: 2
              }}>
                <FaRegHandPointUp className="w-6 h-6 text-blue-500 dark:text-blue-400 drop-shadow-sm" style={{
                  animation: showIndicator && fingerControlled && !userHasInteracted ? 'fingerMove 2.5s ease-in-out infinite' : 'none',
                  transform: showIndicator && fingerControlled && !userHasInteracted ? 'translateX(40px)' : 'translateX(40px) scale(0)',
                  transition: 'transform 0.3s ease-out'
                }} />
              </div>
              {/* Trail that follows behind finger */}
              <div className="absolute left-0 right-0 flex items-center justify-center" style={{
                opacity: showIndicator && fingerControlled && !userHasInteracted ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out',
                pointerEvents: 'none',
                zIndex: 1
              }}>
                <div className="h-1 bg-gradient-to-l from-blue-500/80 via-blue-400/60 to-transparent rounded-full" style={{
                  animation: showIndicator && fingerControlled && !userHasInteracted ? 'trailFollow 2.5s ease-in-out infinite' : 'none',
                  width: '0px',
                  transformOrigin: 'left center',
                  transform: showIndicator && fingerControlled && !userHasInteracted ? 'translateX(40px)' : 'translateX(40px) scaleX(0)',
                  transition: 'transform 0.3s ease-out'
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .skills-swiper {
          padding: 40px 0 40px 0;
          height: 320px;
        }
        
        .skills-swiper .swiper-slide {
          background: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0.4;
          transition: opacity 0.5s ease;
        }
        
        .skills-swiper .swiper-slide-active {
          opacity: 1;
        }
        
        /* Initial show and hide animation - cycles every 10 seconds */
        @keyframes initialShowHide {
          0% { opacity: 0; transform: scale(0.8); }
          10% { opacity: 1; transform: scale(1); }
          50% { opacity: 1; transform: scale(1); }
          60% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 0; transform: scale(0.8); }
        }
        
        @keyframes fingerMove {
          0% { transform: translateX(40px); opacity: 1; }
          40% { transform: translateX(40px); opacity: 1; }
          60% { transform: translateX(-40px); opacity: 1; }
          100% { transform: translateX(-40px); opacity: 1; }
        }
        
        @keyframes trailFollow {
          0% { 
            transform: translateX(40px);
            width: 0px;
            opacity: 0;
          }
          40% { 
            transform: translateX(40px);
            width: 0px;
            opacity: 0;
          }
          42% { 
            transform: translateX(35px);
            width: 5px;
            opacity: 0.4;
          }
          45% { 
            transform: translateX(25px);
            width: 15px;
            opacity: 0.6;
          }
          50% { 
            transform: translateX(10px);
            width: 30px;
            opacity: 0.8;
          }
          55% { 
            transform: translateX(-10px);
            width: 50px;
            opacity: 0.6;
          }
          60% { 
            transform: translateX(-25px);
            width: 65px;
            opacity: 0.4;
          }
          62% { 
            transform: translateX(-30px);
            width: 50px;
            opacity: 0.3;
          }
          65% { 
            transform: translateX(-35px);
            width: 30px;
            opacity: 0.2;
          }
          68% { 
            transform: translateX(-38px);
            width: 15px;
            opacity: 0.1;
          }
          70% { 
            transform: translateX(-40px);
            width: 0px;
            opacity: 0;
          }
          100% { 
            transform: translateX(-40px);
            width: 0px;
            opacity: 0;
          }
        }
        
        .skills-swiper .swiper-slide-prev,
        .skills-swiper .swiper-slide-next {
          opacity: 0.7;
        }
        
        /* Hide default navigation */
        .skills-swiper .swiper-button-next,
        .skills-swiper .swiper-button-prev {
          display: none;
        }
        
        @media (max-width: 640px) {
          .skills-swiper {
            height: 280px;
            padding: 30px 0 30px 0;
          }
        }
      `}</style>
    </section>
  );
}