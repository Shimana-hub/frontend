"use client";
import React from "react";
import { Star, Shield, Clock } from "lucide-react";

export default function Features(): React.ReactElement {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Verified Professionals",
      description: "All service providers are background-checked and verified for your safety and peace of mind",
      gradient: "from-green-500 to-emerald-500",
      color: "text-green-600"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Quality Guaranteed",
      description: "Read authentic reviews and ratings from real customers to make informed decisions",
      gradient: "from-amber-500 to-orange-500",
      color: "text-amber-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Quick Booking",
      description: "Get instantly matched with available providers in your area within minutes",
      gradient: "from-blue-500 to-cyan-500",
      color: "text-blue-600"
    },
  ];

  return (
    <section className="position-relative py-5 overflow-hidden">
      {/* Glassmorphism Background */}
      <div className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none">
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient bg-opacity-50" />
        <div
          className="position-absolute top-0 start-25 bg-primary rounded-circle opacity-20"
          style={{ width: "24rem", height: "24rem", filter: "blur(100px)" }}
        />
        <div
          className="position-absolute bottom-0 end-25 bg-success rounded-circle opacity-15"
          style={{ width: "20rem", height: "20rem", filter: "blur(80px)" }}
        />
        <div
          className="position-absolute top-50 start-50 bg-warning rounded-circle opacity-10"
          style={{ width: "16rem", height: "16rem", filter: "blur(60px)" }}
        />
      </div>

      <div className="container position-relative z-1">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 mb-3">
            Why Choose ServiceHub?
          </h2>
          <p className="text-muted fs-5">
            We make finding reliable service providers simple and secure
          </p>
        </div>

        {/* Features Grid */}
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-md-4">
              <div 
                className="card h-100 border-0 position-relative overflow-hidden group cursor-pointer rounded-5"
                style={{ 
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  minHeight: "280px",
                  background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.05)"
                }}
              >
                {/* Animated Gradient Border */}
                <div 
                  className={`position-absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg`}
                  style={{
                    padding: '2px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                >
                  <div className="w-100 h-100 bg-transparent rounded-lg" />
                </div>

                {/* Hover Glow Effect */}
                <div 
                  className={`position-absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 rounded-lg`}
                />

                <div className="card-body text-center p-5 d-flex flex-column justify-content-center position-relative z-1">
                  {/* Animated Icon Container */}
                  <div 
                    className={`mx-auto rounded-2xl d-flex align-items-center justify-content-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.08), inset 0 1px 1px rgba(255,255,255,0.8)",
                      border: "1px solid rgba(255,255,255,0.4)"
                    }}
                  >
                    <div 
                      className={`transition-all duration-300 group-hover:scale-110 ${feature.color}`}
                    >
                      {feature.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 
                    className="h4 fw-semibold mb-3 text-dark group-hover:text-gray-800 transition-colors duration-300"
                  >
                    {feature.title}
                  </h3>
                  
                  <p 
                    className="text-muted mb-0 group-hover:text-gray-600 transition-colors duration-300 leading-relaxed"
                  >
                    {feature.description}
                  </p>

                  {/* Animated Underline */}
                  <div 
                    className={`w-0 group-hover:w-16 h-1 bg-gradient-to-r ${feature.gradient} mx-auto mt-4 transition-all duration-500 rounded-full`}
                  />
                </div>

                {/* Subtle Corner Accents */}
                <div className="position-absolute top-0 end-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`w-full h-full bg-gradient-to-br ${feature.gradient} rounded-bl-2xl`} />
                </div>
                
                <div className="position-absolute bottom-0 start-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`w-full h-full bg-gradient-to-tr ${feature.gradient} rounded-tr-2xl`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="row mt-5 pt-4">
          <div className="col-12">
            <div 
              className="card border-0 text-center p-4"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 100%)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
              }}
            >
              <div className="row align-items-center">
                <div className="col-md-4 border-end-md">
                  <h4 className="fw-bold text-primary mb-2">10,000+</h4>
                  <p className="text-muted mb-0">Happy Customers</p>
                </div>
                <div className="col-md-4 border-end-md">
                  <h4 className="fw-bold text-success mb-2">500+</h4>
                  <p className="text-muted mb-0">Verified Providers</p>
                </div>
                <div className="col-md-4">
                  <h4 className="fw-bold text-info mb-2">24/7</h4>
                  <p className="text-muted mb-0">Customer Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global animations */}
      <style jsx global>{`
        .group:hover .card {
          transform: translateY(-8px) scale(1.02);
        }
        
        .cursor-pointer {
          cursor: pointer;
        }
        
        @media (max-width: 768px) {
          .border-end-md {
            border-right: none !important;
            border-bottom: 1px solid rgba(0,0,0,0.1);
            padding-bottom: 1rem;
            margin-bottom: 1rem;
          }
          
          .border-end-md:last-child {
            border-bottom: none;
            padding-bottom: 0;
            margin-bottom: 0;
          }
        }
      `}</style>
    </section>
  );
}