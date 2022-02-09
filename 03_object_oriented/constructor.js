/*
// constructor function
function SoccerPlayer() {
    this.position = 'Forward';
}

var VanPersie = new SoccerPlayer();
VanPersie.position; // Forward
*/

function SoccerPlayer(name, position) {
    this.name = name;
    this.position = position;
    this.whatIsYourName = function() {
        return 'My name is ' + this.name;
    };
    this.whatIsYourPosition = function() {
        return 'My position is ' + this.position;
    };
}

var player = new SoccerPlayer('Park Ji Sung', 'Wing Forward');
console.log(player.whatIsYourName()); // My name is Park Ji Sung
console.log(player.whatIsYourPosition()); // My position is Wing Forward

player.constructor; // function: SoccerPlayer
var player2 = new player.constructor('Koo Ja Cheol');
console.log(player2.name); // Koo Ja Cheol
console.log(player2 instanceof SoccerPlayer); // true

// constructor property
console.log(player instanceof SoccerPlayer); // true
console.log(player instanceof Object); // true
