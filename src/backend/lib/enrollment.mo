import List "mo:core/List";
import Time "mo:core/Time";

import Common "../types/common";
import EnrollmentTypes "../types/enrollment";

module {
  public type Enrollment = EnrollmentTypes.Enrollment;
  public type EnrollmentRequest = EnrollmentTypes.EnrollmentRequest;

  /// Submit a new enrollment and return its assigned ID.
  public func submit(
    enrollments : List.List<Enrollment>,
    nextId : Nat,
    req : EnrollmentRequest,
  ) : Nat {
    let enrollment : Enrollment = {
      id = nextId;
      parentName = req.parentName;
      childName = req.childName;
      childAge = req.childAge;
      programInterest = req.programInterest;
      phone = req.phone;
      email = req.email;
      message = req.message;
      submittedAt = Time.now();
      status = #pending;
    };
    enrollments.add(enrollment);
    nextId;
  };

  /// Return all enrollment records as an immutable array.
  public func listAll(enrollments : List.List<Enrollment>) : [Enrollment] {
    enrollments.toArray();
  };

  /// Mark an enrollment as reviewed by ID. No-op if not found.
  public func markReviewed(
    enrollments : List.List<Enrollment>,
    id : Common.EnrollmentId,
  ) {
    enrollments.mapInPlace(
      func(e) {
        if (e.id == id) { { e with status = #reviewed } } else { e };
      }
    );
  };

  /// Return the count of all enrollments.
  public func count(enrollments : List.List<Enrollment>) : Nat {
    enrollments.size();
  };
};
