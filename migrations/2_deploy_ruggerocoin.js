var RuggeroCoin = artifacts.require("./RuggeroCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(RuggeroCoin);
};
