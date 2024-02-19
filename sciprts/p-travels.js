const tickets=document.querySelectorAll('.ticket');

for (let i = 0; i < tickets.length; i++) {
    const ticket = tickets[i];
    //console.log(ticket)
    ticket.addEventListener('click',function(event){
        //console.log('click')
        //color change
        event.target.style.backgroundColor ='#1DD100'
        event.target.style.color='white'
        //seatless count
        const seatCountLess= document.getElementById('seat-count-less')
        const seatCount = seatCountLess.innerText;
        const seatCountNumber = parseInt(seatCount)
        const newSeatLessCount =seatCountNumber-1;
        seatCountLess.innerText = newSeatLessCount;
        //seat increase count
        const seatIncrease = document.getElementById('seat-increase')
        const seatIncreaseCount = seatIncrease.innerText;
        const seatIncreaseNumber = parseInt(seatIncreaseCount);
        const newSeatIncrease = seatIncreaseNumber +1;
        seatIncrease.innerHTML = newSeatIncrease;
        //price increase
        const totalPrice = document.getElementById('total-price')
        const totalPriceInside = totalPrice.innerText;
        const totalPriceNumber = parseInt(totalPriceInside);
        const newTotalPrice = totalPriceNumber +550;
        totalPrice.innerText= newTotalPrice;
        //grand increase
        const grandPrice = document.getElementById('grand-price')
        const grandPriceInside = grandPrice.innerText;
        const grandPriceNumber = parseFloat(grandPriceInside);
        const newGrandPrice = grandPriceNumber + 550;
        grandPrice.innerText= newGrandPrice;
        //
    })
}