"use client";
import React, { useState } from "react";

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState("users");

  // Replace Bootstrap icons with custom SVGs for each step
  const userSteps = [
    {
      icon: (
        <svg
          width="32"
          height="32"
          fill="none"
          stroke="#3454fa"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8M12 8v8" />
        </svg>
      ),
      badgeColor: "bg-primary",
      title: "Describe Your Need",
      desc: "Tell us what service you need, your location, and any specific requirements",
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          fill="none"
          stroke="#0dcaf0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <path d="M8 12h8M12 8v8" />
        </svg>
      ),
      badgeColor: "bg-info",
      title: "Get Matched",
      desc: "Our algorithm connects you with qualified, vetted providers in your area",
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          fill="none"
          stroke="#ffc107"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l3 3" />
        </svg>
      ),
      badgeColor: "bg-warning",
      title: "Book & Pay",
      desc: "Choose your provider, schedule the service, and pay securely through our platform",
    },
  ];
  const providerSteps = [
    {
      icon: (
        <svg
          width="32"
          height="32"
          fill="none"
          stroke="#198754"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <path d="M8 12h8M12 8v8" />
        </svg>
      ),
      badgeColor: "bg-success",
      title: "Create Your Profile",
      desc: "Showcase your skills, services, portfolio, and experience to attract quality clients",
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          fill="none"
          stroke="#0dcaf0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8M12 8v8" />
        </svg>
      ),
      badgeColor: "bg-info",
      title: "Receive Requests",
      desc: "Get matched with users who need your specific services and expertise",
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          fill="none"
          stroke="#ffc107"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l3 3" />
        </svg>
      ),
      badgeColor: "bg-warning",
      title: "Accept & Earn",
      desc: "Accept bookings, complete jobs, and receive secure payments directly",
    },
  ];

  return (
    <section
      className="position-relative py-5 sophisticated-works-bg"
      style={{ zIndex: 10 }}
    >
      {/* Overlay */}
      <div className="sophisticated-works-overlay"></div>

      <div className="container position-relative">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2
            className="display-4 fw-bold mb-3"
            style={{ color: "var(--foreground)" }}
          >
            How It Works
          </h2>
          <p className="lead" style={{ color: "var(--muted-foreground)" }}>
            Connect with the right professionals or grow your business with our
            streamlined platform
          </p>
        </div>

        {/* React-controlled Tabs */}
        <ul className="nav nav-tabs justify-content-center mb-5" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link${activeTab === "users" ? " active" : ""}`}
              type="button"
              role="tab"
              aria-selected={activeTab === "users"}
              onClick={() => setActiveTab("users")}
            >
              For Users
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link${
                activeTab === "providers" ? " active" : ""
              }`}
              type="button"
              role="tab"
              aria-selected={activeTab === "providers"}
              onClick={() => setActiveTab("providers")}
            >
              For Providers
            </button>
          </li>
        </ul>

        {/* Tab Content */}
        <div className="tab-content" id="howItWorksTabsContent">
          {activeTab === "users" && (
            <div
              className="tab-pane fade show active"
              id="users"
              role="tabpanel"
            >
              <div className="text-center mb-5">
                <h3 className="h2 fw-bold mb-3">
                  Get connected in 3 simple steps
                </h3>
                <p
                  className="lead"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Find and book the perfect service provider for your needs
                </p>
              </div>
              <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                {userSteps.map((step, i) => (
                  <div className="col d-flex" key={i}>
                    <div
                      className="card h-100 text-center shadow-sm border-0 flex-fill position-relative"
                      style={{
                        background:
                          i === 1
                            ? "rgba(13,202,240,0.07)"
                            : "rgba(52,84,250,0.07)",
                      }}
                    >
                      <div className="card-body p-4 d-flex flex-column align-items-center justify-content-center">
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center mb-4"
                          style={{
                            width: "70px",
                            height: "70px",
                            background:
                              i === 2
                                ? "rgba(255,193,7,0.12)"
                                : i === 1
                                ? "rgba(13,202,240,0.12)"
                                : "rgba(52,84,250,0.12)",
                          }}
                        >
                          {step.icon}
                        </div>
                        <span
                          className={`badge ${step.badgeColor} rounded-circle position-absolute top-0 start-50 translate-middle p-2`}
                          style={{
                            fontSize: "1rem",
                            zIndex: 2,
                          }}
                        >
                          {i + 1}
                        </span>
                        <h4 className="fw-semibold mb-3">{step.title}</h4>
                        <p className="text-muted">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center pt-5">
                <button className="btn btn-primary btn-lg px-5">
                  Find a Service Provider
                </button>
              </div>
            </div>
          )}

          {activeTab === "providers" && (
            <div
              className="tab-pane fade show active"
              id="providers"
              role="tabpanel"
            >
              <div className="text-center mb-5">
                <h3 className="h2 fw-bold mb-3">
                  Grow your business in 3 simple steps
                </h3>
                <p
                  className="lead"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Connect with new clients and expand your reach
                </p>
              </div>
              <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                {providerSteps.map((step, i) => (
                  <div className="col d-flex" key={i}>
                    <div
                      className="card h-100 text-center shadow-sm border-0 flex-fill position-relative"
                      style={{
                        background:
                          i === 1
                            ? "rgba(13,202,240,0.07)"
                            : "rgba(25,135,84,0.07)",
                      }}
                    >
                      <div className="card-body p-4 d-flex flex-column align-items-center justify-content-center">
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center mb-4"
                          style={{
                            width: "70px",
                            height: "70px",
                            background:
                              i === 2
                                ? "rgba(255,193,7,0.12)"
                                : i === 1
                                ? "rgba(13,202,240,0.12)"
                                : "rgba(25,135,84,0.12)",
                          }}
                        >
                          {step.icon}
                        </div>
                        <span
                          className={`badge ${step.badgeColor} rounded-circle position-absolute top-0 start-50 translate-middle p-2`}
                          style={{
                            fontSize: "1rem",
                            zIndex: 2,
                          }}
                        >
                          {i + 1}
                        </span>
                        <h4 className="fw-semibold mb-3">{step.title}</h4>
                        <p className="text-muted">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center pt-5">
                <button className="btn btn-success btn-lg px-5">
                  Become a Provider
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
