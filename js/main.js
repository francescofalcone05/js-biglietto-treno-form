const sendButton = document.getElementById('send')
const cancButton = document.getElementById('canc')
const standard = ('Standard')
const junior = ('Junior')
const pricePerKm = 0.21




sendButton.addEventListener('click', function() {

const userName = document.getElementById('fname').value
//console.log(userName)

const userKm = document.getElementById('km-todo').value
//console.log(userKm)

const ageRange = document.getElementById('age-range').value
//console.log(ageRange)

const nrCarrozza = (Math.floor(Math.random ()*20) + 1)

const nrCp = (Math.floor(Math.random ()*10000) + 1)


const ticketPriceKm = pricePerKm * userKm
//console.log(ticketPriceKm)






document.getElementById('nome-cliente').innerText = userName
//console.log(userName)
document.getElementById('vagone').innerText = nrCarrozza
//console.log(nrCarrozza)
document.getElementById('random').innerText = nrCp
//console.log(nrCp)

if (ageRange == 1){
    document.getElementById('ticket-type').innerText= standard
    finalPrice = ticketPriceKm
}else {
    document.getElementById('ticket-type').innerText= junior
    finalPrice = ticketPriceKm * 0.40
}

document.getElementById('ticket-price').innerText = finalPrice.toFixed(2) + '€'
console.log(finalPrice.toFixed(2))

})

//non funziona il button annulla

cancButton.addEventListener('click', function() {

    document.getElementById("canc").reset()
})

