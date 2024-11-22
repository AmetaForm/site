// grid.js
function createGrid() {
    const canvas = document.getElementById('grid');
    const ctx = canvas.getContext('2d');

    function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    setCanvasSize();
    window.addEventListener('resize', () => {
        setCanvasSize();
        drawGrid();
    });

    function drawGrid() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const gridSize = 60; // Увеличен размер сетки до 100
        ctx.lineWidth = 0.6;
        
        // Добавляем размытие
        ctx.filter = 'blur(0.6px)';

        // Вертикальные линии
        for(let x = 0; x <= canvas.width; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, 'rgba(128, 128, 128, 0.9)');
            gradient.addColorStop(0.5, 'rgba(128, 128, 128, 0.5)');
            gradient.addColorStop(1, 'rgba(128, 128, 128, 0.0001)');
            
            ctx.strokeStyle = gradient;
            ctx.stroke();
        }

        // Горизонтальные линии
        for(let y = 0; y <= canvas.height; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            
            const progress = y / canvas.height;
            let alpha;
            
            if (progress < 0.5) {
                alpha = 0.9 - (progress * 0.8);
            } else {
                const lowerProgress = (progress - 0.5) * 2;
                alpha = 0.5 - (lowerProgress * 0.49);
            }
            
            ctx.strokeStyle = `rgba(128, 128, 128, ${alpha})`;
            ctx.stroke();
        }
        
        // Сбрасываем фильтр после отрисовки
        ctx.filter = 'none';
    }

    drawGrid();
}

window.addEventListener('load', createGrid);
