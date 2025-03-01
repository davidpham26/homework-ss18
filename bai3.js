let username = prompt("Mời người dùng nhập");

if (!username) {
    alert("Cancelled");
} else if (username === "ADMIN") {
    let password = prompt("Mời người dùng nhập mật khẩu :");

    if (!password) {
        alert("Cancelled");
    } else if (password === "TheMaster") {
        alert("Welcome");
    } else {
        alert("Wrong password");
    }
} else {
    alert("I Don't know you");
}