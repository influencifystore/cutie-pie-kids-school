import List "mo:core/List";

import TestimonialTypes "../types/testimonial";

module {
  public type Testimonial = TestimonialTypes.Testimonial;

  /// Return seed testimonials to initialize stable state.
  public func seedTestimonials() : [Testimonial] {
    [
      {
        id = 0;
        parentName = "Sarah Johnson";
        quote = "Cutie Pie Play School has been absolutely wonderful for my daughter Emma. The teachers are caring, patient, and truly dedicated. Emma looks forward to every single day!";
        rating = 5;
        childProgram = "Nursery";
      },
      {
        id = 1;
        parentName = "Michael & Priya Patel";
        quote = "We couldn't be happier with the environment here. Our son Arjun has blossomed socially and academically. The staff's attention to each child is remarkable.";
        rating = 5;
        childProgram = "LKG";
      },
      {
        id = 2;
        parentName = "Jessica Thompson";
        quote = "The play-based learning approach is exactly what we were looking for. My twins love the art activities and outdoor play. Highly recommended for any parent!";
        rating = 5;
        childProgram = "Playgroup";
      },
      {
        id = 3;
        parentName = "David & Anita Chen";
        quote = "A safe, nurturing, and fun place for our little one. The communication from teachers is excellent — we always know what our child is learning and how they're growing.";
        rating = 5;
        childProgram = "UKG";
      },
      {
        id = 4;
        parentName = "Fatima Al-Hassan";
        quote = "From the very first day, my son felt at home here. The school's focus on emotional intelligence alongside academics makes it truly special and unique.";
        rating = 5;
        childProgram = "Nursery";
      },
      {
        id = 5;
        parentName = "Robert & Lisa Martinez";
        quote = "Incredible school with passionate educators. Our daughter's vocabulary and creativity have skyrocketed since joining. The annual events are so well organized too!";
        rating = 5;
        childProgram = "LKG";
      },
      {
        id = 6;
        parentName = "Aisha Sharma";
        quote = "The holistic development approach here is unmatched. My child learned not just letters and numbers but confidence, kindness, and curiosity. Best decision we ever made!";
        rating = 5;
        childProgram = "Playgroup";
      },
      {
        id = 7;
        parentName = "Tom & Helen Nguyen";
        quote = "We've tried other schools and nothing compares to Cutie Pie. The personalized attention, beautiful facilities, and loving staff make it a truly premium experience for children.";
        rating = 5;
        childProgram = "UKG";
      },
    ];
  };

  /// Return all testimonials as an immutable array.
  public func listAll(testimonials : List.List<Testimonial>) : [Testimonial] {
    testimonials.toArray();
  };

  /// Return the count of all testimonials.
  public func count(testimonials : List.List<Testimonial>) : Nat {
    testimonials.size();
  };
};
