import React from "react";
import { Button } from "reactstrap";
import "./Page.css";

const Page = ({ children, backgroundUrl }) => {
  const port = process.env.PORT || 3000; // Set the default port to 3000
  return (
    <div className="page" style={{ backgroundImage: `url("https://www.chulatutor.com/blog/wp-content/uploads/2020/12/mba-kmutnb.jpg")` }}>
      <div className="header-container">
        <h1 className="header">FTE Room Reservation</h1>
      </div>
      <div style={{ display: "flex" }}>
        <Button style={{ marginRight: "10px" }} color="primary" onClick={() => (window.location.href = `http://localhost:${port}/registration`)}>
          Don't have an account?
        </Button>
        <Button style={{ marginRight: "10px" }} color="secondary" onClick={() => (window.location.href = `http://localhost:${port}/login`)}>
          Login
        </Button>
      </div>
      {children}
    </div>
  );
};

export default Page;