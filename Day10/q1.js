const productList = [
  { id: "p1", name: "Apples", category: "Fruits", price: 2.5, inStock: true },
  { id: "p2", name: "Oranges", category: "Fruits", price: 1.99, inStock: false },
  { id: "p3", name: "Blueberries", category: "Fruits", price: 4.99, inStock: true },
  { id: "p4", name: "Carrots", category: "Vegetables", price: 1.0, inStock: true },
  { id: "p5", name: "Tomatoes", category: "Vegetables", price: 1.5, inStock: true }
];

function searchAndBuyProduct(productList, productName) {
  // Use the find method to search for the product by its name
  const product = productList.find(product => product.name === productName);

  // Check if the product was found and if it is in stock
  if (product && product.inStock) {
    // Set the inStock property to false to indicate the product has been bought
    product.inStock = false;
    // Return true to indicate that the purchase has been made
    return true;
  }

  // If the product was not found or is not in stock, return false
  return false;
}
