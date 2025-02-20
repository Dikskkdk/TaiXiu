document.getElementById('tai').addEventListener('click', function() {
    playGame('Tài');
});

document.getElementById('xiu').addEventListener('click', function() {
    playGame('Xỉu');
});

function playGame(choice) {
    // Tạo 3 số ngẫu nhiên từ 1 đến 6 (giả lập xúc xắc)
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const dice3 = Math.floor(Math.random() * 6) + 1;

    const total = dice1 + dice2 + dice3;

    // Hiển thị kết quả
    document.getElementById('dice-result').textContent = `${dice1}, ${dice2}, ${dice3} (Tổng: ${total})`;

    // Xác định kết quả Tài hay Xỉu
    let result;
    if (total >= 11) {
        result = 'Tài';
    } else {
        result = 'Xỉu';
    }

    // Kiểm tra kết quả và hiển thị thông báo
    if (choice === result) {
        document.getElementById('message').textContent = `Bạn đã chọn ${choice} và thắng!`;
    } else {
        document.getElementById('message').textContent = `Bạn đã chọn ${choice} và thua! Kết quả là ${result}.`;
    }
}