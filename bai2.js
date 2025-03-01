let toan = prompt("Nhập điểm Toán:");
let van = prompt("Nhập điểm Văn:");
let anh = prompt("Nhập điểm Anh:");

let diemTrungBinh = (toan + van + anh) / 3;
let xepLoai;
if (diemTrungBinh >= 8.0) {
    xepLoai = "Giỏi";
} else if (diemTrungBinh >= 6.5) {
    xepLoai = "Khá";
} else if (diemTrungBinh >= 5.0) {
    xepLoai = "Trung bình";
} else {
    xepLoai = "Yếu";
}
console.log("Điểm trung bình: " + diemTrungBinh  + "Xếp loại: " + xepLoai);

