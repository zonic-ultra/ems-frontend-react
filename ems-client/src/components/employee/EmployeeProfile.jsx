import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/axios";

const EmployeeProfile = () => {
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

  useEffect(() => {
    const loadEmployee = async () => {
      const result = await api.get(`/employees/employee/${employeeId}`);
      setEmployee(result.data);
    };

    loadEmployee();
  }, [employeeId]); // ✅ depend on employeeId only
  return (
    <section className="shadow" style={{ backgroundColor: "whitesmoke" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  src="/images/pngegg.png"
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: 150 }}
                />
                <h5 className="my-3">{`${employee.fullName}`}</h5>
                {/* <div className="d-flex justify-content-center mb-2">
                  <button type="button" className="btn btn-outline-primary">
                    Call
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-warning ms-1"
                  >
                    Message
                  </button>
                </div> */}
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="card mb-4">
              <div className="card-body">
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Name</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-primary fs-5 mb-0">
                      {employee.fullName}
                    </p>
                  </div>
                </div>

                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Email</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-primary fs-5 mb-0">{employee.email}</p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Gender</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-primary fs-5 mb-0">{employee.gender}</p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Contact</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-primary fs-5 mb-0">
                      {employee.phoneNumber}
                    </p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Job Title</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-primary fs-5 mb-0">
                      {employee.jobTitle}
                    </p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Salary</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-primary fs-5 mb-0">{employee.salary}</p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Date Hired</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-primary fs-5  mb-0">
                      {employee.dateHired}
                    </p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeProfile;
