//creating a closure for genrateID 

function genrateID(num){
    let a = 'A';
    return function id(){
        let date = 2024;
        num++;
        return `${a}_${date}_${num}`; 
    }
}

const getID = genrateID(2);
console.log (getID());
console.log (getID());
console.log (getID());