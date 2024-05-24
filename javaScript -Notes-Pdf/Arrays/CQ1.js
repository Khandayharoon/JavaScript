/** write a function which accepts an interger and an Arary and do these tese case in that an inter should be lenght of Array
 *  if product of intergre in an array is even the return sum of all array;
 * if any interger is zero return 2 * sum
 * if product of integers is odd return just product
 */



function operationArray(n, arr){

        let pro = 1;
        let sum = 0

        // checcking zero is present or not
        let checkZero = arr.includes(0);

        // here we get the product
        for(let i=0 ; i<n; i++){
            pro = pro * arr[i];
            sum = sum + arr[i]
        }

        console.log(sum , pro)

        // here we do contions 

        if( pro % 2 === 0 && checkZero)
            {   
                return 2 * sum;
            } else if(pro % 2 === 0){
                return sum;
            }
            else{
                return pro;
            }

}

let arr = [1,2,3,4,0];
let n =  arr.length;
let result = operationArray(n,arr);
console.log(result);