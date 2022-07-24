class Music {
    constructor() {
        this.musicPlaying = false;
    }

    stop(){
        if(this.musicPlaying){
            this.musicPlaying = false;
        }
    }

    start(){
        if(!this.musicPlaying){
            this.musicPlaying = true;
            this.player.resetMusic();
        }
    }

    setPlayer(player){
        this.player = player;
    }
}

export default Music;