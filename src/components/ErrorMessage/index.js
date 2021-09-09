import React from "react";

export default function index({ errors, name }) {
  const error = errors[name];
  return (
    <div style={{ color: "#ff424f", fontSize: "1rem", paddingTop: "0.5rem" }}>
      {error && error.message}
    </div>
  );
}
