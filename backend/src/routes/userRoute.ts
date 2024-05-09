//@ts-nocheck
import { Router } from "express";
import { deleteUserAPI, registerUserAPI, loginUserAPI, fetchAllUsersAPI, getUserByEmailAPI, getUserRoleAPI} from "../controllers/userController";
const router = Router();

router.post('/create', registerUserAPI);
router.post('/login', loginUserAPI);
router.get('/view/all', fetchAllUsersAPI);
router.delete('/remove', deleteUserAPI);
router.get('/view', getUserByEmailAPI);
router.get('/role', getUserRoleAPI);
export default router;