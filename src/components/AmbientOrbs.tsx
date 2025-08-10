import React, { useEffect, useRef, useState } from "react";

const AmbientOrbs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0.5, y: 0.5 });
  const [isMounted, setIsMounted] = useState(false);

  // Orb configurations
  const orbConfigs = [
    { 
      id: 1, 
      size: 120, 
      initialX: 20, 
      initialY: 30, 
      speed: 15,
      color: 'from-orange-300/20 to-orange-200/10'
    },
    { 
      id: 2, 
      size: 80, 
      initialX: 70, 
      initialY: 20, 
      speed: 18,
      color: 'from-amber-200/25 to-orange-100/15'
    },
    { 
      id: 3, 
      size: 100, 
      initialX: 85, 
      initialY: 60, 
      speed: 20,
      color: 'from-white/15 to-orange-50/10'
    },
    { 
      id: 4, 
      size: 60, 
      initialX: 15, 
      initialY: 75, 
      speed: 12,
      color: 'from-orange-200/30 to-amber-100/20'
    },
    { 
      id: 5, 
      size: 140, 
      initialX: 50, 
      initialY: 85, 
      speed: 25,
      color: 'from-amber-100/18 to-orange-50/12'
    },
    { 
      id: 6, 
      size: 90, 
      initialX: 30, 
      initialY: 50, 
      speed: 16,
      color: 'from-orange-100/22 to-white/8'
    }
  ];

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      mousePosition.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      
      const touch = e.touches[0];
      mousePosition.current = {
        x: touch.clientX / window.innerWidth,
        y: touch.clientY / window.innerHeight
      };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <>
      {/* Add keyframes to the document head */}
      {isMounted && (
        <style>{`
          @keyframes float-1 {
            0%, 100% { transform: translate(-50%, -50%) translate(0px, 0px) scale(1); }
            25% { transform: translate(-50%, -50%) translate(30px, -20px) scale(1.1); }
            50% { transform: translate(-50%, -50%) translate(-25px, -30px) scale(0.9); }
            75% { transform: translate(-50%, -50%) translate(-30px, 20px) scale(1.05); }
          }
          
          @keyframes float-2 {
            0%, 100% { transform: translate(-50%, -50%) translate(0px, 0px) scale(1); }
            30% { transform: translate(-50%, -50%) translate(-25px, 20px) scale(1.15); }
            60% { transform: translate(-50%, -50%) translate(18px, 25px) scale(0.85); }
          }
          
          @keyframes float-3 {
            0%, 100% { transform: translate(-50%, -50%) translate(0px, 0px) scale(1); }
            20% { transform: translate(-50%, -50%) translate(32px, -18px) scale(0.9); }
            70% { transform: translate(-50%, -50%) translate(-20px, -35px) scale(1.2); }
          }
          
          @keyframes float-4 {
            0%, 100% { transform: translate(-50%, -50%) translate(0px, 0px) scale(1); }
            40% { transform: translate(-50%, -50%) translate(-20px, -18px) scale(1.1); }
            80% { transform: translate(-50%, -50%) translate(16px, 14px) scale(0.95); }
          }
          
          @keyframes float-5 {
            0%, 100% { transform: translate(-50%, -50%) translate(0px, 0px) scale(1); }
            35% { transform: translate(-50%, -50%) translate(28px, 40px) scale(0.8); }
            65% { transform: translate(-50%, -50%) translate(-40px, -32px) scale(1.25); }
          }
          
          @keyframes float-6 {
            0%, 100% { transform: translate(-50%, -50%) translate(0px, 0px) scale(1); }
            25% { transform: translate(-50%, -50%) translate(-22px, 17px) scale(1.05); }
            75% { transform: translate(-50%, -50%) translate(28px, -25px) scale(0.9); }
          }
          
          @keyframes fade-pulse {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
          
          .orb-1 { animation: float-1 15s infinite ease-in-out, fade-pulse 8s infinite ease-in-out; }
          .orb-2 { animation: float-2 18s infinite ease-in-out, fade-pulse 10s infinite ease-in-out; animation-delay: 2s; }
          .orb-3 { animation: float-3 20s infinite ease-in-out, fade-pulse 12s infinite ease-in-out; animation-delay: 4s; }
          .orb-4 { animation: float-4 12s infinite ease-in-out, fade-pulse 7s infinite ease-in-out; animation-delay: 6s; }
          .orb-5 { animation: float-5 25s infinite ease-in-out, fade-pulse 15s infinite ease-in-out; animation-delay: 8s; }
          .orb-6 { animation: float-6 16s infinite ease-in-out, fade-pulse 9s infinite ease-in-out; animation-delay: 10s; }
        `}</style>
      )}
      
      <div 
        ref={containerRef}
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      >
        {isMounted && orbConfigs.map((config) => (
          <div
            key={config.id}
            className={`
              absolute rounded-full blur-sm
              bg-gradient-to-br ${config.color}
              orb-${config.id}
            `}
            style={{
              width: `${config.size}px`,
              height: `${config.size}px`,
              left: `${config.initialX}%`,
              top: `${config.initialY}%`,
              transform: 'translate(-50%, -50%)',
              willChange: 'transform, opacity'
            }}
          />
        ))}
      </div>
    </>
  );
};

export default AmbientOrbs;