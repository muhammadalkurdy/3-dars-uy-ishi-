let totalPrice = 0;
let totalCollection = 0;
const btnIp = document.querySelector(".btn-ip");
const btnMi = document.querySelector(".btn-mi");
btnIp.addEventListener('click', () => {
    totalPrice = totalPrice + 1200 
    totalCollection = totalCollection + 1
    numbers.innerHTML = 'TOTAL PHONES :' + totalCollection 
    price.innerHTML = 'Price: ' + totalPrice+ "$"
})

btnMi.addEventListener('click', () => {
    totalPrice = totalPrice + 800 
    totalCollection = totalCollection + 1
    numbers.innerHTML = 'TOTAL PHONES :' + totalCollection 
    price.innerHTML = 'Price: ' + totalPrice+ "$"
})
stopBtn.addEventListener("click", () => {
    totalPrice = 0
    price.innerHTML = 'Price: ' + totalPrice
    totalCollection = 0
    numbers.innerHTML = 'TOTAL PHONES :'+ totalCollection

})