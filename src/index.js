const Sheet = require("./classes/sheet.js").default;
const Notes = require("./classes/notes.js").default;
const Player = require("./classes/player.js").default;

document.addEventListener("DOMContentLoaded", () => {

  const rootEl = document.querySelector(".MusicSheet");
  let sheet = new Sheet(rootEl);
  const noteRoot = document.querySelector(".Notes")
  const notes = new Notes(noteRoot);
  const player = new Player();
  const playButton = document.getElementById('playButton');
  let instruments = {saxophone:'saxophone', clarinet:'clarinet', trumpet:'trumpet'}
  let instrument = instruments.saxophone;

  // this code was used for creating a dropdown for the instruments.
  // const selectInstrument = document.getElementById('instrumentSelector');
  // selectInstrument.addEventListener('change',function () { 
  //   instrument = instruments[this.value];
  // }, false); 
  const selectInstrument = document.getElementById('instrumentSelector');  
  const radioButtons = document.querySelectorAll('input[name="radiobutton"]');
  selectInstrument.addEventListener("click", () => {
      let selectedSize;
      for (const radioButton of radioButtons) {
          if (radioButton.checked) {
              selectedSize = radioButton.value;
              break;
          }
      }
      instrument = selectedSize
    });

  playButton.addEventListener('click', () => {
    player.instrument = instrument;
    player.playMusic(player.instrument);
  });

  const resetButton = document.getElementById('resetButton');
  resetButton.addEventListener('click', player.resetMusicSheet.bind(player));
  // resetButton.addEventListener('click', sheet.resetCountObject);

  let instructionsButton = document.getElementById('instructionsButton');
  instructionsButton.addEventListener('click',sheet.displayInstructions.bind(sheet)); 
});


