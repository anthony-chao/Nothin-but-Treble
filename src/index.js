const Bars = require("./classes/bars.js");
const View = require("./classes/view.js");

document.addEventListener("DOMContentLoaded", () => {

  const bars = new Bars();
  const rootEl = document.querySelector(".MusicSheet");
  new View(bars, rootEl);


  //drag and drop functionality
  const notes = document.querySelector(".movingNotes")
  const containers = document.querySelectorAll(".droppable")

  // Notes Listeners
  notes.addEventListener("dragstart", dragStart);
  notes.addEventListener("dragend", dragEnd);

  // Loop through containers (droppable places) and call drag events
  for (const container of containers) {
    container.addEventListener('dragover', dragOver);
    container.addEventListener('dragenter', dragEnter);
    container.addEventListener('dragleave', dragLeave);
    container.addEventListener('drop', dragDrop);
  }
  
  //Drag Functions
  function dragStart() {
    console.log('start');
  }
  
  function dragEnd() {
    console.log('end');
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnter(e) {
    e.preventDefault();
  }

  function dragLeave() {
    // this.className = 'container';
  }

  function dragDrop() {
    // this.className = 'container';
    this.append(notes);
  }
});


