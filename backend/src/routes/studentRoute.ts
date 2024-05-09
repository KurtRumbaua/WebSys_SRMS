//@ts-nocheck
import { Router } from "express";
import { createClassAPI, deleteClassAPI, readAllClassesAPI, readClassAPI, updateClassAPI } from "../controllers/classController";

const router = Router();

router.post('/create', createClassAPI);
router.get('/all', readAllClassesAPI);
router.get('/read', readClassAPI);
router.put('/update', updateClassAPI);
router.delete('/delete', deleteClassAPI);
export default router;
