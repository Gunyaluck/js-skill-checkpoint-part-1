// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้

//หาสินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้า >> checkMinItemQuantity!! min!!
// >>> สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ Banana ซึ่งมี 50 ชิ้น

let minItemQuantity = inventory[0].quantity;
// console.log(minItemQuantity)

function checkMinItemQuantity(inventory) {
  let minItemName = "";
  for (let items of inventory) {
    if (items.quantity < minItemQuantity) {
      minItemQuantity = items.quantity;
      minItemName = items.name;
    }
  }
  return `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minItemName} ซึ่งมี ${minItemQuantity} ชิ้น`;
}

console.log(checkMinItemQuantity(inventory));
