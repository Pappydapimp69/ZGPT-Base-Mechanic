const systems = {
  save() {
    localStorage.setItem("zaneSave", JSON.stringify(gameState));
    ui.print("(Game saved.)");
  },
  load() {
    const data = localStorage.getItem("zaneSave");
    if (data) {
      Object.assign(gameState, JSON.parse(data));
      ui.print("(Game loaded.)");
    } else {
      ui.print("(No save found.)");
    }
  },
  stats() {
    ui.print(`HP: ${gameState.hero.hp}, ATK: ${gameState.hero.atk}, DEF: ${gameState.hero.def}`);
  },
  inv() {
    if (gameState.hero.inventory.length === 0) {
      ui.print("Inventory is empty.");
    } else {
      ui.print("Inventory: " + gameState.hero.inventory.map(i => i.name).join(", "));
    }
  }
};
