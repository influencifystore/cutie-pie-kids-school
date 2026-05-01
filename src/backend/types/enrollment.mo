import Common "common";

module {
  public type EnrollmentStatus = { #pending; #reviewed };

  public type Enrollment = {
    id : Common.EnrollmentId;
    parentName : Text;
    childName : Text;
    childAge : Text;
    programInterest : Text;
    phone : Text;
    email : Text;
    message : Text;
    submittedAt : Common.Timestamp;
    status : EnrollmentStatus;
  };

  public type EnrollmentRequest = {
    parentName : Text;
    childName : Text;
    childAge : Text;
    programInterest : Text;
    phone : Text;
    email : Text;
    message : Text;
  };
};
