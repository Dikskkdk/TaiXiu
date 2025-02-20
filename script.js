// Danh sách các biểu tượng có thể xuất hiện
const symbols = ["🍒", "🍋", "🍊", "🍇", "🍉", "🍎"];

// Lấy các phần tử DOM
const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");
const spinButton = document.getElementById("spin-button");
const resultMessage = document.getElementById("result-message");

// Hàm quay ngẫu nhiên
function spin() {
    // Tạo kết quả ngẫu nhiên cho 3 ô
    const result1 = symbols[Math.floor(Math.random() * symbols.length)];
    const result2 = symbols[Math.floor(Math.random() * symbols.length)];
    const result3 = symbols[Math.floor(Math.random() * symbols.length)];

    // Hiển thị kết quả
    slot1.textContent = result1;
    slot2.textContent = result2;
    slot3.textContent = result3;

    // Kiểm tra kết quả
    if (result1 === result2 && result2 === result3) {
        resultMessage.textContent = "Chúc mừng! Bạn đã trúng thưởng!";
    } else {
        resultMessage.textContent = "Chúc bạn may mắn lần sau!";
    }
}

// Gán sự kiện click cho nút quay
spinButton.addEventListener("click", spin);