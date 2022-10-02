class Player {

    constructor(){
        this.instrument = "clarinet";
        this.containers = document.querySelectorAll('.droppable');
    }

    playMusic(instrument) {

        const rowToNote = new Object();

        if (instrument === "saxophone") {
            rowToNote[0] = document.getElementById('sax5a');
            rowToNote[1] = document.getElementById('sax4g');
            rowToNote[2] = document.getElementById('sax4f');
            rowToNote[3] = document.getElementById('sax4e');
            rowToNote[4] = document.getElementById('sax4d');
            rowToNote[5] = document.getElementById('sax4c');
            rowToNote[6] = document.getElementById('sax4b');
            rowToNote[7] = document.getElementById('sax4a');
            rowToNote[8] = document.getElementById('sax3g');
            rowToNote[9] = document.getElementById('sax3f');
            rowToNote[10] = document.getElementById('sax3e');
            rowToNote[11] = document.getElementById('sax3d');
            rowToNote[12] = document.getElementById('sax3c');
        }
        else if (instrument === "trumpet") {
            rowToNote[0] = document.getElementById('trumpet5a');
            rowToNote[1] = document.getElementById('trumpet4g');
            rowToNote[2] = document.getElementById('trumpet4f');
            rowToNote[3] = document.getElementById('trumpet4e');
            rowToNote[4] = document.getElementById('trumpet4d');
            rowToNote[5] = document.getElementById('trumpet4c');
            rowToNote[6] = document.getElementById('trumpet4b');
            rowToNote[7] = document.getElementById('trumpet4a');
            rowToNote[8] = document.getElementById('trumpet3g');
            rowToNote[9] = document.getElementById('trumpet3f');
            rowToNote[10] = document.getElementById('trumpet3e');
            rowToNote[11] = document.getElementById('trumpet3d');
            rowToNote[12] = document.getElementById('trumpet3c');
        }
        else if (instrument === "clarinet") {
            rowToNote[0] = document.getElementById('clarinet5a');
            rowToNote[1] = document.getElementById('clarinet4g');
            rowToNote[2] = document.getElementById('clarinet4f');
            rowToNote[3] = document.getElementById('clarinet4e');
            rowToNote[4] = document.getElementById('clarinet4d');
            rowToNote[5] = document.getElementById('clarinet4c');
            rowToNote[6] = document.getElementById('clarinet4b');
            rowToNote[7] = document.getElementById('clarinet4a');
            rowToNote[8] = document.getElementById('clarinet3g');
            rowToNote[9] = document.getElementById('clarinet3f');
            rowToNote[10] = document.getElementById('clarinet3e');
            rowToNote[11] = document.getElementById('clarinet3d');
            rowToNote[12] = document.getElementById('clarinet3c');
        }

        const notesToBePlayed = [];

        for (const container of this.containers) {
            if (container.children.length !== 0) {
                notesToBePlayed.push(container.dataset.row);
            }
        }
        

        for (let i = 0; i < notesToBePlayed.length; i++) {
            (function(i) {
                setTimeout(function() {
                    rowToNote[notesToBePlayed[i]].play();
                }, 800 * i);
            })(i);
        }
    }

}

export default Player;