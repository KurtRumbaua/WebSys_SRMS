import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ClassManagementPage from "./pages/teacherviews/class-management";
import StudentRosterPage from "./pages/teacherviews/student-roster";
import TeacherDashboard from "./pages/teacherviews/teacher-views";
import TeachersPage from "./pages/teacherviews/teacher-roster";
import Auth from "./pages/authpages/Auth";
import StudenInfo from "./pages/parentviews/studentinfo";
import Login from "./pages/authpages/Login";
import ParentHome from "./pages/parentviews/parenthome";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/class-management" />} />
        <Route path="/class-management" element={<ClassManagementPage />} />
        <Route path="/student-roster" element={<StudentRosterPage />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/parenthome" element={<ParentHome/>}/>
        <Route path="/studentprofile" element={<StudenInfo/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
