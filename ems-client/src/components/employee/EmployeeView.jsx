import React, { useEffect, useState } from "react";
import { FaDatabase, FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../common/Search";
// import api from "../../api/axios";
import axios from "axios";

const EmployeeView = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 10;

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const result = await axios.get(
      "https://employee-management-system-version1.onrender.com/api/employees/all",
      {
        validateStatus: () => true,
      }
    );
    if (result.status === 302) {
      setEmployees(result.data);
    }
  };

  const handleDelete = async (employeeId) => {
    await axios.delete(
      `https://employee-management-system-version1.onrender.com/api/employees/delete/${employeeId}`
    );
    loadEmployees();
  };

  // Filter + Pagination Logic
  const filteredEmployees = employees.filter((emp) =>
    emp.fullName.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredEmployees.length / employeesPerPage);
  const indexOfLast = currentPage * employeesPerPage;
  const indexOfFirst = indexOfLast - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirst, indexOfLast);

  const changePage = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="container py-4">
      <h3 className="text-light text-center mb-3">
        <FaDatabase /> Employee List
      </h3>

      <Search search={search} setSearch={setSearch} />

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
            {currentEmployees.map((employee, index) => (
              <tr key={employee.employeeId}>
                <th scope="row">{indexOfFirst + index + 1}</th>
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

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <nav className="d-flex justify-content-center mt-4">
          <ul className="pagination">
            {[...Array(totalPages)].map((_, i) => (
              <li
                key={i}
                className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
              >
                <button
                  onClick={() => changePage(i + 1)}
                  className="page-link"
                  style={{
                    backgroundColor: currentPage === i + 1 ? "#0d6efd" : "",
                    color: currentPage === i + 1 ? "#fff" : "",
                    borderColor: currentPage === i + 1 ? "#0d6efd" : "",
                  }}
                >
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </section>
  );
};

export default EmployeeView;
