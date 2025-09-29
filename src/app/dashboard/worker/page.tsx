import React from "react";
import Nav from "../../components/common/Nav";
import Footer from "../../components/common/Footer";
import WorkerSidebar from "../../components/workerdashboard/WorkerSidebar";
import DashboardHeader from "../../components/workerdashboard/DashboardHeader";
import WorkerStats from "../../components/workerdashboard/WorkerStats";
import JobRequests from "../../components/workerdashboard/JobRequests";

export default function WorkerDashboardPage(): React.ReactElement {
  return (
    <div
      className="min-vh-100 position-relative overflow-hidden"
      style={{ backgroundColor: "var(--background)" }}
    >

      <div
        className="position-fixed w-100 h-100 overflow-hidden"
        style={{ pointerEvents: "none", zIndex: 0 }}
      >
        <div className="sophisticated-bg-orb-1" />
        <div className="sophisticated-bg-orb-2" />
        <div className="sophisticated-bg-orb-3" />
        <div className="sophisticated-bg-orb-4" />
        <div className="sophisticated-bg-orb-5" />
        <div className="sophisticated-bg-pattern-1" />
        <div className="sophisticated-bg-pattern-2" />
        <div className="sophisticated-mesh-1" />
        <div className="sophisticated-mesh-2" />
        <div className="sophisticated-float-1" />
        <div className="sophisticated-float-2" />
        <div className="sophisticated-float-3" />
        <div className="sophisticated-radial-overlay" />
      </div>

      <Nav />

      <main
        className="d-flex flex-row align-items-stretch justify-content-stretch min-vh-100 w-100 position-relative p-0"
        style={{ zIndex: 10 }}
      >
        {/* Sidebar */}
        <aside
          className="d-none d-lg-block"
          style={{
            minWidth: "280px",
            maxWidth: "320px",
            background: "rgba(255,255,255,0.08)",
            borderRight: "1px solid var(--border)",
            minHeight: "100vh",
          }}
        >
          <WorkerSidebar />
        </aside>

        {/* Main dashboard content */}
        <section
          className="flex-grow-1 d-flex flex-column justify-content-start align-items-stretch p-4"
          style={{ minHeight: "100vh" }}
        >
          <DashboardHeader
            name="Shimana Yagba"
            subtitle="Manage your jobs and earnings"
            status="Available"
          />

          <WorkerStats />

          <JobRequests />

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5
                className="fw-semibold"
                style={{ color: "var(--foreground)" }}
              >
                Quick actions
              </h5>
              <div className="d-flex gap-2 mt-3 flex-wrap">
                <a className="btn btn-primary" href="#">
                  Update Availability
                </a>
                <a className="btn btn-outline-secondary" href="#">
                  View Earnings
                </a>
                <a className="btn btn-outline-secondary" href="#">
                  Edit Profile
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
