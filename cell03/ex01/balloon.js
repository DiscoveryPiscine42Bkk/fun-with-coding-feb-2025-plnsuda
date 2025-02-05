const balloon = document.getElementById("balloon");
let size = 200; // ขนาดเริ่มต้น
const maxSize = 420; // ขนาดสูงสุดก่อนระเบิด
const minSize = 200; // ขนาดต่ำสุด
const colors = ["red", "green", "blue"]; // ลำดับสีตอนคลิก
let colorIndex = 0;

// เมื่อคลิกที่บอลลูน
balloon.addEventListener("click", function() {
    size += 10; // เพิ่มขนาดทีละ 10px
    colorIndex = (colorIndex + 1) % colors.length; // เปลี่ยนสีเป็นลำดับถัดไป
    
    if (size > maxSize) {
        size = minSize; // ถ้าเกิน 420px รีเซ็ตขนาดกลับเป็น 200px
        colorIndex = 0; // รีเซ็ตสีเป็นแดง
    }

    updateBalloon();
});

// เมื่อเมาส์ออกจากบอลลูน
balloon.addEventListener("mouseleave", function() {
    if (size > minSize) {
        size -= 5; // ลดขนาดทีละ 5px แต่ไม่ต่ำกว่า 200px
        colorIndex = (colorIndex - 1 + colors.length) % colors.length; // เปลี่ยนสีในลำดับย้อนกลับ
    }

    updateBalloon();
});

// ฟังก์ชันอัปเดตบอลลูน
function updateBalloon() {
    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = colors[colorIndex];
}

