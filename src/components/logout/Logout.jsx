import React from "react";
import { Navigate } from "react-router-dom";

const Logout = ({ setIsloggedin }) => {
  setIsloggedin(false);
  return (
    <>
      <Navigate to={"/login"} />
    </>
  );
};

export default Logout;
