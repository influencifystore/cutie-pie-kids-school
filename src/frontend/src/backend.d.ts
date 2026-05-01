import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Testimonial {
    id: TestimonialId;
    quote: string;
    rating: bigint;
    childProgram: string;
    parentName: string;
}
export type EnrollmentId = bigint;
export type Timestamp = bigint;
export interface EnrollmentRequest {
    email: string;
    childAge: string;
    message: string;
    programInterest: string;
    phone: string;
    childName: string;
    parentName: string;
}
export interface Enrollment {
    id: EnrollmentId;
    status: EnrollmentStatus;
    submittedAt: Timestamp;
    email: string;
    childAge: string;
    message: string;
    programInterest: string;
    phone: string;
    childName: string;
    parentName: string;
}
export type TestimonialId = bigint;
export enum EnrollmentStatus {
    pending = "pending",
    reviewed = "reviewed"
}
export interface backendInterface {
    getStats(): Promise<{
        totalEnrollments: bigint;
        totalTestimonials: bigint;
    }>;
    listEnrollments(): Promise<Array<Enrollment>>;
    listTestimonials(): Promise<Array<Testimonial>>;
    markEnrollmentReviewed(id: EnrollmentId): Promise<void>;
    submitEnrollment(req: EnrollmentRequest): Promise<EnrollmentId>;
}
