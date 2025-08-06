import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const EmployeeView = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const result = await axios.get("http://localhost:8080/api/employees/all", {
      validateStatus: () => true,
    });
    if (result.status === 302) {
      setEmployees(result.data);
    }
  };

  const handleDelete = async (employeeId) => {
    await axios.delete(
      `http://localhost:8080/api/employees/delete/${employeeId}`
    );
    loadEmployees();
  };

  return (
    <section className="container py-4">
      <div className="table-responsive shadow-sm">
        <table className="table table-bordered border-primary table-hover table-primary">
          <thead className="table-dark text-center">
            <tr>
              <th>#</th>
              <th>Employee Id</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Phone #</th>
              <th>Job Title</th>
              <th>Salary</th>
              <th>Date Hired</th>
              <th colSpan="3">Actions</th>
            </tr>
          </thead>
          <tbody className="text-start">
            {employees.map((employee, index) => (
              <tr key={employee.employeeId}>
                <th scope="row">{index + 1}</th>
                <td>{employee.employeeId}</td>
                <td>{employee.fullName}</td>
                <td>{employee.email}</td>
                <td>{employee.gender}</td>
                <td>{employee.phoneNumber}</td>
                <td>{employee.jobTitle}</td>
                <td>{employee.salary}</td>
                <td>{employee.dateHired}</td>
                <td className="text-center">
                  <Link
                    to={`/view-employee-profile/${employee.employeeId}`}
                    className="btn btn-outline-info btn-sm"
                  >
                    <FaEye />
                  </Link>
                </td>
                <td className="text-center">
                  <Link
                    to={`/edit-employee/${employee.employeeId}`}
                    className="btn btn-outline-success btn-sm"
                  >
                    <FaEdit />
                  </Link>
                </td>
                <td className="text-center">
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => handleDelete(employee.employeeId)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default EmployeeView;
