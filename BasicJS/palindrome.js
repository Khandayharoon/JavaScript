// with the help of sliding window
function ispalindrome(str){
    let left = 0;
    let right = str.length-1;
    while(left < right){
        if(str.charAt(left) != str.charAt(right)){
            return false;
        }
        left++;
        right--;
    }
    return true;
}
let str = "racecar";
if(ispalindrome(str)){
    console.log("Srting is palindrome");
}else{
    console.log("string is not palindrome");
}

// 8. To find out whether the given String is Palindrome or not