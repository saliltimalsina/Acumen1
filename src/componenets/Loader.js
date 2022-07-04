import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loader() {
  return (
    <div className="mt-5">
      <Spinner
        animation="border"
        className="mt-5"
        role="status"
        style={{ width: "100px", height: "100px" }}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
