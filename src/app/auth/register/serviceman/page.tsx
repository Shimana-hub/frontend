"use client";

import { useState } from "react";

export default function ServicemanRegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    category: "",
    experience: "",
    terms: false,
  });

  const [status, setStatus] = useState({ error: "", success: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    let checked = false;
    if (type === "checkbox") {
      checked = (e.target as HTMLInputElement).checked;
    }
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ error: "", success: "" });

    if (!formData.terms) {
      setStatus({ error: "You must agree to the Terms of Service.", success: "" });
      return;
    }

    try {
      const res = await fetch("http://localhost:8000/api/apply/serviceman", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({
          success: "Your application has been received. Admin will contact you soon.",
          error: "",
        });
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          category: "",
          experience: "",
          terms: false,
        });
      } else {
        const data = await res.json();
        setStatus({ error: data.message || "Application failed.", success: "" });
      }
    } catch {
      setStatus({ error: "Something went wrong. Please try again.", success: "" });
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4">Serviceman Application</h2>

      {status.error && <div className="alert alert-danger">{status.error}</div>}
      {status.success && <div className="alert alert-success">{status.success}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
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
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Category of Service</label>
          <select
            className="form-select"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">-- Select a category --</option>
            <option value="plumbing">Plumbing</option>
            <option value="electrical">Electrical</option>
            <option value="carpentry">Carpentry</option>
            <option value="cleaning">Cleaning</option>
            <option value="painting">Painting</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Experience / Background</label>
          <textarea
            className="form-control"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            rows={4}
            placeholder="Briefly describe your work experience..."
            required
          ></textarea>
        </div>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            id="termsCheck"
          />
          <label className="form-check-label" htmlFor="termsCheck">
            I agree to the Terms of Service
          </label>
        </div>

        <button type="submit" className="btn btn-success w-100">
          Submit Application
        </button>
      </form>
    </div>
  );
}
