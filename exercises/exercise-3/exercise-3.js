let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];


const printReceipt = (order) => {
  console.log("\n");
  console.log(`QTY \t ITEM \t \t \t TOTAL`);
  let total = 0;
  order.forEach(({ itemName, quantity, unitPrice }) => {
    total += unitPrice * quantity;
    let space = " ".repeat(24 - itemName.length);
    console.log(
      `${quantity} \t ${itemName}${space}${(unitPrice * quantity).toFixed(2)}`
    );
    return;
  });
  console.log();
  console.log(`Total: ${total}`);
  console.log("\n");
};

printReceipt(order);