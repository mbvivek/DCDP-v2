import kjua from "kjua";

//init KJUA for displaying QR Code
KJUA = kjua;

initSystemAdmin = function() {
  //admin details
  var adminName = "Vivek";
  var adminPK =
    "0x041ff2e218d38e878be8444b4c5bcc8cdfe270246dff6d393f82301e3ad939bfbc97783aa61d7f64ab068c23c57082a5978620991b63a574e1555eaa4737a7c5c1";
  var role = "SYSTEM_ADMIN";
  var approverPK = "SYSTEM_GENERATED";

  //create user and role contracts
  createUserContract(
    adminName,
    adminPK,
    approverPK,
    createUserContractOnSuccess,
    createUserContractOnFailure
  );
  createRoleContract(
    adminPK,
    role,
    approverPK,
    createRoleContractOnSuccess,
    createRoleContractOnFailure
  );
};

var createUserContractOnSuccess = function(contract) {
  console.log(
    "admin user contract created successfully at " + contract.options.address
  );
};

var createUserContractOnFailure = function() {
  console.log("admin user contract creation failed..");
};

var createRoleContractOnSuccess = function(contract) {
  console.log(
    "admin role contract created successfully at " + contract.options.address
  );
};

var createRoleContractOnFailure = function() {
  console.log("admin role contract creation failed..");
};
