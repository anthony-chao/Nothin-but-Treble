const Sheet = require("./classes/sheet.js").default;
const Notes = require("./classes/notes.js").default;
const Player = require("./classes/player.js").default;

document.addEventListener("DOMContentLoaded", () => {

  const rootEl = document.querySelector(".MusicSheet");
  const sheet = new Sheet(rootEl);
  const notes = new Notes(rootEl);
  const player = new Player();
  // const selectInstrument = document.getElementById('instrumentSelector');
  // let instrument = "piano";
  // selectInstrument.addEventListener('change',function () { instrument = this.value;} ,false); 
  const playButton = document.getElementById('playButton');
  playButton.addEventListener('click', player.playMusic.bind(player));
  const resetButton = document.getElementById('resetButton');
  resetButton.addEventListener('click', player.resetMusicSheet.bind(player));
  resetButton.addEventListener('click', sheet.resetCountObject);
});


