let ArmstrongArray=[];

function isArm(num){
    let originalNum = num;
    let numOfDigits = 0;
    let result = 0;

    while(originalNum > 0){
        originalNum = Math.floor(originalNum / 10);
        ++numOfDigits;
    }

    originalNum = num; 
    while(originalNum > 0){
        let rem = originalNum % 10;
        result = result + Math.pow(rem , numOfDigits);
        originalNum = Math.floor(originalNum / 10);
    }
    return num === result;
}
function arm(){
   let count = 0;
    let num = 154; // Start from 154 since you want numbers after 153

    while(count < 10){
        if(isArm(num)){
            ArmstrongArray.push(num);
            count++;
        }
        num++;
    }
}

arm();
console.log(ArmstrongArray);
