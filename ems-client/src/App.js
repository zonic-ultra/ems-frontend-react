import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/common/NavBar";
import EmployeeView from "./components/employee/EmployeeView";
import HomePage from "./HomePage";
import AddEmployee from "./components/employee/AddEmployee";
import EditEmployee from "./components/employee/EditEmployee";
import EmployeeProfile from "./components/employee/EmployeeProfile";
import About from "./components/employee/About";

function App() {
  return (
    <div className="bg-dark text-light min-vh-100">
      <main className="container ">
        <div className="d-flex justify-content-center m-4">
          <img
            src="/images/hireBaselogo.png"
            alt="hirebaselogo"
            style={{ maxWidth: 80, height: "auto" }}
          />
        </div>

        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route
              exact
              path="/view-employees"
              element={<EmployeeView />}
            ></Route>
            <Route
              exact
              path="/add-employees"
              element={<AddEmployee />}
            ></Route>
            <Route
              exact
              path="/edit-employee/:employeeId"
              element={<EditEmployee />}
            ></Route>

            <Route
              exact
              path="/view-employee-profile/:employeeId"
              element={<EmployeeProfile />}
            ></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
