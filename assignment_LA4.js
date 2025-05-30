// Simple Queueing System using Array
let queue = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];
console.log("Initial Queue:", queue);
alert("Initial customers added to the queue.");

// Add a new customer
let newCustomer = prompt("Enter your name to join the queue:");
queue.push(newCustomer); // Add customer to the end
let customerNumber = queue.length;
alert(`Hi ${newCustomer}, your number is ${customerNumber}`);
console.log("Updated Queue after adding new customer:", queue);

// Service phase
while (queue.length > 0) {
  let numberToService = parseInt(prompt("Enter the number of the customer to service:"));
  
  if (numberToService >= 1 && numberToService <= queue.length) {
    let customerName = queue[numberToService - 1];
    alert(`Now servicing: ${customerName}`);
    console.log(`Now servicing: ${customerName}`);
    queue.splice(numberToService - 1, 1); // Remove from queue
    console.log("Updated Queue:", queue);
  } else {
    alert("Invalid number. Please try again.");
  }

  if (queue.length === 0) {
    alert("All customers have been serviced.");
    console.log("Queue is now empty.");
  }
}
