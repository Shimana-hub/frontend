import React from "react";

interface DashboardHeaderProps {
  name: string;
  subtitle: string;
  status?: "Available" | "Busy" | "Offline";
}

export default function DashboardHeader({
  name,
  subtitle,
  status = "Available",
}: DashboardHeaderProps): React.ReactElement {
  return (
    <div className="mb-4">
      <h3 className="fw-bold" style={{ color: "var(--foreground)" }}>
        Welcome back, {name}
      </h3>
      <p style={{ color: "var(--muted-foreground)" }}>{subtitle}</p>
      <span
        className={`badge ${
          status === "Available"
            ? "bg-success"
            : status === "Busy"
            ? "bg-warning"
            : "bg-secondary"
        }`}
      >
        {status}
      </span>
    </div>
  );
}
