import { Template } from "meteor/templating";

import "./main.html";

if (Meteor.isClient) {
  Session.setDefault("template", "login");

  Template.body.onCreated(function() {});

  Template.body.onRendered(function() {});

  Template.body.events({
    "click .changeTemplate"(event) {
      Session.set("template", event.target.getAttribute("data-template"));
    },
    "click .alert .close"(event) {
      $(event.target)
        .parent()
        .parent()
        .addClass("hidden");
    }
  });

  Template.body.helpers({
    templateToDisplay: function() {
      return Session.get("template");
    }
  });

  warningAlert = function(message) {
    console.log("warning = " + message);
    $("#warningAlertMessage").html(message);
    $("#warningAlert")
      .fadeTo(200, 1)
      .removeClass("hidden")
      .addClass("show");

    window.setTimeout(function() {
      $("#warningAlert")
        .fadeTo(400, 0)
        .slideUp(400, function() {
          $(this).addClass("hidden");
        });
    }, 2500);
  };

  successAlert = function(message) {
    console.log("success = " + message);
    $("#successAlertMessage").html(message);
    $("#successAlert")
      .fadeTo(200, 1)
      .removeClass("hidden")
      .addClass("show");
    window.setTimeout(function() {
      $("#successAlert")
        .fadeTo(400, 0)
        .slideUp(400, function() {
          $(this).addClass("hidden");
        });
    }, 2500);
  };

  getBusiness = function() {
    if (localStorage.business == "") {
      console.log("initializing localStrorage");
      var business = { logs: [], pendingApprovals: { organizations: [] } };
      localStorage.business = JSON.stringify(business);
    }
    return JSON.parse(localStorage.business);
  };

  saveBusiness = function(business) {
    localStorage.business = JSON.stringify(business);
  };
}
