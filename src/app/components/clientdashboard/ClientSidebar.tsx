"use client";
import React from "react";
import {
  Home,
  FileText,
  Calendar,
  MessageCircle,
  Settings,
} from "lucide-react";

export default function ClientSidebar(): React.ReactElement {
  return (
    <aside className="d-none d-lg-block col-lg-3">
      <div className="position-sticky" style={{ top: "4rem" }}>
        <div className="card shadow-sm mb-4 sophisticated-sidebar-card">
          <div className="card-body text-center">
            {/* avatar placeholder - replace with <img /> if you have one */}
            <div
              className="rounded-circle mb-3"
              style={{
                width: 80,
                height: 80,
                display: "inline-block",
                background:
                  "linear-gradient(135deg,var(--primary),rgba(0,0,0,0.05))",
              }}
            />
            <h6
              className="mb-0 fw-semibold"
              style={{ color: "var(--foreground)" }}
            >
              Shimana Yagba
            </h6>
            <p
              className="small mb-0"
              style={{ color: "var(--muted-foreground)" }}
            >
              Client
            </p>
          </div>
        </div>

        <div className="list-group sophisticated-sidebar-list">
          <a
            href="#"
            className="list-group-item list-group-item-action active d-flex align-items-center"
          >
            <Home className="me-2" /> Dashboard
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action d-flex align-items-center"
          >
            <FileText className="me-2" /> My Requests
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action d-flex align-items-center"
          >
            <Calendar className="me-2" /> Bookings
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action d-flex align-items-center"
          >
            <MessageCircle className="me-2" /> Messages
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action d-flex align-items-center"
          >
            <Settings className="me-2" /> Settings
          </a>
        </div>
      </div>
    </aside>
  );
}
