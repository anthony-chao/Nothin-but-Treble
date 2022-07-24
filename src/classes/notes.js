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
        const createNote = document.createElement('div');
        const quarterNoteHead = document.createElement("img");
        // quarterNoteHead.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Quarter_note_with_upwards_stem.svg/320px-Quarter_note_with_upwards_stem.svg.png?20210123112410";
        quarterNoteHead.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/BlackNotehead.svg/1170px-BlackNotehead.svg.png"
        quarterNoteHead.classList.add("movingNotes");
        quarterNoteHead.setAttribute("draggable", true);
        quarterNoteHead.setAttribute("id","note");
        createNote.append(quarterNoteHead);
        const quarterNoteStem = document.createElement("img");
        quarterNoteStem.src = "https://static.thenounproject.com/png/657409-200.png"
        quarterNoteStem.setAttribute("id", "noteStem");
        createNote.append(quarterNoteStem);
        this.el.append(createNote);
      }
      
}

export default Notes;