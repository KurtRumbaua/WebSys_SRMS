import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ClassManagementPage from "./pages/class-management";
import StudentRosterPage from "./pages/student-roster";
import TeacherDashboard from "./pages/teacher-views";
import TeachersPage from "./pages/teacher-roster";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/class-management" />} />
        <Route path="/class-management" element={<ClassManagementPage />} />
        <Route path="/student-roster" element={<StudentRosterPage />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/teachers" element={<TeachersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
