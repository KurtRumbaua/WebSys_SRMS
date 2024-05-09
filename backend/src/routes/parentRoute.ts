import { Router } from "express";
import { getParentAPI, getParentByStudentNumberAPI, getParentsAPI, createParentAPI, updateParentAPI, deleteAllParentsAPI, deleteParentAPI, deleteParentByStudentNumberAPI } from "../controllers/parentController";
const router = Router();

router.get("/view/all", getParentsAPI);
router.get("/view", getParentAPI);
router.get("/view/student", getParentByStudentNumberAPI);
router.post("/create", createParentAPI);
router.put("/update", updateParentAPI);
router.delete("/delete", deleteParentAPI);
router.delete("/delete/all", deleteAllParentsAPI);
router.delete("/delete/student", deleteParentByStudentNumberAPI)

export default router;