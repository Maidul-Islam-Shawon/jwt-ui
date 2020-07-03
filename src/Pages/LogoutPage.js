import React from "react";

const LogoutPage = () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
  localStorage.removeItem("isAuth");
  return (
    <div>
      <h2 style={{ color: "green" }}>You have logged out</h2>
      <hr />
      <h2>Thanks for visiting.</h2>
      <hr />
    </div>
  );
};

export default LogoutPage;
