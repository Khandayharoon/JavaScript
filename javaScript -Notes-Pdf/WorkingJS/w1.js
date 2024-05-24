const aprilBatch  = ['zubair','mehreen','ubaid'];
const marchBatch = ['alxa','jhon','adam','amber'];
const julyBatch = ['mick','jin','lee','thon'];

function addStudent(batch,student){
    batch.push(student);
    console.log(batch);
}

// addStudent(aprilBatch,'Haroon');

//with help of rest opeartor we can add multiple students (it will convert arugemts into an Array) 
function addMultipleSudents(batch,...students){
    for(let i of students){
        batch.push(i);
    }
    console.log(batch);
}
// addMultipleSudents(julyBatch,'alan','peter','Ali','bon');

//with the help of speard operaor we can concate  array;

const mergedBatch = [...julyBatch,...aprilBatch];
console.log(mergedBatch);

