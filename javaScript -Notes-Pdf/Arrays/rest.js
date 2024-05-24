const janBatch = ['Jhon', 'Den', 'Mark'];
const aprilBatch = ['Mark','Ben'];
const mayBatch = ['Hk' , 'Ali' , 'Alexa'];
/**
    function addStudent(batch,studentName){
    batch.push(studentName);
    console.log(batch);
    }
    addStudent(mayBatch, 'Tony');
    addStudent(janBatch,'Space')
 */
// rest operator which will convert arguments into Array
function addStudent (batch, ...studentsName){
    for(let i of studentsName){
        batch.push(i);
    }
    console.log(batch);
}
addStudent(aprilBatch, 'Komal','Win','ken');
// Spread operator which will Concatenating arrays and Passing arrays as arguments
const mergedBatch = [...mayBatch , ...aprilBatch];
console.log(mergedBatch);
function addNums(x,y,z,){
    return x+y+z;
}
const nums = [45,67,9];
console.log(addNums(...nums));