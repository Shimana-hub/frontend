"use client";
import React from "react";
import NairaIcon from "../NairaIcon";

import {
  Home,
  Briefcase,
  Calendar,
  MessageCircle,
  Settings,
} from "lucide-react";

export default function WorkerSidebar(): React.ReactElement {
  return (
    <aside
      className="d-flex flex-column align-items-center justify-content-start p-4"
      style={{
        minWidth: "280px",
        maxWidth: "320px",
        background: "rgba(245,248,255,0.85)",
        borderRight: "1px solid var(--border)",
        minHeight: "100vh",
        boxShadow: "0 0 24px 0 rgba(52,84,250,0.04)",
      }}
    >
      <div className="w-100" style={{ position: "sticky", top: "4rem" }}>
        <div
          className="card shadow-sm mb-4 sophisticated-sidebar-card"
          style={{
            background: "rgba(255,255,255,0.7)",
            borderRadius: "1.5rem",
            boxShadow: "0 2px 12px 0 rgba(52,84,250,0.08)",
          }}
        >
          <div className="card-body text-center">
            {/* avatar placeholder */}
            <div
              className="rounded-circle mb-3"
              style={{
                width: 80,
                height: 80,
                display: "inline-block",
                background:
                  "linear-gradient(135deg,#3454fa 60%,#6c757d 100%)",
                boxShadow: "0 2px 12px 0 rgba(52,84,250,0.08)",
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
              Service Provider
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
            <Briefcase className="me-2" /> Job Requests
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action d-flex align-items-center"
          >
            <Calendar className="me-2" /> Active Jobs
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action d-flex align-items-center"
          >
            <NairaIcon size={24} color="#3454fa" /> Earnings
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
