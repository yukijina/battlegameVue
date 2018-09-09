new Vue ({
  el: "#app",
  data: {
    isRunning: false,
    playerHealth: 100,
    monsterHealth: 100
  },
  methods: {
    start: function() {
      this.isRunning = !this.isRunning;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack: function() {
      var damage = this.calcDamage(3,10);
      this.monsterHealth -= damage;
      if(this.checkWin()) {
        return;
      }
      this.monsterAttacks();
      this.checkWin();
    },
    superAttack: function() {
      var damage = this.calcDamage(10,20);
      this.monsterHealth -= damage;
      if(this.checkWin()) {
        return;
      }
      this.monsterAttacks();
    },
    heal: function() {
      if(this.playherHealth <= 80) {
        this.playerHealth += 5;
      } else {
        this.playerHealth = 100;
      }
      this.monsterAttacks();
    },
    giveUp: function() {
      alert('game is over');
      this.isRunning = false;
    },
    monsterAttacks: function() {
      var damage = this.calcDamage(5,12);
      this.playerHealth -= damage;
      this.checkWin();
    },
    calcDamage: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) +1, min);
    },
    checkWin: function() {
      if(this.monsterHealth <=0) {
        if(confirm('You won! New Game?')){
          this.start();
        } else {
          this.isRunnung = false;
        }
        return true;
      }
      return false;
    }
  } //the end of method
}) //the end of Vue
