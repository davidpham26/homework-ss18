let number = prompt(" nhập một số nguyên:");
if (number === null) {
    number = parseInt(number);
    if (is(number)) {
        console.log("Giá trị nhập vào không phải là số nguyên.");
    } else {
        if (number % 2 === 0) {
            console.log("Số " + number + " là số chẵn.");
        } else {
            console.log("Số " + number + " là số lẻ.");
        }
    }
} else {
    console.log("Không có giá trị nào được nhập.");
}
