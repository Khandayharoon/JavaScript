let heros = [ ['IronMan','SpiderMan','Thor'],['SuperMan','WonderWomen','Flash']];

for(let i=0; i<heros.length; i++)
    {
        console.log(`List ${i}`);
        for(let j=0; j<heros[i].length; j++){
            console.log(heros[i][j]);
        }
    }