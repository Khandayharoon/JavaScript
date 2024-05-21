function main() {
    const array = [2, 4, 6, 2, 7, 8];
    
    function customMap(array, fn) {
        const map = [];
        for (let num of array) {
            map.push(fn(num));
        }
        return map;
    }

    function square(num) {
        return num * num;
    }

    return customMap(array, square); // Call customMap with array and square function
}

const map = main(); // map will hold the returned array from customMap
console.log(map); // Output the mapped array
