/** Scope in Js 
 *  Global
 * function (local)
 * block 
 */
var varGlobal = 1;
let letGlobal = 2;
const constGlobal = 3;
// Aboove variables are Global scoped so we can access them any where in  the program
console.log(`Gobal Scoped ${varGlobal} ${letGlobal} ${constGlobal}`);
function print(){

    var varLocal = 10;
    let letLocal = 20;
    const constLocal = 30;
    // Aboove variables are function or local scoped so we can access within the function only
       console.log(`Function or Local Scoped ${varLocal} ${letLocal} ${constLocal}`);
}
print();
// at line 24 we will get ReferenceError:
 console.log(`Function or Local Scoped ${varLocal} ${letLocal} ${constLocal}`); 
{
    var varBlock = 111;
    let letBlock= 222;
    const constBlock = 333;
    //  Aboove variables are Blocked scoped so we can access within the block only except var var c
    console.log(`blocked Scoped ${varBlock} ${letBlock} ${constBlock}`);
}
   console.log(`blocked Scoped out side block ${varBlock}`);
   // at line 31 we will get ReferenceError:
   console.log(`blocked Scoped let and const out side block  ${letBlock} ${constBlock}`);