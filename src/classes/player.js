class Player {

    constructor(){

        this.containers = document.querySelectorAll('.droppable');
        // this.instrumentSelected = document.querySelector("select").value; 

    }

    resetMusicSheet(){
        const images = document.querySelectorAll('#img');

        for (const image of images) {
            image.parentNode.removeChild(image);
        }

        Sheet.resetCountObject();
    }

    playMusic() {

        //add IF statement so that if instrumentSelected is trumpet, use second hash, if it's piano, use first hash

        const rowToNote = new Object();
        // rowToNote[0] = document.getElementById('5a');
        // rowToNote[1] = document.getElementById('4g');
        // rowToNote[2] = document.getElementById('4f');
        // rowToNote[3] = document.getElementById('4e');
        // rowToNote[4] = document.getElementById('4d');
        // rowToNote[5] = document.getElementById('4c');
        // rowToNote[6] = document.getElementById('4b');
        // rowToNote[7] = document.getElementById('4a');
        // rowToNote[8] = document.getElementById('3g');
        // rowToNote[9] = document.getElementById('3f');
        // rowToNote[10] = document.getElementById('3e');
        // rowToNote[11] = document.getElementById('3d');
        // rowToNote[12] = document.getElementById('3c');

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
                }, 800 * i);            //500 for piano, 800 for trumpet
            })(i);
        }
    }

}

export default Player;