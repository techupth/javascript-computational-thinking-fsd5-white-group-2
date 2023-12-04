//Start coding here
function calculateTax(income) {
  let taxPercentage;
  let taxAmount;

  if (income > 50000) {
    taxPercentage = 0.3;
    taxAmount = income * taxPercentage;
    return taxAmount;
  }
  taxPercentage = 0.2;
  taxAmount = income * taxPercentage;
  return taxAmount;
}

const result1 = calculateTax(60000);
console.log("Tax to be paid: $" + result1);

const result2 = calculateTax(30000);
console.log("Tax to be paid: $" + result2);

//เปลี่ยน const เป็น let ใน ตัวแปร taxPercentage และ taxAmount เพื่อให้สามารถกำหนดค่าให้กับตัวแปรได้
//ในบรรทัดที่ให้คืนค่า (return) จากฟังก์ชัน calculateTax แก้ไขชื่อตัวแปรเป็น taxAmount แทน taxAmoun ที่่เขียนผิด
