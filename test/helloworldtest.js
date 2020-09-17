const Helloworld = artifacts.require("Helloworld");
contract ("HelloWorld", async function() {
  it("should initialize correctly", async function() {
    let instance = await Helloworld.deployed();
    let message = await instance.getMessage();
    assert(message ==="Helloooo Againnnn...", "Message should be Helloooo Againnnn...");
  });
  it("should set the message correctly", async function() {
    let instance = await Helloworld.deployed();
    await instance.setMessage("Testing Message");
    let message  await instance.getMessage();
    asssert(message === "Testing Message", "Message should be the same as we set it to");
  });
});
