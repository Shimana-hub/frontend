// app/components/dashboard/ClientStats.tsx
"use client";
import React from "react";

export default function ClientStats(): React.ReactElement {
  
  const stats = [
    { label: "Upcoming", value: 2 },
    { label: "Active Requests", value: 5 },
    { label: "Completed", value: 128 },
    { label: "Avg Rating", value: "4.9/5" },
  ];

  return (
    <div className="row g-3 mb-4">
      {stats.map((s) => (
        <div key={s.label} className="col-6 col-md-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center p-3">
              <div className="h4 fw-bold mb-1" style={{ color: "var(--foreground)" }}>{s.value}</div>
              <div className="small" style={{ color: "var(--muted-foreground)" }}>{s.label}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
