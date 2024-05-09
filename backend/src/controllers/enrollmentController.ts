import { Request, Response } from 'express';
import { updateEnrollmentStatus, fetchAllEnrollments, fetchEnrolledInfo, fetchEnrolledStudents, fetchNotEnrolled, fetchPendingEnrollments} from '../services/enrollmentService';
import { EnrollmentStatus } from '../models/database/studentSchema';

export async function fetchPendingEnrollmentAPI(req: Request, res: Response) {
    try {
        const pendingEnrollments = await fetchPendingEnrollments();
        if (!pendingEnrollments) {
            res.status(400).send({
                success: "false",
                message: "No pending enrollments found",
            });
        }
        res.status(200).send({
            success: "true",
            message: "Pending enrollments found",
            pendingEnrollments,
        });
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: "Error fetching pending enrollments",
            log_error: error,
        });
    }
}

export async function fetchAllEnrollmentRecordsAPI(req: Request, res: Response) {
    try {
        const allEnrollments = await fetchAllEnrollments();
        if (!allEnrollments) {
            res.status(400).send({
                success: "false",
                message: "No enrollments found",
            });
        }
        res.status(200).send({
            success: "true",
            message: "Enrollments found",
            allEnrollments,
        });
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: "Error fetching enrollments",
            log_error: error,
        });
    }
}

export async function updateStudentEnrollmentStatus(req: Request, res: Response) {
    try {
        const { studentNumber, status } = req.body;
        if (!studentNumber || !status) {
            res.status(400).send({
                success: "false",
                message: "Missing studentNumber or status",
            });
        }
        const updated = await updateEnrollmentStatus(studentNumber, status);
        if (!updated) {
            res.status(400).send({
                success: "false",
                message: "Error updating enrollment status",
            });
        }
        res.status(200).send({
            success: "true",
            message: "Enrollment status updated",
        });
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: "Error updating enrollment status",
            log_error: error,
        });
    }
}

export async function approveEnrollmentAPI(req: Request, res: Response) {
    try {
        const { studentNumber } = req.body;
        if (!studentNumber) {
            res.status(400).send({
                success: "false",
                message: "Missing studentNumber or classId",
            });
        }
        const enrolled = await updateEnrollmentStatus(studentNumber, EnrollmentStatus.ENROLLED);
        if (!enrolled) {
            res.status(400).send({
                success: "false",
                message: "Error enrolling student",
            });
        }
        // await populateGrade(studentNumber); a service on grade
        res.status(200).send({
            success: "true",
            message: "Student enrolled",
        });
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: "Error enrolling student",
            log_error: error,
        });
    }
}

export async function fetchEnrolledStudentsAPI(req: Request, res: Response) {
    try {
        const enrolledStudents = await fetchEnrolledStudents();
        if (!enrolledStudents) {
            res.status(400).send({
                success: "false",
                message: "No enrolled students found",
            });
        }
        res.status(200).send({
            success: "true",
            message: "Enrolled students found",
            enrolledStudents,
        });
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: "Error fetching enrolled students",
            log_error: error,
        });
    }
}

export async function fetchEnrolledInfoAPI(req: Request, res: Response) {
    try {
        const studentNumber = req.params.studentNumber;
        if (!studentNumber) {
            res.status(400).send({
                success: "false",
                message: "Missing studentNumber",
            });
        }
        const enrolledInfo = await fetchEnrolledInfo(studentNumber);
        if (!enrolledInfo) {
            res.status(400).send({
                success: "false",
                message: "Error fetching enrolled info",
            });
        }
        res.status(200).send({
            success: "true",
            message: "Enrolled info found",
            enrolledInfo,
        });
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: "Error fetching enrolled info",
            log_error: error,
        });
    }
}

