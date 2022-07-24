const Sheet = require("./classes/sheet.js").default;
const Notes = require("./classes/notes.js").default;
const Music = require("./classes/music.js").default;
const Player = require("./classes/player.js").default;

document.addEventListener("DOMContentLoaded", () => {

  const rootEl = document.querySelector(".MusicSheet");
  new Sheet(rootEl);
  const notes = new Notes(rootEl);
  const music = new Music();
  const player = new Player(music);
  music.setPlayer(player);
  const playButton = document.getElementById('playButton');
  playButton.addEventListener('click', player.playMusic.bind(player));
});


