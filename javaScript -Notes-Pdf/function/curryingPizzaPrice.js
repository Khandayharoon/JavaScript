function pizzaPrice (size){
    //Definng the base price on behal of sixe
    const basePrice = {
        small : 8.00,
        medium : 10.00,
        large : 12.00
    };

    //Defing cost per Topping
    const toppingCost = 1.50;

    return function(toppings){
        return function(quantiy){
            // Calculate the total base price based on pizza size
            let totalPrice = basePrice[size.toLowerCase()];

            // Add the cost of toppings
            totalPrice += toppings.length * toppingCost;

            // Multiply by quantity
            totalPrice *= quantiy;

            // Return the total price rounded to 2 decimal places
            return totalPrice.toFixed(2);
        };
    };
}

// Example usage:
const calculatePrice = pizzaPrice('Large')(['bacoon', 'cheese']);
console.log(calculatePrice(1)); 
console.log(calculatePrice(3)); 