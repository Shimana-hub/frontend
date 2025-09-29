import React from "react";

export default function WorkerStats(): React.ReactElement {
  return (
    <div className="row g-4 mb-4">
      <div className="col-md-3">
        <div className="card shadow-sm h-100">
          <div className="card-body text-center">
            <h5 className="fw-bold" style={{ color: "var(--foreground)" }}>
              24
            </h5>
            <p style={{ color: "var(--muted-foreground)" }}>Jobs Completed</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card shadow-sm h-100">
          <div className="card-body text-center">
            <h5 className="fw-bold" style={{ color: "var(--foreground)" }}>
              5
            </h5>
            <p style={{ color: "var(--muted-foreground)" }}>Pending Requests</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card shadow-sm h-100">
          <div className="card-body text-center">
            <h5 className="fw-bold" style={{ color: "var(--foreground)" }}>
              ₦94,840
            </h5>
            <p style={{ color: "var(--muted-foreground)" }}>Earnings (This Month)</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card shadow-sm h-100">
          <div className="card-body text-center">
            <h5 className="fw-bold" style={{ color: "var(--foreground)" }}>
              ⭐ 4.8
            </h5>
            <p style={{ color: "var(--muted-foreground)" }}>Average Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
}
