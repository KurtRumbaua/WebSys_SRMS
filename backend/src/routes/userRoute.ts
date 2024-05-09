//@ts-nocheck
import { Router } from "express";
import { registerUserAPI, fetchAllUsersAPI } from "../controllers/userController";
const router = Router();

router.post('/create', registerUserAPI);
router.get('/view/all', fetchAllUsersAPI);
export default router;