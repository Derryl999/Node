var events = require("events");
var util = require("util");

/*var myEmitter = new events.EventEmitter();
myEmitter.on("someEvent", function (msg) {
  console.log(msg);
});

myEmitter.emit('someEvent','someEvent has emitted') */

var Person = function (name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person("james");
var july = new Person("july");
var alice = new Person("alice");

var people = [james, july, alice];

people.forEach(function (person) {
  person.on("speak", function (msg) {
    console.log(person.name + " said " + msg);
  });
});
james.emit("speak", "hello");
july.emit("speak", "hey guys");
