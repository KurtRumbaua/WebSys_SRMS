import { Router } from "express";
import { populateGradesAPI, getGradeAPI, getGradeBySubjectAPI, getGradesAPI, createGradeAPI, deleteGradeAPI, updateGradeAPI} from '../controllers/gradeController';
const router = Router();

router.post("/populate", populateGradesAPI);
router.get("/view/all", getGradesAPI);
router.get("/view", getGradeAPI);
router.get("/view/subject", getGradeBySubjectAPI);
router.post("/create", createGradeAPI);
router.delete("/delete", deleteGradeAPI);
router.put("/update", updateGradeAPI);
export default router;