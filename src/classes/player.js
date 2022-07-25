class Player {

    constructor(){

        this.containers = document.querySelectorAll('.droppable');

    }

    resetMusicSheet(){
        const images = document.querySelectorAll('#img');
        for (const image of images) {
            image.parentNode.removeChild(image);
        }
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
                    console.log(rowToNote[notesToBePlayed[i]]);
                }, 500 * i);
            })(i);
        }
    }

}

export default Player;