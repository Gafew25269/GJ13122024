function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";  // แก้ไข Math.random() และ Math.floor
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%"; // แก้ไข Math.random() และ Math.floor
}

const moveRandom = document.querySelector("#move-random"); // แก้ไขจาก moveRandomEl เป็น moveRandom

// ใช้ addEventListener ให้ถูกต้อง
moveRandom.addEventListener("mouseenter", function(e) {
    moveRandomEl(e.target); // เรียกใช้ฟังก์ชัน moveRandomEl
});
