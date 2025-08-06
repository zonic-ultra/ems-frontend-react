import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditEmployee = () => {
  let navigate = useNavigate();

  const { employeeId } = useParams();

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

  useEffect(() => {
    const loadEmployee = async () => {
      const result = await axios.get(
        `http://localhost:8080/api/employees/employee/${employeeId}`
      );
      setEmployee(result.data);
    };

    loadEmployee();
  }, [employeeId]); // ✅ depend on employeeId only

  const handleInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const updateEmployee = async (e) => {
    e.preventDefault();

    await axios.put(
      `http://localhost:8080/api/employees/update/${employeeId}`,
      employee
    );
    navigate("/view-employees");
  };

  return (
    <div className="col-sm-9 py-2 px-5 offset-2 shadow">
      <form
        className="p-4 border rounded bg-light shadow"
        onSubmit={(e) => updateEmployee(e)}
      >
        <h2 className="text-dark text-center mb-4">Edit Employee</h2>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="fullName">
            Full Name
          </label>
          <input
            className="form-control form-control-lg col-sm-6"
            type="text"
            name="fullName"
            id="fullName"
            required
            value={fullName}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="email">
            Email
          </label>
          <input
            className="form-control form-control-lg col-sm-6"
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="gender">
            Gender
          </label>
          <input
            className="form-control form-control-lg col-sm-6"
            type="text"
            name="gender"
            id="gender"
            required
            value={gender}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="phoneNumber">
            Phone #
          </label>
          <input
            className="form-control form-control-lg col-sm-6"
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            required
            value={phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="jobTitle">
            Job Title
          </label>
          <input
            className="form-control form-control-lg col-sm-6"
            type="text"
            name="jobTitle"
            id="jobTitle"
            required
            value={jobTitle}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="salary">
            Salary
          </label>
          <input
            className="form-control form-control-lg col-sm-6"
            type="number"
            name="salary"
            id="salary"
            required
            value={salary}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="dateHired">
            Date Hired
          </label>
          <input
            className="form-control form-control-lg col-sm-6"
            type="date"
            name="dateHired"
            id="dateHired"
            required
            value={dateHired}
            onChange={handleInputChange}
          />
        </div>
        <div className="row mb-5 justify-content-center">
          <div className="col-sm-2">
            <button className="btn btn-outline-success btn-lg">Save</button>
          </div>
          <div className="col-sm-2">
            <Link
              to={"/view-employees"}
              className="btn btn-outline-warning btn-lg"
            >
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
