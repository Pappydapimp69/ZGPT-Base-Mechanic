// Core state model
const gameState = {
  hero: {
    name: "Hero",
    hp: 10,
    atk: 2,
    def: 1,
    lvl: 1,
    xp: 0,
    gold: 0,
    inventory: [],
    room: "cell",
    journal: []
  },
  world: {},
  systems: { save: true, load: true }
};

// Initialize world from JSON
async function initWorld() {
  const res = await fetch("../data/starterWorld.json");
  gameState.world = await res.json();
  ui.print("You awaken in a cold, dark cell. A torch flickers.");
}

initWorld();
