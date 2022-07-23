const Bars = require("./classes/bars.js");
const View = require("./classes/view.js");

document.addEventListener("DOMContentLoaded", () => {

  const bars = new Bars();
  const rootEl = document.querySelector(".MusicSheet");
  new View(bars, rootEl);

});