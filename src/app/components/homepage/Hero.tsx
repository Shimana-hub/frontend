"use client";
import React, { useMemo, useState } from "react";
import { Search, TrendingUp, Users, Star } from "lucide-react";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Floating decorative elements
  const floatingElements = useMemo(
    () => [
      {
        top: "15%",
        left: "10%",
        size: "15px",
        animation: "float-gentle",
        delay: "0s",
        color: "rgba(13,110,253,0.3)",
      },
      {
        top: "25%",
        left: "85%",
        size: "20px",
        animation: "float-moderate",
        delay: "0.5s",
        color: "rgba(32,201,151,0.4)",
      },
      {
        top: "35%",
        left: "15%",
        size: "10px",
        animation: "pulse-soft",
        delay: "1s",
        color: "rgba(13,110,253,0.5)",
      },
      {
        top: "45%",
        left: "80%",
        size: "25px",
        animation: "float-gentle",
        delay: "1.5s",
        color: "rgba(32,201,151,0.3)",
      },
      {
        top: "60%",
        left: "12%",
        size: "15px",
        animation: "float-moderate",
        delay: "2s",
        color: "rgba(13,110,253,0.4)",
      },
      {
        top: "70%",
        left: "75%",
        size: "10px",
        animation: "pulse-soft",
        delay: "2.5s",
        color: "rgba(32,201,151,0.5)",
      },
      {
        top: "20%",
        left: "45%",
        size: "20px",
        animation: "float-gentle",
        delay: "3s",
        color: "rgba(13,110,253,0.4)",
      },
      {
        top: "55%",
        left: "60%",
        size: "15px",
        animation: "float-moderate",
        delay: "3.5s",
        color: "rgba(13,110,253,0.35)",
      },
    ],
    []
  );

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
    }
  };

  interface SearchInputEvent extends React.KeyboardEvent<HTMLInputElement> {}

  const handleKeyPress = (e: SearchInputEvent) => {
    if (e.key === "Enter") handleSearch(e as unknown as React.MouseEvent<HTMLButtonElement>);
  };

  return (
    <section className="position-relative min-vh-100 d-flex align-items-center justify-content-center overflow-hidden bg-gradient">
      {/* Background overlays */}
      <div className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none">
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-overlay" />

        {/* Glass panels */}
        <div className="position-absolute top-0 start-0 w-100 h-100">
          <div className="glass-panel large" />
          <div className="glass-panel secondary" />
        </div>

        {/* Floating animated elements */}
        {floatingElements.map((el, i) => (
          <div
            key={i}
            className={`rounded-circle position-absolute ${el.animation}`}
            style={{
              top: el.top,
              left: el.left,
              width: el.size,
              height: el.size,
              backgroundColor: el.color,
              animationDelay: el.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container position-relative text-center text-light">
        {/* Headline */}
        <h1 className="display-3 fw-bold mb-4">
          <span className="text-dark">Connect with</span>
          <span className="d-block text-gradient">Trusted Experts</span>
        </h1>

        {/* Subtitle */}
        <p
          className="lead text-muted mb-5 mx-auto"
          style={{ maxWidth: "800px" }}
        >
          Find skilled professionals for all your home and business needs. From
          plumbing to painting, we connect you with verified experts in your
          area.
        </p>

        {/* Search bar */}
        <div
          className={`mx-auto mb-5 p-2 bg-white bg-opacity-75 rounded-4 shadow-lg transition ${
            isSearchFocused ? "scale-105" : ""
          }`}
          style={{ maxWidth: "700px" }}
        >
          <div className="d-flex align-items-center gap-2">
            <div className="position-relative flex-grow-1">
              <Search
                className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
                size={20}
              />
              <input
                type="text"
                className="form-control form-control-lg ps-5 border-0 bg-transparent"
                placeholder="What service do you need? (e.g., plumber, electrician, painter)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                onKeyPress={handleKeyPress}
              />
            </div>
            <button
              onClick={handleSearch}
              className="btn btn-primary btn-lg px-4 rounded-3"
            >
              Search
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="row g-4 justify-content-center mb-5">
          <div className="col-md-4">
            <div className="card h-100 shadow-glass border-0 text-center p-4">
              <div className="mb-3">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle"
                  style={{ width: "60px", height: "60px" }}
                >
                  <Users size={28} className="text-primary" />
                </div>
              </div>
              <h3 className="fw-bold text-dark">10,000+</h3>
              <p className="text-muted">Verified Providers</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-glass border-0 text-center p-4">
              <div className="mb-3">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-success bg-opacity-10 rounded-circle"
                  style={{ width: "60px", height: "60px" }}
                >
                  <TrendingUp size={28} className="text-success" />
                </div>
              </div>
              <h3 className="fw-bold text-dark">50,000+</h3>
              <p className="text-muted">Jobs Completed</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-glass border-0 text-center p-4">
              <div className="mb-3">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-warning bg-opacity-10 rounded-circle"
                  style={{ width: "60px", height: "60px" }}
                >
                  <Star
                    size={28}
                    className="text-warning"
                    fill="currentColor"
                  />
                </div>
              </div>
              <h3 className="fw-bold text-dark">4.9/5</h3>
              <p className="text-muted">Average Rating</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">
          <button className="btn btn-primary btn-lg px-5">
            Browse Services
          </button>
          <button className="btn btn-outline-primary btn-lg px-5">
            Become a Provider
          </button>
        </div>
      </div>

      <style jsx>{`
        .bg-gradient {
          background: linear-gradient(
            135deg,
            #f8f9fa,
            rgba(13, 110, 253, 0.05),
            rgba(32, 201, 151, 0.1)
          );
        }
        .bg-gradient-overlay {
          background: linear-gradient(
            135deg,
            rgba(248, 249, 250, 0.9),
            rgba(13, 110, 253, 0.05),
            rgba(32, 201, 151, 0.1)
          );
        }
        .glass-panel.large {
          position: absolute;
          top: 5%;
          left: 5%;
          width: 90%;
          height: 85%;
          border-radius: 1.5rem;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .glass-panel.secondary {
          position: absolute;
          top: 15%;
          right: 10%;
          width: 70%;
          height: 60%;
          border-radius: 1rem;
          background: rgba(13, 110, 253, 0.1);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .text-gradient {
          background: linear-gradient(90deg, #0d6efd, #20c997);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .shadow-glass {
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
        }
        /* Animations */
        @keyframes float-gentle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes float-moderate {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes pulse-soft {
          0%,
          100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        .float-gentle {
          animation: float-gentle 6s ease-in-out infinite;
        }
        .float-moderate {
          animation: float-moderate 8s ease-in-out infinite;
        }
        .pulse-soft {
          animation: pulse-soft 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
