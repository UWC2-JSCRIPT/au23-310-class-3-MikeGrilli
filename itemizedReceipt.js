// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price


const logReceipt = (...items) => {
  let subtTotal = 0;
  let tax = 0;

  items.forEach(item => {
    subtTotal += item.price 
    tax += item.price * 0.1025
    console.log(`${item.descr} - $${item.price}`)
  })

  console.log(``)
  console.log(`Sub Total: $${subtTotal}`)
  console.log(`Tax: $${tax}`)
  console.log(`total: $${total = subtTotal + tax}`)
}

// Check
logReceipt(
  { descr: 'Burrito', price: 5.99 },
  { descr: 'Chips & Salsa', price: 2.99 },
  { descr: 'Sprite', price: 1.99 }
);
// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97

