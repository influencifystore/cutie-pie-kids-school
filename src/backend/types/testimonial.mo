import Common "common";

module {
  public type Testimonial = {
    id : Common.TestimonialId;
    parentName : Text;
    quote : Text;
    rating : Nat; // 1–5
    childProgram : Text;
  };
};
