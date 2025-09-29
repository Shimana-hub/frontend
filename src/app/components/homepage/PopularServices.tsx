"use client";
import React from "react";
import ServicesButton from "../ServicesButton";

export default function JobRequests(): React.ReactElement {

    const services = [
    { name: "Plumbing", icon: "🔧", providers: 150 },
    { name: "Electrical", icon: "⚡", providers: 120 },
    { name: "Cleaning", icon: "🧹", providers: 200 },
    { name: "Gardening", icon: "🌱", providers: 80 },
    { name: "Painting", icon: "🎨", providers: 95 },
    { name: "Carpentry", icon: "🔨", providers: 110 },
  ];
  return (
    <section
              className="position-relative py-5 sophisticated-services-bg"
              style={{ zIndex: 10 }}
            >
              <div className="sophisticated-services-overlay"></div>
              <div className="container position-relative">
                <div className="text-center mb-5">
                  <h2
                    className="display-4 fw-bold mb-3"
                    style={{ color: "var(--foreground)" }}
                  >
                    Popular Services
                  </h2>
                  <p className="lead" style={{ color: "var(--muted-foreground)" }}>
                    Browse our most requested service categories
                  </p>
                </div>
    
                <div className="row g-4">
                  {services.map((service, index) => (
                    <div key={index} className="col-6 col-md-4 col-lg-2">
                      <div className="card sophisticated-service-card h-100">
                        <div
                          className="card-body text-center p-4"
                          style={{ minWidth: "150px" }}
                        >
                          <div className="fs-1 mb-3 sophisticated-service-icon">
                            {service.icon}
                          </div>
                          <h5
                            className="card-title fw-semibold mb-2"
                            style={{ color: "var(--foreground)" }}
                          >
                            {service.name}
                          </h5>
                          <p
                            className="card-text small"
                            style={{ color: "var(--muted-foreground)" }}
                          >
                            {service.providers} providers
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-5">
                  <ServicesButton />
                </div>
              </div>
            </section>
  );
}