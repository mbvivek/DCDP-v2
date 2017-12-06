var Web3 = require("web3");
var Accounts = require("web3-eth-accounts");

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

web3.eth.getAccounts().then(function(accounts) {
  web3.eth.accounts = accounts;
});
