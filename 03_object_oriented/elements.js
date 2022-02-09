/*
// class (in javascript, it is also object)
var SoccerPlayer = function() { }; // rule (if it state object, start with capital)

SoccerPlayer.prototype = {
    name: String,
    age: Number,
    height: Number,
    weight: Number,
    position: String,
    team: String
};

// object (instance)
var park_ji_sung = new SoccerPlayer();

park_ji_sung.name = 'Park Ji Sung';
park_ji_sung.age = 31;
park_ji_sung.height = 178;
park_ji_sung.weight = 70;

console.log(park_ji_sung);
*/

// capsule (information hiding)
// aggregation, composition, inheritance
function Man() {
    this.name = 'Anonymous'; // 'this' is different with how called function
    this.gender = 'Man';
    this.Run = function() {
        return this.name + ' is running!';
    }
    this.Sleep = function() {
        return this.name + ' is sleeping!';
    }
}

function SoccerPlayer () {
    this.base = new Man();
    this.name = 'Anonymous Soccer Player'; // overriding
    this.Run = function() {
        return this.base.Run(); // overiding
    }
    this.Pass = function () { 
        return this.name + 'is passing to other player!';
    }
}

SoccerPlayer.prototype = new Man(); // new is constructor
var player = new SoccerPlayer ();

console.log(player.name); // Anonymous Soccer Player (overriding)
console.log(player.gender); // Man
console.log(player.Run()); // Anonymous is running! 
console.log(player.Pass()); // Anonymous Soccer Player is passing to other player!
console.log(player.Sleep()); // Anonymous Soccer Player is sleeping!