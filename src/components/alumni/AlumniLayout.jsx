import React from "react";
import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AlumniLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* Brand */}
          <Link className="navbar-brand fw-bold text-white" to="/alumni">
            Alumni Portal
          </Link>

          {/* Toggler button for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#alumniNavbar"
            aria-controls="alumniNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible content */}
          <div className="collapse navbar-collapse" id="alumniNavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/alumni/Events">
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/alumni/Donations">
                  Donations
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/alumni/Mentorship_Request">
                  Mentorship
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/alumni/Privacy">
                  Privacy
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/alumni/Professional_Details">
                  Professional Details
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="container py-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AlumniLayout;
