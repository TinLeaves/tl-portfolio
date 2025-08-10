import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { centerElementInViewport } from '../utils/scrollUtils';
import { staggerAnimation } from '../utils/animationUtils';
import Button from './ui/Button';
import SectionTitle from './ui/SectionTitle';
import { GitHubCard, LinkedInCard, EmailCard } from './ui/ContactCards';

export default function Contact() {
    const [showContactDetails, setShowContactDetails] = useState(false);
    const [animatedButtons, setAnimatedButtons] = useState(new Set());
    const { elementRef: sectionRef, isVisible, scrollProgress } = useScrollAnimation(0.1);

    const handleButtonClick = () => {
        setShowContactDetails(prevState => {
            const newState = !prevState;
            if (newState) {
                // Clear previous animations
                setAnimatedButtons(new Set());
                
                // Center the contact section
                centerElementInViewport(sectionRef.current, { delay: 150 });
                
                // Start staggered animations for buttons
                staggerAnimation(
                    (index) => {
                        setAnimatedButtons(prev => new Set([...prev, index]));
                    },
                    3, // 3 contact buttons
                    150, // 150ms delay between each
                    150 // 150ms initial delay
                );
            }
            return newState;
        });
    };

    return (
        <section id="contact" className="py-16 sm:py-24" ref={sectionRef}>
            <div className="relative">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
                    <div className="transition-all duration-300"
                         style={{
                             opacity: scrollProgress,
                             transform: `translateY(${(1 - scrollProgress) * 20}px)`
                         }}>
                        <SectionTitle>Contact</SectionTitle>
                        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>
                    </div>
                    <div className="transition-all duration-300"
                         style={{
                             opacity: Math.max(0, scrollProgress - 0.2) / 0.8,
                             transform: `translateY(${(1 - Math.max(0, scrollProgress - 0.2) / 0.8) * 20}px)`
                         }}>
                        <Button
                            onClick={handleButtonClick}
                            variant="primary"
                            size="large"
                            icon={ArrowRight}
                        >
                            Get in Touch
                        </Button>
                    </div>

                    {showContactDetails && (
                        <div className="flex flex-col gap-8 sm:gap-12 mt-8 max-w-lg mx-auto transition-all duration-300"
                             style={{
                                 opacity: Math.max(0, scrollProgress - 0.4) / 0.6,
                                 transform: `translateY(${(1 - Math.max(0, scrollProgress - 0.4) / 0.6) * 20}px)`
                             }}>
                            <GitHubCard animated={true} animationIndex={0} visibleItems={animatedButtons} />
                            <LinkedInCard animated={true} animationIndex={1} visibleItems={animatedButtons} />
                            <EmailCard animated={true} animationIndex={2} visibleItems={animatedButtons} />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
