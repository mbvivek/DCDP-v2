if (Meteor.isClient) {
  var user;
  var isEmployeeOfSystemAdminOrg = false;
  Template.options.onCreated(function() {
    user = getUserInfo();
    Session.set("workArea", "dashboard");
  });
  Template.options.onRendered(function() {});
  Template.options.events({
    "click .nav-pills li"(event) {
      event.preventDefault();
      var workarea = event.target.dataset.workarea;
      Session.set("workArea", workarea);
      $(".active").removeClass("active");
      $(event.target.parentNode).addClass("active");
    }
  });
  Template.options.helpers({
    user: function() {
      return user;
    },
    isEmployeeOfSystemAdminOrg: function() {
      return user.org.orgType == "SYSTEM_ADMIN";
    },
    isOrgAdmin: function() {
      return user.role.role == "ADMIN" && user.dept.name == "ADMIN";
    },
    isDeptAdmin: function() {
      return user.role.role == "ADMIN";
    },
    jsonToString: function(json) {
      return JSON.stringify(json, null, 2);
    }
  });
}
