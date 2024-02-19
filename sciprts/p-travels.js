const tickets = document.querySelectorAll('.ticket');

for (let i = 0; i < tickets.length; i++) {
    const ticket = tickets[i];
    //console.log(ticket)
    ticketNumber = 0;
    ticket.addEventListener('click', function (event) {
        //console.log('click')
        ticketNumber++;
        if (ticketNumber <= 4) {
            //color change
            document.getElementById('next-button').disabled =false;
            event.target.style.backgroundColor = '#1DD100'
            event.target.style.color = 'white'
            //seatless count
            const seatCountLess = document.getElementById('seat-count-less')
            const seatCount = seatCountLess.innerText;
            const seatCountNumber = parseInt(seatCount)
            const newSeatLessCount = seatCountNumber - 1;
            seatCountLess.innerText = newSeatLessCount;
            //seat increase count
            const seatIncrease = document.getElementById('seat-increase')
            const seatIncreaseCount = seatIncrease.innerText;
            const seatIncreaseNumber = parseInt(seatIncreaseCount);
            let newSeatIncrease = seatIncreaseNumber + 1;
            seatIncrease.innerHTML = newSeatIncrease;
            //price increase
            const totalPrice = document.getElementById('total-price')
            const totalPriceInside = totalPrice.innerText;
            const totalPriceNumber = parseInt(totalPriceInside);
            const newTotalPrice = totalPriceNumber + 550;
            totalPrice.innerText = newTotalPrice;
            //grand increase
            const grandPrice = document.getElementById('grand-price')
            const grandPriceInside = grandPrice.innerText;
            const grandPriceNumber = parseFloat(grandPriceInside);
            const newGrandPrice = grandPriceNumber + 550;
            grandPrice.innerText = newGrandPrice;
            // append time
            const addSection= document.getElementById('add-section')
            const economySection =document.getElementById('economy-section')
            const moneySection =document.getElementById('money-section')
            const ticketName = ticket.innerText;
            // console.log(ticketName)
            const ticketDetails=document.createElement('p');
            ticketDetails.innerHTML = ticketName
            addSection.appendChild(ticketDetails)
            const economyDetails =document.createElement('p')
            economyDetails.innerText = 'Economy'
            economySection.appendChild(economyDetails);
            const moneyDetails =document.createElement('p')
            moneyDetails.innerText = '550 TK'
            moneySection.appendChild(moneyDetails);
        }
        else{
            alert('Life is beautiful but getting the full bus for yourself is not.')
        }

    })
}

document.getElementById('coupon-button').addEventListener('click',function(){
    console.log('')
})