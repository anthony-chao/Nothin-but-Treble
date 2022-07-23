class View {
    constructor(sheet, el) {
      this.sheet = sheet;
      this.el = el;
      this.setupSheet();
      this.setupNote();
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
  
      this.el.append(bar);
  
    }

    setupNote() {
      const quarterNote = document.createElement("img");
      quarterNote.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Quarter_note_with_upwards_stem.svg/320px-Quarter_note_with_upwards_stem.svg.png?20210123112410";
      quarterNote.classList.add("movingNotes");
      quarterNote.setAttribute("draggable", true);
      this.el.append(quarterNote);
    }
  }
  
  module.exports = View;