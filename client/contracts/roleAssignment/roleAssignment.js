createRoleAssignmentContract = function(
  _PK,
  _roleId,
  _approverPK,
  _onSuccess,
  _onFailure
) {
  //bytecode
  let bytecode =
    "0x6060604052604051610351380380610351833981016040528080518201919060200180519060200190919080518201919050504283836040518084815260200183805190602001908083835b602083101515610070578051825260208201915060208101905060208303925061004b565b6001836020036101000a0380198251168184511680821785525050505050509050018260001916600019168152602001935050505060405180910390206000816000191690555082600190805190602001906100cd929190610269565b50816002816000191690555080600390805190602001906100ef929190610269565b507f43907461bed5c0ab35831849d566cb4d48637eb56f3ec4a23811c27ca177c4ce4260005460016002546003604051808681526020018560001916600019168152602001806020018460001916600019168152602001806020018381038352868181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156101cb5780601f106101a0576101008083540402835291602001916101cb565b820191906000526020600020905b8154815290600101906020018083116101ae57829003601f168201915b505083810382528481815460018160011615610100020316600290048152602001915080546001816001161561010002031660029004801561024e5780601f106102235761010080835404028352916020019161024e565b820191906000526020600020905b81548152906001019060200180831161023157829003601f168201915b505097505050505050505060405180910390a150505061030e565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106102aa57805160ff19168380011785556102d8565b828001600101855582156102d8579182015b828111156102d75782518255916020019190600101906102bc565b5b5090506102e591906102e9565b5090565b61030b91905b808211156103075760008160009055506001016102ef565b5090565b90565b60358061031c6000396000f3006060604052600080fd00a165627a7a7230582071e31d223cebc274b66d3f184d5055c01605416c6bb11cb18f31c1af984c851d0029";

  //abi
  let abi = [
    {
      inputs: [
        { name: "_PK", type: "string" },
        { name: "_roleId", type: "bytes32" },
        { name: "_approverPK", type: "string" }
      ],
      payable: true,
      stateMutability: "payable",
      type: "constructor"
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "time", type: "uint256" },
        { indexed: false, name: "id", type: "bytes32" },
        { indexed: false, name: "PK", type: "string" },
        { indexed: false, name: "roleId", type: "bytes32" },
        { indexed: false, name: "approverPK", type: "string" }
      ],
      name: "RoleAssignmentCreated",
      type: "event"
    }
  ];

  let args = [_PK, _roleId, _approverPK];

  //options
  let options = {
    data: bytecode,
    arguments: args
  };

  //create contract
  var contract = new web3.eth.Contract(abi, null, options);

  //deploy the contract
  contract
    .deploy(options)
    .send({ from: web3.eth.accounts[0], gas: 4700000 })
    .then(function(instance) {
      if (instance) {
        contract.options.address = instance.options.address;
        contract.getPastEvents("RoleAssignmentCreated", {}, function(
          error,
          events
        ) {
          if (error) {
            _onFailure();
          } else {
            for (let event of events) {
              event.contract = contract;
              addToLog(event);
            }
            _onSuccess(instance);
          }
        });
      } else {
        _onFailure();
      }
    });
};

//watch out for events
var watchForEvents = function(contract) {};