let obj = {
    a: 1,
    b: "hello"
}

console.log(obj)

let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal
// __proto__ is a getter/setter for [[Prototype]]

class Animal{
    constructor(name){
        this.name = name;
        console.log('Object is invoked!!');
        
    }
    speak(){
        console.log(this.name + ' makes a noise');
    }
    jump(){
        console.log(this.name + ' jumps all the time');
    }
    eats(){
        console.log('eats something');
        
    }
}

class Lion extends Animal{
    constructor(name){
        super(name);
    }
    speak(){
        console.log(this.name + ' roars');
    }
    jump(){
        console.log(this.name + ' jumps very high');
    }
    eats(){
        console.log('eats meat');
        
    }
}
let a =new Animal("Dog");
a.speak();
a.jump();
a.eats();


console.log(a);
let l=new Lion("Simba");
l.speak();
l.jump();
l.eats();

// use of the instanceof operator
console.log(l instanceof Animal);//returns true as l is an instance of Animal
console.log(a instanceof Lion);//returns false as a is not an instance of Lion
