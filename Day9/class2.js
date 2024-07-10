class Animal {
	constructor(name,legCount,color,speaks){
		this.name = name;
		this.legCount = legCount;
		this.color = color;
		this.speaks = speaks;
	}

	describe (){
		return `${this.name} has ${this.legCount} legs with ${this.color} color and speaks ${this.speaks}`;
	}
}

let dog = new Animal('dog',4,"black","Bhow bhow");
console.log(dog.describe());

let cat = new Animal('cat',4,"White","meow meow");
console.log(cat.describe());