const user = {
	username : "haroon",
	age : 24,
	id : 3894552045
};

const tryStringify = JSON.stringify(user);
console.log(tryStringify);

const parse = JSON.parse(tryStringify);
console.log(parse);
