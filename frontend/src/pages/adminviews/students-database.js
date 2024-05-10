import React, {useEffect ,useState } from 'react';
import '../../styles/enroll-students.css';
import logo from '../../assets/Schoollogo.png';
import { NavLink } from 'react-router-dom';
import AdminHeader from '../../components/admin-header';
import STESFooter from '../../components/footer';

function StudentsDatabase() {
    const [students, setStudents] = useState([
        { id: 1, lastName: "Doe", firstName: "John", middleName: "L", address: "123 Main St", contactNumber: "123-456-7890", email: "john.doe@example.com", gradeLevel: "10", section: "A" }
    ]);


    const [editFormData, setEditFormData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

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
        const updatedStudents = students.map(student => {
            if (student.id === editFormData.id) {
                return { ...editFormData };
            }
            return student;
        });
        setStudents(updatedStudents);
        setIsEditing(false);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditFormData(prev => ({ ...prev, [name]: value }));
    };


    return (
        <>
            <div className="admin-container">
                <AdminHeader />
            </div>
            <div className="enroll-students">
                <div className="admin-content">
                    <h1>Student Database</h1>
                    <table>
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
                        <form onSubmit={handleSave}>
                            <input type="text" name="lastName" value={editFormData.lastName} onChange={handleChange} placeholder="Last Name" style={{width:400}}/>
                            <input type="text" name="firstName" value={editFormData.firstName} onChange={handleChange} placeholder="First Name" style={{width:400}}/>
                            <input type="text" name="middleName" value={editFormData.middleName} onChange={handleChange} placeholder="Middle Name" style={{width:400}}/>
                            <input type="text" name="address" value={editFormData.address} onChange={handleChange} placeholder="Address" style={{width:400}}/>
                            <input type="text" name="contactNumber" value={editFormData.contactNumber} onChange={handleChange} placeholder="Contact Number" style={{width:400}}/>
                            <input type="email" name="email" value={editFormData.email} onChange={handleChange} placeholder="Email" style={{width:400}}/>
                            <input type="text" name="gradeLevel" value={editFormData.gradeLevel} onChange={handleChange} placeholder="Grade Level" style={{width:400}}/>
                            <input type="text" name="section" value={editFormData.section} onChange={handleChange} placeholder="Section" style={{width:400}}/>
                            <button type="submit">Save</button>
                            <button onClick={handleCancel}>Cancel</button>
                        </form>
                    </div>
                )}
            </div>
            <STESFooter />
        </>
    );
}

export default StudentsDatabase;

