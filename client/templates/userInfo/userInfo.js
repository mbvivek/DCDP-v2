import { Template } from "meteor/templating";

var user;

if (Meteor.isClient) {
  Template.userInfo.onCreated(function() {
    user = getUserInfo();
  });
  Template.userInfo.onRendered(function() {
    console.log(user);
  });
  Template.userInfo.events({
    "click #logoutBtn"(event) {
      clearUserInfo();
      Session.set("template", "login");
    }
  });
  Template.userInfo.helpers({
    user: function() {
      return user;
    }
  });
}
