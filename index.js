console.log("ciao sono typescript");
var x = "mario";
var n = 50;
var firstName = 'Stefano';
var addition = function (p1, p2) {
    return p1 + p2;
    // any
};
console.log(addition);
// meglio tipizzare 
var addition2 = function (p1, p2) {
    return p1 + p2;
};
console.log(addition2(50, 50));
var sayHello = function (name, prefix) {
    // parametri opzionali vanno come ultimi
    return (prefix || "Ciao") + ' ' + name;
};
console.log(sayHello('Giangiorgio', 'Buonasera'));
console.log(sayHello('Stefano'));
// si puo fare amche cosi
var sayHello2 = function (name, prefix) {
    if (prefix === void 0) { prefix = 'Ciao'; }
    // parametri opzionali vanno come ultimi
    return prefix + ' ' + name;
};
console.log(sayHello2('Giangiorgio', 'Buonasera'));
console.log(sayHello2('Stefano'));
var a = '50';
// oggetti
var specialDog = {
    name: 'Pluto',
    brand: 'Disney',
    furColor: 'Blonde',
    age: 5,
    canFly: true,
    species: {
        name: 'Dog',
        breed: 'Golden Retriever',
    },
    abilities: ['Bark', 'Eat', 'Play', 'Sleep'],
    bark: function () {
        return 'BAU';
    }
};
var boh = specialDog.abilities.map(function (ab) {
    return ab.length;
});
