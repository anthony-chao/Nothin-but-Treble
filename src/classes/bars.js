class Bars {
    constructor() {
      this.bars = Bars.makeBars();
    }

    isEmptyPos(pos) {
      if (!Bars.isValidPos(pos)) {        // I'm not sure if we need this functionality - it'll just drop if it's not a valid position (like delete the note)
        throw new MoveError('Is not valid position on the music sheet!');
      }
  
      return (this.bars[pos[0]][pos[1][pos[2]]] === null);
    }

    placeNote(pos, note) {
      if (!this.isEmptyPos(pos)) {
        throw new MoveError('There is already a note on this beat!');
      }
  
      this.bars[pos[0]][pos[1][pos[2]]] = note;
    }

    static isValidPos(pos) {
        return (0 <= pos[0]) &&
        (pos[0] < 3) &&
        (0 <= pos[1]) &&
        (pos[1] < 4) &&
        (0 <= pos[2]) &&
        (pos[1] < 13);
    }

    static makeBars() {
        const bars = [];
    
        for (let i = 0; i < 3; i++) {
            let bar = [];
          for (let y = 0; y < 4; y++) {
            let beat = [];
            for (let z = 0; z < 13; z++) {
                beat.push(null);
            }
            bar.push(beat)
          }
          bars.push(bar)
        }
    
        return bars;
    }
}

module.exports = Bars;