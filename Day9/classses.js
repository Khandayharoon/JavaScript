class Animal {
	//construtor
	constructor (name,legCount){
		this.name = name;
		this.legCount = legCount;
	}

	//function within a class
	describe(){
		return `${this.name} has ${this.legCount} legs`;
	}
}

	//Create Instance/object of Animal Class

	const newAnimals =  new Animal ("dog",4);
	let result = newAnimals.describe();
	console.log(result);

