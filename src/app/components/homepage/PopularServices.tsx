"use client";
import React, { useState, useEffect } from "react";
import { 
  Droplets, 
  Lightbulb, 
  Sparkles, 
  Sprout, 
  Palette, 
  Drill 
} from "lucide-react";
import ServicesButton from "../ServicesButton";

// Pre-defined particle positions to avoid Math.random() during SSR
const particlePositions = [
  { top: "20%", left: "30%", size: "12px", delay: "0s", duration: "4s" },
  { top: "60%", left: "70%", size: "8px", delay: "0.5s", duration: "3.5s" },
  { top: "80%", left: "40%", size: "15px", delay: "1s", duration: "5s" },
];

export default function PopularServices(): React.ReactElement {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const services = [
    { 
      name: "Plumbing", 
      icon: <Droplets className="w-8 h-8" />, 
      providers: 150,
      color: "text-blue-600",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    { 
      name: "Electrical", 
      icon: <Lightbulb className="w-8 h-8" />, 
      providers: 120,
      color: "text-yellow-600",
      gradient: "from-yellow-500 to-amber-500",
      bgGradient: "from-yellow-50 to-amber-50"
    },
    { 
      name: "Cleaning", 
      icon: <Sparkles className="w-8 h-8" />, 
      providers: 200,
      color: "text-teal-600",
      gradient: "from-teal-500 to-emerald-500",
      bgGradient: "from-teal-50 to-emerald-50"
    },
    { 
      name: "Gardening", 
      icon: <Sprout className="w-8 h-8" />, 
      providers: 80,
      color: "text-green-600",
      gradient: "from-green-500 to-lime-500",
      bgGradient: "from-green-50 to-lime-50"
    },
    { 
      name: "Painting", 
      icon: <Palette className="w-8 h-8" />, 
      providers: 95,
      color: "text-purple-600",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    { 
      name: "Carpentry", 
      icon: <Drill className="w-8 h-8" />, 
      providers: 110,
      color: "text-amber-600",
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50"
    },
  ];

  return (
    <section className="position-relative py-5 overflow-hidden">
      {/* Glassmorphism Background */}
      <div className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none">
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient bg-opacity-50" />
        <div
          className="position-absolute top-0 start-50 bg-success rounded-circle opacity-20"
          style={{ width: "20rem", height: "20rem", filter: "blur(80px)" }}
        />
        <div
          className="position-absolute bottom-0 end-0 bg-warning rounded-circle opacity-15"
          style={{ width: "18rem", height: "18rem", filter: "blur(70px)" }}
        />
        <div
          className="position-absolute top-50 start-0 bg-secondary rounded-circle opacity-10"
          style={{ width: "15rem", height: "15rem", filter: "blur(60px)" }}
        />
      </div>

      <div className="container position-relative z-1">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5">Popular Services</h2>
          <p className="text-muted fs-5">
            Browse our most requested service categories
          </p>
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-2">
              <div 
                className="card h-100 border-0 position-relative overflow-hidden group cursor-pointer popular-service-card"
                style={{ 
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  minHeight: "220px",
                  background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.05)"
                }}
              >
                {/* Animated Gradient Border */}
                <div 
                  className={`position-absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg gradient-border`}
                >
                  <div className="w-100 h-100 bg-transparent rounded-lg" />
                </div>

                {/* Hover Glow Effect */}
                <div 
                  className={`position-absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 rounded-lg hover-glow`}
                />

                {/* Animated Background Pattern */}
                <div 
                  className="position-absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 background-pattern"
                />

                <div className="card-body text-center p-4 d-flex flex-column justify-content-center position-relative z-1">
                  {/* Animated Icon Container */}
                  <div 
                    className={`mx-auto rounded-2xl d-flex align-items-center justify-content-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 icon-container`}
                    style={{
                      width: "80px",
                      height: "80px",
                      background: `linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)`,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.08), inset 0 1px 1px rgba(255,255,255,0.8)",
                      border: "1px solid rgba(255,255,255,0.4)"
                    }}
                  >
                    <div 
                      className={`transition-all duration-300 group-hover:scale-110 ${service.color}`}
                    >
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h5 
                    className="card-title fw-semibold mb-2 text-dark group-hover:text-gray-800 transition-colors duration-300"
                    style={{ fontSize: "1.1rem" }}
                  >
                    {service.name}
                  </h5>
                  
                  <p 
                    className="card-text small text-muted mb-0 group-hover:text-gray-600 transition-colors duration-300"
                  >
                    {service.providers}+ providers
                  </p>

                  {/* Animated Underline */}
                  <div 
                    className={`w-0 group-hover:w-12 h-0.5 bg-gradient-to-r ${service.gradient} mx-auto mt-2 transition-all duration-500 rounded-full animated-underline`}
                  />
                </div>

                {/* Floating Particles on Hover - Only render on client side */}
                {isMounted && (
                  <div className="position-absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
                    {particlePositions.map((particle, i) => (
                      <div
                        key={i}
                        className={`absolute rounded-full opacity-0 group-hover:opacity-100 floating-particle`}
                        style={{
                          width: particle.size,
                          height: particle.size,
                          background: `linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)`,
                          top: particle.top,
                          left: particle.left,
                          animationDelay: particle.delay,
                          animationDuration: particle.duration
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-5">
          <div className="position-relative">
            <ServicesButton />
            <div 
              className="position-absolute top-50 start-50 translate-middle rounded-circle bg-success opacity-10"
              style={{ 
                width: "200px", 
                height: "80px", 
                filter: "blur(40px)",
                zIndex: -1 
              }}
            />
          </div>
        </div>
      </div>

      {/* Move CSS to global styles or a CSS module to avoid hydration issues */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        .floating-particle {
          animation: float ease-in-out infinite;
        }
        
        .popular-service-card:hover {
          transform: translateY(-8px) scale(1.02);
        }
        
        .cursor-pointer {
          cursor: pointer;
        }
        
        .gradient-border {
          padding: 2px;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
        
        .background-pattern {
          background: radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 70%);
        }
      `}</style>
    </section>
  );
}