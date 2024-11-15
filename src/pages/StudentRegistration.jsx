import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addStudent } from '../redux/studentSlice';

const StudentRegistration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fatherName: '',
    email: '',
    address: '',
    mobile: '',
    gender: '',
    dob: '',
    country: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStudent(formData)); 
    alert('Student registered successfully!');
    navigate('/view-students');
  };

  return (
    <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="card shadow-lg border-0">
          <div className="card-header bg-primary text-white text-center py-4">
            <h2 className="mb-0">
              <i className="bi bi-person-plus-fill me-2"></i>
              Student Registration
            </h2>
          </div>
          
          <div className="card-body p-4">
            <form onSubmit={handleSubmit} className="row g-3">
              <div className="col-12 mb-3">
                <h5 className="text-muted">
                  <i className="bi bi-person me-2"></i>
                 Information
                </h5>
                <hr />
              </div>
  
              <div className="col-md-6">
                <label className="form-label fw-bold">
                  <i className="bi bi-person-badge me-2"></i>
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control form-control-lg"
                  placeholder="Enter first name"
                  required
                  onChange={handleInputChange}
                />
              </div>
  
              <div className="col-md-6">
                <label className="form-label fw-bold">
                  <i className="bi bi-person-badge me-2"></i>
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control form-control-lg"
                  placeholder="Enter last name"
                  required
                  onChange={handleInputChange}
                />
              </div>
  
              <div className="col-md-6">
                <label className="form-label fw-bold">
                  <i className="bi bi-person-badge me-2"></i>
                  Father's Name
                </label>
                <input
                  type="text"
                  name="fatherName"
                  className="form-control form-control-lg"
                  placeholder="Enter father's name"
                  required
                  onChange={handleInputChange}
                />
              </div>
  
              <div className="col-md-6">
                <label className="form-label fw-bold">
                  <i className="bi bi-gender-ambiguous me-2"></i>
                  Gender
                </label>
                <div className="d-flex gap-4 mt-2">
                  <div className="form-check">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      className="form-check-input"
                      id="male"
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="male">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      className="form-check-input"
                      id="female"
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="female">
                      Female
                    </label>
                  </div>
                </div>
              </div>
  
              <div className="col-12 mt-4 mb-3">
                <h5 className="text-muted">
                  <i className="bi bi-info-circle me-2"></i>
                  Contact Information
                </h5>
                <hr />
              </div>
  
              <div className="col-md-6">
                <label className="form-label fw-bold">
                  <i className="bi bi-envelope me-2"></i>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control form-control-lg"
                  placeholder="Enter email"
                  required
                  onChange={handleInputChange}
                />
              </div>
  
              <div className="col-md-6">
                <label className="form-label fw-bold">
                  <i className="bi bi-phone me-2"></i>
                  Mobile Number
                </label>
                <input
                  type="text"
                  name="mobile"
                  className="form-control form-control-lg"
                  placeholder="Enter mobile number"
                  required
                  pattern="\d*"
                  onChange={handleInputChange}
                />
              </div>
  
              <div className="col-12">
                <label className="form-label fw-bold">
                  <i className="bi bi-geo-alt me-2"></i>
                  Address
                </label>
                <textarea
                  name="address"
                  className="form-control"
                  placeholder="Enter complete address"
                  rows="3"
                  onChange={handleInputChange}
                />
              </div>            
  
              <div className="col-md-6">
                <label className="form-label fw-bold">
                  <i className="bi bi-calendar me-2"></i>
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  className="form-control form-control-lg"
                  required
                  onChange={handleInputChange}
                />
              </div>
  
              <div className="col-md-6">
                <label className="form-label fw-bold">
                  <i className="bi bi-globe me-2"></i>
                  Country
                </label>
                <select
                  name="country"
                  className="form-select form-select-lg"
                  required
                  onChange={handleInputChange}
                >
                  <option value="">Select Country</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                </select>
              </div>
  
              <div className="col-12 mt-4">
                <button type="submit" className="btn btn-primary btn-lg px-5">
                  <i className="bi bi-check-circle me-2"></i>
                  Submit Registration
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default StudentRegistration;
