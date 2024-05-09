import { AnnouncementModel } from "../models/announcementModel";
import { IAnnouncement } from "../models/database/announcementSchema";
import { Role } from "../models/database/userSchema";

const announcementModel = new AnnouncementModel();  

export async function fetchAnnouncements(): Promise<IAnnouncement[]> {
    return await announcementModel.getAnnouncements();
}

export async function fetchAnnouncement(announcementId: string): Promise<IAnnouncement> {
    return await announcementModel.getAnnouncement(announcementId);
}

export async function fetchAnnouncementByClassId(role: Role, refClassId: string): Promise<IAnnouncement[] | false> {
    if (role === Role.TEACHER) {
        return await announcementModel.getAnnouncementByClassId(refClassId);
    }
    console.log("fetchAnnouncementByClassId: User is not a teacher");
    return false;
}

export async function createAnnouncement(role: Role, announcement: IAnnouncement): Promise<IAnnouncement | false> {
    if (role !== Role.TEACHER) {
        console.log("createAnnouncement: User is not a teacher");
        return false;
    }
    return await announcementModel.createAnnouncement(announcement);
}

export async function updateAnnouncement(announcementId: string, announcement: IAnnouncement): Promise<boolean> {
    return await announcementModel.updateAnnouncement(announcementId, announcement);
}

export async function deleteAnnouncement(announcementId: string): Promise<boolean> {
    return await announcementModel.deleteAnnouncement(announcementId);
}

export async function deleteAllAnnouncements(): Promise<boolean> {
    return await announcementModel.deleteAllAnnouncements();
}

export async function deleteAnnouncementByClassId(refClassId: string): Promise<boolean> {
    return await announcementModel.deleteAnnouncementByClassId(refClassId);
}

