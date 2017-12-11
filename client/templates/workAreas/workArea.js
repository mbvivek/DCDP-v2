if (Meteor.isClient) {
  Template.workArea.onCreated(function() {});
  Template.workArea.onRendered(function() {});
  Template.workArea.events({});
  Template.workArea.helpers({
    getWorkArea: function() {
      return Session.get("workArea");
    }
  });
}
