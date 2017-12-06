createUserContract = function(
  _name,
  _publicKey,
  _approver,
  _onSuccess,
  _onFailure
) {
  let abi = [
    {
      inputs: [
        { name: "_name", type: "string" },
        { name: "_PK", type: "string" },
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
        { indexed: false, name: "name", type: "string" },
        { indexed: false, name: "PK", type: "string" },
        { indexed: false, name: "approverPK", type: "string" }
      ],
      name: "UserCreated",
      type: "event"
    }
  ];

  let options = {
    data:
      "0x60606040526040516103483803806103488339810160405280805182019190602001805182019190602001805182019190505042600081905550826001908051906020019061004f929190610260565b508160029080519060200190610066929190610260565b50806003908051906020019061007d929190610260565b507f8af6cfc5d7795260abf322e0e15fcd034e54ff70d088757f2f240ca7c7ccf0da6000546001600260036040518085815260200180602001806020018060200184810384528781815460018160011615610100020316600290048152602001915080546001816001161561010002031660029004801561013f5780601f106101145761010080835404028352916020019161013f565b820191906000526020600020905b81548152906001019060200180831161012257829003601f168201915b50508481038352868181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156101c25780601f10610197576101008083540402835291602001916101c2565b820191906000526020600020905b8154815290600101906020018083116101a557829003601f168201915b50508481038252858181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156102455780601f1061021a57610100808354040283529160200191610245565b820191906000526020600020905b81548152906001019060200180831161022857829003601f168201915b505097505050505050505060405180910390a1505050610305565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106102a157805160ff19168380011785556102cf565b828001600101855582156102cf579182015b828111156102ce5782518255916020019190600101906102b3565b5b5090506102dc91906102e0565b5090565b61030291905b808211156102fe5760008160009055506001016102e6565b5090565b90565b6035806103136000396000f3006060604052600080fd00a165627a7a723058208de0bf85103383b909e8fd8af81ed336ab5769853a567d3dd73cca691da005230029",
    arguments: [_name, _publicKey, _approver]
  };

  var contract = new web3.eth.Contract(abi, null, options);

  contract
    .deploy(options)
    .send({
      from: web3.eth.accounts[0],
      gas: 4700000
    })
    .then(function(instance) {
      if (instance) {
        contract.options.address = instance.options.address;
        watchForEvents(contract);
        _onSuccess(instance);
      } else {
        _onFailure();
      }
    });
};

var watchForEvents = function(contract) {
  contract.getPastEvents("UserCreated").then(function(events) {
    console.log(events); // same results as the optional callback above
  });
};