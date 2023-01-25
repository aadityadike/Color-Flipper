window.addEventListener('load', () => {
    const btn = document.getElementById('btn');
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    document.querySelector('.deactive').classList.toggle("active");
    document.querySelector('.active').classList.remove("active");

    btn.addEventListener('click', () => {
        const colors = document.querySelector('.color');
        const container = document.querySelector('.container');
        container.style.backgroundColor = createHexColor();
        colors.textContent = createHexColor();
    })

    function createHexColor() {
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * letters.length)];
        }
        console.log(color);
        return color;
    }
})