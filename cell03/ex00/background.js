// เลือกปุ่มจาก HTML
const button = document.getElementById("changeColorBtn");

// ฟังก์ชันสำหรับสร้างสีแบบสุ่ม
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// เพิ่ม event listener เพื่อเปลี่ยนสีพื้นหลังเมื่อกดปุ่ม
button.addEventListener("click", function() {
    document.body.style.backgroundColor = getRandomColor();
});

