const leftOperand = document.getElementById("leftOperand");
const rightOperand = document.getElementById("rightOperand");
const operator = document.getElementById("operator");
const button = document.getElementById("calculate");

// ฟังก์ชันคำนวณผลลัพธ์
function calculateResult() {
    const leftValue = parseInt(leftOperand.value);
    const rightValue = parseInt(rightOperand.value);
    const selectedOperator = operator.value;

    // ตรวจสอบว่ามีค่าที่ไม่ใช่ตัวเลข หรือค่าติดลบ
    if (isNaN(leftValue) || isNaN(rightValue) || leftValue < 0 || rightValue < 0) {
        alert("Error :(");
        console.error("Error :(");
        return;
    }

    let result;
    switch (selectedOperator) {
        case "+":
            result = leftValue + rightValue;
            break;
        case "-":
            result = leftValue - rightValue;
            break;
        case "*":
            result = leftValue * rightValue;
            break;
        case "/":
            if (rightValue === 0) {
                alert("It's over 9000!");
                console.log("It's over 9000!");
                return;
            }
            result = leftValue / rightValue;
            break;
        case "%":
            if (rightValue === 0) {
                alert("It's over 9000!");
                console.log("It's over 9000!");
                return;
            }
            result = leftValue % rightValue;
            break;
        default:
            alert("Invalid operation!");
            return;
    }

    alert(`Result: ${result}`);
    console.log(`Result: ${result}`);
}

// เมื่อกดปุ่ม "Try me!"
button.addEventListener("click", calculateResult);

// แสดง pop-up ทุก 30 วินาที
setInterval(() => {
    alert("Please, use me...");
}, 30000);

