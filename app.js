window.addEventListener('load', () => {
    const btn = document.getElementById('btn');
    const text = document.querySelector('.color');
    const colors = [
        "#742eb9",
        "#f34223",
        "#ff0707",
        "#0b970b",
        "#bae22b"
    ]
    btn.addEventListener('click', () => {
        const back = document.querySelector(".container");
        let randomNumber = getRandomNumber();
        console.log(randomNumber);
        back.style.backgroundColor = colors[randomNumber];
        text.textContent = colors[randomNumber];
        text.style.color = colors[randomNumber];
    });

    // getting random numbers from 0 to 4 (size of array).
    function getRandomNumber() {
        return Math.floor(Math.random() * colors.length);
    }
});
