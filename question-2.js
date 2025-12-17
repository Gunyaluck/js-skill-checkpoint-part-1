// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
inventory[0].quantity = 200;
// console.log(inventory);

inventory.push({ name: "Orange", price: 20, quantity: 300 });
// console.log(inventory);

function totalPriceOfInventory(inventory) {
  let totalPricePeritems = 0;
  let totalPriceAllitems = 0;
  for (let items of inventory) {
    totalPricePeritems = items.price * items.quantity;
    totalPriceAllitems += totalPricePeritems;
  }
  return `มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${totalPriceAllitems} บาท`;
}

console.log(totalPriceOfInventory(inventory)); //มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก 13500 บาท
