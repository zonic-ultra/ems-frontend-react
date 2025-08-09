import React from "react";

const About = () => {
  return (
    <div
      className="d-flex flex-column  align-items-center mt-5 m-auto"
      style={{ maxWidth: "400px", textAlign: "center" }}
    >
      <p className="text-center text-light mt-5">
        HireBase is a simple and efficient mini employee management tool
        desinged to help track essentials employee details all in one place
      </p>

      <img
        src="/images/dendev_logo.svg"
        alt="logo"
        className="img-fluid mt-3"
        style={{ width: 90 }}
      />
      <p className="text-center text-light mt-2">&copy; DenDev</p>
    </div>
  );
};

export default About;
