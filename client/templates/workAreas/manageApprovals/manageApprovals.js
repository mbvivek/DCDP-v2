if (Meteor.isClient) {
  Template.manageApprovals.onCreated(function() {
    var org = {
      isApproved: false,
      approvedBy: null,
      approvedOn: null,
      time: "Sat Dec 09 2017 19:29:00 GMT-0500 (Eastern Standard Time)",
      orgName: "ABC Company",
      orgType: "manufacturer",
      orgAddr: "Boston",
      adminName: "Vivek",
      adminPK:
        "0x041ff2e218d38e878be8444b4c5bcc8cdfe270246dff6d393f82301e3ad939bfbc97783aa61d7f64ab068c23c57082a5978620991b63a574e1555eaa4737a7c5c1",
      trackingId:
        "B673E78E9035C3DEC3AE4D96173674343FA8D0D96C34E2ADA383D5BC02104E41A6323CAA7351AF90B5AC1FEA6FCD2B53B386EEAEEC8C0A2A0633D32375866096"
    };
    var business = getBusiness();
    business.pendingApprovals.organizations = [];
    business.pendingApprovals.organizations.push(org);
    saveBusiness(business);
  });
  Template.manageApprovals.onRendered(function() {});
  Template.manageApprovals.events({});
  Template.manageApprovals.helpers({
    orgsForApproval: function() {
      return getBusiness().pendingApprovals.organizations;
    },
    shortTrackingId: function(trackingId) {
      return trackingId.substring(trackingId.length - 6, trackingId.length);
    },
    shortDate: function(date) {
      return date.substring(0, 15);
    },
    jsonToString: function(json) {
      return JSON.stringify(json, null, 2);
    }
  });
}
