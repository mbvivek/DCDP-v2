createOrganizationContract = function(
  _orgName,
  _orgType,
  _orgAddress,
  _approverPK,
  _onSuccess,
  _onFailure
) {
  //contract bytecode
  let bytecode =
    "0x6060604052604051610428380380610428833981016040528080518201919060200180518201919060200180518201919060200180518201919050504260008190555060005460405180828152602001915050604051809103902060018160001916905550836002908051906020019061007a929190610340565b508260039080519060200190610091929190610340565b5081600490805190602001906100a8929190610340565b5080600790805190602001906100bf929190610340565b507fe167a3e0560bc02200eafa65cc21ffd2c5440743d65ed36d7f77e38b9b2ab0216000546001546002600360046007604051808781526020018660001916600019168152602001806020018060200180602001806020018581038552898181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156101985780601f1061016d57610100808354040283529160200191610198565b820191906000526020600020905b81548152906001019060200180831161017b57829003601f168201915b505085810384528881815460018160011615610100020316600290048152602001915080546001816001161561010002031660029004801561021b5780601f106101f05761010080835404028352916020019161021b565b820191906000526020600020905b8154815290600101906020018083116101fe57829003601f168201915b505085810383528781815460018160011615610100020316600290048152602001915080546001816001161561010002031660029004801561029e5780601f106102735761010080835404028352916020019161029e565b820191906000526020600020905b81548152906001019060200180831161028157829003601f168201915b50508581038252868181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156103215780601f106102f657610100808354040283529160200191610321565b820191906000526020600020905b81548152906001019060200180831161030457829003601f168201915b50509a505050505050505050505060405180910390a1505050506103e5565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061038157805160ff19168380011785556103af565b828001600101855582156103af579182015b828111156103ae578251825591602001919060010190610393565b5b5090506103bc91906103c0565b5090565b6103e291905b808211156103de5760008160009055506001016103c6565b5090565b90565b6035806103f36000396000f3006060604052600080fd00a165627a7a72305820d874761a8f6ceb5f7576479d6d4f1350c18dedea176c26871bf86afadc0c2c560029";

  //abi
  let abi = [
    {
      inputs: [
        { name: "_orgName", type: "string" },
        { name: "_orgType", type: "string" },
        { name: "_orgAddr", type: "string" },
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
        { indexed: false, name: "name", type: "string" },
        { indexed: false, name: "orgType", type: "string" },
        { indexed: false, name: "addr", type: "string" },
        { indexed: false, name: "approverPK", type: "string" }
      ],
      name: "OrganizationCreated",
      type: "event"
    }
  ];

  //options {data, arguments}
  let options = {
    data: bytecode,
    arguments: [_orgName, _orgType, _orgAddress, _approverPK]
  };

  //contract
  var contract = new web3.eth.Contract(abi, null, options);

  //deploy the contract
  contract
    .deploy(options)
    .send({
      from: web3.eth.accounts[0],
      gas: 4700000
    })
    .then(function(instance) {
      if (instance) {
        //if contract is deployed, set the deployed address to the contract instance
        contract.options.address = instance.options.address;
        //get all events
        contract.getPastEvents("OrganizationCreated", {}, function(
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
            _onSuccess(contract);
          }
        });
      } else {
        _onFailure();
      }
    });
};
