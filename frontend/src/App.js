import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ClassManagementPage from "./pages/adminviews/class-management";
import StudentRosterPage from "./pages/teacherviews/student-roster";
import TeacherClasses from "./pages/teacherviews/teacher-classes";
import Auth from "./pages/authpages/Auth";
import StudenInfo from "./pages/parentviews/studentinfo";
import Login from "./pages/authpages/Login";
import ParentHome from "./pages/parentviews/parenthome";
import ParentEnrollment from "./pages/parentviews/enrollment"
import Signup from "./pages/authpages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/class-management" element={<ClassManagementPage />} />
        <Route path="/student-roster" element={<StudentRosterPage />} />
        <Route path="/teacher-classes" element={<TeacherClasses />} />
        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/parenthome" element={<ParentHome/>}/>
        <Route path="/parentenrollment" element={<ParentEnrollment/>}/>
        <Route path="/studentprofile" element={<StudenInfo/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
