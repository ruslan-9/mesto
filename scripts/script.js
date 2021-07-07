const popupEditButtonElement = document.querySelector('.profile__edit-button');
const popupAddButtonElement = document.querySelector('.profile__add-button');
const popupEditElement = document.querySelector('.popup_edit-button');
const popupAddElement = document.querySelector('.popup_add-button');
const popupImgViewElement = document.querySelector('.popup_img-view');
const popupCloseEditButtonElement = popupEditElement.querySelector('.popup__close');
const popupCloseAddButtonElement = popupAddElement.querySelector('.popup__close');
const popupCloseImgViewButtonElement = popupImgViewElement.querySelector('.popup__img-close-button');
const profileName = document.querySelector('.profile__title');
const profileProfession = document.querySelector('.profile__subtitle');
const formEdit = document.querySelector('.popup__form_edit_button');
const formAdd = document.querySelector('.popup__form_add_button');
const inputName = formEdit.querySelector('.popup__input_field_name');
const inputProfession = formEdit.querySelector('.popup__input_field_profession');
const inputNameCard = formAdd.querySelector('.popup__input_card_name');
const inputLinkCard = formAdd.querySelector('.popup__input_card_link');
const popupImg = document.querySelector('.popup__img');
const popupName = document.querySelector('.popup__img-name');


const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }

];

const cardsTable = document.querySelector('.cards');
const cardsTableTemplate = document.querySelector('.cards__template').content;

//Функция добавления карточекв шаблон
function renderCard(item) {
    const cardItem = cardsTableTemplate.cloneNode(true);
    const cardName = cardItem.querySelector('.card__name');
    const cardImg = cardItem.querySelector('.card__img');
    cardImg.src = item.link;
    cardImg.alt = item.name;
    cardName.textContent = item.name;

//Добавляем кнопку лайка
    const likeButton = cardItem.querySelector('.card__like-button')
//Функция лайка карточки
    likeButton.addEventListener('click', function(evt) {
        const eventTarget = evt.target;
        eventTarget.classList.toggle('card__like-button_active');
    });

//Добавляем кнопку удаления
    const deleteButton = cardItem.querySelector('.card__delete-button')
//Функция удаления карточки
    deleteButton.addEventListener('click', function (evt) {
        const evtTarget = evt.target
        evtTarget.closest('.card').remove();
    });

//Слушатель нажатия картинки
    cardImg.addEventListener('click', function(){
        imageView(item)
    });

    return cardItem
}

//Добавление карточек из массива
initialCards.forEach(function (item) {
    cardsTable.append(renderCard(item));
});


//Функция считывания данных профиля со страницы
function editButton() {
    inputName.value = profileName.textContent
    inputProfession.value = profileProfession.textContent
    togglePopupEditVisibility()
}

//Функции открытия-закрытия попапов
function togglePopupAddVisibility() {
    popupAddElement.classList.toggle('popup_is-opened');
}
function togglePopupEditVisibility() {
    popupEditElement.classList.toggle('popup_is-opened');
}
function togglePopupImgVisibility() {
    popupImgViewElement.classList.toggle('popup_is-opened');
}

//Функция изменения данных профиля
function profileContent(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value
    profileProfession.textContent = inputProfession.value
    togglePopupEditVisibility()
}


//Вызов функции добавления карточки
function addCard(evt) {
    evt.preventDefault()
    const inputName = inputNameCard.value
    const inputLink = inputLinkCard.value
    const newCard = {
        name: inputName,
        link: inputLink,
    }
    cardsTable.prepend(renderCard(newCard))
    inputNameCard.value = ''
    inputLinkCard.value = ''
    togglePopupAddVisibility()
}

//Функция отрытия картинки
function imageView(item) {
    togglePopupImgVisibility(popupImgViewElement)
    popupImg.src = item.link
    popupImg.alt = item.name
    popupName.textContent = item.name
}

//Слушатели на кнопки
popupEditButtonElement.addEventListener('click', editButton);
popupCloseEditButtonElement.addEventListener('click', togglePopupEditVisibility);
popupAddButtonElement.addEventListener('click', togglePopupAddVisibility);
popupCloseAddButtonElement.addEventListener('click', togglePopupAddVisibility);
popupCloseImgViewButtonElement.addEventListener('click', togglePopupImgVisibility);
formEdit.addEventListener('submit', profileContent);
formAdd.addEventListener('submit', addCard);
