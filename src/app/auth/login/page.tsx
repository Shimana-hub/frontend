"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "client", // default
  });

  const [status, setStatus] = useState({ error: "", success: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ error: "", success: "" });

    try {
      const res = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();

        // save token (example: localStorage)
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", formData.role);

        setStatus({ success: "Login successful! Redirecting...", error: "" });

        // redirect by role
        setTimeout(() => {
          if (formData.role === "admin") {
            router.push("/dashboard/admin");
          } else if (formData.role === "serviceman") {
            router.push("/dashboard/serviceman");
          } else {
            router.push("/dashboard/client");
          }
        }, 1200);
      } else {
        const data = await res.json();
        setStatus({ error: data.message || "Invalid credentials.", success: "" });
      }
    } catch {
      setStatus({ error: "Something went wrong. Try again.", success: "" });
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="mb-4">Login</h2>

      {status.error && <div className="alert alert-danger">{status.error}</div>}
      {status.success && (
        <div className="alert alert-success">{status.success}</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Login as</label>
          <select
            className="form-select"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="client">Client</option>
            <option value="serviceman">Serviceman</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
}
