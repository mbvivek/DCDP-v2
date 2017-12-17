if (Meteor.isClient) {
  var templateInstance;
  Template.manageApprovals.onCreated(function() {
    templateInstance = Template.instance();
    this.selectedOrg = new ReactiveVar(null);
    this.messages = new ReactiveVar([]);
    this.onSuccessInfo = new ReactiveVar(null);
  });
  Template.manageApprovals.onRendered(function() {
    $("#approveFormSubmitBtn").addClass("disabled");
  });
  Template.manageApprovals.events({
    "submit #approveOrgForm"(event) {
      event.preventDefault();
      var isChecked = $("#approveFormCheckBox").prop("checked");
      if (isChecked) {
        $("#approveOrgForm").hide();
        var userOnSuccess = function(instance) {
          console.log(templateInstance);
          var msgs = templateInstance.messages.get();
          msgs.push({ success: true, msg: "User created successfully." });
          templateInstance.messages.set(msgs);
          //create organization
          createOrganizationContract(
            org.orgName,
            org.orgType,
            org.orgAddr,
            org.approverPK,
            orgOnSuccess,
            orgOnFailure
          );
        };
        var userOnFailure = function() {
          var msgs = templateInstance.messages.get();
          msgs.push({ success: false, msg: "Error in creating User!" });
          templateInstance.messages.set(msgs);
        };
        var orgOnSuccess = function(instance) {
          //get all events
          instance.getPastEvents("OrganizationCreated", {}, function(
            error,
            events
          ) {
            if (error) {
              orgOnFailure();
            } else {
              for (let event of events) {
                console.log(event);
                if (event.returnValues.name == org.orgName) {
                  org.orgId = event.returnValues.id;
                  dept.orgId = org.orgId;
                  //create Department
                  createDepartmentContract(
                    dept.deptName,
                    dept.orgId,
                    dept.approverPK,
                    deptOnSuccess,
                    deptOnFailure
                  );
                  var msgs = templateInstance.messages.get();
                  msgs.push({
                    success: true,
                    msg: "Organization created successfully."
                  });
                  templateInstance.messages.set(msgs);
                  break;
                }
              }
            }
          });
        };
        var orgOnFailure = function() {
          var msgs = templateInstance().messages.get();
          msgs.push({ success: false, msg: "Error in creating Organization!" });
          templateInstance.messages.set(msgs);
        };

        var deptOnSuccess = function(instance) {
          //get all events
          instance.getPastEvents("DepartmentCreated", {}, function(
            error,
            events
          ) {
            if (error) {
              deptOnFailure();
            } else {
              for (let event of events) {
                console.log(event);
                if (event.returnValues.name == dept.deptName) {
                  dept.deptId = event.returnValues.id;
                  role.orgId = org.orgId;
                  role.deptId = dept.deptId;
                  //create Role
                  createRoleContract(
                    role.role,
                    role.orgId,
                    role.deptId,
                    role.approverPK,
                    roleOnSuccess,
                    roleOnFailure
                  );
                  var msgs = templateInstance.messages.get();
                  msgs.push({
                    success: true,
                    msg: "Department created successfully."
                  });
                  templateInstance.messages.set(msgs);
                  break;
                }
              }
            }
          });
        };
        var deptOnFailure = function() {
          var msgs = templateInstance.messages.get();
          msgs.push({ success: false, msg: "Error in creating Department!" });
          templateInstance.messages.set(msgs);
        };

        var roleOnSuccess = function(instance) {
          //get all events
          instance.getPastEvents("RoleCreated", {}, function(error, events) {
            if (error) {
              roleOnFailure();
            } else {
              for (let event of events) {
                if (event.returnValues.role == role.role) {
                  role.roleId = event.returnValues.id;
                  roleAssignment.roleId = role.roleId;
                  //create Role Assignment
                  createRoleAssignmentContract(
                    roleAssignment.PK,
                    roleAssignment.roleId,
                    roleAssignment.approverPK,
                    roleAssignmentOnSuccess,
                    roleAssignmentOnFailure
                  );
                  var msgs = templateInstance.messages.get();
                  msgs.push({
                    success: true,
                    msg: "Role created successfully."
                  });
                  templateInstance.messages.set(msgs);
                  break;
                }
              }
            }
          });
        };
        var roleOnFailure = function() {
          var msgs = templateInstance.messages.get();
          msgs.push({ success: false, msg: "Error in creating Role!" });
          templateInstance.messages.set(msgs);
        };

        var roleAssignmentOnSuccess = function(instance) {
          //get all events
          instance.getPastEvents("RoleAssignmentCreated", {}, function(
            error,
            events
          ) {
            if (error) {
              roleAssignmentOnFailure();
            } else {
              for (let event of events) {
                if (event.returnValues.roleId == role.roleId) {
                  roleAssignment.roleId = event.returnValues.id;
                  var msgs = templateInstance.messages.get();
                  msgs.push({
                    success: true,
                    msg: "Role Assignment created successfully."
                  });
                  templateInstance.messages.set(msgs);
                  //organization is now approved
                  org.isApproved = true;
                  org.approverPK = getUserInfo().user.PK;
                  console.log(org);
                  templateInstance.onSuccessInfo.set({
                    success: org.isApproved,
                    approver: getUserInfo().user.name,
                    approvedOn: org.approvedOn,
                    org: org,
                    user: user
                  });
                  break;
                }
              }
            }
          });
        };
        var roleAssignmentOnFailure = function() {
          var msgs = templateInstance.messages.get();
          msgs.push({
            success: false,
            msg: "Error in creating Role Assignment!"
          });
        };
        //user details
        var user = {
          name: $("#approveOrgForm_adminName").val(),
          PK: $("#approveOrgForm_adminPK").val(),
          approverPK: getUserInfo().user.PK,
          onSuccess: userOnSuccess,
          onFailure: userOnFailure
        };
        //org details
        var org = {
          orgId: "",
          orgName: $("#approveOrgForm_orgName").val(),
          orgType: $("#approveOrgForm_orgType").val(),
          orgAddr: $("#approveOrgForm_orgAddr").val(),
          approverPK: getUserInfo().user.PK,
          onSuccess: orgOnSuccess,
          onFailure: orgOnFailure
        };
        //dept details
        var dept = {
          deptId: "",
          deptName: "ADMIN",
          orgId: "",
          approverPK: getUserInfo().user.PK,
          onSuccess: deptOnSuccess,
          onFailure: deptOnFailure
        };
        //role details
        var role = {
          roleId: "",
          role: "ADMIN",
          orgId: "",
          deptId: "",
          approverPK: getUserInfo().user.PK,
          onSuccess: roleOnSuccess,
          onFailure: roleOnFailure
        };
        //roleAssignment details
        var roleAssignment = {
          PK: $("#approveOrgForm_adminPK").val(),
          roleId: "",
          approverPK: getUserInfo().user.PK,
          onSuccess: roleAssignmentOnSuccess,
          onFailure: roleAssignmentOnFailure
        };

        createUserContract(
          user.name,
          user.PK,
          user.approverPK,
          user.onSuccess,
          user.onFailure
        );
      }
    },
    "click .viewOrgBtn"(event) {
      $("#approveOrgForm").show();
      var org = null;
      console.log(event);
      return;
      Template.instance().selectedOrg.set(org);
      Template.instance().onSuccessInfo.set(null);
      $("#approveOrgForm_orgType").val(org.orgType);
      $("#approveFormCheckBox").prop("checked", false);
      $("#approveFormSubmitBtn").removeClass("disabled");
      $("#approveFormSubmitBtn").addClass("disabled");
      Template.instance().messages.set([]);
      $("#viewOrgModal").modal("toggle");
    },
    "click #approveFormCheckBox"(event) {
      var isChecked = $("#approveFormCheckBox").prop("checked");
      if (isChecked) {
        $("#approveFormSubmitBtn").removeClass("disabled");
      } else {
        $("#approveFormSubmitBtn").addClass("disabled");
      }
    }
  });
  Template.manageApprovals.helpers({
    selectedOrg: function() {
      return Template.instance().selectedOrg.get();
    },
    orgsForApproval: function() {
      var orgs = [];
      for (let org of getBusiness().pendingApprovals.organizations) {
        if (!org.isApproved) {
          orgs.push(org);
        }
      }
      return orgs;
    },
    shortTrackingId: function(trackingId) {
      return trackingId.substring(trackingId.length - 6, trackingId.length);
    },
    shortDate: function(date) {
      return date.substring(0, 15);
    },
    messages: function() {
      return Template.instance().messages.get();
    },
    onSuccessInfo: function() {
      return Template.instance().onSuccessInfo.get();
    },
    jsonToString: function(json) {
      return JSON.stringify(json, null, 2);
    }
  });

  var getOrgByTrackingId = function(id) {
    var selectedOrg = null;
    for (let org of getBusiness().pendingApprovals.organizations) {
      if (org.trackingId == id) {
        selectedOrg = org;
        break;
      }
    }
    return selectedOrg;
  };
}
