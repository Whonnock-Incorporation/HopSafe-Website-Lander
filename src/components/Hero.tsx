
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import heroCleanTracking from "@/assets/hero-clean-tracking.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  useEffect(() => {
    // Skip parallax on mobile
    if (isMobile) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const handleGetStartedClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDialogOpen(true);
  };
  
  return (
    <>
      <section 
        className="overflow-hidden relative min-h-screen flex items-center bg-gradient-to-br from-white via-orange-50/20 to-orange-100/30" 
        id="hero" 
        style={{
          padding: isMobile ? '100px 12px 40px' : '120px 20px 60px'
        }}
      >
        {/* Seamless integrated hero illustration */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${heroCleanTracking})`,
            backgroundPosition: isMobile ? 'center center' : 'right center',
            backgroundSize: isMobile ? 'cover' : '100% auto',
            opacity: isMobile ? 0.7 : 0.85
          }}
        ></div>
        
        {/* Natural text readability blend */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/60 to-transparent"></div>
        
        <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <div 
              className="pulse-chip mb-3 sm:mb-6 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.1s" }}
            >
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">01</span>
              <span>Safe Transportation</span>
            </div>
            
            <h1 
              className="section-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.3s" }}
            >
              HopSafe: Real-Time<br className="hidden sm:inline" />Bus Tracking
            </h1>
            
            <p 
              style={{ animationDelay: "0.5s" }} 
              className="section-subtitle mt-3 sm:mt-6 mb-4 sm:mb-8 leading-relaxed opacity-0 animate-fade-in text-gray-950 font-normal text-base sm:text-lg text-left"
            >
              Give parents peace of mind with live bus tracking, arrival notifications, and transparent transportation for educational institutions.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.7s" }}
            >
              <button 
                onClick={handleGetStartedClick}
                className="flex items-center justify-center group w-full sm:w-auto text-center" 
                style={{
                  backgroundColor: '#FE5C02',
                  borderRadius: '1440px',
                  boxSizing: 'border-box',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  fontSize: '14px',
                  lineHeight: '20px',
                  padding: '16px 24px',
                  border: '1px solid white',
                }}
              >
                Get Started Today
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold text-gray-900">
              Coming Soon! 🚌
            </DialogTitle>
            <DialogDescription className="text-center text-gray-600 mt-4">
              We're working hard to bring HopSafe to your community. 
              Our real-time bus tracking system is currently in development.
              <br /><br />
              Stay tuned for updates and be among the first to experience 
              safer, more transparent school transportation.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsDialogOpen(false)}
              className="px-6 py-2 bg-pulse-500 text-white rounded-full hover:bg-pulse-600 transition-colors duration-200"
            >
              Got it!
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Hero;
