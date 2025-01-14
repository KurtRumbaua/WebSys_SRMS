//@ts-nocheck
import { Router } from "express";
import {fetchStudentBasicAPI,
    removeAllStudentsAPI,
    removeStudentAPI,
    updateStudentAPI,
    fetchStudentsBasicAPI,
    fetchAllStudentsAPI,
    fetchStudentAPI,
    getStudentAPI,
    createStudentAPI
} from "../controllers/studentController";

const router = Router();

router.post('/create', createStudentAPI);
router.get('/all', fetchAllStudentsAPI);
router.get('/basic', fetchStudentsBasicAPI);
router.get('/view', getStudentAPI);
router.get('/viewone', fetchStudentAPI);
router.patch('/update', updateStudentAPI);
router.delete('/delete', removeStudentAPI);
router.delete('/delete/all', removeAllStudentsAPI);
export default router;
