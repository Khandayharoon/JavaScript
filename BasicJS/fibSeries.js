// 7. To calculate Fibonacci Series up to n numbers.

function fib(){
    let num = 20;
        let a=0 , b= 1 , i=2;
        let arr =[];
        arr.push(a);
        arr.push(b);
    while(i<=num){
        let c = a+b;
        // console.log(c+" ");
        arr.push(c);
        a =b;
        b =c;
        i++;
    }
    console.log(arr);
}
fib();