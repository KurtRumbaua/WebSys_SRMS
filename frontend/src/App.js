import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//teacher-views
import ClassManagementPage from "./pages/teacherviews/class-management";
import StudentRosterPage from "./pages/teacherviews/student-roster";
import TeacherDashboard from "./pages/teacherviews/teacher-views";
import TeachersPage from "./pages/teacherviews/teacher-roster";

//auth pages
import ClassManagementPage from "./pages/adminviews/class-management";
import StudentRosterPage from "./pages/teacherviews/student-roster";
import TeacherClasses from "./pages/teacherviews/teacher-classes";
import Auth from "./pages/authpages/Auth";
import Login from "./pages/authpages/Login";

//admin views
import EnrollStudentPage from "./pages/adminviews/enroll_students";

//parent-views
import StudenInfo from "./pages/parentviews/studentinfo";
import ParentHome from "./pages/parentviews/parenthome";

import EnrollmentPage from "./pages/parentviews/enrollment";

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

        <Route path="/parenthome" element={<ParentHome />} />
        <Route path="/studentprofile" element={<StudenInfo />} />
        <Route path="/enrollment" element={<EnrollmentPage />} />
        <Route path="enroll-student" element={<EnrollStudentPage />} />

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
