import List "mo:core/List";
import MixinObjectStorage "mo:caffeineai-object-storage/Mixin";

import EnrollmentTypes "types/enrollment";
import TestimonialTypes "types/testimonial";
import TestimonialLib "lib/testimonial";

import EnrollmentApi "mixins/enrollment-api";
import TestimonialApi "mixins/testimonial-api";
import StatsApi "mixins/stats-api";

actor {
  // ── Enrollment state ──────────────────────────────────────────────────────
  let enrollments = List.empty<EnrollmentTypes.Enrollment>();
  var nextEnrollmentId : { var value : Nat } = { var value = 0 };

  // ── Testimonial state (seeded with hardcoded testimonials) ─────────────────
  let testimonials = List.fromArray<TestimonialTypes.Testimonial>(
    TestimonialLib.seedTestimonials()
  );

  // ── Object Storage (gallery images) ───────────────────────────────────────
  include MixinObjectStorage();

  // ── API mixins ────────────────────────────────────────────────────────────
  include EnrollmentApi(enrollments, nextEnrollmentId);
  include TestimonialApi(testimonials);
  include StatsApi(enrollments, testimonials);
};
