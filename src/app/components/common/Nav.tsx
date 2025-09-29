import React from "react";

const Nav = () => (
  <nav className="position-relative border-bottom sophisticated-nav" style={{ zIndex: 10 }}>
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center py-3">
        <div className="d-flex align-items-center">
          <h1 className="h2 fw-bold mb-0" style={{ color: "var(--foreground)" }}>
            ServiceHub
          </h1>
        </div>
        <div className="d-none d-md-flex align-items-center">
          <a href="#" className="text-decoration-none me-4 sophisticated-nav-link">
            About Us
          </a>
          <a href="#" className="text-decoration-none me-4 sophisticated-nav-link">
            FAQs
          </a>
          <a href="#" className="text-decoration-none me-4 sophisticated-nav-link">
            Contact Us
          </a>
        </div>
        <div className="d-flex align-items-center">
          <button className="btn btn-outline-secondary me-3">Sign In</button>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;