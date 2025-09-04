import React from "react";
import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* Brand */}
          <Link className="navbar-brand fw-bold" to="/admin">
            Admin Panel
          </Link>

          {/* Toggler button for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#adminNavbar"
            aria-controls="adminNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible menu */}
          <div className="collapse navbar-collapse" id="adminNavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/admin/Alumni_Management">
                  Alumni Management
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/admin/Donations">
                  Donations
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/admin/Event_Management">
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/admin/File_Storage">
                  Files
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/admin/Students">
                  Students
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

export default AdminLayout;
