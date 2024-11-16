import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addStudent } from '../redux/studentSlice';
import { InputBox } from '../components/InputBox';

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
              <h2 className="mb-0">Student Registration</h2>
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-12">
                  <h5 className="text-muted">Information</h5>
                  <hr />
                </div>
                <InputBox
                  type="text"
                  name="firstName"
                  label="First Name"
                  placeholder="Enter first name"
                  value={formData.firstName}
                  required
                  onChange={handleInputChange}
                />
                <InputBox
                  type="text"
                  name="lastName"
                  label="Last Name"
                  placeholder="Enter last name"
                  value={formData.lastName}
                  required
                  onChange={handleInputChange}
                />
                <InputBox
                  type="text"
                  name="fatherName"
                  label="Father's Name"
                  placeholder="Enter father's name"
                  value={formData.fatherName}
                  required
                  onChange={handleInputChange}
                />
                <div className="col-md-6">
                  <label className="form-label fw-bold">Gender</label>
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
                <div className="col-12 mt-4">
                  <h5 className="text-muted">Contact Information</h5>
                  <hr />
                </div>
                <InputBox
                  type="email"
                  name="email"
                  label="Email"
                  placeholder="Enter email"
                  value={formData.email}
                  required
                  onChange={handleInputChange}
                />
                <InputBox
                  type="text"
                  name="mobile"
                  label="Mobile Number"
                  placeholder="Enter mobile number"
                  value={formData.mobile}
                  required
                  pattern="\d*"
                  onChange={handleInputChange}
                />
                <InputBox
                  type="textarea"
                  name="address"
                  label="Address"
                  placeholder="Enter complete address"
                  value={formData.address}
                  rows={3}
                  onChange={handleInputChange}
                />
                <InputBox
                  type="date"
                  name="dob"
                  label="Date of Birth"
                  value={formData.dob}
                  required
                  onChange={handleInputChange}
                />
                <InputBox
                  type="select"
                  name="country"
                  label="Country"
                  value={formData.country}
                  required
                  onChange={handleInputChange}
                  options={[
                    { label: "Select Country", value: "" },
                    { label: "India", value: "India" },
                    { label: "USA", value: "USA" },
                  ]}
                />
                <div className="col-12 mt-4">
                  <button type="submit" className="btn btn-primary btn-lg px-5">
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


