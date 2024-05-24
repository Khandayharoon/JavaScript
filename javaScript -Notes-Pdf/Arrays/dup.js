let arr = [4, 2, 34, 4, 1, 12, 1, 4];

// function findDuplicate(arr){
//     let dup = [];
//     let count = 0;
//     for(let i = 0; i < arr.length; i++){
//         for(let k = i+ 1; k < arr.length; k++){
//              // Start from i + 1 to avoid comparing an element with itself
//             if(arr[i] === arr[k]) {
//                  count++;
//                  if(count > 0){
//                     // Removed the semicolon after if statement
//                 dup.push(arr[i]);
//                 break;
//                  } 
//                 // Break the inner loop once a duplicate is found
//             }
//         }
//     }
//     return dup;
// }

function findDuplicate(arr){
    let dup = [];
    for(let i = 0; i < arr.length; i++){
        for(let k = i+1; k < arr.length; k++){
            if(arr[i] === arr[k] && !dup.includes(arr[i])) {
                dup.push(arr[i]);
                break;
            }
        }
    }
    return dup;
}

console.log(findDuplicate(arr));
