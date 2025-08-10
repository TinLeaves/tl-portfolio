import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import { FaNodeJs, FaJava, FaReact, FaBootstrap, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiPython, SiMysql, SiMongodb, SiJavascript, SiTypescript, SiPostgresql, SiKotlin, SiR, SiExpress, SiJquery, SiNpm, SiJira } from "react-icons/si";
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

export default function SkillsSwiper() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
        <div className={`transition-all duration-700 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 sm:mb-16 text-center bg-gradient-to-r from-blue-300 via-teal-400 to-blue-500 bg-clip-text text-transparent tracking-tight">
            Technical Skills
          </h2>
        </div>
        
        <div className={`transition-all duration-700 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '200ms' }}>
          
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
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
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
              {skills.map((skill, index) => (
                <SwiperSlide key={skill.name}>
                  <div className="group flex flex-col items-center p-3 sm:p-4 cursor-pointer">
                    <div className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-2xl bg-white/90 dark:bg-zinc-800/90 border border-gray-200 dark:border-zinc-600 transition-all duration-500 backdrop-blur-sm overflow-hidden flex items-center justify-center group-hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-blue-500/10 group-hover:to-teal-500/10 group-hover:border-blue-400/50">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-teal-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-sm"></div>
                      <skill.Icon className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <span className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300 text-center leading-tight">
                      {skill.name}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

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