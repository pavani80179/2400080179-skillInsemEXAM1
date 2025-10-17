import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StudentForm from "./StudentForm";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Welcome to Student Form App</h2>
      <Link to="/studentform">Go to Student Form</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studentform" element={<StudentForm />} />
      </Routes>
    </Router>
  );
}

export default App;
