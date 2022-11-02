let loginButton = document.querySelector('.login-button');
let loginPopup = document.querySelector('.login-popup');
let popupClose = document.querySelector('.button-close');

loginButton.addEventListener('click', showPopup) || popupClose.addEventListener('click', closePopup);

function showPopup(evt) {
    console.log(evt);
    evt.preventDefault();
    loginPopup.classList.toggle('show-popup');
}

function closePopup(evt) {
    console.log(evt);
    evt.preventDefault();
    loginPopup.classList.toggle('show-popup');
}
