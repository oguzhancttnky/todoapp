import React from "react";

export default function SpinnerExample() {
  return (
    <div className="d-flex justify-content-center align-items-center ">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
