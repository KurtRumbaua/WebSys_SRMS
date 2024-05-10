import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/signup.css";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userEmail: '',
    userPassword: '',
    parentFirstName: '',
    parentMiddleName: '',
    parentLastName: '',
    parentContactNumber: '',
    parentEmail: '',
    parentAddress: '',
    studentFirstName: '',
    studentMiddleName: '',
    studentLastName: '',
    studentGradeLevel: '',
    studentEmail: '',
    studentContactNumber: '',
    studentBirthDate: '',
    studentAddress: '',
    studentMedicalCondition: '',
    studentAllergy: '',
    studentEmergencyContact: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data submitted:', formData);
    navigate('/login'); // Redirect to login after submission
  };

  return (
    <div className="signup-bg-container">
      <div className="signup-form-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <h3>User Information</h3>
          <label className="signup-label">Email</label>
          <input className="signup-input" type="email" name="userEmail" placeholder="Email" value={formData.userEmail} onChange={handleChange} />
          <label className="signup-label">Password</label>
          <input className="signup-input" type="password" name="userPassword" placeholder="Password" value={formData.userPassword} onChange={handleChange} />
          <h3>Parent Information</h3>
          <label className="signup-label">First Name</label>
          <input className="signup-input" type="text" name="parentFirstName" placeholder="First Name" value={formData.parentFirstName} onChange={handleChange} />
          <label className="signup-label">Middle Name (Optional)</label>
          <input className="signup-input" type="text" name="parentMiddleName" placeholder="Middle Name" value={formData.parentMiddleName} onChange={handleChange} />
          <label className="signup-label">Last Name</label>
          <input className="signup-input" type="text" name="parentLastName" placeholder="Last Name" value={formData.parentLastName} onChange={handleChange} />
          <label className="signup-label">Contact Number</label>
          <input className="signup-input" type="text" name="parentContactNumber" placeholder="Contact Number" value={formData.parentContactNumber} onChange={handleChange} />
          <label className="signup-label">Email</label>
          <input className="signup-input" type="email" name="parentEmail" placeholder="Email" value={formData.parentEmail} onChange={handleChange} />
          <label className="signup-label">Address</label>
          <input className="signup-input" type="text" name="parentAddress" placeholder="Address" value={formData.parentAddress} onChange={handleChange} />
          <h3>Student Information</h3>
          <label className="signup-label">First Name</label>
          <input className="signup-input" type="text" name="studentFirstName" placeholder="First Name" value={formData.studentFirstName} onChange={handleChange} />
          <label className="signup-label">Middle Name (Optional)</label>
          <input className="signup-input" type="text" name="studentMiddleName" placeholder="Middle Name" value={formData.studentMiddleName} onChange={handleChange} />
          <label className="signup-label">Last Name</label>
          <input className="signup-input" type="text" name="studentLastName" placeholder="Last Name" value={formData.studentLastName} onChange={handleChange} />
          <label className="signup-label">Grade Level</label>
          <input className="signup-input" type="text" name="studentGradeLevel" placeholder="Grade Level" value={formData.studentGradeLevel} onChange={handleChange} />
          <label className="signup-label">Email</label>
          <input className="signup-input" type="email" name="studentEmail" placeholder="Email" value={formData.studentEmail} onChange={handleChange} />
          <label className="signup-label">Contact Number</label>
          <input className="signup-input" type="text" name="studentContactNumber" placeholder="Contact Number" value={formData.studentContactNumber} onChange={handleChange} />
          <label className="signup-label">Birth Date</label>
          <input className="signup-input" type="date" name="studentBirthDate" placeholder="Birth Date" value={formData.studentBirthDate} onChange={handleChange} />
          <label className="signup-label">Address</label>
          <input className="signup-input" type="text" name="studentAddress" placeholder="Address" value={formData.studentAddress} onChange={handleChange} />
          <label className="signup-label">Medical Condition</label>
          <input className="signup-input" type="text" name="studentMedicalCondition" placeholder="Medical Condition" value={formData.studentMedicalCondition} onChange={handleChange} />
          <label className="signup-label">Allergy</label>
          <input className="signup-input" type="text" name="studentAllergy" placeholder="Allergy" value={formData.studentAllergy} onChange={handleChange} />
          <label className="signup-label">Emergency Contact</label>
          <input className="signup-input" type="text" name="studentEmergencyContact" placeholder="Emergency Contact" value={formData.studentEmergencyContact} onChange={handleChange} />
          <button className="signup-button" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;