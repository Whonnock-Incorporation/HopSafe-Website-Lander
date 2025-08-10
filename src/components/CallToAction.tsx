import React, { useEffect, useRef } from "react";

const CallToAction = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      elementsRef.current.forEach((element, index) => {
        if (element) {
          const speed = (index + 1) * 0.5;
          const moveX = (x - 0.5) * speed * 20;
          const moveY = (y - 0.5) * speed * 20;
          element.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveX * 0.5}deg)`;
        }
      });
    };

    const handleMouseLeave = () => {
      elementsRef.current.forEach(element => {
        if (element) {
          element.style.transform = 'translate(0px, 0px) rotate(0deg)';
        }
      });
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      section.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
        section.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-8 md:py-12 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden cursor-pointer"
    >
      {/* Interactive floating orbs */}
      <div 
        ref={el => el && (elementsRef.current[0] = el)}
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full blur-sm transition-transform duration-500 ease-out"
      ></div>
      
      <div 
        ref={el => el && (elementsRef.current[1] = el)}
        className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-br from-primary/15 to-primary/5 rounded-full blur-sm transition-transform duration-700 ease-out"
      ></div>
      
      <div 
        ref={el => el && (elementsRef.current[2] = el)}
        className="absolute bottom-1/3 left-1/2 w-20 h-20 bg-gradient-to-br from-primary/25 to-primary/10 rounded-full blur-sm transition-transform duration-600 ease-out"
      ></div>

      {/* Creative wave-like elements */}
      <div 
        ref={el => el && (elementsRef.current[3] = el)}
        className="absolute top-1/3 right-1/4 transition-transform duration-800 ease-out"
      >
        <div className="w-16 h-2 bg-gradient-to-r from-primary/30 to-transparent rounded-full"></div>
        <div className="w-12 h-2 bg-gradient-to-r from-primary/20 to-transparent rounded-full mt-2 ml-4"></div>
        <div className="w-8 h-2 bg-gradient-to-r from-primary/15 to-transparent rounded-full mt-2 ml-8"></div>
      </div>

      {/* Floating geometric shapes with curves */}
      <div 
        ref={el => el && (elementsRef.current[4] = el)}
        className="absolute bottom-1/4 right-1/4 w-6 h-6 transition-transform duration-500 ease-out"
      >
        <div className="w-full h-full bg-primary/30 rounded-tl-full rounded-br-full"></div>
      </div>
      
      <div 
        ref={el => el && (elementsRef.current[5] = el)}
        className="absolute top-1/4 right-1/2 w-4 h-4 transition-transform duration-900 ease-out"
      >
        <div className="w-full h-full bg-primary/25 transform rotate-45 rounded-sm"></div>
      </div>

      {/* Subtle connecting lines */}
      <div 
        ref={el => el && (elementsRef.current[6] = el)}
        className="absolute top-1/2 left-1/3 transition-transform duration-700 ease-out"
      >
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      </div>
      
      <div className="section-container relative">
        <div className="h-16"></div>
      </div>
    </section>
  );
};

export default CallToAction;