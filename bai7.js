let a = prompt("Nhập số a:");
let b = prompt("Nhập số b:");
let operator = prompt("Nhập phép tính (+, -, *, /, %):");

a = parseFloat(a);
b = parseFloat(b);

let result;

if (operator === "+") {
    result = a + b;
} else if (operator === "-") {
    result = a - b;
} else if (operator === "*") {
    result = a * b;
} else if (operator === "/") {
    result = b === 0 ? a / b : "Không thể chia cho 0";
} else if (operator === "%") {
    result = b === 0 ? a % b : "Không thể chia cho 0";
} else {
    result = "Phép toán không hợp lệ";
}

alert("Kết quả của phép tính trên: " + a + " " + operator + " " + b + " = " + result);
