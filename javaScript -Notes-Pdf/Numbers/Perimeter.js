/** 
 Perimeter Of Circle P=2πr (r=radius);
 Perimeter Of Equilateral Triangle P=3s (s=side);
 Perimeter Of Parallelogram P=2(a+b) (a,b are 2 adjuecnt sides)
 Perimeter Of Rectangle  P=2(l+w) 
 Perimeter Of Square P=4s (s=side)
 Perimeter Of Rhombus P=4s (s=side)

 */

 function PerimeterofCircle(){
    let radius = 34;
    let Perimeter = 2 * Math.PI *radius;
    console.log(`Perimeter of Circle is: ${Perimeter}`);
 }

 function PerimeterOfEquilateralTriangle(){
    let side = 12;
    let Perimeter = 3 * side;
    console.log (` Perimeter Of Equilateral Triangle is : ${Perimeter}`);
 }

function PerimeterOfParallelogram(){
    let sideA = 12;
    let sideB = 9;
    let Perimeter = 2 * (sideA + sideB);
    console.log(` Perimeter Of Parallelogram is : ${Perimeter}`);
}
function PerimeterOfRectangle(){
    let length = 13;
    let width = 23;
    let Perimeter = 2 * (length+width);
    console.log(` Perimeter Of Rectangle is : ${Perimeter}`)
}

function PerimeterOfSquare(){
    let side = 19;
    let Perimeter= 4*side;
    console.log(`Perimeter Of Square is : ${Perimeter}`)
}

function PerimeterOfRhombus(){
    let side = 19;
    let Perimeter= 4*side;
    console.log(`Perimeter Of Rhombus is : ${Perimeter}`)
}
        PerimeterofCircle();
		PerimeterOfEquilateralTriangle();
		PerimeterOfParallelogram();
		PerimeterOfRectangle();
		PerimeterOfSquare();
		PerimeterOfRhombus();