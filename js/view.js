const cardList = {
  render(arr, element){
    arr.forEach(contact => {
    let div = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let button = document.createElement("button");
    let divRemove = document.createElement("div");
    let cardContainer = document.createElement("div");
    let removeButton = document.createElement("div");

    removeButton.classList.add("remove_button");
    button.classList.add("card_list");
    div.classList.add("card_text_wrapper");
    div2.classList.add("card_text_wrapper2");
    div3.classList.add("card_text_wrapper3");
    divRemove.classList.add("remove_menu");
    cardContainer.classList.add("card_container");
    

    
    removeButton.insertAdjacentHTML("beforeend", `-`)

    div.insertAdjacentHTML("beforeend", `<h2 class="card_name">${contact.name} ${contact.secondName}</h2>`);
    div2.insertAdjacentHTML("beforeend", `<h3 class="card_info">${contact.emp}</h3>`);

    div3.insertAdjacentHTML("beforeend", `<h4 class="card_id">${contact.id}</h4>`);
    

    cardContainer.appendChild(divRemove);
    cardContainer.appendChild(button)
    divRemove.appendChild(removeButton);
    button.appendChild(div);
    button.appendChild(div2);
    button.appendChild(div3);

   

    element.appendChild(cardContainer);
    
    });
  },
}