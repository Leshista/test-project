const pictures = document.querySelectorAll('.main-right-column__block_active');
const backdrop = document.querySelector('.backdrop');
const modalWindow = document.querySelector('.modal__window');
const modalId = document.querySelector('.modal__id');
const modalTurnOff = document.querySelector('.modal__turn-off');

pictures.forEach(
    (
        e // Adding an event listener on every clickable picture
    ) =>
        e.addEventListener('click', () => {
            backdrop.classList.toggle('disabled'); // Clicking will enable backdrop
            modalId.innerHTML = e.id; // Changing the number displayed accordingly to id of the clicked picture
            modalWindow.style.backgroundImage =
                getComputedStyle(e).backgroundImage; // Changing the background image of modal window accordingly to the background image of the clicked picture
        })
);

modalTurnOff.addEventListener('click', () => {
    backdrop.classList.toggle('disabled'); // Disabling backdrop with the click of the button
});
