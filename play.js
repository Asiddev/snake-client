console.log("Connecting ...");

process.stdout.write("\x07");

const { setupInput } = require("./input");
const { Game } = require("./src/Game");
const { UserInterface } = require("./src/UserInterface");
const { RemoteInterface } = require("./src/RemoteInterface");
const { connect } = require("./client");
const game = new Game(new UserInterface(), new RemoteInterface());

// Begin game

game.start();

console.log("Connecting ...");

setupInput(connect());
// const { connect } = require("./client");
// const { setupInput } = require("./input");

// setupInput(connect());
