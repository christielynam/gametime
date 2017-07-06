class GameState {
  constructor(canvas, ctx, phase, hiScore, countDown) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.phase = phase;
    this.score = 0;
    this.hiScore = hiScore;
    this.countDown = countDown;
  }

  collide(craft, bullet) {
    return bullet.x < craft.x +  craft.width &&
    bullet.x + bullet.width > craft.x &&
    bullet.y < craft.y + craft.height &&
    bullet.y + bullet.height > craft.y;
  }

  updateScore() {
    this.score += 100;
    document.getElementById('player-score').innerHTML = this.score;
  }

  updateHiScore() {
    if (this.score > this.hiScore) {
      document.querySelector('.hi-score').innerHTML = this.score;
      this.hiScore = this.score;
    }
  }

  updateLocalStorage() {
    let stringifiedHiScore = JSON.stringify(this.hiScore);

    localStorage.setItem('hi-score', stringifiedHiScore);

  }

  retrieveLocalStorage() {
    this.hiScore = JSON.parse(localStorage.getItem('hi-score'));
    document.querySelector('.hi-score').innerHTML = this.hiScore;
  }

  gameOver() {
    document.querySelector('.game-counter').textContent = 'GAME OVER';
  }


  // countDownInit() {
  //   this.countDown = 3;
  //   this.countDownStart();
  // }
  //
  // countDownStart() {
  //   if (this.countDown > 0) {
  //     document.querySelector(".game-counter").textContent = this.countDown;
  //     this.countDown--;
  //     setTimeout(this.countDownStart, 1000);
  //   } else {
  //     document.querySelector(".game-counter").textContent = '';
  //
  //   }
  // }


}



module.exports = GameState;