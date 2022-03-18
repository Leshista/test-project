const pictures = document.querySelectorAll('.main-right-column__block_active');
const backdrop = document.querySelector('.backdrop');
const modalWindow = document.querySelector('.modal__window');
const modalId = document.querySelector('.modal__id');
const modalTurnOff = document.querySelector('.modal__turn-off');

pictures.forEach((e) =>
    e.addEventListener('click', () => {
        backdrop.classList.toggle('disabled');
        modalId.innerHTML = e.id;
        modalWindow.style.backgroundImage = getComputedStyle(e).backgroundImage;
    })
);

modalTurnOff.addEventListener('click', () => {
    backdrop.classList.toggle('disabled');
});
