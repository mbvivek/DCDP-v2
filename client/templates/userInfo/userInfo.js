import { Template } from "meteor/templating";

var user;

if (Meteor.isClient) {
  Template.userInfo.onCreated(function() {
    user = getUserInfo();
  });
  Template.userInfo.onRendered(function() {
    console.log(user);
  });
  Template.userInfo.events({});
  Template.userInfo.helpers({
    user: function() {
      return user;
    }
  });
}
