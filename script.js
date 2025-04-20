document.getElementById("open-btn").addEventListener("click", function() {
    document.getElementById("welcome-screen").classList.add("hidden");
    document.getElementById("message-screen").classList.remove("hidden");

    let music = document.getElementById("bg-music");
    music.play().catch(error => console.log("Автоигра запрещена, нажмите на кнопку!"));
});

// Генерация сердечек ❤️
function createHeart() {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️"; // Добавили настоящее красное сердечко
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh"; // Сердечки по всему экрану
    document.getElementById("hearts-container").appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
}

// Создаём сердечки каждую 0.2 секунды
setInterval(createHeart, 200);
// Копирование ссылки
document.getElementById("copy-link").addEventListener("click", function () {
    const url = "https://sake-gift-note.github.io";
    navigator.clipboard.writeText(url).then(() => {
        const msg = document.getElementById("copy-success");
        msg.classList.remove("hidden");
        setTimeout(() => msg.classList.add("hidden"), 2000);
    });
});

// Переход по ссылке (можно заменить на заметку)
document.getElementById("view-gift").addEventListener("click", function () {
    window.open("https://sake0nion.github.io/DARYA-BOSS/", "_blank");
});
