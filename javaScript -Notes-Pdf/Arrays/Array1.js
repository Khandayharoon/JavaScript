
// console.log(arr);
// initialized the Array
    let arr = [4,5,6,7,8,9,9,4];
    console.log(arr);

// Can Arrays are Hoisted lets see
// array are Hoisted but outPut will be  Cannot access 'arr' before initialization

// Array are type of object
    console.log(typeof(arr));

// forEach is a methode which accepts 2 parameters element and index , according your need you can use this methode diffrent ways 
// some examples are below

    arr.forEach((Number , index)=>{
        console.log(Number);
    })

    arr.forEach((Number , index)=>{
        console.log(index);
    })

    arr.forEach((Number , index)=>{
        console.log( Number + " at index " + index);
    })