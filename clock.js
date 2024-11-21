function updateClock() {
    const clock = document.getElementById('digital-clock');
    const now = new Date();
    
    // Получаем часы, минуты и секунды
    let hours = now.getHours();
    let minutes = now.getMinutes();

    // Добавляем ведущий ноль если необходимо
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Форматируем время
    const timeString = `${hours}:${minutes}`;
    
    // Обновляем содержимое элемента
    clock.textContent = timeString;
}

// Обновляем время каждую секунду
setInterval(updateClock, 1000);

// Вызываем функцию сразу при загрузке страницы
updateClock();
