import { Template } from "meteor/templating";
import { Session } from "meteor/session";

var user;

if (Meteor.isClient) {
  Template.orgAdmin.onCreated(function() {
    user = getUserInfo();
    if (user.dept.name != "ADMIN" || user.role.role != "ADMIN") {
      warningAlert("Access Denied!");
      Session.set("template", "login");
    }
  });
  Template.orgAdmin.onRendered(function() {
    console.log(user);
  });
  Template.orgAdmin.events({});
  Template.orgAdmin.helpers({
    user: function() {
      return user;
    }
  });
}
