import { Template } from "meteor/templating";
var SHA3 = require("crypto-js/sha3");

var template;

if (Meteor.isClient) {
  Template.register.onCreated(function() {
    template = this;
    template.trackingId = new ReactiveVar("N/A");
    requestCredentials();
  });
  Template.register.onRendered(function() {
    $("#registrationSuccessfulText").hide();
  });
  Template.register.events({
    "submit #registerForm"(event) {
      event.preventDefault();
      var adminName = $("#registerForm_adminName").val();
      var adminUportAddr = $("#registerForm_adminUportAddr").val();
      var adminPK = $("#registerForm_adminPK").val();
      if (adminName == "" || adminPK == "" || adminUportAddr == "") {
        warningAlert("Admin Details are required");
        return;
      }
      var orgName = $("#registerForm_orgName").val();
      var orgType = $("#registerForm_orgType").val();
      var orgAddr = $("#registerForm_orgAddr").val();
      var data = {
        orgName: orgName,
        orgType: orgType,
        orgAddr: orgAddr,
        adminName: adminName,
        adminPK: adminPK,
        adminUportAddr: adminUportAddr,
        trackingId: SHA3("" + new Date().getTime() + orgName + orgType)
          .toString()
          .toUpperCase(),
        isApproved: false,
        approvedBy: null,
        approvedOn: null,
        isRejected: false,
        rejectionReason: null,
        rejectedOn: null,
        time: new Date()
      };
      addToPendingApprovals(data);
      template.trackingId.set(data.trackingId);
      $("#registerForm").hide();
      $("#registrationSuccessfulText").show();
    }
  });
  Template.register.helpers({
    trackingId: function() {
      var id = template.trackingId.get();
      console.log(id);
      return id.substring(id.length - 6, id.length);
    }
  });

  var requestCredentials = function() {
    uport
      .requestCredentials(
        {
          requested: ["name"]
        },
        uri => {
          const qr = KJUA({
            text: uri,
            fill: "#000000",
            size: 500,
            back: "rgba(255,255,255,1)"
          });
          //set the uri to the image
          $("#qrc").attr("src", qr.src);
        }
      )
      .then(userProfile => {
        //get the credentials
        $("#registerForm_adminName").val(userProfile.name);
        $("#registerForm_adminUportAddr").val(userProfile.address);
        $("#registerForm_adminPK").val(userProfile.publicKey);
      });
  };
}

var addToPendingApprovals = function(data) {
  var business = getBusiness();
  business.pendingApprovals.organizations.push(data);
  saveBusiness(business);
};
