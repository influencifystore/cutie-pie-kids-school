import List "mo:core/List";

import Common "../types/common";
import EnrollmentTypes "../types/enrollment";
import EnrollmentLib "../lib/enrollment";

mixin (
  enrollments : List.List<EnrollmentTypes.Enrollment>,
  nextEnrollmentId : { var value : Nat },
) {
  /// Submit a new enrollment form. Returns the assigned enrollment ID.
  public func submitEnrollment(req : EnrollmentTypes.EnrollmentRequest) : async Common.EnrollmentId {
    let id = nextEnrollmentId.value;
    nextEnrollmentId.value += 1;
    EnrollmentLib.submit(enrollments, id, req);
  };

  /// List all enrollment submissions (admin use).
  public query func listEnrollments() : async [EnrollmentTypes.Enrollment] {
    EnrollmentLib.listAll(enrollments);
  };

  /// Mark a specific enrollment as reviewed.
  public func markEnrollmentReviewed(id : Common.EnrollmentId) : async () {
    EnrollmentLib.markReviewed(enrollments, id);
  };
};
