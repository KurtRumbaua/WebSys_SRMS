import { EnrollmentModel } from '../models/enrollmentModel';
import { IEnrollment } from '../models/database/enrollmentSchema';

const enrollmentModel = new EnrollmentModel();

export async function enrollmentCreate(enrollment: IEnrollment): Promise<boolean> {
    return await enrollmentModel.createEnrollment(enrollment);
}

export async function enrollmentReadAll(): Promise<IEnrollment[]> {
    return await enrollmentModel.readAllEnrollments();
}

export async function enrollmentRead(enrollmentId: string): Promise<IEnrollment> {
    return await enrollmentModel.readEnrollment(enrollmentId);
}

export async function enrollmentUpdate(oldEnrollment: IEnrollment, newEnrollment: IEnrollment): Promise<boolean> {
    return await enrollmentModel.updateEnrollment(oldEnrollment, newEnrollment);
}

export async function enrollmentDelete(enrollmentId: string): Promise<boolean> {
    return await enrollmentModel.deleteEnrollment(enrollmentId);
}

