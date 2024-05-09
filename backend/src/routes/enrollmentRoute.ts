//@ts-nocheck
import { Router } from "express";
import { approveEnrollmentAPI, updateStudentEnrollmentStatus, fetchAllEnrollmentRecordsAPI, fetchEnrolledInfoAPI, fetchEnrolledStudentsAPI, fetchPendingEnrollmentAPI} from "../controllers/enrollmentController";

const router = Router();

router.get('/view/pending', fetchPendingEnrollmentAPI);
router.get('/view/all', fetchAllEnrollmentRecordsAPI);
router.get('/view/enrolled', fetchEnrolledStudentsAPI);
router.get('/view/:studentNumber', fetchEnrolledInfoAPI);
router.put('/update', updateStudentEnrollmentStatus);
router.patch('/approve', approveEnrollmentAPI)
export default router;
