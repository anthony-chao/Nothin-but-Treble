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
        // this.style.border = "1px dashed #ccc";      //This adds a border to the containers everytime you're dragging the element
      }

      function dragLeave() {
        // this.style.border = "none";       
      }

      function removeNode(node) {
        node.parentNode.removeChild(node);
      }

      function dragDrop(e) {
        // this.style.border = "none";        //unnecessary
        console.log(e);
        console.log(e.target.nodeName);
        e.preventDefault();
        let data = e.dataTransfer.getData("text");
        let nodeCopy = document.getElementById(data).cloneNode(true);   //need to add IF statement in here depending on originating space (if original had container, don't make clone)

        var isLeft = 'note' == data               //this entire code below makes it so if you drag a note to the same spot, it just replaces it
        nodeCopy.id = "img" + e.target.id;
        if (isLeft) {
          if (e.target.nodeName == 'IMG') {
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
        e.stopPropagation();
        return false;

      }
    }
    
    setupSheet() {
      const bar = document.createElement("ul");
  
      for (let column = 0; column < 4; column++) {
        for (let row = 0; row < 13; row++) {
          const beat = document.createElement("li");
          beat.dataset.pos = JSON.stringify([column, row])
          bar.append(beat);
          if (row % 2 === 0 && row != 0 && row != 12) {
            beat.classList.add("even-row");
          }
          else if (row === 0) {
            beat.classList.add("first-row")
          }
          else if (row === 12) {
            beat.classList.add("last-row")
          }
          else {
            beat.classList.add("odd-row");
          }
          beat.classList.add("droppable");
        }
      }

      const cleff = document.createElement('img');
      cleff.src = "http://assets.stickpng.com/images/5a02cb3018e87004f1ca43e5.png"
      cleff.classList.add("cleff");
      bar.append(cleff);
  
      this.el.append(bar);
  
    }

  }
  
  export default Sheet;