function myFunction() {
    const collection = document.getElementsByClassName("card_name");
    let show = collection[0].innerHTML = "Hello World!";
    console.log(show)
  }
  function toAddCard(){
    Database.add("Anton", "Mueler", 32, Database.setId(Database.mainArray), 3);
  }
  function toDeleteCard(){
    Database.removeObjectById(Database.mainArray, 3);
  }