const Bars = require("./classes/bars.js");
const View = require("./classes/view.js");

document.addEventListener("DOMContentLoaded", () => {

  const bars = new Bars();
  const rootEl = document.querySelector(".MusicSheet");
  new View(bars, rootEl);

  //drag and drop functionality
  const note = document.querySelector(".movingNotes")
  const containers = document.querySelectorAll(".droppable")
  let draggableNote = null;

  // Notes Listeners
    note.addEventListener("dragstart", dragStart);
    note.addEventListener("dragend", dragEnd);

  // Loop through containers (droppable places) and call drag events
  for (const container of containers) {
    container.addEventListener('dragover', dragOver);
    container.addEventListener('dragenter', dragEnter);
    container.addEventListener('dragleave', dragLeave);
    container.addEventListener('drop', dragDrop);
  }
  
  //Drag Functions
  function dragStart(e) {
    draggableNote = this;
    e.dataTransfer.setData("text", e.target.id);
  }
  
  function dragEnd() {
    draggableNote = null;
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnter(e) {
    e.preventDefault();
    // this.style.border = "1px dashed #ccc";      //This adds a border to the containers everytime you're dragging the element
  }

  function dragLeave() {
    // this.style.border = "none";       
  }

  function dragDrop(e) {
    // this.style.border = "none";    
    e.preventDefault();
    let data = e.dataTransfer.getData("text");
    let nodeCopy = document.getElementById(data).cloneNode(true);
    this.appendChild(nodeCopy);
    e.stopPropagation();
    return false;
  }
});


