const { API_KEY } = require("./api-key");
const { Game } = require("@gathertown/gather-game-client");
global.WebSocket = require("isomorphic-ws");

/**** setup ****/

// what's going on here is better explained in the docs:
// https://gathertown.notion.site/Gather-Websocket-API-bf2d5d4526db412590c3579c36141063
const game = new Game(() => Promise.resolve({ apiKey: API_KEY }));
game.connect("XpBbyQtHBLY50MJk\\trychat"); // replace with your spaceId of choice
game.subscribeToConnection((connected) => console.log("connected?", connected));

/**** the good stuff ****/

game.subscribeToEvent("playerChats", (data, context) => {
  console.log(
    context?.player?.name ?? context.playerId,
    "send a message",
    data.playerChats.contents
  );
});
