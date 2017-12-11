import { Template } from "meteor/templating";

if (Meteor.isClient) {
  Template.login.onCreated(function() {
    requestCredentials();
  });
  Template.login.onRendered(function() {});
  Template.login.events({
    "#loginBtn click": function(events) {}
  });
  Template.login.helpers({});

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
        console.log("logging in..");
        //process login
        processLogin(userProfile.publicKey);
      });
  };
}

var processLogin = function(PK) {
  //0. Get User from PK
  //1. Get the RoleAssignment from User
  //2. Get Role from RoleAssignment
  //3. Get Department from Role
  //4. Get Organization from Department
  //5. If all are valid, navigate to Home page

  var success = function() {
    successAlert("Success!");
  };
  var error = function() {
    warningAlert("Invalid Credentials!");
  };

  //-- Get User from PK
  var user = getUserByPK(PK);
  if (user == null) {
    error();
    return;
  }
  console.log(user);

  //-- Get RoleAssignment from User
  var roleAssignment = getRoleAssignmentByPK(user.PK);
  if (roleAssignment == null) {
    error();
    return;
  }
  console.log(roleAssignment);

  //-- Get Role from RoleAssignment
  var role = getRoleByRoleAssignmentId(roleAssignment.roleId);
  if (role == null) {
    error();
    return;
  }
  console.log(role);

  //-- Get Department from Role
  var dept = getDeptartmentByRoleId(role.id);
  if (dept == null) {
    error();
    return;
  }
  console.log(dept);

  //-- Get Organization from Department
  var org = getOrganizationByDepartmentId(dept.id);
  if (org == null) {
    error();
    return;
  }
  console.log(org);

  var userInfo = {
    user: user,
    role: role,
    dept: dept,
    org: org,
    roleAssignment: roleAssignment
  };

  Session.set("userInfo", userInfo);
  Session.set("template", "home");
};

var getUserByPK = function(PK) {
  var user = null;
  var logs = getAllLogsOfEvent("UserCreated");
  for (let log of logs) {
    if (log.returnValues.PK == PK) {
      user = log.returnValues;
      break;
    }
  }
  return user;
};

var getRoleAssignmentByPK = function(PK) {
  var roleAssignment = null;
  var logs = getAllLogsOfEvent("RoleAssignmentCreated");
  for (let log of logs) {
    if (log.returnValues.PK == PK) {
      roleAssignment = log.returnValues;
      break;
    }
  }
  return roleAssignment;
};

var getRoleByRoleAssignmentId = function(id) {
  var role = null;
  var logs = getAllLogsOfEvent("RoleCreated");
  for (let log of logs) {
    if (log.returnValues.id == id) {
      role = log.returnValues;
      break;
    }
  }
  return role;
};

var getDeptartmentByRoleId = function(id) {
  var dept = null;
  var logs = getAllLogsOfEvent("RoleCreated");
  for (let log of logs) {
    if (log.returnValues.id == id) {
      dept = getDeptartmentById(log.returnValues.deptId);
      break;
    }
  }
  return dept;
};

var getDeptartmentById = function(id) {
  var dept = null;
  var logs = getAllLogsOfEvent("DepartmentCreated");
  for (let log of logs) {
    if (log.returnValues.id == id) {
      dept = log.returnValues;
      break;
    }
  }
  return dept;
};

var getOrganizationByDepartmentId = function(id) {
  var org = null;
  var logs = getAllLogsOfEvent("DepartmentCreated");
  for (let log of logs) {
    if (log.returnValues.id == id) {
      org = getOrganizationById(log.returnValues.orgId);
      break;
    }
  }
  return org;
};

var getOrganizationById = function(id) {
  var org = null;
  var logs = getAllLogsOfEvent("OrganizationCreated");
  for (let log of logs) {
    if (log.returnValues.id == id) {
      org = log.returnValues;
      break;
    }
  }
  return org;
};
