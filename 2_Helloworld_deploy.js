const Helloworld = artifacts.require("Helloworld");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(Helloworld).then(function(instance){
    instance.setMessage("Helloooo Againnnn ...", {value: 1000000, from: accounts[0]}).then(function() {
      instance.getMessage().then(function(message) {
        console.log("Current Message: "+message);
      });
  });
});
};
