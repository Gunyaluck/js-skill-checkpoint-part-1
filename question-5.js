// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้

//ราคารวมของแต่ละสินค้า >> loop
//ราคาทั้งหมดก่อนโปรโม >> loop
//ราคาทั้งหมดหลังโปรโม >> if else

function calculateTotalPrice(products, promotionCode) {
  let totalPricePeritems = 0;
  let totalPriceOfProduct = 0;
  let totalPriceOfProductAfterPromo = 0;
  for (let items of products) {
    totalPricePeritems = items.price * items.quantity;
    totalPriceOfProduct += totalPricePeritems;
  }
  if (promotionCode === "SALE20") {
    totalPriceOfProductAfterPromo = totalPriceOfProduct * 0.8;
  } else if (promotionCode === "SALE50") {
    totalPriceOfProductAfterPromo = totalPriceOfProduct * 0.5;
  } else if (promotionCode === "") {
    totalPriceOfProductAfterPromo = totalPriceOfProduct;
  }
  return totalPriceOfProductAfterPromo;
}

console.log(calculateTotalPrice(products, promotionCode));
