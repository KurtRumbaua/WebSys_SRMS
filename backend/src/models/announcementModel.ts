import { IAnnouncement } from "./database/announcementSchema";
import { db } from "./database/mongodbConfig";

export class AnnouncementModel {
    // get
    async getAnnouncements(): Promise<IAnnouncement[]> {
        return await db.AnnouncementModel.find();
    }

    async getAnnouncement(announcementId: string): Promise<IAnnouncement> {
        const announcementData = await db.AnnouncementModel.findOne({ _id: announcementId });
        if (!announcementData) {
            throw new Error(`getAnnouncement: announcement ${announcementId} not found`);
        }
        return announcementData;
    }

    async getAnnouncementByClassId(refClassId: string): Promise<IAnnouncement[]> {
        return await db.AnnouncementModel.find({ refClassId: refClassId });
    }

    // create
    async createAnnouncement(announcement: IAnnouncement): Promise<IAnnouncement> {
        const newAnnouncement = new db.AnnouncementModel(announcement);
        return await newAnnouncement.save();
    }

    // update
    async updateAnnouncement(announcementId: string, announcement: IAnnouncement): Promise<boolean> {
        try {
            const isSuccess = await db.AnnouncementModel.updateOne({ _id: announcementId }, announcement);
            return isSuccess.modifiedCount > 0;
        } catch (error) {
            console.log(`Error updating announcement: ${announcementId}-${announcement}`, error);
            return false;
        }
    }

    // delete
    async deleteAnnouncement(announcementId: string): Promise<boolean> {
        try {
            const isSuccess = await db.AnnouncementModel.deleteOne({ _id: announcementId });
            return isSuccess.deletedCount > 0;
        } catch (error) {
            console.log(`Error deleting announcement: ${announcementId}.`, error);
            return false;
        }
    }

    async deleteAllAnnouncements(): Promise<boolean> {
        try {
            const isSuccess = await db.AnnouncementModel.deleteMany({});
            return isSuccess.deletedCount > 0;
        } catch (error) {
            console.log(`Error deleting all announcements.`, error);
            return false;
        }
    }

    async deleteAnnouncementByClassId(refClassId: string): Promise<boolean> {
        try {
            const isSuccess = await db.AnnouncementModel.deleteMany({ refClassId: refClassId });
            return isSuccess.deletedCount > 0;
        } catch (error) {
            console.log(`Error deleting all announcements.`, error);
            return false;
        }
    }
                
}