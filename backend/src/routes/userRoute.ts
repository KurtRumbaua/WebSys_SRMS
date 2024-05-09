//@ts-nocheck
import { Router } from "express";
import { registerUserAPI, loginUserAPI, fetchAllUsersAPI } from "../controllers/userController";
const router = Router();

router.post('/create', registerUserAPI);
router.post('/login', loginUserAPI);

router.get('/view/all', fetchAllUsersAPI);

export default router;