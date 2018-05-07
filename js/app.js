// Enemies our player must avoid
var Enemy = function (line) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
  this.x = Math.random() * (1000 - 0) + 0;
  this.y = line * 62.5 + (line == 0 ? 62.5 : 82.5);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x = this.x > 600 ? -100 : this.x; 

  setInterval(() => this.x += 1, 10000000 * dt);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function () {
  this.x;
  this.y;
  this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function (dt) {
  if (!this.x && !this.y) {
    this.x = canvas.width / 2 - Resources.get(this.sprite).width / 2;
    this.y = 4 * 101;
  }
};

Player.prototype.render = function () {
  if (this.y < 0) this.y = 404;

  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (direction) {
  switch (direction) {
    case 'left':
      this.x -= 101;
      break;

    case 'up':
      this.y -= 83;
      break;

    case 'right':
      this.x += 101;
      break;

    case 'down':
      this.y += 83;
      break;
  }

  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}


var allEnemies = [];

for (let i = 0; i < 3; i++) {
  allEnemies.push(new Enemy(i));
}

var player = new Player();

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
