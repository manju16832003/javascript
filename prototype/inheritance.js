// [[Prototype]] = Hidden property. Its either null or references another object

let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal

console.log(animal)
console.log(animal.__proto__) // Not referenced to any object
console.log(rabbit.__proto__) // Referenced to aninmal object
console.log(rabbit)
// We can find both properties in rabbit now
console.log(rabbit.eats)
console.log(rabbit.jumps)