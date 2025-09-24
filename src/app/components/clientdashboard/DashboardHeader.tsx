"use client";
import React from "react";
import { Bell, Plus } from "lucide-react";

type Props = {
  name?: string;
  subtitle?: string;
};

export default function DashboardHeader({
  name = "Jane",
  subtitle,
}: Props): React.ReactElement {
  return (
    <div className="d-flex align-items-center justify-content-between mb-4">
      <div>
        <h2 className="h3 fw-bold mb-1" style={{ color: "var(--foreground)" }}>
          Welcome back, {name}
        </h2>
        <p className="small mb-0" style={{ color: "var(--muted-foreground)" }}>
          {subtitle ?? "Here is your recent activity and upcoming jobs"}
        </p>
      </div>

      <div className="d-flex align-items-center gap-2">
        <button className="btn btn-outline-primary d-flex align-items-center">
          <Plus className="me-2" /> New request
        </button>
        <button
          className="btn btn-light rounded-circle p-2"
          aria-label="Notifications"
        >
          <Bell />
        </button>
      </div>
    </div>
  );
}
