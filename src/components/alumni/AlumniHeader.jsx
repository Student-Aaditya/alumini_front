import React from "react";
import AlumniHeader from "../../components/admin/AdminHeader"; 

const ProfessionalDetails = () => {
  return (
    <>
      {/* Navbar */}
      <AlumniHeader />

      {/* Page Content */}
      <div className="container py-5" style={{ maxWidth: "600px" }}>
        <h2 className="fw-bold text-dark">Professional Details</h2>
        <p className="text-secondary mb-4">
          Update your professional information to connect with fellow alumni and explore opportunities.
        </p>

        <form>
          <div className="mb-3">
            <label className="form-label fw-medium">Company</label>
            <input type="text" className="form-control" placeholder="Enter your company" />
          </div>

          <div className="mb-3">
            <label className="form-label fw-medium">Position</label>
            <input type="text" className="form-control" placeholder="Enter your position" />
          </div>

          <div className="mb-3">
            <label className="form-label fw-medium">Skills</label>
            <textarea className="form-control" rows="3" placeholder="Enter your skills"></textarea>
          </div>

          <button type="submit" className="btn btn-primary fw-bold">
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
};

export default ProfessionalDetails;
