"use client";
import React, { useMemo } from "react";
import { Search } from "lucide-react";

export default function JobRequests(): React.ReactElement {
  // Generate deterministic positions for floating dots
  const dotPositions = useMemo(
    () => [
      { top: "12%", left: "8%" },
      { top: "18%", left: "70%" },
      { top: "30%", left: "20%" },
      { top: "40%", left: "60%" },
      { top: "55%", left: "15%" },
      { top: "65%", left: "80%" },
      { top: "75%", left: "35%" },
      { top: "85%", left: "55%" },
      { top: "20%", left: "50%" },
      { top: "60%", left: "40%" },
      { top: "80%", left: "25%" },
      { top: "35%", left: "85%" },
    ],
    []
  );

  return (
    <section
      className="position-relative py-5"
      style={{ zIndex: 10, paddingTop: "5rem", paddingBottom: "8rem" }}
    >
      {/* Glassmorphism Hero Background */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden"
        style={{ zIndex: 0, pointerEvents: "none" }}
      >
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(120deg, #f8fafc 60%, #3454fa 100%)",
            opacity: 0.7,
          }}
        />
        {/* Glass panel */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "10%",
            width: "80%",
            height: "70%",
            background: "rgba(255,255,255,0.35)",
            borderRadius: "2rem",
            boxShadow: "0 8px 32px 0 rgba(52,84,250,0.12)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.18)",
            opacity: 0.8,
          }}
        />
        {/* Animated floating dots */}
        {dotPositions.map((pos, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: pos.top,
              left: pos.left,
              width: "1.2rem",
              height: "1.2rem",
              background: "#0dcaf0",
              borderRadius: "50%",
              opacity: 0.22,
              animation: `floatDot 6s ease-in-out infinite ${i * 0.5}s`,
            }}
          />
        ))}
        <style>
          {`
                @keyframes floatDot {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-18px); }
                }
              `}
        </style>
      </div>
      <div className="sophisticated-hero-bg"></div>
      <div className="container position-relative">
        <div className="text-center">
          <h1
            className="display-1 fw-bold mb-4"
            style={{ color: "var(--foreground)" }}
          >
            Connect with Trusted
            <span className="sophisticated-gradient-text d-block">
              Service Providers
            </span>
          </h1>
          <p
            className="lead mb-5 mx-auto"
            style={{ maxWidth: "48rem", color: "var(--muted-foreground)" }}
          >
            Find skilled professionals for all your home and business needs.
            From plumbing to painting, we connect you with verified experts in
            your area.
          </p>

          {/* Search Bar */}
          <div className="mx-auto mb-5" style={{ maxWidth: "32rem" }}>
            <div className="position-relative">
              <Search
                className="position-absolute top-50 translate-middle-y ms-3"
                style={{
                  left: "0.5rem",
                  width: "1.25rem",
                  height: "1.25rem",
                  color: "var(--muted-foreground)",
                }}
              />
              <input
                type="text"
                placeholder="What service do you need?"
                className="form-control sophisticated-search-input"
                style={{
                  paddingLeft: "3rem",
                  paddingRight: "8rem",
                  height: "4rem",
                  fontSize: "1.125rem",
                }}
              />
              <button
                className="btn btn-primary position-absolute top-50 translate-middle-y me-2 rounded-pill px-4"
                style={{ right: "0" }}
              >
                Search
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="row g-4 justify-content-center">
            <div className="col-md-4 text-center">
              <div
                className="h2 fw-bold"
                style={{ color: "var(--foreground)" }}
              >
                10,000+
              </div>
              <div style={{ color: "var(--muted-foreground)" }}>
                Verified Providers
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div
                className="h2 fw-bold"
                style={{ color: "var(--foreground)" }}
              >
                50,000+
              </div>
              <div style={{ color: "var(--muted-foreground)" }}>
                Jobs Completed
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div
                className="h2 fw-bold"
                style={{ color: "var(--foreground)" }}
              >
                4.9/5
              </div>
              <div style={{ color: "var(--muted-foreground)" }}>
                Average Rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
