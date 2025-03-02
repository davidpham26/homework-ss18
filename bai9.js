let hour = prompt("Mời bạn nhập giờ:");
let minute = prompt("Mời bạn nhập phút:");
let second = prompt("Mời bạn nhập giây:");

hour = parseInt(hour);
minute = parseInt(minute);
second = parseInt(second);

let time = 'AM'; 


if (hour >= 12) {
    time = 'PM';
    if (hour > 12) {
        hour -= 12;
    }
} else if (hour === 0) {
    hour = 12; 
}

if (hour < 10) hour = '0' + hour;
if (minute < 10) minute = '0' + minute;
if (second < 10) second = '0' + second;


let time12 = hour + ':' + minute + ':' + second + ' ' + time;

alert("Thời gian sau khi chuyển đổi: " + time12);