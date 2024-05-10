import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//teacher-views
import TeacherClasses from "./pages/teacherviews/teacher-classes";
import StudentRosterPage from "./pages/teacherviews/student-roster";
import ClassTeacherAssign from "./pages/adminviews/class-teacher-assign";
// import TeacherDashboard from "./pages/teacherviews/teacher-views";
// import TeachersPage from "./pages/teacherviews/teacher-roster";

//auth pages
import Auth from "./pages/authpages/Auth";
import Login from "./pages/authpages/Login";
import Signup from "./pages/authpages/Signup";

//admin views
import ClassManagementPage from "./pages/adminviews/class-management";
import EnrollStudentPage from "./pages/adminviews/enroll_students";
import StudentsDatabase from "./pages/adminviews/students-database";
import EmployeesDatabase from "./pages/adminviews/employees-database";
import FinancialManagement from "./pages/adminviews/financial-management";

//parent-views
import StudenInfo from "./pages/parentviews/studentinfo";
import ParentHome from "./pages/parentviews/parenthome";
import ParentEnrollment from "./pages/parentviews/enrollment";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* admin views */} 
        <Route path="/student-database" element={<StudentsDatabase />} />
        <Route path="/employee-database" element={<EmployeesDatabase />} />
        <Route path="/class-teacher-assign" element={<ClassTeacherAssign />} />
        <Route path="/class-management" element={<ClassManagementPage />} />
        <Route path="/enroll-student" element={<EnrollStudentPage />} />
        <Route path="/financial-management" element={<FinancialManagement />} />

        {/* parentviews */}
        <Route path="/parenthome" element={<ParentHome/>}/>
        <Route path="/parentenrollment" element={<ParentEnrollment/>}/>
        <Route path="/studentprofile" element={<StudenInfo/>}/>
        

        {/* teacherviews */}
        <Route path="/teacher-classes" element={<TeacherClasses />} />
        <Route path="/student-roster" element={<StudentRosterPage />} />

        {/* authpages */}
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="*" element={<Navigate to="/auth" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;