import kjua from "kjua";

//-- Init KJUA for displaying QR Code
KJUA = kjua;

//-- Admin details
var adminName = "Vivek";
var adminPK =
  "0x041ff2e218d38e878be8444b4c5bcc8cdfe270246dff6d393f82301e3ad939bfbc97783aa61d7f64ab068c23c57082a5978620991b63a574e1555eaa4737a7c5c1";

var role = "ADMIN";
var roleId;

var adminOrgId;
var adminOrgName = "SYSTEM_ADMIN_ORGANIZATION";
var adminOrgType = "SYSTEM_ADMIN";
var adminOrgAddr = "SYSTEM_ADMIN_ORGANIZATION_ADDRESS";

var adminDeptId;
var adminDeptName = "ADMIN";

var approverPK = "SYSTEM_GENERATED";

initSystemAdmin = function() {
  //clear localstorage
  localStorage.business = "";

  //-- CREATE SYSTEM ADMIN
  //1. Create an organization
  //2. Create a department under the organization
  //3. Create a role under this department
  //4. Create a user
  //5. Create a role_assignment

  //create an organisation
  //on success, create a department under this organization
  createOrganizationContract(
    adminOrgName,
    adminOrgType,
    adminOrgAddr,
    approverPK,
    createOrganizationContractOnSuccess,
    createOrganizationContractOnFailure
  );
};

var createOrganizationContractOnSuccess = function(contract) {
  console.log(
    "admin organisation contract created successfully at " +
      contract.options.address
  );

  var logs = getAllLogsOfEvent("OrganizationCreated");
  adminOrgId = logs[0].returnValues.id;
  console.log("Admin Org ID : " + adminOrgId);
  //create a department
  //on success, create a role for admin
  createDepartmentContract(
    adminDeptName,
    adminOrgId,
    approverPK,
    createDepartmentContractOnSuccess,
    createDepartmentContractOnFailure
  );
};
var createOrganizationContractOnFailure = function() {
  console.log("admin organization contract creation failed..");
};

var createDepartmentContractOnSuccess = function(contract) {
  console.log(
    "department contracted successfully at " + contract.options.address
  );
  var logs = getAllLogsOfEvent("DepartmentCreated");
  adminDeptId = logs[0].returnValues.id;
  console.log("Admin Dept ID : " + adminDeptId);
  //create a role for admin
  //on success, create user
  createRoleContract(
    role,
    adminOrgId,
    adminDeptId,
    approverPK,
    createRoleContractOnSuccess,
    createRoleContractOnFailure
  );
};
var createDepartmentContractOnFailure = function() {
  console.log("admin role contract creation failed..");
};

var createRoleContractOnSuccess = function(contract) {
  console.log(
    "admin role contract created successfully at " + contract.options.address
  );
  var logs = getAllLogsOfEvent("RoleCreated");
  roleId = logs[0].returnValues.id;
  console.log("Role ID : " + roleId);
  //create user
  //on success, create role_assignment
  createUserContract(
    adminName,
    adminPK,
    approverPK,
    createUserContractOnSuccess,
    createUserContractOnFailure
  );
};
var createRoleContractOnFailure = function() {
  console.log("admin role contract creation failed..");
};

var createUserContractOnSuccess = function(contract) {
  console.log(
    "admin user contract created successfully at " + contract.options.address
  );
  var logs = getAllLogsOfEvent("UserCreated");
  var PK = logs[0].returnValues.PK;
  console.log("PK : " + PK);
  //create role_assignment
  createRoleAssignmentContract(
    PK,
    roleId,
    approverPK,
    createRoleAssignmentContractOnSuccess,
    createRoleAssignmentContractOnFailure
  );
};
var createUserContractOnFailure = function() {
  console.log("admin user contract creation failed..");
};

var createRoleAssignmentContractOnSuccess = function(contract) {
  console.log(
    "role assignment contract created successfully at " +
      contract.options.address
  );
  var logs = getAllLogsOfEvent("RoleAssignmentCreated");
  var id = logs[0].returnValues.id;
  console.log("Role Assignment ID : " + id);
};
var createRoleAssignmentContractOnFailure = function() {
  console.log("role assignment contract creation failed..");
};
