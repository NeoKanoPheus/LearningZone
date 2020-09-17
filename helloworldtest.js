const Helloworld = artifacts.require("Helloworld");
contract ("HelloWorld", async function() {
  it("should initialize correctly", async function() {
    let instance = await Helloworld.deployed();
    let message = await instance.getMessage();
    assert(message ==="Helloooo Againnnn Eboooo...");
  });
});
