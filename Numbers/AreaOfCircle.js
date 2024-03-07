
// Area Of Circle JavaScript Program
// Formula is PI * radius ^ 2

function AreaOfCircle( radius){
 
    console.log(`The radius of circle is: ${radius}`);

    areaOfCircle = Math.PI * radius * radius;

    return areaOfCircle;
}

let area =  AreaOfCircle(4);
console.log(`Area of Circle is : ${area}`);