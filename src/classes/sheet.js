class Sheet {

    constructor(el) {
      this.el = el;
      this.setupSheet();

      //drag and drop functionality
      const containers = document.querySelectorAll(".droppable")

      // Loop through containers (droppable places) and call drag events
      for (const container of containers) {
        container.addEventListener('dragover', dragOver);
        container.addEventListener('dragenter', dragEnter);
        container.addEventListener('dragleave', dragLeave);
        container.addEventListener('drop', dragDrop);
      }

      function dragOver(e) {
        e.preventDefault();
      }

      function dragEnter(e) {
        e.preventDefault();
      }

      function dragLeave() {
      }

      function removeNode(node) {
        node.parentNode.removeChild(node);
      }

      let countObject = {};

      function dragDrop(e) {

        e.preventDefault();

        if (countObject.hasOwnProperty(e.target.dataset.column)) {
          throw new Error('There is already a note in this beat!')
        }

        let data = e.dataTransfer.getData("text");
        let nodeCopy = document.getElementById(data).cloneNode(true); 

        var isLeft = 'note' === data               //this entire code below makes it so if you drag a note to the same spot, it just replaces it
        nodeCopy.id = "img" + e.target.id;
        if (isLeft) {
          if (e.target.nodeName === 'IMG') {
            e.target.parentNode.appendChild(nodeCopy);
            removeNode(e.target);
          }
          else 
            e.target.appendChild(nodeCopy);
        }
        else {
          if (e.target.nodeName != 'IMG') {
            removeNode(document.getElementById(data));
            e.target.appendChild(nodeCopy);
          }
        }
        countObject[e.target.dataset.column] = 1;
        e.stopPropagation();
        return false;
      }

      function resetCountObject() {
        for (let member in countObject) { delete countObject[member]};
      }

    }
    
    setupSheet() {
      const bar = document.createElement("ul");
  
      for (let column = 0; column < 12; column++) {
        const beat = document.createElement("li");
        if (column >= 0 && column < 4) {
          beat.classList.add("first-bar");
        }
        else if (column >= 4 && column < 8) {
          beat.classList.add("second-bar");
        }
        else {
          beat.classList.add("third-bar");
        }
        for (let row = 0; row < 13; row++) {
          const note = document.createElement("div");
          note.dataset.column = column;
          note.dataset.row = row;
          beat.append(note);
          if (row % 2 === 0 && row != 0 && row != 12) {
            note.classList.add("even-row");
          }
          else if (row === 0) {
            note.classList.add("first-row")
          }
          else if (row === 12) {
            note.classList.add("last-row")
          }
          else {
            note.classList.add("odd-row");
          }
          note.classList.add("droppable");
          if (row <= 6) {
            note.classList.add("aboveA");
          }
        }
        bar.append(beat);
      }

      const cleff = document.createElement('img');
      cleff.src = "http://assets.stickpng.com/images/5a02cb3018e87004f1ca43e5.png"
      cleff.classList.add("cleff");
      bar.append(cleff);
  
      this.el.append(bar);
  
    }

    displayInstructions(){
      let instructionsButton = document.getElementById('instructionsButton');
      instructionsButton.classList.toggle("showInstructions");
    }

  }
  
  export default Sheet;