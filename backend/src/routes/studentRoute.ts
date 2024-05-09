//@ts-nocheck
import { Router } from "express";
import {removeAllStudentsAPI, removeStudentAPI, updateStudentAPI, fetchAllStudentsAPI, fetchStudentsBasicAPI, getStudentAPI, createStudentAPI } from "../controllers/studentController";

const router = Router();

router.post('/create', createStudentAPI);
router.get('/all', fetchAllStudentsAPI);
router.get('/basic', fetchStudentsBasicAPI);
router.get('/view', getStudentAPI);
router.patch('/update', updateStudentAPI);
router.delete('/delete', removeStudentAPI);
router.delete('/delete/all', removeAllStudentsAPI);
export default router;
