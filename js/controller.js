let html = document.querySelector(".card_isolate");

cardList.renderCard(Database.mainArray, html);


function toAddCard() {
  const newName = "Anton";  // Replace with actual input values
  const newSecondName = "eeeeee";
  const newAge = 32;
  const newEmp = "Teacher";
  const newDescription = "Good guy";
  let newId = Database.setId(Database.mainArray);

  Database.add(newName, newSecondName, newAge, newEmp, newId, newDescription);
  cardList.renderCard(Database.mainArray, html);
}

html.addEventListener('click', function (event) {
  if (event.target.classList.contains('remove_button')) {
    const cardId = parseInt(event.target.dataset.cardId); // Получаем ID из атрибута data кнопки
    if (cardId) {
      Database.removeObjectById(Database.mainArray, cardId);
      cardList.renderCard(Database.mainArray, html);
    }
  }
});

html.addEventListener('click', function (event) {
  
    const cardId = parseInt(event.target.dataset.cardButtonId);
    if (cardId) {
      let found = Database.findObjectById(Database.mainArray, cardId);
      console.log(found);
    }
});

