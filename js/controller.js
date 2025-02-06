let html = document.querySelector(".card_isolate");

cardList.render(Database.mainArray, html);

function myFunction() {
    const collection = document.getElementsByClassName("card_name");
    let show = collection[0].innerHTML = "Hello World!";
    console.log(show)
  }
  function toAddCard(){
    Database.add("Anton", "eeeeee", 32, "Teacher", Database.setId(Database.mainArray), "Good guy");
    cardList.render(Database.mainArray, html);
  }
 