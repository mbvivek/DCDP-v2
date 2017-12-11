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
      //var adminName = $("#registerForm_adminName").val();
      var adminName = "Vivek";
      //var adminPK = $("#registerForm_adminPK").val();
      var adminPK =
        "0x041ff2e218d38e878be8444b4c5bcc8cdfe270246dff6d393f82301e3ad939bfbc97783aa61d7f64ab068c23c57082a5978620991b63a574e1555eaa4737a7c5c1";
      if (adminName == "" || adminPK == "") {
        warningAlert("Admin Details are required");
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
        trackingId: SHA3("" + new Date().getTime() + orgName + orgType)
          .toString()
          .toUpperCase(),
        isApproved: false,
        approvedBy: null,
        approvedOn: null,
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
        $("#registerForm_adminPK").val(userProfile.publicKey);
      });
  };
}

var addToPendingApprovals = function(data) {
  var business = getBusiness();
  business.pendingApprovals.organizations.push(data);
  saveBusiness(business);
};
