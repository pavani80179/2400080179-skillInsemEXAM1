import "./StudentForm.css";

import React, { useState } from "react";

function StudentForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    class: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted:\nName: ${formData.name}\nAge: ${formData.age}\nClass: ${formData.class}`);
    setFormData({ name: "", age: "", class: "" }); // Clear form after submit
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        backgroundColor: "#f0f8ff", // light blue background
        padding: "40px",
        borderRadius: "10px",
        maxWidth: "400px",
        marginLeft: "auto",
        marginRight: "auto",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)"
      }}
    >
      <h2>Student Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
        </div>
        <br />
        <div>
          <input
            type="number"
            name="age"
            placeholder="Enter Age"
            value={formData.age}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
        </div>
        <br />
        <div>
          <input
            type="text"
            name="class"
            placeholder="Enter Class"
            value={formData.class}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
        </div>
        <br />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#007BFF",
            color: "white",
            cursor: "pointer"
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
