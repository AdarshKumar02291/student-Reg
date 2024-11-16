import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link,Navigate } from "react-router-dom";
import StudentRegistration from "./pages/StudentRegistration";
import ViewStudents from "./pages/ViewStudents";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? "" : "bg-dark text-white";
  };

  return (
    <Router>
      <header>
        <nav
          className={`navbar navbar-expand-lg ${
            darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
          } shadow-sm py-3`}
        >
          <div className="container">
            {/* Brand/Logo */}
            <Link to="/" className="navbar-brand fw-bold">
              <i className="bi bi-mortarboard-fill me-2"></i>
              Student Portal
            </Link>

            {/* Mobile Toggle Button */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarContent"
              aria-controls="navbarContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navigation Links */}
            <div className="collapse navbar-collapse" id="navbarContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="/student-registration"
                    className="nav-link active d-flex align-items-center"
                  >
                    <i className="bi bi-person-plus-fill me-2"></i>
                    Add Student
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/view-students"
                    className="nav-link d-flex align-items-center"
                  >
                    <i className="bi bi-people-fill me-2"></i>
                    View Students
                  </Link>
                </li>
              </ul>

              {/* Dark Mode Toggle with improved styling */}
              <div className="d-flex align-items-center">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="darkModeToggle"
                    checked={darkMode}
                    onChange={toggleDarkMode}
                  />
                  <label
                    className={`form-check-label ms-2 ${
                      darkMode ? "text-light" : "text-dark"
                    }`}
                    htmlFor="darkModeToggle"
                  >
                    {darkMode ? (
                      <span>
                        <i className="bi bi-moon-fill me-2"></i>
                        Dark Mode
                      </span>
                    ) : (
                      <span>
                        <i className="bi bi-sun-fill me-2"></i>
                        Light Mode
                      </span>
                    )}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="mt-4">
        <Routes>
          <Route path="/" element={<Navigate to="/student-registration" replace />} />
          <Route
            path="/student-registration"
            element={<StudentRegistration />}
          />
          <Route path="/view-students" element={<ViewStudents />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
