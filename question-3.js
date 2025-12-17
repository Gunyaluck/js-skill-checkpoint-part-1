// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้

//จำนวนตัวอักษร!! >> length?

function checkPasswordStrength(userPassword) {
  if (userPassword.length < 6) {
    return "Weak";
  } else if (userPassword.length >= 6 && userPassword.length <= 10) {
    return "Medium";
  } else {
    return "Strong";
  }
}

// userPassword = "ssswnalWadqQ";
// userPassword = "TechUp";
// userPassword = "abcde";
console.log(checkPasswordStrength(userPassword));
