let years = prompt("Nhập số năm kinh nghiệm:");

if (years < 0) {
    alert("Vui lòng nhập số hợp lệ!");
} else if (years < 1) {
    alert("Mới vào nghề");
} else if (years <= 3) {
    alert("Nhân viên có kinh nghiệm");
} else if (years <= 6) {
    alert("Chuyên viên");
} else {
    alert("Quản lý");
}