class View {
    constructor(game, el) {
      this.game = game;
      this.el = el;
      this.setupSheet()
    }
    
    setupSheet() {
      const bar = document.createElement("ul");
  
      for (let column = 0; column < 4; column++) {
        for (let row = 0; row < 13; row++) {
          const beat = document.createElement("li");
          beat.dataset.pos = JSON.stringify([column, row])
          bar.append(beat);
          if (row % 2 === 0) {
            beat.classList.add("even-row");
          }
          else {
            beat.classList.add("odd-row");
          }
        }
      }
  
      this.el.append(bar);
  
    }
  }
  
  module.exports = View;