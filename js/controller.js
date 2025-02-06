let html = document.querySelector(".container_left");

cardList.render(Database.mainArray, html);

function myFunction() {
    const collection = document.getElementsByClassName("card_name");
    let show = collection[0].innerHTML = "Hello World!";
    console.log(show)
  }
  function toAddCard(){
    let newInfo = Database.add("Anton", "eeeeee", 32, "Teacher", 3, "Good guy");
    
    cardList.render(Database.mainArray, html);
  }
 