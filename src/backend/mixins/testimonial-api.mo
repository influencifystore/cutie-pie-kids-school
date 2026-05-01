import List "mo:core/List";

import TestimonialTypes "../types/testimonial";
import TestimonialLib "../lib/testimonial";

mixin (testimonials : List.List<TestimonialTypes.Testimonial>) {
  /// Return all testimonials.
  public query func listTestimonials() : async [TestimonialTypes.Testimonial] {
    TestimonialLib.listAll(testimonials);
  };
};
