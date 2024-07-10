const Users = [{
    name : 'hk',
    gender : 'male',
    age : 34
},{
    name : 'alxa',
    gender : 'female',
    age : 27
},{
    name : 'jhone',
    gender : 'male',
    age : 56
},{
    name : 'kitty',
    gender : 'female',
    age : 11
}
];

for(let i =0 ; i<Users.length ; i++){
    if(Users[i].gender === 'male'){
        console.log( Users[i].name);
    }
}