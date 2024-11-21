// Добавьте в script.js
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('foldersModal');
    const foldersButton = document.querySelector('.nav-button:nth-child(2)');
    const closeButton = document.querySelector('.close-modal');

    // Открытие модального окна
    foldersButton.addEventListener('click', function() {
        modal.style.display = 'block';
        // Добавляем анимацию появления
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.opacity = '1';
        }, 10);
    });

    // Закрытие модального окна
    closeButton.addEventListener('click', function() {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    });

    // Закрытие по клику вне модального окна
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }
    });

    // Обработка клика по кнопкам папок
    document.querySelectorAll('.folder-button').forEach(button => {
        button.addEventListener('click', function() {
            console.log('Clicked folder:', this.textContent);
        });
    });
});


