import React, { useEffect, useState } from "react";
import { FaPencilRuler } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../api/axios";

const EditEmployee = () => {
  const navigate = useNavigate();
  const { employeeId } = useParams();
  const [message, setMessage] = useState("");

  //metjhod to show message or errors
  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => {
      setMessage("");
    }, 4000);
  };

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
      const result = await api.get(`/api/employees/employee/${employeeId}`);
      setEmployee(result.data);
    };

    loadEmployee();
  }, [employeeId]);

  const handleInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const updateEmployee = async (e) => {
    e.preventDefault();

    if (Number(salary) <= 0) {
      showMessage("Salary must be greater than zero!");
      return;
    }
    await api.put(`/api/employees/update/${employeeId}`, employee);
    navigate("/view-employees");
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <form
            className="p-4 border rounded bg-light shadow"
            onSubmit={updateEmployee}
          >
            <h2 className="text-dark text-center mb-4">
              <FaPencilRuler /> Edit Employee
            </h2>
            {message && <div className="message text-dark">{message}</div>}

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
            ].map((field, idx) => (
              <div className="input-group mb-4" key={idx}>
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

            <div className="row justify-content-center mt-4">
              <div className="col-6 col-md-3 mb-2">
                <button className="btn btn-outline-success btn-lg w-100">
                  Save
                </button>
              </div>
              <div className="col-6 col-md-3 mb-2">
                <Link
                  to={"/view-employees"}
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

export default EditEmployee;
