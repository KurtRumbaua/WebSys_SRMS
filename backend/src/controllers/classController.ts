import { Request, Response } from 'express';
import { addStudent, editClass, designateClassTeacher, removeClassTeacher, removeAllClasses, removeClass, injectClassTemplate, checkIfClassExists, getAllClasses, getClassesByStudent, getClassesByTeacher, getClassInfo } from '../services/classService';
import { GradeLevel, Section } from '../models/database/studentSchema';
import { IClass } from '../models/database/teacherSchema';
import { startSession } from 'mongoose';
import { checkIfStudentExists } from '../services/studentService';

// should only be run once
export async function populateClassAPI(req: Request, res: Response) {
    const session = await startSession();
    session.startTransaction();
    try {
        let h_counter = 1;
        let t_counter = 0;
        for (let grade in GradeLevel) {
            for (let section in Section) {
                const gradeKey = grade as keyof typeof GradeLevel;
                const sectionKey = section as keyof typeof Section;
                console.log(`Creating class ${GradeLevel[gradeKey]}-${Section[sectionKey]}`);
                const classData: IClass = {
                    section: Section[sectionKey],
                    gradeLevel: GradeLevel[gradeKey],
                    refTeacherId: '',
                    refStudentIds: [],
                    room: `${h_counter}0${t_counter}`
                }
                await injectClassTemplate(classData, session); 
                t_counter++;
            }
            h_counter++;
        }
        await session.commitTransaction();
    } catch (error) {
        await session.abortTransaction();
        console.error("Error creating classes: ", error);
        res.status(400).send({
            success: "false",
            message: "Error creating classes",
            log_error: error
        });
    } finally {
        session.endSession();
        if (!res.headersSent) {
            res.status(200).send({
                success: "true",
                message: "Classes created"
            });
        }
    }
}

export async function getStudentClassAPI(req: Request, res: Response) {
    try {
        const { studentNumber } = req.body;
        const validateStudent = await checkIfStudentExists(studentNumber);
        if (!validateStudent) {
            res.status(400).send({
                success: "false",
                message: "Student not found"
            });
            return;
        }
        
        const classes = await getClassesByStudent(studentNumber);
        if (!classes) {
            res.status(400).send({
                //redundant but welp
                success: "false",
                message: "Classes not found"
            });
            return;
        }
        res.status(200).send({
            success: "true",
            message: "Classes found",
            data: classes
        });
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: "Error adding student to class",
            log_error: error
        });
    }
}

export async function getTeacherClassAPI(req: Request, res: Response) {
    try {
        const { teacherId } = req.body;
        const classes = await getClassesByTeacher(teacherId);
        if (!classes) {
            res.status(400).send({
                success: "false",
                message: "Classes not found"
            });
            return;
        }
        res.status(200).send({
            success: "true",
            message: "Classes found",
            data: classes
        });
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: "Error fetching classes",
            log_error: error
        });
    }
}

export async function getClassAPI(req: Request, res: Response) {
    try {
        const { classId } = req.body;
        const classExists = await checkIfClassExists(classId);
        if (!classExists) {
            res.status(400).send({
                success: "false",
                message: "Class does not exist"
            });
            return;
        }
        const classInfo = await getClassInfo(classId);
        if (!classInfo) {
            res.status(400).send({
                success: "false",
                message: "Class not found"
            });
            return;
        }
        res.status(200).send({
            success: "true",
            message: "Class found",
            data: classInfo
        });
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: "Error fetching class",
            log_error: error
        });
    }
}

export async function fetchAllClassAPI(req: Request, res: Response) {
    try {
        const classes = await getAllClasses();
        if (!classes) {
            res.status(400).send({
                success: "false",
                message: "Classes not found"
            });
            return;
        }
        res.status(200).send({
            success: "true",
            message: "Classes found",
            data: classes
        });
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: "Error fetching classes",
            log_error: error
        });
    }
}

export async function removeClassAPI(req: Request, res: Response) {
    try {
        const { classId } = req.body;
        const classExists = await checkIfClassExists(classId);
        if (!classExists) {
            res.status(400).send({
                success: "false",
                message: "Class does not exist"
            });
            return;
        }
        const removed = await removeClass(classId);
        if (!removed) {
            res.status(400).send({
                success: "false",
                message: "Error removing class"
            });
            return;
        }
        res.status(200).send({
            success: "true",
            message: "Class removed"
        });
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: "Error removing class",
            log_error: error
        });
    }
}

export async function removeAllClassesAPI(req: Request, res: Response) {
    try {
        const removed = await removeAllClasses();
        if (!removed) {
            res.status(400).send({
                success: "false",
                message: "Error removing classes"
            });
            return;
        }
        res.status(200).send({
            success: "true",
            message: "Classes removed"
        });
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: "Error removing classes",
            log_error: error
        });
    }
}

export async function assignTeacherAPI(req: Request, res: Response) {
    try {
        const { teacherId, classId } = req.body;
        const classExists = await checkIfClassExists(classId);
        if (!classExists) {
            res.status(400).send({
                success: "false",
                message: "Class does not exist"
            });
            return;
        }
        const assigned = await designateClassTeacher(teacherId, classId);
        if (!assigned) {
            res.status(400).send({
                success: "false",
                message: "Error assigning teacher to class"
            });
            return;
        }
        res.status(200).send({
            success: "true",
            message: "Teacher assigned to class"
        });
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: "Error assigning teacher to class",
            log_error: error
        });
    }
}

export async function unassignTeacherAPI(req: Request, res: Response) {
    try {
        const { classId } = req.body;
        const classExists = await checkIfClassExists(classId);
        if (!classExists) {
            res.status(400).send({
                success: "false",
                message: "Class does not exist"
            });
            return;
        }
        const unassigned = await removeClassTeacher(classId);
        if (!unassigned) {
            res.status(400).send({
                success: "false",
                message: "Error unassigning teacher from class"
            });
            return;
        }
        res.status(200).send({
            success: "true",
            message: "Teacher unassigned from class"
        });
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: "Error unassigning teacher from class",
            log_error: error
        });
    }
}

export async function editClassInfoAPI(req: Request, res: Response) {
    try {
        const { classId, classData } = req.body;
        const classExists = await checkIfClassExists(classId);
        if (!classExists) {
            res.status(400).send({
                success: "false",
                message: "Class does not exist"
            });
            return;
        }
        const edited = await editClass(classId, classData);
        if (!edited) {
            res.status(400).send({
                success: "false",
                message: "Error editing class information"
            });
            return;
        }
        res.status(200).send({
            success: "true",
            message: "Class information updated",
            data: edited
        });
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: "Error editing class information",
            log_error: error
        });
    }
}

export async function addStudentToClassAPI(req: Request, res: Response) {
    try {
        const { classId, studentNumber } = req.body;
        const classExists = await checkIfClassExists(classId);
        if (!classExists) {
            res.status(400).send({
                success: "false",
                message: "Class does not exist"
            });
            return;
        }
        const added = await addStudent(classId, studentNumber);
        if (!added) {
            res.status(400).send({
                success: "false",
                message: "Error adding student to class"
            });
            return;
        }
        res.status(200).send({
            success: "true",
            message: "Student added to class"
        });
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: "Error adding student to class",
            log_error: error
        });
    }
}