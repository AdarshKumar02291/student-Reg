import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteStudent, editStudent } from "../redux/studentSlice";
import { Link } from "react-router-dom";
import { InputBox } from "../components/InputBox";

const ViewStudents = () => {
  const students = useSelector((state) => state.students.students);
  const dispatch = useDispatch();

  console.log(students);

  const [editFormData, setEditFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    fatherName: "",
    email: "",
    address: "",
    mobile: "",
    gender: "",
    dob: "",
    country: "",
  });

  const [showEditModal, setShowEditModal] = useState(false);

  const handleEditClick = (student) => {
    setEditFormData(student);
    setShowEditModal(true);
  };

  const handleDeleteClick = (id) => {
    dispatch(deleteStudent(id));
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    dispatch(editStudent(editFormData));
    setShowEditModal(false);
  };

  return (
    <div className="container py-5">
      <div className="card shadow-lg border-0">
        <div className="card-header bg-primary text-white text-center py-4">
          <h2 className="mb-0">
            <i className="bi bi-people-fill me-2"></i>
            Student Directory
          </h2>
        </div>

        <div className="card-body p-4">
          {students.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-hover">
                <thead className="table-light">
                  <tr>
                    <th>
                      <i className="bi bi-person-badge me-2"></i>
                      Student Name
                    </th>
                    <th>
                      <i className="bi bi-envelope me-2"></i>
                      Email
                    </th>
                    <th>
                      <i className="bi bi-telephone me-2"></i>
                      Mobile
                    </th>
                    <th>
                      <i className="bi bi-globe me-2"></i>
                      Country
                    </th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id}>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">
                          <div className="bg-light rounded-circle p-2 me-3">
                            <i className="bi bi-person-circle fs-5"></i>
                          </div>
                          <div>
                            <div className="fw-bold">{`${student.firstName} ${student.lastName}`}</div>
                            <small className="text-muted">
                              {student.fatherName}
                            </small>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">{student.email}</td>
                      <td className="align-middle">{student.mobile}</td>
                      <td className="align-middle">
                        <span className="badge bg-light text-dark">
                          {student.country}
                        </span>
                      </td>
                      <td className="align-middle text-center">
                        <button
                          className="btn btn-outline-primary btn-sm me-2"
                          onClick={() => handleEditClick(student)}
                        >
                          <i className="bi bi-pencil-square me-1"></i>
                          Edit
                        </button>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => handleDeleteClick(student.id)}
                        >
                          <i className="bi bi-trash me-1"></i>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-5">
              <i className="bi bi-person-x fs-1 text-muted"></i>
              <p className="h5 mt-3 text-muted">No students registered yet.</p>
              <Link to="/student-registration" className="btn btn-primary mt-3">
                <i className="bi bi-person-plus-fill me-2"></i>
                Add New Student
              </Link>
            </div>
          )}
        </div>
      </div>

      {showEditModal && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content border-0 shadow">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title">
                  <i className="bi bi-pencil-square me-2"></i>
                  Edit Student Information
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setShowEditModal(false)}
                ></button>
              </div>
              <form onSubmit={handleEditSubmit}>
                <div className="modal-body p-4">
                  <div className="row g-3">
                    <div className="col-12">
                      <h6 className="text-muted">
                        <i className="bi bi-person me-2"></i>
                        Information
                      </h6>
                      <hr />
                    </div>
                    <InputBox
                      type="text"
                      name="firstName"
                      label="First Name"
                      placeholder="Enter first name"
                      value={editFormData.firstName}
                      required
                      onChange={handleEditInputChange}
                    />
                    <InputBox
                      type="text"
                      name="lastName"
                      label="Last Name"
                      placeholder="Enter last name"
                      value={editFormData.lastName}
                      required
                      onChange={handleEditInputChange}
                    />
                    <InputBox
                      type="text"
                      name="fatherName"
                      label="Father's Name"
                      placeholder="Enter father's name"
                      value={editFormData.fatherName}
                      required
                      onChange={handleEditInputChange}
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
                            checked={editFormData.gender === "Male"}
                            onChange={handleEditInputChange}
                          />
                          <label className="form-check-label">Male</label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            name="gender"
                            value="Female"
                            className="form-check-input"
                            checked={editFormData.gender === "Female"}
                            onChange={handleEditInputChange}
                          />
                          <label className="form-check-label">Female</label>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 mt-3">
                      <h6 className="text-muted">
                        <i className="bi bi-info-circle me-2"></i>
                        Contact Information
                      </h6>
                      <hr />
                    </div>
                    <InputBox
                      type="email"
                      name="email"
                      label="Email"
                      placeholder="Enter email"
                      value={editFormData.email}
                      required
                      onChange={handleEditInputChange}
                    />
                    <InputBox
                      type="text"
                      name="mobile"
                      label="Mobile Number"
                      placeholder="Enter mobile number"
                      value={editFormData.mobile}
                      required
                      pattern="\d*"
                      onChange={handleEditInputChange}
                    />
                    <InputBox
                      type="textarea"
                      name="address"
                      label="Address"
                      placeholder="Enter address"
                      value={editFormData.address}
                      rows={3}
                      onChange={handleEditInputChange}
                    />
                    <InputBox
                      type="date"
                      name="dob"
                      label="Date of Birth"
                      value={editFormData.dob}
                      required
                      onChange={handleEditInputChange}
                    />
                    <InputBox
                      type="select"
                      name="country"
                      label="Country"
                      value={editFormData.country}
                      required
                      onChange={handleEditInputChange}
                      options={[
                        { label: "Select Country", value: "" },
                        { label: "India", value: "India" },
                        { label: "USA", value: "USA" },
                      ]}
                    />
                  </div>
                </div>

                <div className="modal-footer bg-light">
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setShowEditModal(false)}
                  >
                    <i className="bi bi-x-circle me-2"></i>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    <i className="bi bi-check-circle me-2"></i>
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewStudents;
