import React, { useEffect, useState } from 'react';
import '../../styles/enroll-students.css'; // Ensure this CSS file contains the new styles
import logo from '../../assets/Schoollogo.png';
import { NavLink } from 'react-router-dom';

function StudentsDatabase() {
    const [students, setStudents] = useState([{
        id: 1, lastName: "Doe", firstName: "John", middleName: "L", address: "123 Main St",
        contactNumber: "123-456-7890", email: "john.doe@example.com", gradeLevel: "10", section: "A"
    }]);

    const [editFormData, setEditFormData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            let result = await fetch('http://localhost:7000/student/basic')
                .then(response => response.json())
                .catch(error => console.error('Error:', error));
            result = result['data'];
            for (let i = 0; i < result.length; i++) {
                setStudents(oldArray => [...oldArray, result[i]]);
            }
        };
        fetchData();
    }, []);

    const handleEditClick = (student) => {
        setIsEditing(true);
        setEditFormData({ ...student });
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditFormData(null);
    };

    const handleSave = (event) => {
        event.preventDefault();
        const updatedStudents = students.map(student =>
            student.id === editFormData.id ? { ...editFormData } : student
        );
        setStudents(updatedStudents);
        setIsEditing(false);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <>
            <div className="admin-container" style={{marginLeft:300, width:1500}}>
                <header className="admin-header">
                    <img className="home-logo" src={logo} alt="School Logo" />
                    <nav className="nav">
                        <ul>
                            <li><NavLink to="/student-database" activeClassName="active">Students</NavLink></li>
                            <li><NavLink to="/employee-database" activeClassName="active">Employees</NavLink></li>
                            <li><NavLink to="/enroll-student" activeClassName="active">Enrollment</NavLink></li>
                            <li><NavLink to="/class-management" activeClassName="active">Class Management</NavLink></li>
                            <li><NavLink to="/financial-management" activeClassName="active">Financial Management</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <div className="enroll-students">
                    <div className="admin-content">
                        <h1>Student Database</h1>
                        <table style={{paddingBottom:50}}>
                            <thead>
                                <tr>
                                    <th>Last Name</th><th>First Name</th><th>Middle Name</th>
                                    <th>Address</th><th>Contact Number</th><th>Email</th>
                                    <th>Grade Level</th><th>Section</th><th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map(student => (
                                    <tr key={student.id}>
                                        <td>{student.lastName}</td>
                                        <td>{student.firstName}</td>
                                        <td>{student.middleName}</td>
                                        <td>{student.address}</td>
                                        <td>{student.contactNumber}</td>
                                        <td>{student.email}</td>
                                        <td>{student.gradeLevel}</td>
                                        <td>{student.section}</td>
                                        <td><button className="editStudentButton" onClick={() => handleEditClick(student)}>Edit</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {isEditing && (
                        <div className="editFormModal">
                            <form onSubmit={handleSave} className="editForm">
                                <label>Last Name</label>
                                <input type="text" name="lastName" value={editFormData.lastName} onChange={handleChange} />
                                <label>First Name</label>
                                <input type="text" name="firstName" value={editFormData.firstName} onChange={handleChange} />
                                <label>Middle Name</label>
                                <input type="text" name="middleName" value={editFormData.middleName} onChange={handleChange} />
                                <label>Address</label>
                                <input type="text" name="address" value={editFormData.address} onChange={handleChange} />
                                <label>Contact Number</label>
                                <input type="text" name="contactNumber" value={editFormData.contactNumber} onChange={handleChange} />
                                <label>Email</label>
                                <input type="email" name="email" value={editFormData.email} onChange={handleChange} />
                                <label>Grade Level</label>
                                <input type="text" name="gradeLevel" value={editFormData.gradeLevel} onChange={handleChange} />
                                <label>Section</label>
                                <input type="text" name="section" value={editFormData.section} onChange={handleChange} />
                                <div className="form-buttons">
                                    <button type="submit">Save</button>
                                    <button type="button" onClick={handleCancel}>Cancel</button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
            <footer className="admin-footer">
                <p>Sta. Teresita Elementary School © 2023. All Rights Reserved.</p>
            </footer>
        </>
    );
}

export default StudentsDatabase;