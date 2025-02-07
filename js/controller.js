let html = document.querySelector(".card_isolate");

cardList.render(Database.mainArray, html);


function toAddCard() {
  Database.add("Anton", "eeeeee", 32, "Teacher", Database.setId(Database.mainArray), "Good guy");
  cardList.render(Database.mainArray, html);
}

html.addEventListener('click', function(event) {
  if (event.target.classList.contains('remove_button')) {
    const cardId = parseInt(event.target.dataset.cardId); // Получаем ID из атрибута data кнопки
    if (cardId) {
      Database.removeObjectById(Database.mainArray, cardId);
      cardList.render(Database.mainArray, html);
    }
  }
});