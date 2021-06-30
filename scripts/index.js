const popupEditButtonElement = document.querySelector('.profile__edit-button')
const popupElement = document.querySelector('.popup')
const popupCloseButtonElement = popupElement.querySelector('.popup__close')
const profileName = document.querySelector('.profile__title')
const profileProfession = document.querySelector('.profile__subtitle')
const formElement = document.querySelector('.popup__form')
const inputName = formElement.querySelector('.popup__input_name')
const inputProfession = formElement.querySelector('.popup__input_profession')


function editButton() {
    inputName.value = profileName.textContent
    inputProfession.value = profileProfession.textContent
    togglePopupVisibility()
}

function togglePopupVisibility() {
    popupElement.classList.toggle('popup_is-opened');
}

function profileContent(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value
    profileProfession.textContent = inputProfession.value
    togglePopupVisibility()
}

popupEditButtonElement.addEventListener('click', editButton)
popupCloseButtonElement.addEventListener('click', togglePopupVisibility)
formElement.addEventListener('submit', profileContent);