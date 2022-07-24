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

        for (const container of this.containers) {
            if (container.children.length !== 0) {
                console.log(container.dataset.pos)
            }
        }
        

        // for (let i = 0; i < this.instrumentSeqs.length; i++) {
        //     let instrumentDivs = this.instrumentSeqs[i].children;
        //     let instrumentBoxes = [];
        //     for(let divIndex = 0; divIndex < instrumentDivs.length; divIndex++){
        //         instrumentBoxes.push(instrumentDivs[divIndex].children[0]);
        //     }
        //     let instrumentBox = instrumentBoxes[step];
        //     let toHighlight = this.instrumentLabs[i].children[3].children[step];
        //     toHighlight.classList.add("playing");
        //     let toUnHighlight = this.instrumentLabs[i].children[3].children[(this.beatsInfo.totalSteps+step-1)%this.beatsInfo.totalSteps];
        //     toUnHighlight.classList.remove("playing");
            

        //     if(instrumentBox.checked){
        //         let audioNamePlural = this.instrumentSeqs[i].id
        //         let audioNameSingular = audioNamePlural.slice(0,audioNamePlural.length-1);
        //         let audioName = audioNamePlural.slice(0, audioNamePlural.length-1)+'1';
        //         let audioSelector = document.getElementById(`${audioNameSingular}Selector`);
        //         var audio = document.getElementById(`${audioSelector.value}`);
        //         var masterVol = document.getElementById('masterVol');
        //         var instrumentVol = document.getElementById(`${audioNameSingular}Vol`);
        //         audio.currentTime = 0;
        //         audio.volume = (0.01 * masterVol.value)*(0.01 * instrumentVol.value);
        //         audio.play();
        //     }
        // }
    }

    // unHighlightAll(){
    //     for(let i = 0; i < this.instrumentLabs.length; i++){
    //         let toUnHighlight = this.instrumentLabs[i].children[3];
    //         for(let j = 0; j < toUnHighlight.children.length; j++){
    //             toUnHighlight.children[j].classList.remove("playing");
    //         }
    //     }
    // }

}

export default Player;