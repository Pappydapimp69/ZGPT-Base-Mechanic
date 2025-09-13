function parseCommand(cmd) {
  const [verb, ...rest] = cmd.trim().toLowerCase().split(" ");
  const arg = rest.join(" ");

  if (systems[verb]) {
    systems[verb](arg);
  } else if (verb === "look") {
    const room = gameState.world.rooms[gameState.hero.room];
    ui.print(room.desc);
  } else if (["n","s","e","w"].includes(verb)) {
    move(verb);
  } else {
    ui.print("Unknown command.");
  }
}

function move(dir) {
  const room = gameState.world.rooms[gameState.hero.room];
  if (room.exits[dir]) {
    gameState.hero.room = room.exits[dir];
    ui.print(gameState.world.rooms[gameState.hero.room].desc);
  } else {
    ui.print("You can't go that way.");
  }
}
