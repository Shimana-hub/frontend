import React from "react";
import Nav from "../../components/common/Nav";
import Footer from "../../components/common/Footer";
import ClientSidebar from "../../components/clientdashboard/ClientSidebar";
import DashboardHeader from "../../components/clientdashboard/DashboardHeader";
import ClientStats from "../../components/clientdashboard/ClientStats";
import RecentJobs from "../../components/clientdashboard/RecentJobs";

export default function ClientDashboardPage(): React.ReactElement {
  return (
    <div className="min-vh-100 position-relative overflow-hidden" style={{ backgroundColor: "var(--background)" }}>
      {/* background orbs and patterns (same as home) */}
      <div className="position-fixed w-100 h-100 overflow-hidden" style={{ pointerEvents: "none", zIndex: 0 }}>
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

      <main className="container position-relative py-5" style={{ zIndex: 10 }}>
        <div className="row">
          <ClientSidebar />

          <div className="col-12 col-lg-9">
            <DashboardHeader name="Shimana" subtitle="Overview of your requests and upcoming bookings" />

            <ClientStats />

            <RecentJobs />

            {/* Example extra region: quick actions or recommendation card */}
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h5 className="fw-semibold" style={{ color: "var(--foreground)" }}>Quick actions</h5>
                <div className="d-flex gap-2 mt-3 flex-wrap">
                  <a className="btn btn-primary" href="#">Post new request</a>
                  <a className="btn btn-outline-secondary" href="#">Browse providers</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
