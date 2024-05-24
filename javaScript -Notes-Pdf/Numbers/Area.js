/**
 Area Of Rectangle Program  Formula: Area=Length×Width
 Area Of Isosceles Triangle Formula: 0.5 *base * height
 Area Of Parallelogram Formula: base * height
 Area Of Rhombus Formula: 0.5 * digonal1 * digonal2
Area Of Equilateral Triangle Formula: roote 3 / 4 * a(Side)^2
*/

function AreaOfRectangle(){
    let length = 34;
    let width = 45;
    let area = length * width;
    console.log(` Area Of Rectangle is: ${area}`);
}

function AreaOfIsoscelesTriangle(){
    let base = 6;
    let height = 3;

    let area = 0.5 * base * height;
    console.log(` Area Of Isosceles Triangle is: ${area}`);
}

function AreaOfParallelogram(){
    let base = 9;
    let height = 12;
    let area = base*height;
    console.log(` Area Of Parallelogram is : ${area}`);
}
function AreaOfRhombus(){
    let d1 =  32;
    let d2 = 12;
    let  area = 0.5 * d1 * d2;
    console.log (` Area Of Rhombus is : ${area}`);
}
function AreaOfEquilateralTriangle(){
    let side = 12;
    
    let area = Math.sqrt(3)/4 * side *side;
    console.log(` Area Of Equilateral Triangle  is : ${area}`);
}


        AreaOfRectangle();
		AreaOfIsoscelesTriangle();
		AreaOfParallelogram();
		AreaOfRhombus();
		AreaOfEquilateralTriangle();