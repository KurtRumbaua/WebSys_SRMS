//@ts-nocheck
import { Router } from "express";
import { fetchAnnouncementAPI, fetchAnnouncementByClassIdAPI, fetchAnnouncementsAPI, createAnnouncementAPI, updateAnnouncementAPI, deleteAllAnnouncementsAPI, deleteAnnouncementByClassId } from "../controllers/announcementController";

const router = Router();

router.get('/view', fetchAnnouncementAPI);
router.get('/view/class', fetchAnnouncementByClassIdAPI);
router.get('/all', fetchAnnouncementsAPI);
router.post('/create', createAnnouncementAPI);
router.put('/update', updateAnnouncementAPI);
router.delete('/delete/all', deleteAllAnnouncementsAPI);
router.delete('/delete/class', deleteAnnouncementByClassId);
export default router;