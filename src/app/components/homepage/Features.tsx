"use client";
import React from "react";
import { Star, Shield, Clock } from "lucide-react";

export default function Features(): React.ReactElement {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Verified Professionals",
      description: "All service providers are background-checked and verified",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Quality Guaranteed",
      description: "Read reviews and ratings from real customers",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Booking",
      description: "Get matched with available providers in minutes",
    },
  ];
  return (
    <section className="position-relative py-5" style={{ zIndex: 10 }}>
      <div className="sophisticated-features-bg"></div>
      <div className="container position-relative">
        <div className="text-center mb-5">
          <h2
            className="display-4 fw-bold mb-3"
            style={{ color: "var(--foreground)" }}
          >
            Why Choose ServiceHub?
          </h2>
          <p className="lead" style={{ color: "var(--muted-foreground)" }}>
            We make finding reliable service providers simple and secure
          </p>
        </div>

        <div className="row g-5">
          {features.map((feature, index) => (
            <div key={index} className="col-md-4 text-center">
              <div className="sophisticated-feature-icon-wrapper d-inline-flex align-items-center justify-content-center mb-4">
                <div style={{ color: "var(--primary)" }}>{feature.icon}</div>
              </div>
              <h3
                className="h4 fw-semibold mb-3"
                style={{ color: "var(--foreground)" }}
              >
                {feature.title}
              </h3>
              <p style={{ color: "var(--muted-foreground)" }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
