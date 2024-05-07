//@ts-nocheck
import { Router } from "express";
import { createUserAPI, createEntityAPI, deleteEntityAPI, deleteUserAPI, updateEntityAPI, updateUserAPI, readAllEntitiesAPI, readAllUsersAPI ,readEntityAPI ,readUserAPI } from "../controllers/userController";

const router = Router();

router.post('/user/create', createUserAPI);
router.get('/user/all', readAllUsersAPI);
router.get('/user/read', readUserAPI);
router.put('/user/update', updateUserAPI);
router.delete('/user/delete', deleteUserAPI);
router.post('/entity/create', createEntityAPI);
router.get('/entity/all', readAllEntitiesAPI);
router.get('/entity/read', readEntityAPI);
router.put('/entity/update', updateEntityAPI);
router.delete('/entity/delete', deleteEntityAPI);
export default router;