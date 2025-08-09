import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial, isActive }) => (
  <div className={`transition-all duration-700 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute'}`}>
    <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 rounded-2xl p-8 sm:p-10 relative overflow-hidden group hover:border-purple-400/30 transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      
      {/* Quote Icon */}
      <div className="relative z-10">
        <Quote className="w-8 h-8 text-purple-400 mb-6" />
        
        {/* Testimonial Text */}
        <blockquote className="text-lg sm:text-xl text-zinc-200 leading-relaxed mb-8 font-light italic">
          "{testimonial.content}"
        </blockquote>
        
        {/* Author Info */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
            {testimonial.author.charAt(0)}
          </div>
          <div>
            <div className="font-semibold text-white text-lg">{testimonial.author}</div>
            <div className="text-purple-300 text-sm">{testimonial.role}</div>
            <div className="text-zinc-400 text-sm">{testimonial.company}</div>
          </div>
        </div>
        
        {/* Skills Highlighted */}
        <div className="flex flex-wrap gap-2 mt-6">
          {testimonial.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      content: "",
      author: "",
      role: "",
      company: "",
      skills: ["AI Integration", "Next.js", "TypeScript", "UX Design"]
    },
    {
      content: "",
      author: "",
      role: "",
      company: "",
      skills: ["Full-Stack Development", "E-Commerce", "React", "Performance"]
    },
    {
      content: "",
      author: "",
      role: "",
      company: "",
      skills: ["Data Analytics", "Power BI", "Business Intelligence", "Visualization"]
    },
    {
      content: "Cool",
      author: "",
      role: "",
      company: "",
      skills: ["JavaScript", "Web Development", "API Integration", "UI/UX"]
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-zinc-950 to-zinc-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 sm:mb-16 text-center bg-gradient-to-r from-purple-300 via-pink-400 to-purple-500 bg-clip-text text-transparent tracking-tight">
          What People Say
        </h2>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Cards */}
          <div className="relative min-h-[400px] flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                isActive={index === currentTestimonial}
              />
            ))}
          </div>
          
          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 space-x-6">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-zinc-800/50 border border-zinc-700 hover:border-purple-500 text-zinc-400 hover:text-purple-300 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-purple-500 shadow-lg shadow-purple-500/50'
                      : 'bg-zinc-600 hover:bg-purple-400'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-zinc-800/50 border border-zinc-700 hover:border-purple-500 text-zinc-400 hover:text-purple-300 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}