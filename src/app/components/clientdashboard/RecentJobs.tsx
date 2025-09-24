// app/components/dashboard/RecentJobs.tsx
"use client";
import React from "react";

type Job = {
  id: string;
  service: string;
  provider?: string;
  date: string;
  status: "pending" | "accepted" | "completed" | "cancelled";
};

const sampleJobs: Job[] = [
  { id: "REQ-1001", service: "Plumbing - Kitchen sink", provider: "Aliyu", date: "2025-09-20", status: "completed" },
  { id: "REQ-1002", service: "Electrical - Fix switch", provider: "Chidi", date: "2025-09-22", status: "accepted" },
  { id: "REQ-1003", service: "Cleaning - 3 bedroom", provider: "-", date: "2025-09-28", status: "pending" },
];

export default function RecentJobs(): React.ReactElement {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h5 className="card-title mb-3" style={{ color: "var(--foreground)" }}>Recent requests</h5>

        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Request</th>
                <th>Provider</th>
                <th>Date</th>
                <th>Status</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {sampleJobs.map((j) => (
                <tr key={j.id}>
                  <td>
                    <div className="fw-semibold">{j.service}</div>
                    <div className="small" style={{ color: "var(--muted-foreground)" }}>{j.id}</div>
                  </td>
                  <td>{j.provider ?? "-"}</td>
                  <td>{j.date}</td>
                  <td>
                    <span className={`badge ${
                      j.status === "completed" ? "bg-success" :
                      j.status === "accepted" ? "bg-info text-dark" :
                      j.status === "pending" ? "bg-warning text-dark" : "bg-secondary"
                    }`}>
                      {j.status}
                    </span>
                  </td>
                  <td className="text-end">
                    <a className="btn btn-sm btn-outline-primary" href="#">View</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
