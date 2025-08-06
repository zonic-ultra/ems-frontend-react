// import axios from "axios";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const AddEmployee = () => {
//   let navigate = useNavigate();
//   const [employee, setEmployee] = useState({
//     fullName: "",
//     email: "",
//     gender: "",
//     phoneNumber: "",
//     jobTitle: "",
//     salary: "",
//     dateHired: "",
//   });

//   const { fullName, email, gender, phoneNumber, jobTitle, salary, dateHired } =
//     employee;

//   const handleInputChange = (e) => {
//     setEmployee({ ...employee, [e.target.name]: e.target.value });
//   };

//   const saveEmployee = async (e) => {
//     e.preventDefault();

//     await axios.post("http://localhost:8080/api/employees/add", employee);
//     navigate("/view-employees");
//   };

//   return (
//     <div className="col-sm-9 py-2 px-5 offset-2 shadow">
//       <form
//         className="p-4 border rounded bg-light shadow"
//         onSubmit={(e) => saveEmployee(e)}
//       >
//         <h2 className="text-dark text-center mb-4">Add Employee</h2>

//         <div className="input-group mb-5">
//           <label className="input-group-text" htmlFor="fullName">
//             Full Name
//           </label>
//           <input
//             className="form-control form-control-lg col-sm-6"
//             type="text"
//             name="fullName"
//             id="fullName"
//             required
//             value={fullName}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="input-group mb-5">
//           <label className="input-group-text" htmlFor="email">
//             Email
//           </label>
//           <input
//             className="form-control form-control-lg col-sm-6"
//             type="email"
//             name="email"
//             id="email"
//             required
//             value={email}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="input-group mb-5">
//           <label className="input-group-text" htmlFor="gender">
//             Gender
//           </label>
//           <input
//             className="form-control form-control-lg col-sm-6"
//             type="text"
//             name="gender"
//             id="gender"
//             required
//             value={gender}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="input-group mb-5">
//           <label className="input-group-text" htmlFor="phoneNumber">
//             Phone #
//           </label>
//           <input
//             className="form-control form-control-lg col-sm-6"
//             type="text"
//             name="phoneNumber"
//             id="phoneNumber"
//             required
//             value={phoneNumber}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="input-group mb-5">
//           <label className="input-group-text" htmlFor="jobTitle">
//             Job Title
//           </label>
//           <input
//             className="form-control form-control-lg col-sm-6"
//             type="text"
//             name="jobTitle"
//             id="jobTitle"
//             required
//             value={jobTitle}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="input-group mb-5">
//           <label className="input-group-text" htmlFor="salary">
//             Salary
//           </label>
//           <input
//             className="form-control form-control-lg col-sm-6"
//             type="number"
//             name="salary"
//             id="salary"
//             required
//             value={salary}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="input-group mb-5">
//           <label className="input-group-text" htmlFor="dateHired">
//             Date Hired
//           </label>
//           <input
//             className="form-control form-control-lg col-sm-6"
//             type="date"
//             name="dateHired"
//             id="dateHired"
//             required
//             value={dateHired}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="row mb-5 justify-content-center">
//           <div className="col-sm-2">
//             <button className="btn btn-outline-success btn-lg">Save</button>
//           </div>
//           <div className="col-sm-2">
//             <Link
//               to={"/view-employees"}
//               className="btn btn-outline-warning btn-lg"
//             >
//               Cancel
//             </Link>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddEmployee;

import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    await axios.post("http://localhost:8080/api/employees/add", employee);
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
            <h2 className="text-dark text-center mb-4">Add Employee</h2>

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
