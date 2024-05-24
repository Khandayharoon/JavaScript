let students = ['Aman', 'Zameer', 'Alexa', 'Booby', 'Walker' , 'Hk'];

// for Loop 
// for(let i=0; i<students.length; i++){
//     console.log(`Roll No:- ${i+1} is ${students[i]}`);
// }

// For in Loop
// for  ( let i in students){
//     console.log(`Roll No:- ${Number(i)+1} is ${students[i]}`);
//     // remmber here is a string so we have Explicit conver it
// }

//for of loop

for( let student of students){
    console.log(student);
    // here loop is itrating over Element not index
}

