import type { backendInterface, Enrollment, Testimonial } from "../backend";
import { EnrollmentStatus } from "../backend";

export const mockBackend: backendInterface = {
  getStats: async () => ({
    totalEnrollments: BigInt(12),
    totalTestimonials: BigInt(8),
  }),

  listEnrollments: async (): Promise<Enrollment[]> => [
    {
      id: BigInt(1),
      status: EnrollmentStatus.pending,
      submittedAt: BigInt(Date.now()),
      email: "parent@example.com",
      childAge: "4",
      message: "Excited to join!",
      programInterest: "Nursery",
      phone: "+1-555-0100",
      childName: "Emma",
      parentName: "Sarah Johnson",
    },
  ],

  listTestimonials: async (): Promise<Testimonial[]> => [
    {
      id: BigInt(0),
      parentName: "Sarah Johnson",
      quote:
        "Cutie Pie Play School has been absolutely wonderful for my daughter Emma. The teachers are caring, patient, and truly dedicated. Emma looks forward to every single day!",
      rating: BigInt(5),
      childProgram: "Nursery",
    },
    {
      id: BigInt(1),
      parentName: "Michael & Priya Patel",
      quote:
        "We couldn't be happier with the environment here. Our son Arjun has blossomed socially and academically. The staff's attention to each child is remarkable.",
      rating: BigInt(5),
      childProgram: "LKG",
    },
    {
      id: BigInt(2),
      parentName: "Jessica Thompson",
      quote:
        "The play-based learning approach is exactly what we were looking for. My twins love the art activities and outdoor play. Highly recommended for any parent!",
      rating: BigInt(5),
      childProgram: "Playgroup",
    },
    {
      id: BigInt(3),
      parentName: "David & Anita Chen",
      quote:
        "A safe, nurturing, and fun place for our little one. The communication from teachers is excellent — we always know what our child is learning and how they're growing.",
      rating: BigInt(5),
      childProgram: "UKG",
    },
  ],

  markEnrollmentReviewed: async (_id) => undefined,

  submitEnrollment: async (_req) => BigInt(1),

  _immutableObjectStorageBlobsAreLive: async (_hashes) => [],

  _immutableObjectStorageBlobsToDelete: async () => [],

  _immutableObjectStorageConfirmBlobDeletion: async (_blobs) => undefined,

  _immutableObjectStorageCreateCertificate: async (_blobHash) => ({
    method: "",
    blob_hash: "",
  }),

  _immutableObjectStorageRefillCashier: async (_refillInformation) => ({}),

  _immutableObjectStorageUpdateGatewayPrincipals: async () => undefined,
};
