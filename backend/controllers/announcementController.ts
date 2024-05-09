import { Request, Response } from "express";
import { fetchAnnouncement, fetchAnnouncementByClassId, fetchAnnouncements, createAnnouncement, updateAnnouncement, deleteAllAnnouncements, deleteAnnouncement } from "../services/announcementService";
import { checkIfClassExists } from "../services/classService";
import { getLocalDate } from "../utilities/utils";
import { IAnnouncement } from "../models/database/announcementSchema";

export async function fetchAnnouncementsAPI(req: Request, res: Response) {
    try {
        const announcements = await fetchAnnouncements();
        if (!announcements) {
            res.status(400).send({
                success: "false",
                message: "No announcements found",
            });
        }
        res.status(200).send({
            success: "true",
            message: "Announcements found",
            announcements,
        });
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: "Error fetching announcements",
            log_error: error,
        });
    }
}

export async function fetchAnnouncementAPI(req: Request, res: Response) {
    try {
        const announcementId = req.params.id;
        const announcement = await fetchAnnouncement(announcementId);
        if (!announcement) {
            res.status(400).send({
                success: "false",
                message: "Announcement not found",
            });
        }
        res.status(200).send({
            success: "true",
            message: "Announcement found",
            announcement,
        });
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: "Error fetching announcement",
            log_error: error,
        });
    }
}

export async function fetchAnnouncementByClassIdAPI(req: Request, res: Response) {
    try {
        const { role, refClassId } = req.body;
        if (!role || !refClassId) {
            res.status(400).send({
                success: "false",
                message: "Missing role or refClassId",
            });
        }

        // ideally announcementSchema should have a poster but since there's already a class id, that's more than enough for the time being.
        const validClass = checkIfClassExists(refClassId);
        if (!validClass) {
            res.status(400).send({
                success: "false",
                message: "Class does not exist",
            });
        }

        const announcements = await fetchAnnouncementByClassId(role, refClassId);
        if (!announcements) {
            res.status(400).send({
                success: "false",
                message: "No announcements found",
            });
        }
        res.status(200).send({
            success: "true",
            message: "Announcements found",
            announcements,
        });
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: "Error fetching announcements",
            log_error: error,
        });
    }
}

export async function createAnnouncementAPI(req: Request, res: Response) {
    try {
        const { role, refClassId, title, content } = req.body;
        if (!role || !refClassId || !title || !content) {
            res.status(400).send({
                success: "false",
                message: "Missing role, refClassId, title, or content",
            });
        }

        const validClass = checkIfClassExists(refClassId);
        if (!validClass) {
            res.status(400).send({
                success: "false",
                message: "Class does not exist",
            });
        }

        const announcement = {
            refClassId,
            datePosted: await getLocalDate(),
            title,
            content,
        };

        const createdAnnouncement = await createAnnouncement(role, announcement);
        if (!createdAnnouncement) {
            res.status(400).send({
                success: "false",
                message: "Error creating announcement",
            });
        }
        res.status(200).send({
            success: "true",
            message: "Announcement created",
            createdAnnouncement,
        });
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: "Error creating announcement",
            log_error: error,
        });
    }
}

export async function updateAnnouncementAPI(req: Request, res: Response) {
    try {
        const announcementId = req.params.id;
        const { title, content } = req.body;
        if (!title || !content) {
            res.status(400).send({
                success: "false",
                message: "Missing title or content",
            });
        }
        const oldAnnouncement = await fetchAnnouncement(announcementId);
        if (!oldAnnouncement) {
            res.status(400).send({
                success: "false",
                message: "Announcement not found",
            });
        }

        const newAnnouncement: IAnnouncement = {
            ...oldAnnouncement,
            title,
            content,
        };

        const updated = await updateAnnouncement(announcementId, newAnnouncement);
        if (!updated) {
            res.status(400).send({
                success: "false",
                message: "Error updating announcement",
            });
        }
        res.status(200).send({
            success: "true",
            message: "Announcement updated",
        });
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: "Error updating announcement",
            log_error: error,
        });
    }
}

export async function deleteAllAnnouncementsAPI(req: Request, res: Response) {
    try {
        const deleted = await deleteAllAnnouncements();
        if (!deleted) {
            res.status(400).send({
                success: "false",
                message: "Error deleting announcements",
            });
        }
        res.status(200).send({
            success: "true",
            message: "Announcements deleted",
        });
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: "Error deleting announcements",
            log_error: error,
        });
    }
}

export async function deleteAnnouncementByClassId(req: Request, res: Response) {
    try {
        const refClassId = req.params.id;
        if (!refClassId) {
            res.status(400).send({
                success: "false",
                message: "Missing refClassId",
            });
        }

        const validClass = checkIfClassExists(refClassId);
        if (!validClass) {
            res.status(400).send({
                success: "false",
                message: "Class does not exist",
            });
        }

        const deleted = await deleteAnnouncement(refClassId);
        if (!deleted) {
            res.status(400).send({
                success: "false",
                message: "Error deleting announcements",
            });
        }
        res.status(200).send({
            success: "true",
            message: "Announcements deleted",
        });
    } catch (error) {
        res.status(400).send({
            success: "false",
            message: "Error deleting announcements",
            log_error: error,
        });
    }
}