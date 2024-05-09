//@ts-nocheck
import { Router } from "express";
import { editClassInfoAPI, addStudentToClassAPI, removeAllClassesAPI, removeClassAPI, assignTeacherAPI, unassignTeacherAPI, getStudentClassAPI, populateClassAPI, getTeacherClassAPI, getClassAPI, fetchAllClassAPI} from "../controllers/classController";

const router = Router();

router.post('/init', populateClassAPI);
router.get('/student', getStudentClassAPI);
router.get('/teacher', getTeacherClassAPI);
router.get('/view', getClassAPI);
router.get('/all', fetchAllClassAPI);
router.delete('/remove', removeClassAPI);
router.delete('/remove/all', removeAllClassesAPI);
router.put('/assign', assignTeacherAPI);
router.put('/unassign', unassignTeacherAPI);
router.put('/add', addStudentToClassAPI);
router.patch('/edit', editClassInfoAPI);
export default router;