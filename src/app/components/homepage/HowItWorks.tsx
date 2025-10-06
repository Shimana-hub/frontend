"use client";
import React, { useState } from "react";
import {
  PlusCircle,
  Grid3x3,
  Clock,
  UserPlus,
  Mail,
  DollarSign,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState("users");

  // Define the step type
  interface Step {
    icon: React.ReactNode;
    gradient: string;
    title: string;
    desc: string;
    features?: string[];
  }

  const userSteps: Step[] = [
    {
      icon: <PlusCircle className="w-10 h-10" />,
      gradient: "from-purple-500 to-pink-500",
      title: "Describe Your Need",
      desc: "Tell us what service you need, your location, and any specific requirements",
      features: ["Service details", "Location", "Budget range", "Timeline"]
    },
    {
      icon: <Grid3x3 className="w-10 h-10" />,
      gradient: "from-blue-500 to-cyan-500",
      title: "Get Matched",
      desc: "Our intelligent algorithm connects you with qualified, vetted providers in your area",
      features: ["Smart matching", "Verified providers", "Instant quotes", "Compare options"]
    },
    {
      icon: <Clock className="w-10 h-10" />,
      gradient: "from-green-500 to-emerald-500",
      title: "Book & Pay",
      desc: "Choose your preferred provider, schedule the service, and pay securely through our platform",
      features: ["Secure booking", "Flexible scheduling", "Safe payments", "Real-time tracking"]
    },
  ];

  const providerSteps: Step[] = [
    {
      icon: <UserPlus className="w-10 h-10" />,
      gradient: "from-orange-500 to-red-500",
      title: "Create Your Profile",
      desc: "Showcase your skills, services, portfolio, and experience to attract quality clients",
      features: ["Portfolio showcase", "Skill verification", "Service catalog", "Availability setup"]
    },
    {
      icon: <Mail className="w-10 h-10" />,
      gradient: "from-indigo-500 to-purple-500",
      title: "Receive Requests",
      desc: "Get matched with users who need your specific services and expertise in real-time",
      features: ["Smart notifications", "Lead matching", "Client preferences", "Instant alerts"]
    },
    {
      icon: <DollarSign className="w-10 h-10" />,
      gradient: "from-teal-500 to-blue-500",
      title: "Accept & Earn",
      desc: "Accept bookings, complete jobs, and receive secure payments directly to your account",
      features: ["Secure payments", "Job management", "Earnings tracking", "Client reviews"]
    },
  ];

  const renderSteps = (steps: Step[]) => (
  <div className="relative">
    {/* Connecting Line */}
    <div className="position-absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 hidden md:block z-0" />
    
    <div className="row g-5 position-relative z-1">
      {steps.map((step, i) => (
        <div className="col-lg-4" key={i}>
          <div 
            className="card h-100 border-0 shadow position-relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
              backdropFilter: "blur(10px)",
              borderRadius: "20px",
              transition: "all 0.5s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
            }}
          >
            {/* Gradient Accent */}
            <div 
              className={`position-absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${step.gradient}`}
            />
            
            {/* Step Number */}
            <div
              className={`mx-auto -mt-6 w-14 h-14 rounded-full bg-gradient-to-r ${step.gradient} text-white d-flex align-items-center justify-content-center position-relative z-3 shadow`}
              style={{ 
                fontWeight: "bold", 
                fontSize: "1.25rem",
                transition: "all 0.5s ease"
              }}
            >
              {i + 1}
            </div>

            <div className="card-body text-center p-4 pt-5">
              {/* Icon */}
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1), inset 0 1px 1px rgba(255,255,255,0.8)",
                  border: "1px solid rgba(255,255,255,0.4)",
                  borderRadius: "20px",
                  margin: "0 auto 1rem auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.5s ease"
                }}
              >
                <div style={{
                  background: `linear-gradient(to right, ${step.gradient.replace('from-', '').replace('to-', '').replace('-500', '-600').split(' ')[0]}, ${step.gradient.replace('from-', '').replace('to-', '').replace('-500', '-600').split(' ')[1]})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}>
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <h5 className="card-title fw-bold mb-3 text-gray-800 fs-5">
                {step.title}
              </h5>
              <p className="card-text text-muted mb-4 small leading-relaxed">
                {step.desc}
              </p>

              {/* Features List */}
              {step.features && (
                <div className="text-start">
                  {step.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="d-flex align-items-center mb-2">
                      <CheckCircle className="w-4 h-4 text-success me-2 flex-shrink-0" />
                      <span className="text-gray-600 small">{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Hover Action */}
              <div className="mt-3">
                <div style={{
                  background: `linear-gradient(to right, ${step.gradient.replace('from-', '').replace('to-', '').split(' ')[0]}, ${step.gradient.replace('from-', '').replace('to-', '').split(' ')[1]})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: "600",
                  fontSize: "0.875rem",
                  display: "inline-flex",
                  alignItems: "center",
                  transition: "all 0.3s ease"
                }}>
                  Learn more <ArrowRight className="w-4 h-4 ms-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
  return (
    <section className="position-relative py-5 overflow-hidden">
      {/* Enhanced Glassmorphism Background */}
      <div className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none">
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-80" />
        <div
          className="position-absolute top-10 start-10 bg-blue-400 rounded-full opacity-20"
          style={{ width: "30rem", height: "30rem", filter: "blur(80px)" }}
        />
        <div
          className="position-absolute bottom-10 end-10 bg-purple-400 rounded-full opacity-20"
          style={{ width: "25rem", height: "25rem", filter: "blur(70px)" }}
        />
        <div
          className="position-absolute top-1/2 start-1/2 bg-cyan-300 rounded-full opacity-15"
          style={{ width: "20rem", height: "20rem", filter: "blur(60px)" }}
        />
      </div>

      <div className="container position-relative z-1">
        {/* Enhanced Section Header */}
        <div className="text-center mb-5">
          <div className="d-inline-block px-4 py-2 rounded-pill bg-white bg-opacity-50 backdrop-blur shadow-sm mb-4">
            <span className="text-primary fw-semibold small">PROCESS</span>
          </div>
          <h2 className="fw-bold display-5 mb-3 text-gray-800">
            How It Works
          </h2>
          <p className="text-muted fs-5 mx-auto" style={{ maxWidth: "600px" }}>
            Connect with the right professionals or grow your business with our streamlined platform
          </p>
        </div>

        {/* Enhanced Tabs */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm overflow-hidden">
              <div className="card-body p-2 bg-white bg-opacity-75 backdrop-blur rounded-3">
                <div className="row g-0 text-center">
                  <div className="col-6">
                    <button
                      className={`w-100 py-3 border-0 rounded-2 fw-semibold transition-all duration-300 ${
                        activeTab === "users" 
                          ? "bg-primary text-white shadow" 
                          : "bg-transparent text-gray-600 hover:text-primary"
                      }`}
                      onClick={() => setActiveTab("users")}
                    >
                      For Users
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      className={`w-100 py-3 border-0 rounded-2 fw-semibold transition-all duration-300 ${
                        activeTab === "providers" 
                          ? "bg-info text-white shadow" 
                          : "bg-transparent text-gray-600 hover:text-info"
                      }`}
                      onClick={() => setActiveTab("providers")}
                    >
                      For Providers
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        {activeTab === "users" && (
          <div className="animate__animated animate__fadeIn">
            <div className="text-center mb-5">
              <h3 className="fw-bold text-gray-800 mb-3">Get Connected in 3 Simple Steps</h3>
              <p className="text-muted fs-6 mx-auto" style={{ maxWidth: "500px" }}>
                Find and book the perfect service provider for your specific needs
              </p>
            </div>
            {renderSteps(userSteps)}
            <div className="text-center mt-5 pt-4">
              <button className="btn btn-primary btn-lg px-5 py-3 shadow-sm rounded-3 fw-semibold">
                Find a Service Provider
                <ArrowRight className="w-4 h-4 ms-2" />
              </button>
            </div>
          </div>
        )}

        {activeTab === "providers" && (
          <div className="animate__animated animate__fadeIn">
            <div className="text-center mb-5">
              <h3 className="fw-bold text-gray-800 mb-3">Grow Your Business in 3 Simple Steps</h3>
              <p className="text-muted fs-6 mx-auto" style={{ maxWidth: "500px" }}>
                Connect with new clients and expand your service reach
              </p>
            </div>
            {renderSteps(providerSteps)}
            <div className="text-center mt-5 pt-4">
              <button className="btn btn-info btn-lg px-5 py-3 shadow-sm rounded-3 fw-semibold text-white">
                Become a Provider
                <ArrowRight className="w-4 h-4 ms-2" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}