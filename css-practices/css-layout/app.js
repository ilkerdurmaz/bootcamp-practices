let gridItem = document.querySelector('.gridItem');
let container = document.querySelector('.container');

for(let i=0; i<8; i++){
    let newCard = gridItem.cloneNode(true);
    newCard.setAttribute('id', "item"+i);
    newCard.firstElementChild.innerHTML = `Item ${i}`;
    newCard.style.display = "flex";
    container.appendChild(newCard);

}
