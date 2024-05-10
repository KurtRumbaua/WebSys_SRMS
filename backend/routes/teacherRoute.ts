import { Router } from "express";
import { addTeacherAPI, fetchAllTeachersAPI, fetchTeachersBasicAPI, getTeacherAPI, removeTeacherAPI, removeAllTeachersAPI, editTeacherAPI } from "../controllers/teacherController";
const router = Router();

router.post('/create', addTeacherAPI);
router.get('/view/all', fetchAllTeachersAPI);
router.get('/view/basic', fetchTeachersBasicAPI);
router.post('/view', getTeacherAPI);
router.delete('/delete', removeTeacherAPI);
router.delete('/delete/all', removeAllTeachersAPI);
router.put('/update', editTeacherAPI);
export default router;