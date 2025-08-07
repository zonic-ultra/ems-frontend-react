import React, { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import "./HomePage.css";

import api from "./api/axios";

const HomePage = () => {
  const [totalEmployees, setTotalEmployees] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // 🔸 Add loading state

  useEffect(() => {
    fetchTotalEmployees();
  }, []);

  const fetchTotalEmployees = async () => {
    try {
      const response = await api.get("/api/employees/total-employees");
      setTotalEmployees(response.data);
    } catch (error) {
      console.error("Error fetching total employees:", error);
    } finally {
      setIsLoading(false); // 🔸 Hide message once backend responds
    }
  };
  // const [loadingBackend, setLoadingBackend] = useState(true);

  // useEffect(() => {
  //   fetchTotalEmployees();
  // }, []);

  // const fetchTotalEmployees = async () => {
  //   try {
  //     const response = await api.get("/api/employees/total-employees");
  //     setTotalEmployees(response.data);
  //   } catch (error) {
  //     console.error("Error fetching total employees:", error);
  //   }
  // };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 bg-dark py-5">
      {/* 🔸 Show loading alert only if still loading */}
      {isLoading && (
        <div className="alert alert-warning text-center mb-4" role="alert">
          ⏳ Please wait a few seconds for the backend to load. This project
          uses Render's free tier, which may take up to 50 seconds when
          inactive.
        </div>
      )}
      <h2 className="fs-5 fw-light animate-heartbeat text-center text-white mb-3">
        Built for Leaders. Made for Teams
      </h2>

      <div className="container-fluid bg-dark min-vh-100 pt-4 d-flex flex-column align-items-center">
        <div className="row justify-content-center w-100">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 mt-2">
            <div
              className="card text-center shadow-lg mt-3 mx-auto"
              style={{
                backgroundColor: "#343a40",
                color: "white",
                borderRadius: "1rem",
              }}
            >
              <div className="card-body d-flex flex-column align-items-center p-4">
                <FaUsers
                  className="mb-3 text-primary"
                  style={{ fontSize: "3.5rem" }}
                />
                <h6 className="text-light mb-2">Total Employees</h6>
                <p className="fs-2 fw-bold text-light mb-0">{totalEmployees}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
