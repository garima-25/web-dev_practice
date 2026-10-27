// Task : Shopping Cart and Variable Arguments

// Concepts: Objects, arrays inside objects, rest parameters, loops, functions

// const shoppingCart = {
//     customerName: "Rahul",
//     items: [
//         { name: "Milk", price: 30, quantity: 2 },
//         { name: "Bread", price: 40, quantity: 1 },
//         { name: "Eggs", price: 90, quantity: 2 },
//         { name: "Rice", price: 250, quantity: 1 }
//     ]
// };

// Create a shoppingCart object containing a customer name and an array of items. Each item should have a name, price, and quantity.

// Create a function calculateCartTotal(...prices) that accepts any number of prices and returns their sum.

// Create a function calculateItemTotal(item) that calculates the total cost of one item.

// Create a function calculateCartBill(cart) that calculates the complete bill.

// Apply a 10% discount if the bill exceeds ₹2,000.

// Display the Checkout Summary

// Write a function displayCheckoutSummary(cart) that displays:

// 1. Customer name

// 2. List of items with quantity and individual item total

// 3. Cart subtotal

// 4. Discount applied

// 5. Final payable amount

// Test the program with an empty cart, a single item, and multiple items.

// Interview questions:

// What is the difference between rest parameters and ordinary parameters?

// What happens when a function receives more arguments than its declared parameters?

// What is the difference between ...prices in a function parameter and the spread syntax used in a function call?


// Example output format:

// Customer: Rahul

// Milk       x 2    ₹60
// Bread      x 1    ₹40
// Eggs       x 2    ₹180
// Rice       x 1    ₹250

// Subtotal:           ₹530
// Discount:           ₹0
// Final Amount:       ₹530

// 1. Create the shoppingCart object
const shoppingCart = {
    customerName: "Rahul",
    items: [
        { name: "Milk", price: 30, quantity: 2 },
        { name: "Bread", price: 40, quantity: 1 },
        { name: "Eggs", price: 90, quantity: 2 },
        { name: "Rice", price: 250, quantity: 1 }
    ]
};

// 2. Function using rest parameters to sum any number of prices
function calculateCartTotal(...prices) {
    return prices.reduce((sum, price) => sum + price, 0);
}

// 3. Function to calculate the total cost of a single item
function calculateItemTotal(item) {
    return item.price * item.quantity;
}

// 4. Function to calculate the complete bill with discount logic
function calculateCartBill(cart) {
    // Generate an array of individual item totals
    const itemTotals = cart.items.map(item => calculateItemTotal(item));
    
    // Sum them up using our rest parameter function
    const subtotal = calculateCartTotal(...itemTotals);
    
    // Apply 10% discount if subtotal exceeds ₹2,000
    let discount = 0;
    if (subtotal > 2000) {
        discount = subtotal * 0.10;
    }
    
    const finalAmount = subtotal - discount;
    
    return { subtotal, discount, finalAmount };
}

// 5. Function to display the Checkout Summary
function displayCheckoutSummary(cart) {
    console.log(`Customer: ${cart.customerName}`);
    
    if (cart.items.length === 0) {
        console.log("Your cart is empty.");
    }

    // List each item, its quantity, and total
    cart.items.forEach(item => {
        const itemTotal = calculateItemTotal(item);
        console.log(`${item.name} x ${item.quantity} ₹${itemTotal}`);
    });
    
    const bill = calculateCartBill(cart);
    
    console.log(`Subtotal: ₹${bill.subtotal}`);
    console.log(`Discount: ₹${bill.discount}`);
    console.log(`Final Amount: ₹${bill.finalAmount}`);
    console.log("-----------------------------------");
}

// --- Testing the program with different scenarios ---

// Test 1: Multiple items (Original Cart)
console.log("--- Test Case 1: Multiple Items ---");
displayCheckoutSummary(shoppingCart);

// Test 2: Empty cart
console.log("--- Test Case 2: Empty Cart ---");
const emptyCart = {
    customerName: "Priya",
    items: []
};
displayCheckoutSummary(emptyCart);

// Test 3: Single item
console.log("--- Test Case 3: Single Item ---");
const singleItemCart = {
    customerName: "Amit",
    items: [
        { name: "Laptop", price: 45000, quantity: 1 }
    ]
};
displayCheckoutSummary(singleItemCart);
