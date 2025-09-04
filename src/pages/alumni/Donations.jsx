// src/pages/alumni/Donations.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Donations = () => {
  const [donationAmount, setDonationAmount] = useState("");

  return (
    <div className="container py-5" style={{ maxWidth: "512px" }}>
      {/* Page Title */}
      <div className="mb-4">
        <h1 className="fw-bold text-dark">Make a Gift</h1>
        <p className="text-secondary mb-3">
          Your gift to the Alumni Fund supports current students and strengthens
          our community. Every contribution, no matter the size, makes a
          difference.
        </p>
      </div>

      {/* Donation Amount Input */}
      <div className="mb-3">
        <label className="form-label fw-medium text-dark">
          Donation Amount
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="$0.00"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
        />
      </div>

      {/* Donate Button */}
      <div className="d-flex mb-2">
        <button className="btn btn-primary flex-grow-1 fw-bold">
          Donate Now
        </button>
      </div>

      {/* Transaction Info */}
      <p
        className="text-secondary text-center"
        style={{ fontSize: "0.9rem" }}
      >
        Your transaction will be processed securely. You will receive a receipt
        with a transaction hash upon successful submission.
      </p>
    </div>
  );
};

export default Donations;
