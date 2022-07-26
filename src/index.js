const Sheet = require("./classes/sheet.js").default;
const Notes = require("./classes/notes.js").default;
const Player = require("./classes/player.js").default;

document.addEventListener("DOMContentLoaded", () => {

  const rootEl = document.querySelector(".MusicSheet");
  let sheet = new Sheet(rootEl);
  const notes = new Notes(rootEl);
  const player = new Player();
  const selectInstrument = document.getElementById('instrumentSelector');
  const playButton = document.getElementById('playButton');
  let instruments = {saxophone:'saxophone', clarinet:'clarinet', trumpet:'trumpet'}
  let instrument = instruments.saxophone;   //this keeps getting reassigned to piano
  selectInstrument.addEventListener('change',function () { 
    console.log(instrument);
    instrument = instruments[this.value];
    console.log(instrument);} ,
  false); 
  console.log(instrument);
  playButton.addEventListener('click', () => {
    player.instrument = instrument;
    player.playMusic(player.instrument);
  });

  const resetButton = document.getElementById('resetButton');
  resetButton.addEventListener('click', player.resetMusicSheet.bind(player));
  // resetButton.addEventListener('click', sheet.resetCountObject);
});


