import React from "react";

interface Job {
  id: number;
  title: string;
  client: string;
  date: string;
  budget: string;
  status: "Pending" | "Accepted" | "Declined";
}

const jobs: Job[] = [
  { id: 1, title: "Fix leaking pipe", client: "Linda K.", date: "Sep 28, 2025", budget: "₦30,000", status: "Pending" },
  { id: 2, title: "Install ceiling fan", client: "Terna B.", date: "Sep 27, 2025", budget: "₦20,000", status: "Accepted" },
  { id: 3, title: "Paint living room", client: "Peter P.", date: "Sep 26, 2025", budget: "₦40,500", status: "Pending" },
];

export default function JobRequests(): React.ReactElement {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h5 className="fw-semibold mb-3" style={{ color: "var(--foreground)" }}>
          Job Requests
        </h5>
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Title</th>
                <th>Client</th>
                <th>Date</th>
                <th>Budget</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id}>
                  <td>{job.title}</td>
                  <td>{job.client}</td>
                  <td>{job.date}</td>
                  <td>{job.budget}</td>
                  <td>
                    <span
                      className={`badge ${
                        job.status === "Pending"
                          ? "bg-warning"
                          : job.status === "Accepted"
                          ? "bg-success"
                          : "bg-danger"
                      }`}
                    >
                      {job.status}
                    </span>
                  </td>
                  <td>
                    {job.status === "Pending" ? (
                      <div className="d-flex gap-2">
                        <button className="btn btn-sm btn-success">Accept</button>
                        <button className="btn btn-sm btn-outline-danger">Decline</button>
                      </div>
                    ) : (
                      <span className="text-muted">No actions</span>
                    )}
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
