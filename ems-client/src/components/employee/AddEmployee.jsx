import React, { useState } from "react";
import { FaFileMedical } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
// import api from "../../api/axios";
import axios from "axios";

const AddEmployee = () => {
  let navigate = useNavigate();
  const [employee, setEmployee] = useState({
    fullName: "",
    email: "",
    gender: "",
    phoneNumber: "",
    jobTitle: "",
    salary: "",
    dateHired: "",
  });

  const { fullName, email, gender, phoneNumber, jobTitle, salary, dateHired } =
    employee;

  const handleInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const saveEmployee = async (e) => {
    e.preventDefault();
    await axios.post(
      "https://employee-management-system-version1.onrender.com/api/employees/add",
      employee
    );
    navigate("/view-employees");
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <form
            className="p-4 border rounded bg-light shadow"
            onSubmit={saveEmployee}
          >
            <h2 className="text-dark text-center mb-4">
              {" "}
              <FaFileMedical /> Add Employee
            </h2>

            {/* Input Fields */}
            {[
              {
                label: "Full Name",
                name: "fullName",
                type: "text",
                value: fullName,
              },
              { label: "Email", name: "email", type: "email", value: email },
              { label: "Gender", name: "gender", type: "text", value: gender },
              {
                label: "Phone #",
                name: "phoneNumber",
                type: "text",
                value: phoneNumber,
              },
              {
                label: "Job Title",
                name: "jobTitle",
                type: "text",
                value: jobTitle,
              },
              {
                label: "Salary",
                name: "salary",
                type: "number",
                value: salary,
              },
              {
                label: "Date Hired",
                name: "dateHired",
                type: "date",
                value: dateHired,
              },
            ].map((field) => (
              <div className="input-group mb-4" key={field.name}>
                <label className="input-group-text" htmlFor={field.name}>
                  {field.label}
                </label>
                <input
                  className="form-control form-control-lg"
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  required
                  value={field.value}
                  onChange={handleInputChange}
                />
              </div>
            ))}

            {/* Buttons */}
            <div className="row justify-content-center mt-4">
              <div className="col-6 col-sm-4 col-md-3 mb-2">
                <button className="btn btn-outline-success btn-lg w-100">
                  Save
                </button>
              </div>
              <div className="col-6 col-sm-4 col-md-3">
                <Link
                  to="/view-employees"
                  className="btn btn-outline-warning btn-lg w-100"
                >
                  Cancel
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
