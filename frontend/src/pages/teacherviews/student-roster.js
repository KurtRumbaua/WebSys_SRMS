import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import '../styles/student-roster.css';

const StudentRosterPage = () => {
    const sections = ['Imus', 'Maragondon', 'General Trias', 'Dasmarinas', 'Bacoor']; // Example sections
    const subjects = ['Assignments', 'Projects', 'Exams', 'Quizzes']; // Example subjects

    const [selectedSection, setSelectedSection] = useState('');
    const [students, setStudents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [selectedSubject, setSelectedSubject] = useState('');
    const [gradeInput, setGradeInput] = useState('');

    const handleSectionChange = (event) => {
        const section = event.target.value;
        setSelectedSection(section);

        // Simulated data fetching for students in the selected section
        fetchStudents(section);
    };

    const fetchStudents = (section) => {
        // Simulated API call or data retrieval based on the selected section
        // Replace this with your actual data fetching logic
        // For demonstration, using setTimeout to simulate async data fetching
        setTimeout(() => {
            // Example student data for each section
            const studentData = {
                'Imus': [
                    { id: 1, firstName: 'John', middleName: 'Doe', lastName: 'Smith' },
                    { id: 2, firstName: 'Jane', middleName: 'Elizabeth', lastName: 'Doe' }
                ],
                'Maragondon': [
                    { id: 3, firstName: 'Alice', middleName: 'Mary', lastName: 'Johnson' },
                    { id: 4, firstName: 'Bob', middleName: 'Robert', lastName: 'Williams' }
                ],
                'General Trias': [
                    { id: 5, firstName: 'Emily', middleName: 'Grace', lastName: 'Brown' },
                    { id: 6, firstName: 'Michael', middleName: 'James', lastName: 'Davis' }
                ]
            };
            setStudents(studentData[section]);
        }, 500); // Simulating a delay of 500ms for data fetching
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredStudents = students.filter(student => {
        // Filter students based on ID, First Name, Middle Name, or Last Name containing the search term
        const searchTermLowerCase = searchTerm.toLowerCase();
        return (
            student.id.toString().includes(searchTermLowerCase) ||
            student.firstName.toLowerCase().includes(searchTermLowerCase) ||
            student.middleName.toLowerCase().includes(searchTermLowerCase) ||
            student.lastName.toLowerCase().includes(searchTermLowerCase)
        );
    });

    const handleAddGrades = (studentId) => {
        const student = students.find(student => student.id === studentId);
        if (student) {
            setSelectedStudent(student);
            setOpenDialog(true);
        }
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    const handleSubjectChange = (event) => {
        setSelectedSubject(event.target.value);
    };

    const handleGradeInputChange = (event) => {
        setGradeInput(event.target.value);
    };

    const handleSubmitGrade = () => {
        // Placeholder function for submitting grades
        console.log(`Submitted grade for subject ${selectedSubject}: ${gradeInput}`);
        setOpenDialog(false);
    };

    return (
        <div className="container">
            <h1 className="title">Class Record</h1>
            <div className="search-bar">
                <input type="text" placeholder="Search by ID, Name..." onChange={handleSearchChange} />
            </div>
            <div className="select-section">
                <label htmlFor="sectionSelect">Select Section:</label>
                <select id="sectionSelect" onChange={handleSectionChange} value={selectedSection}>
                    <option value="">-- Select Section --</option>
                    {sections.map(section => (
                        <option key={section} value={section}>{section}</option>
                    ))}
                </select>
                {selectedSection === '' && <p className="no-section-text">Please select a section.</p>}
            </div>
            <table className="student-table">
                <thead>
                    <tr>
                        <th>ID Number</th>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Last Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStudents.map(student => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.firstName}</td>
                            <td>{student.middleName}</td>
                            <td>{student.lastName}</td>
                            <td>
                                <button onClick={() => handleAddGrades(student.id)}>Add Grades</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Dialog for adding grades */}
            <Dialog open={openDialog} onClose={handleDialogClose}>
                <DialogTitle className="dialog-title">{selectedStudent ? `Add Grades - ${selectedStudent.firstName} ${selectedStudent.lastName}` : 'Add Grades'}</DialogTitle>
                <DialogContent>
                    <FormControl fullWidth>
                        <Select value={selectedSubject} onChange={handleSubjectChange} displayEmpty>
                            <MenuItem value="" disabled>
                                Select Subject
                            </MenuItem>
                            {subjects.map(subject => (
                                <MenuItem key={subject} value={subject}>{subject}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <input type="number" placeholder="Grade" value={gradeInput} onChange={handleGradeInputChange} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose}>Cancel</Button>
                    <Button onClick={handleSubmitGrade}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default StudentRosterPage;
