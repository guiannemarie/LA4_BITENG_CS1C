// Queueing System using Hash Function
function simpleHash(name) {
  return (name.length + name.charCodeAt(0)) % 10;
}

let hashTable = {}; // Object to hold customers with their hash as keys
let names = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Add initial customers
names.forEach(name => {
  let hash = simpleHash(name);
  // Handle collision
  while (hashTable[hash]) {
    hash = (hash + 1) % 10;
  }
  hashTable[hash] = name;
});
console.log("Initial Hash Table:", hashTable);
alert("Initial customers added to the hash table.");

// Add a new customer
let newCustomer = prompt("Enter your name to join the hashed queue:");
let hash = simpleHash(newCustomer);
// Handle collision
while (hashTable[hash]) {
  hash = (hash + 1) % 10;
}
hashTable[hash] = newCustomer;
alert(`Hi ${newCustomer}, your number is ${hash + 1}`);
console.log("Updated Hash Table after adding new customer:", hashTable);

// Service phase
while (Object.keys(hashTable).length > 0) {
  let num = parseInt(prompt("Enter the number (key+1) of the customer to service:"));
  let key = num - 1;

  if (hashTable.hasOwnProperty(key)) {
    alert(`Now servicing: ${hashTable[key]}`);
    console.log(`Now servicing: ${hashTable[key]}`);
    delete hashTable[key];
    console.log("Updated Hash Table:", hashTable);
  } else {
    alert("Invalid or already serviced number. Try again.");
  }

  if (Object.keys(hashTable).length === 0) {
    alert("All customers have been serviced.");
    console.log("Hash table is now empty.");
  }
}
