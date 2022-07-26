class Notes {

    constructor(el) {
        this.el = el;
        this.setupNote();

        const note = document.querySelector(".movingNotes")

        note.addEventListener("dragstart", dragStart);
        note.addEventListener("dragend", dragEnd);
        let draggableNote = null;
        
        function dragStart(e) {
            draggableNote = this;
            e.dataTransfer.setData("text", e.target.id);
          }
          
          function dragEnd() {
            draggableNote = null;
          }
    }

    setupNote() {
        const quarterNote = document.createElement("img");
        quarterNote.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Quarter_note_with_upwards_stem.svg/320px-Quarter_note_with_upwards_stem.svg.png?20210123112410";
        quarterNote.classList.add("movingNotes");
        quarterNote.setAttribute("draggable", true);
        quarterNote.setAttribute("id","note");
        this.el.append(quarterNote);
      }
      
}

export default Notes;