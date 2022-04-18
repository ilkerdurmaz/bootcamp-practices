let collapseBtn = document.querySelector('#switchBtn')
let cardBody = document.querySelector('#cardBody')
let cardFooter = document.querySelector('#cardFooter')

collapseBtn.addEventListener('click', () => {

    cardBody.classList.toggle("collapsible")
    cardFooter.classList.toggle("collapsible")
});

