b = {
  logs: [
    {
      logIndex: 0,
      transactionIndex: 0,
      transactionHash:
        "0x45047aa8c047006fbca4b570b8dcfd87e04def3725fc36ecb4b2561b2a76a626",
      blockHash:
        "0xc0657b27a747d78e68e9f966a834a8d25fa29dd98841971df5122473e3d1a918",
      blockNumber: 1348,
      address: "0xff2d10B730866796951d668A199Ac6dc3D5632Fe",
      type: "mined",
      id: "log_21e4aa13",
      returnValues: {
        "0": "1512864703",
        "1":
          "0x903ed03c6accbad701acfa88803c8959690bd3bbd3081d58eb24254ef4c45a5f",
        "2": "SYSTEM_ADMIN_ORGANIZATION",
        "3": "SYSTEM_ADMIN",
        "4": "SYSTEM_ADMIN_ORGANIZATION_ADDRESS",
        "5": "SYSTEM_GENERATED",
        time: "1512864703",
        id:
          "0x903ed03c6accbad701acfa88803c8959690bd3bbd3081d58eb24254ef4c45a5f",
        name: "SYSTEM_ADMIN_ORGANIZATION",
        orgType: "SYSTEM_ADMIN",
        addr: "SYSTEM_ADMIN_ORGANIZATION_ADDRESS",
        approverPK: "SYSTEM_GENERATED",
        timeInString:
          "Sat Dec 09 2017 19:11:43 GMT-0500 (Eastern Standard Time)"
      },
      event: "OrganizationCreated",
      signature:
        "0xe167a3e0560bc02200eafa65cc21ffd2c5440743d65ed36d7f77e38b9b2ab021",
      raw: {
        data:
          "0x000000000000000000000000000000000000000000000000000000005a2c7bbf903ed03c6accbad701acfa88803c8959690bd3bbd3081d58eb24254ef4c45a5f00000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000001a0000000000000000000000000000000000000000000000000000000000000001953595354454d5f41444d494e5f4f5247414e495a4154494f4e00000000000000000000000000000000000000000000000000000000000000000000000000000c53595354454d5f41444d494e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002153595354454d5f41444d494e5f4f5247414e495a4154494f4e5f4144445245535300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001053595354454d5f47454e45524154454400000000000000000000000000000000",
        topics: [
          "0xe167a3e0560bc02200eafa65cc21ffd2c5440743d65ed36d7f77e38b9b2ab021"
        ]
      },
      contract: {
        currentProvider: {
          host: "http://localhost:8545",
          timeout: 0,
          connected: true
        },
        _requestManager: {
          provider: {
            host: "http://localhost:8545",
            timeout: 0,
            connected: true
          },
          providers: {},
          subscriptions: {}
        },
        givenProvider: null,
        providers: {},
        _provider: {
          host: "http://localhost:8545",
          timeout: 0,
          connected: true
        },
        options: {
          data:
            "0x6060604052604051610428380380610428833981016040528080518201919060200180518201919060200180518201919060200180518201919050504260008190555060005460405180828152602001915050604051809103902060018160001916905550836002908051906020019061007a929190610340565b508260039080519060200190610091929190610340565b5081600490805190602001906100a8929190610340565b5080600790805190602001906100bf929190610340565b507fe167a3e0560bc02200eafa65cc21ffd2c5440743d65ed36d7f77e38b9b2ab0216000546001546002600360046007604051808781526020018660001916600019168152602001806020018060200180602001806020018581038552898181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156101985780601f1061016d57610100808354040283529160200191610198565b820191906000526020600020905b81548152906001019060200180831161017b57829003601f168201915b505085810384528881815460018160011615610100020316600290048152602001915080546001816001161561010002031660029004801561021b5780601f106101f05761010080835404028352916020019161021b565b820191906000526020600020905b8154815290600101906020018083116101fe57829003601f168201915b505085810383528781815460018160011615610100020316600290048152602001915080546001816001161561010002031660029004801561029e5780601f106102735761010080835404028352916020019161029e565b820191906000526020600020905b81548152906001019060200180831161028157829003601f168201915b50508581038252868181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156103215780601f106102f657610100808354040283529160200191610321565b820191906000526020600020905b81548152906001019060200180831161030457829003601f168201915b50509a505050505050505050505060405180910390a1505050506103e5565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061038157805160ff19168380011785556103af565b828001600101855582156103af579182015b828111156103ae578251825591602001919060010190610393565b5b5090506103bc91906103c0565b5090565b6103e291905b808211156103de5760008160009055506001016103c6565b5090565b90565b6035806103f36000396000f3006060604052600080fd00a165627a7a72305820d874761a8f6ceb5f7576479d6d4f1350c18dedea176c26871bf86afadc0c2c560029",
          arguments: [
            "SYSTEM_ADMIN_ORGANIZATION",
            "SYSTEM_ADMIN",
            "SYSTEM_ADMIN_ORGANIZATION_ADDRESS",
            "SYSTEM_GENERATED"
          ],
          address: "0xff2d10B730866796951d668A199Ac6dc3D5632Fe",
          jsonInterface: [
            {
              inputs: [
                { name: "_orgName", type: "string" },
                { name: "_orgType", type: "string" },
                { name: "_orgAddr", type: "string" },
                { name: "_approverPK", type: "string" }
              ],
              payable: true,
              stateMutability: "payable",
              type: "constructor",
              signature: "constructor"
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
              type: "event",
              signature:
                "0xe167a3e0560bc02200eafa65cc21ffd2c5440743d65ed36d7f77e38b9b2ab021"
            }
          ]
        },
        defaultAccount: null,
        defaultBlock: "latest",
        methods: {},
        events: {},
        _address: "0xff2d10B730866796951d668A199Ac6dc3D5632Fe",
        _jsonInterface: [
          {
            inputs: [
              { name: "_orgName", type: "string" },
              { name: "_orgType", type: "string" },
              { name: "_orgAddr", type: "string" },
              { name: "_approverPK", type: "string" }
            ],
            payable: true,
            stateMutability: "payable",
            type: "constructor",
            signature: "constructor"
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
            type: "event",
            signature:
              "0xe167a3e0560bc02200eafa65cc21ffd2c5440743d65ed36d7f77e38b9b2ab021"
          }
        ]
      }
    },
    {
      logIndex: 0,
      transactionIndex: 0,
      transactionHash:
        "0x7e3a8a204a916ecd1c17617ed15a6dbf871f5f7f70c88a3def11a14163fb8376",
      blockHash:
        "0xc9ca74026c000083443ea71dd732ec1971e013f3c4f6966af20d721048c26a1a",
      blockNumber: 1349,
      address: "0xdC3f63c7fEF8Bd7a194a7bC111278Cd995e34902",
      type: "mined",
      id: "log_c0444277",
      returnValues: {
        "0": "1512864703",
        "1":
          "0xf939adac44bf4b90b5633507452dce7ea9198960734c52600538df29ee49f8c6",
        "2": "ADMIN",
        "3":
          "0x903ed03c6accbad701acfa88803c8959690bd3bbd3081d58eb24254ef4c45a5f",
        "4": "SYSTEM_GENERATED",
        time: "1512864703",
        id:
          "0xf939adac44bf4b90b5633507452dce7ea9198960734c52600538df29ee49f8c6",
        name: "ADMIN",
        orgId:
          "0x903ed03c6accbad701acfa88803c8959690bd3bbd3081d58eb24254ef4c45a5f",
        approverPK: "SYSTEM_GENERATED",
        timeInString:
          "Sat Dec 09 2017 19:11:43 GMT-0500 (Eastern Standard Time)"
      },
      event: "DepartmentCreated",
      signature:
        "0x1ed045c4c3467093f10aac972624e8b102d430d045921dd3a60f43613dd593cf",
      raw: {
        data:
          "0x000000000000000000000000000000000000000000000000000000005a2c7bbff939adac44bf4b90b5633507452dce7ea9198960734c52600538df29ee49f8c600000000000000000000000000000000000000000000000000000000000000a0903ed03c6accbad701acfa88803c8959690bd3bbd3081d58eb24254ef4c45a5f00000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000000541444d494e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001053595354454d5f47454e45524154454400000000000000000000000000000000",
        topics: [
          "0x1ed045c4c3467093f10aac972624e8b102d430d045921dd3a60f43613dd593cf"
        ]
      },
      contract: {
        currentProvider: {
          host: "http://localhost:8545",
          timeout: 0,
          connected: true
        },
        _requestManager: {
          provider: {
            host: "http://localhost:8545",
            timeout: 0,
            connected: true
          },
          providers: {},
          subscriptions: {}
        },
        givenProvider: null,
        providers: {},
        _provider: {
          host: "http://localhost:8545",
          timeout: 0,
          connected: true
        },
        options: {
          data:
            "0x60606040526040516103413803806103418339810160405280805182019190602001805190602001909190805182019190505042836040518083815260200182805190602001908083835b60208310151561006f578051825260208201915060208101905060208303925061004a565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405180910390206000816000191690555082600190805190602001906100bd929190610259565b50816002816000191690555080600390805190602001906100df929190610259565b507f1ed045c4c3467093f10aac972624e8b102d430d045921dd3a60f43613dd593cf4260005460016002546003604051808681526020018560001916600019168152602001806020018460001916600019168152602001806020018381038352868181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156101bb5780601f10610190576101008083540402835291602001916101bb565b820191906000526020600020905b81548152906001019060200180831161019e57829003601f168201915b505083810382528481815460018160011615610100020316600290048152602001915080546001816001161561010002031660029004801561023e5780601f106102135761010080835404028352916020019161023e565b820191906000526020600020905b81548152906001019060200180831161022157829003601f168201915b505097505050505050505060405180910390a15050506102fe565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061029a57805160ff19168380011785556102c8565b828001600101855582156102c8579182015b828111156102c75782518255916020019190600101906102ac565b5b5090506102d591906102d9565b5090565b6102fb91905b808211156102f75760008160009055506001016102df565b5090565b90565b60358061030c6000396000f3006060604052600080fd00a165627a7a7230582001dda97cd7c6c741b69278c62a4a6ebc1ab9e57bea225768ee9390ad6529218f0029",
          arguments: [
            "ADMIN",
            "0x903ed03c6accbad701acfa88803c8959690bd3bbd3081d58eb24254ef4c45a5f",
            "SYSTEM_GENERATED"
          ],
          address: "0xdC3f63c7fEF8Bd7a194a7bC111278Cd995e34902",
          jsonInterface: [
            {
              inputs: [
                { name: "_name", type: "string" },
                { name: "_orgId", type: "bytes32" },
                { name: "_approverPK", type: "string" }
              ],
              payable: true,
              stateMutability: "payable",
              type: "constructor",
              signature: "constructor"
            },
            {
              anonymous: false,
              inputs: [
                { indexed: false, name: "time", type: "uint256" },
                { indexed: false, name: "id", type: "bytes32" },
                { indexed: false, name: "name", type: "string" },
                { indexed: false, name: "orgId", type: "bytes32" },
                { indexed: false, name: "approverPK", type: "string" }
              ],
              name: "DepartmentCreated",
              type: "event",
              signature:
                "0x1ed045c4c3467093f10aac972624e8b102d430d045921dd3a60f43613dd593cf"
            }
          ]
        },
        defaultAccount: null,
        defaultBlock: "latest",
        methods: {},
        events: {},
        _address: "0xdC3f63c7fEF8Bd7a194a7bC111278Cd995e34902",
        _jsonInterface: [
          {
            inputs: [
              { name: "_name", type: "string" },
              { name: "_orgId", type: "bytes32" },
              { name: "_approverPK", type: "string" }
            ],
            payable: true,
            stateMutability: "payable",
            type: "constructor",
            signature: "constructor"
          },
          {
            anonymous: false,
            inputs: [
              { indexed: false, name: "time", type: "uint256" },
              { indexed: false, name: "id", type: "bytes32" },
              { indexed: false, name: "name", type: "string" },
              { indexed: false, name: "orgId", type: "bytes32" },
              { indexed: false, name: "approverPK", type: "string" }
            ],
            name: "DepartmentCreated",
            type: "event",
            signature:
              "0x1ed045c4c3467093f10aac972624e8b102d430d045921dd3a60f43613dd593cf"
          }
        ]
      }
    },
    {
      logIndex: 0,
      transactionIndex: 0,
      transactionHash:
        "0x568153ab8bf906d6b83c4b73e2bc6e47804bb84898670de492b037f5bdf6ddfb",
      blockHash:
        "0xf4497273c41059782cd6e632b7bf30f3f98ded26464fcd7087323f0ee312963f",
      blockNumber: 1350,
      address: "0xCC0EF8728457C7df61f28e65aA2241051326A01f",
      type: "mined",
      id: "log_a827c91d",
      returnValues: {
        "0": "1512864703",
        "1":
          "0xf939adac44bf4b90b5633507452dce7ea9198960734c52600538df29ee49f8c6",
        "2": "ADMIN",
        "3":
          "0x903ed03c6accbad701acfa88803c8959690bd3bbd3081d58eb24254ef4c45a5f",
        "4":
          "0xf939adac44bf4b90b5633507452dce7ea9198960734c52600538df29ee49f8c6",
        "5": "SYSTEM_GENERATED",
        time: "1512864703",
        id:
          "0xf939adac44bf4b90b5633507452dce7ea9198960734c52600538df29ee49f8c6",
        role: "ADMIN",
        orgId:
          "0x903ed03c6accbad701acfa88803c8959690bd3bbd3081d58eb24254ef4c45a5f",
        deptId:
          "0xf939adac44bf4b90b5633507452dce7ea9198960734c52600538df29ee49f8c6",
        approverPK: "SYSTEM_GENERATED",
        timeInString:
          "Sat Dec 09 2017 19:11:43 GMT-0500 (Eastern Standard Time)"
      },
      event: "RoleCreated",
      signature:
        "0x6cee9ccd15bb574c288d3467d926f620904558cfebed269b9aa32aadd2ddf0d2",
      raw: {
        data:
          "0x000000000000000000000000000000000000000000000000000000005a2c7bbff939adac44bf4b90b5633507452dce7ea9198960734c52600538df29ee49f8c600000000000000000000000000000000000000000000000000000000000000c0903ed03c6accbad701acfa88803c8959690bd3bbd3081d58eb24254ef4c45a5ff939adac44bf4b90b5633507452dce7ea9198960734c52600538df29ee49f8c60000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000541444d494e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001053595354454d5f47454e45524154454400000000000000000000000000000000",
        topics: [
          "0x6cee9ccd15bb574c288d3467d926f620904558cfebed269b9aa32aadd2ddf0d2"
        ]
      },
      contract: {
        currentProvider: {
          host: "http://localhost:8545",
          timeout: 0,
          connected: true
        },
        _requestManager: {
          provider: {
            host: "http://localhost:8545",
            timeout: 0,
            connected: true
          },
          providers: {},
          subscriptions: {}
        },
        givenProvider: null,
        providers: {},
        _provider: {
          host: "http://localhost:8545",
          timeout: 0,
          connected: true
        },
        options: {
          data:
            "0x60606040526040516103683803806103688339810160405280805182019190602001805190602001909190805190602001909190805182019190505042846040518083815260200182805190602001908083835b6020831015156100785780518252602082019150602081019050602083039250610053565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405180910390206000816000191690555083600190805190602001906100c6929190610280565b508260028160001916905550816003816000191690555080600490805190602001906100f3929190610280565b507f6cee9ccd15bb574c288d3467d926f620904558cfebed269b9aa32aadd2ddf0d242600054600160025460035460046040518087815260200186600019166000191681526020018060200185600019166000191681526020018460001916600019168152602001806020018381038352878181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156101e05780601f106101b5576101008083540402835291602001916101e0565b820191906000526020600020905b8154815290600101906020018083116101c357829003601f168201915b50508381038252848181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156102635780601f1061023857610100808354040283529160200191610263565b820191906000526020600020905b81548152906001019060200180831161024657829003601f168201915b50509850505050505050505060405180910390a150505050610325565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106102c157805160ff19168380011785556102ef565b828001600101855582156102ef579182015b828111156102ee5782518255916020019190600101906102d3565b5b5090506102fc9190610300565b5090565b61032291905b8082111561031e576000816000905550600101610306565b5090565b90565b6035806103336000396000f3006060604052600080fd00a165627a7a723058208cd8cd328596d130081acc4d58dfd7dd38075faadb6e451706eb50250049a7e90029",
          arguments: [
            "ADMIN",
            "0x903ed03c6accbad701acfa88803c8959690bd3bbd3081d58eb24254ef4c45a5f",
            "0xf939adac44bf4b90b5633507452dce7ea9198960734c52600538df29ee49f8c6",
            "SYSTEM_GENERATED"
          ],
          address: "0xCC0EF8728457C7df61f28e65aA2241051326A01f",
          jsonInterface: [
            {
              inputs: [
                { name: "_role", type: "string" },
                { name: "_orgId", type: "bytes32" },
                { name: "_deptId", type: "bytes32" },
                { name: "_approverPK", type: "string" }
              ],
              payable: true,
              stateMutability: "payable",
              type: "constructor",
              signature: "constructor"
            },
            {
              anonymous: false,
              inputs: [
                { indexed: false, name: "time", type: "uint256" },
                { indexed: false, name: "id", type: "bytes32" },
                { indexed: false, name: "role", type: "string" },
                { indexed: false, name: "orgId", type: "bytes32" },
                { indexed: false, name: "deptId", type: "bytes32" },
                { indexed: false, name: "approverPK", type: "string" }
              ],
              name: "RoleCreated",
              type: "event",
              signature:
                "0x6cee9ccd15bb574c288d3467d926f620904558cfebed269b9aa32aadd2ddf0d2"
            }
          ]
        },
        defaultAccount: null,
        defaultBlock: "latest",
        methods: {},
        events: {},
        _address: "0xCC0EF8728457C7df61f28e65aA2241051326A01f",
        _jsonInterface: [
          {
            inputs: [
              { name: "_role", type: "string" },
              { name: "_orgId", type: "bytes32" },
              { name: "_deptId", type: "bytes32" },
              { name: "_approverPK", type: "string" }
            ],
            payable: true,
            stateMutability: "payable",
            type: "constructor",
            signature: "constructor"
          },
          {
            anonymous: false,
            inputs: [
              { indexed: false, name: "time", type: "uint256" },
              { indexed: false, name: "id", type: "bytes32" },
              { indexed: false, name: "role", type: "string" },
              { indexed: false, name: "orgId", type: "bytes32" },
              { indexed: false, name: "deptId", type: "bytes32" },
              { indexed: false, name: "approverPK", type: "string" }
            ],
            name: "RoleCreated",
            type: "event",
            signature:
              "0x6cee9ccd15bb574c288d3467d926f620904558cfebed269b9aa32aadd2ddf0d2"
          }
        ]
      }
    },
    {
      logIndex: 0,
      transactionIndex: 0,
      transactionHash:
        "0x89c0c39fbd6466ca3c7a6d92af4d04d69107489fe0648718ef71511fe2edcf84",
      blockHash:
        "0x6c7ed69aefa9165f9dee2af99026b70aa33a0eac7ee90551131d4a7b73d89c16",
      blockNumber: 1351,
      address: "0xa65dda711703496094050312f87F2B4D1E64F536",
      type: "mined",
      id: "log_b734bcef",
      returnValues: {
        "0": "1512864703",
        "1": "Vivek",
        "2":
          "0x041ff2e218d38e878be8444b4c5bcc8cdfe270246dff6d393f82301e3ad939bfbc97783aa61d7f64ab068c23c57082a5978620991b63a574e1555eaa4737a7c5c1",
        "3": "SYSTEM_GENERATED",
        time: "1512864703",
        name: "Vivek",
        PK:
          "0x041ff2e218d38e878be8444b4c5bcc8cdfe270246dff6d393f82301e3ad939bfbc97783aa61d7f64ab068c23c57082a5978620991b63a574e1555eaa4737a7c5c1",
        approverPK: "SYSTEM_GENERATED",
        timeInString:
          "Sat Dec 09 2017 19:11:43 GMT-0500 (Eastern Standard Time)"
      },
      event: "UserCreated",
      signature:
        "0x8af6cfc5d7795260abf322e0e15fcd034e54ff70d088757f2f240ca7c7ccf0da",
      raw: {
        data:
          "0x000000000000000000000000000000000000000000000000000000005a2c7bbf000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000001800000000000000000000000000000000000000000000000000000000000000005566976656b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008430783034316666326532313864333865383738626538343434623463356263633863646665323730323436646666366433393366383233303165336164393339626662633937373833616136316437663634616230363863323363353730383261353937383632303939316236336135373465313535356561613437333761376335633100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001053595354454d5f47454e45524154454400000000000000000000000000000000",
        topics: [
          "0x8af6cfc5d7795260abf322e0e15fcd034e54ff70d088757f2f240ca7c7ccf0da"
        ]
      },
      contract: {
        currentProvider: {
          host: "http://localhost:8545",
          timeout: 0,
          connected: true
        },
        _requestManager: {
          provider: {
            host: "http://localhost:8545",
            timeout: 0,
            connected: true
          },
          providers: {},
          subscriptions: {}
        },
        givenProvider: null,
        providers: {},
        _provider: {
          host: "http://localhost:8545",
          timeout: 0,
          connected: true
        },
        options: {
          data:
            "0x60606040526040516103483803806103488339810160405280805182019190602001805182019190602001805182019190505042600081905550826001908051906020019061004f929190610260565b508160029080519060200190610066929190610260565b50806003908051906020019061007d929190610260565b507f8af6cfc5d7795260abf322e0e15fcd034e54ff70d088757f2f240ca7c7ccf0da6000546001600260036040518085815260200180602001806020018060200184810384528781815460018160011615610100020316600290048152602001915080546001816001161561010002031660029004801561013f5780601f106101145761010080835404028352916020019161013f565b820191906000526020600020905b81548152906001019060200180831161012257829003601f168201915b50508481038352868181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156101c25780601f10610197576101008083540402835291602001916101c2565b820191906000526020600020905b8154815290600101906020018083116101a557829003601f168201915b50508481038252858181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156102455780601f1061021a57610100808354040283529160200191610245565b820191906000526020600020905b81548152906001019060200180831161022857829003601f168201915b505097505050505050505060405180910390a1505050610305565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106102a157805160ff19168380011785556102cf565b828001600101855582156102cf579182015b828111156102ce5782518255916020019190600101906102b3565b5b5090506102dc91906102e0565b5090565b61030291905b808211156102fe5760008160009055506001016102e6565b5090565b90565b6035806103136000396000f3006060604052600080fd00a165627a7a723058208de0bf85103383b909e8fd8af81ed336ab5769853a567d3dd73cca691da005230029",
          arguments: [
            "Vivek",
            "0x041ff2e218d38e878be8444b4c5bcc8cdfe270246dff6d393f82301e3ad939bfbc97783aa61d7f64ab068c23c57082a5978620991b63a574e1555eaa4737a7c5c1",
            "SYSTEM_GENERATED"
          ],
          address: "0xa65dda711703496094050312f87F2B4D1E64F536",
          jsonInterface: [
            {
              inputs: [
                { name: "_name", type: "string" },
                { name: "_PK", type: "string" },
                { name: "_approverPK", type: "string" }
              ],
              payable: true,
              stateMutability: "payable",
              type: "constructor",
              signature: "constructor"
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
              type: "event",
              signature:
                "0x8af6cfc5d7795260abf322e0e15fcd034e54ff70d088757f2f240ca7c7ccf0da"
            }
          ]
        },
        defaultAccount: null,
        defaultBlock: "latest",
        methods: {},
        events: {},
        _address: "0xa65dda711703496094050312f87F2B4D1E64F536",
        _jsonInterface: [
          {
            inputs: [
              { name: "_name", type: "string" },
              { name: "_PK", type: "string" },
              { name: "_approverPK", type: "string" }
            ],
            payable: true,
            stateMutability: "payable",
            type: "constructor",
            signature: "constructor"
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
            type: "event",
            signature:
              "0x8af6cfc5d7795260abf322e0e15fcd034e54ff70d088757f2f240ca7c7ccf0da"
          }
        ]
      }
    },
    {
      logIndex: 0,
      transactionIndex: 0,
      transactionHash:
        "0xdc0964fc557dba6912185a98560892e29e9cfbecabad4341ef9e2a0c8cc96194",
      blockHash:
        "0x6dda1e3fbd56b2c5c345e8b2cda04e0c6efd6ef119af1465a3c495039d9479ff",
      blockNumber: 1352,
      address: "0xFfBe0AFdc18472Fc2989b1307A690a3021F37766",
      type: "mined",
      id: "log_383f141c",
      returnValues: {
        "0": "1512864703",
        "1":
          "0xa36a11a99bd247c846b471b6079a362d87b5b17d10b562bca29988db2e0b6b9c",
        "2":
          "0x041ff2e218d38e878be8444b4c5bcc8cdfe270246dff6d393f82301e3ad939bfbc97783aa61d7f64ab068c23c57082a5978620991b63a574e1555eaa4737a7c5c1",
        "3":
          "0xf939adac44bf4b90b5633507452dce7ea9198960734c52600538df29ee49f8c6",
        "4": "SYSTEM_GENERATED",
        time: "1512864703",
        id:
          "0xa36a11a99bd247c846b471b6079a362d87b5b17d10b562bca29988db2e0b6b9c",
        PK:
          "0x041ff2e218d38e878be8444b4c5bcc8cdfe270246dff6d393f82301e3ad939bfbc97783aa61d7f64ab068c23c57082a5978620991b63a574e1555eaa4737a7c5c1",
        roleId:
          "0xf939adac44bf4b90b5633507452dce7ea9198960734c52600538df29ee49f8c6",
        approverPK: "SYSTEM_GENERATED",
        timeInString:
          "Sat Dec 09 2017 19:11:43 GMT-0500 (Eastern Standard Time)"
      },
      event: "RoleAssignmentCreated",
      signature:
        "0x43907461bed5c0ab35831849d566cb4d48637eb56f3ec4a23811c27ca177c4ce",
      raw: {
        data:
          "0x000000000000000000000000000000000000000000000000000000005a2c7bbfa36a11a99bd247c846b471b6079a362d87b5b17d10b562bca29988db2e0b6b9c00000000000000000000000000000000000000000000000000000000000000a0f939adac44bf4b90b5633507452dce7ea9198960734c52600538df29ee49f8c60000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000000000000000008430783034316666326532313864333865383738626538343434623463356263633863646665323730323436646666366433393366383233303165336164393339626662633937373833616136316437663634616230363863323363353730383261353937383632303939316236336135373465313535356561613437333761376335633100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001053595354454d5f47454e45524154454400000000000000000000000000000000",
        topics: [
          "0x43907461bed5c0ab35831849d566cb4d48637eb56f3ec4a23811c27ca177c4ce"
        ]
      },
      contract: {
        currentProvider: {
          host: "http://localhost:8545",
          timeout: 0,
          connected: true
        },
        _requestManager: {
          provider: {
            host: "http://localhost:8545",
            timeout: 0,
            connected: true
          },
          providers: {},
          subscriptions: {}
        },
        givenProvider: null,
        providers: {},
        _provider: {
          host: "http://localhost:8545",
          timeout: 0,
          connected: true
        },
        options: {
          data:
            "0x6060604052604051610351380380610351833981016040528080518201919060200180519060200190919080518201919050504283836040518084815260200183805190602001908083835b602083101515610070578051825260208201915060208101905060208303925061004b565b6001836020036101000a0380198251168184511680821785525050505050509050018260001916600019168152602001935050505060405180910390206000816000191690555082600190805190602001906100cd929190610269565b50816002816000191690555080600390805190602001906100ef929190610269565b507f43907461bed5c0ab35831849d566cb4d48637eb56f3ec4a23811c27ca177c4ce4260005460016002546003604051808681526020018560001916600019168152602001806020018460001916600019168152602001806020018381038352868181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156101cb5780601f106101a0576101008083540402835291602001916101cb565b820191906000526020600020905b8154815290600101906020018083116101ae57829003601f168201915b505083810382528481815460018160011615610100020316600290048152602001915080546001816001161561010002031660029004801561024e5780601f106102235761010080835404028352916020019161024e565b820191906000526020600020905b81548152906001019060200180831161023157829003601f168201915b505097505050505050505060405180910390a150505061030e565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106102aa57805160ff19168380011785556102d8565b828001600101855582156102d8579182015b828111156102d75782518255916020019190600101906102bc565b5b5090506102e591906102e9565b5090565b61030b91905b808211156103075760008160009055506001016102ef565b5090565b90565b60358061031c6000396000f3006060604052600080fd00a165627a7a7230582071e31d223cebc274b66d3f184d5055c01605416c6bb11cb18f31c1af984c851d0029",
          arguments: [
            "0x041ff2e218d38e878be8444b4c5bcc8cdfe270246dff6d393f82301e3ad939bfbc97783aa61d7f64ab068c23c57082a5978620991b63a574e1555eaa4737a7c5c1",
            "0xf939adac44bf4b90b5633507452dce7ea9198960734c52600538df29ee49f8c6",
            "SYSTEM_GENERATED"
          ],
          address: "0xFfBe0AFdc18472Fc2989b1307A690a3021F37766",
          jsonInterface: [
            {
              inputs: [
                { name: "_PK", type: "string" },
                { name: "_roleId", type: "bytes32" },
                { name: "_approverPK", type: "string" }
              ],
              payable: true,
              stateMutability: "payable",
              type: "constructor",
              signature: "constructor"
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
              type: "event",
              signature:
                "0x43907461bed5c0ab35831849d566cb4d48637eb56f3ec4a23811c27ca177c4ce"
            }
          ]
        },
        defaultAccount: null,
        defaultBlock: "latest",
        methods: {},
        events: {},
        _address: "0xFfBe0AFdc18472Fc2989b1307A690a3021F37766",
        _jsonInterface: [
          {
            inputs: [
              { name: "_PK", type: "string" },
              { name: "_roleId", type: "bytes32" },
              { name: "_approverPK", type: "string" }
            ],
            payable: true,
            stateMutability: "payable",
            type: "constructor",
            signature: "constructor"
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
            type: "event",
            signature:
              "0x43907461bed5c0ab35831849d566cb4d48637eb56f3ec4a23811c27ca177c4ce"
          }
        ]
      }
    }
  ],
  pendingApprovals: { organizations: [] }
};
