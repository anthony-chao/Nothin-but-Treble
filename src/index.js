// const Bars = require("./classes/bars.js");
const Sheet = require("./classes/sheet.js").default;
const Notes = require("./classes/notes.js").default;

document.addEventListener("DOMContentLoaded", () => {

  // const bars = new Bars();
  const rootEl = document.querySelector(".MusicSheet");
  const notes = new Notes(rootEl);
  new Sheet(rootEl);

});


