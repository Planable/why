const omelette = require("omelette");

var complete = omelette("hello <name> <surname>");

// This is your logic
complete.on("name", ({ reply }) => {
  reply(["fatih", "rotimi"]);
});
complete.on("surname", ({ reply }) => {
  reply(["akin", "best"]);
});

complete.init();
console.log("Hello i am the program");
