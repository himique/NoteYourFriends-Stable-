const cardList = {
  renderCard(arr, element){
    element.innerHTML = '';
    arr.forEach(contact => {
    let div = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let button = document.createElement("button");
    let divRemove = document.createElement("div");
    let cardContainer = document.createElement("div");
    let removeButton = document.createElement("div");
    let textCard1 = document.createElement("h2");
    let textCard2 = document.createElement("h3");
    let textCard3 = document.createElement("h4");
    
    textCard1.dataset.cardButtonId = contact.id
    textCard2.dataset.cardButtonId = contact.id
    textCard3.dataset.cardButtonId = contact.id
    removeButton.classList.add("remove_button");
    removeButton.dataset.cardId = contact.id;
    button.classList.add("card_list");
    button.dataset.cardButtonId = contact.id;
    div.classList.add("card_text_wrapper");
    div.dataset.cardButtonId = contact.id;
    div2.classList.add("card_text_wrapper2");
    div2.dataset.cardButtonId = contact.id;
    div3.classList.add("card_text_wrapper3");
    div3.dataset.cardButtonId = contact.id;
    divRemove.classList.add("remove_menu");
    cardContainer.classList.add("card_container");

    

    
    removeButton.insertAdjacentHTML("beforeend", `-`);

    div.insertAdjacentHTML("beforeend", `<h2 class="card_name">${contact.name} ${contact.secondName}</h2>`);
    div2.insertAdjacentHTML("beforeend", `<h3 class="card_info">${contact.emp}</h3>`);        //заменить на textcards

    div3.insertAdjacentHTML("beforeend", `<h4 class="card_id">Id:${contact.id}</h4>`);
    

    cardContainer.appendChild(divRemove);
    cardContainer.appendChild(button);
    divRemove.appendChild(removeButton);
    button.appendChild(div);
    div.appendChild(textCard1);
    button.appendChild(div2);
    div2.appendChild(textCard2);
    button.appendChild(div3);
    div3.appendChild(textCard3);

   

    element.appendChild(cardContainer);
    
    
    });
  },
}