class Player {

    constructor(music){
        this.music = music;
        this.lastTime = Date.now();
        this.step = 0;

        this.containers = document.querySelectorAll('.droppable');
    }

    resetMusic(){
        this.step = 0;
    }

    playMusic() {

        const rowToNote = new Object();
        rowToNote[0] = document.getElementById('5a');
        rowToNote[1] = document.getElementById('4g');
        rowToNote[2] = document.getElementById('4f');
        rowToNote[3] = document.getElementById('4e');
        rowToNote[4] = document.getElementById('4d');
        rowToNote[5] = document.getElementById('4c');
        rowToNote[6] = document.getElementById('4b');
        rowToNote[7] = document.getElementById('4a');
        rowToNote[8] = document.getElementById('3g');
        rowToNote[9] = document.getElementById('3f');
        rowToNote[10] = document.getElementById('3e');
        rowToNote[11] = document.getElementById('3d');
        rowToNote[12] = document.getElementById('3c');

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
                }, 500 * i);
            })(i);
        }
        
        
        // let singleNote = document.getElementById('3c');
        // let secondNote = document.getElementById('3d');
        // singleNote.play();
        console.log(notesToBePlayed);           //this returns an array of the rows
        
    }
}

export default Player;