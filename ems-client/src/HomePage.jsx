import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUsers } from "react-icons/fa"; // 👈 Import human icon from react-icons

const HomePage = () => {
  const [totalEmployees, setTotalEmployees] = useState(0);

  useEffect(() => {
    fetchTotalEmployees();
  }, []);

  const fetchTotalEmployees = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/employees/total-employees"
      );
      setTotalEmployees(response.data);
    } catch (error) {
      console.error("Error fetching total employees:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-6">
        Welcome to the home page DenDev
      </h2>

      <div className="bg-dark shadow-lg rounded-2xl p-6 w-64 flex flex-col items-center mt-5 h-25">
        <FaUsers
          className="text-blue-700 mb-2 ms-4"
          style={{ fontSize: "60px" }}
        />
        {/* <h3 className="text-xl font-semibold ms-4">Total Employees</h3> */}
        <p className="text-3xl font-bold text-gray-800 ms-5 pb-6">
          {totalEmployees}
        </p>
      </div>
    </div>
  );
};

export default HomePage;
