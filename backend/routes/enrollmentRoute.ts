//@ts-nocheck
import { Router } from "express";
import { createEnrollmentAPI, deleteEnrollmentAPI, readAllEnrollmentsAPI, readEnrollmentAPI, updateEnrollmentAPI } from "../controllers/enrollmentController";

const router = Router();

router.post('/create', createEnrollmentAPI);
router.get('/all', readAllEnrollmentsAPI);
router.get('/read', readEnrollmentAPI);
router.put('/update', updateEnrollmentAPI);
router.delete('/delete', deleteEnrollmentAPI);
export default router;
