const Sheet = require("./classes/sheet.js").default;
const Notes = require("./classes/notes.js").default;
const Player = require("./classes/player.js").default;

document.addEventListener("DOMContentLoaded", () => {

  const rootEl = document.querySelector(".MusicSheet");
  new Sheet(rootEl);
  const notes = new Notes(rootEl);
  const player = new Player();
  const playButton = document.getElementById('playButton');
  playButton.addEventListener('click', player.playMusic.bind(player));
  const resetButton = document.getElementById('resetButton');
  resetButton.addEventListener('click', player.resetMusicSheet.bind(player));
});


