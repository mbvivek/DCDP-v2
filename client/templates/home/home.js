import { Template } from "meteor/templating";

var user;

if (Meteor.isClient) {
  Template.home.onCreated(function() {
    userInfo = getUserInfo();
  });
  Template.home.onRendered(function() {
    console.log(userInfo);
  });
  Template.home.events({});
  Template.home.helpers({
    user: function() {
      return user;
    }
  });
}
