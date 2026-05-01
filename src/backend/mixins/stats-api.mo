import List "mo:core/List";

import EnrollmentTypes "../types/enrollment";
import TestimonialTypes "../types/testimonial";
import EnrollmentLib "../lib/enrollment";
import TestimonialLib "../lib/testimonial";

mixin (
  enrollments : List.List<EnrollmentTypes.Enrollment>,
  testimonials : List.List<TestimonialTypes.Testimonial>,
) {
  /// Return basic aggregate stats for the school website.
  public query func getStats() : async { totalEnrollments : Nat; totalTestimonials : Nat } {
    {
      totalEnrollments = EnrollmentLib.count(enrollments);
      totalTestimonials = TestimonialLib.count(testimonials);
    };
  };
};
