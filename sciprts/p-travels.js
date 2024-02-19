const tickets = document.querySelectorAll('.ticket');

for (let i = 0; i < tickets.length; i++) {
    const ticket = tickets[i];
    //console.log(ticket)
    ticketNumber = 0;
    ticketArray =[];
    ticket.addEventListener('click', function (event) {
        const ticketName = ticket.innerText;
            ticketArray.push(ticketName);
            console.log(ticketArray);
        //console.log('click')
        ticketNumber++;
        if(ticketNumber==4){
            document.getElementById('coupon-button').disabled=false;
        }
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
            const totalPriceNumber = parseFloat(totalPriceInside);
            const newTotalPrice = totalPriceNumber + 550;
            totalPrice.innerText = newTotalPrice;
            //grand increase
            const grandPrice = document.getElementById('grand-price')
            const grandPriceInside = grandPrice.innerText;
            const grandPriceNumber = parseFloat(grandPriceInside);
            let newGrandPrice = grandPriceNumber + 550;
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
            //check same ticket
        }
        else{
            alert('Life is beautiful but getting the full bus for yourself is not.')
        }

    })
}

document.getElementById('coupon-button').addEventListener('click',function(){   
    const couponInput= document.getElementById('coupon-input')
    const couponInputValue = couponInput.value
    const couponNew15 = couponInputValue.toLowerCase()
    const couponCouple= couponInputValue.split(' ').join('').toLowerCase()
    if(couponNew15==='new15'){
        const nowTotalPrice =document.getElementById('total-price');
        const nowTotalPrice1 =nowTotalPrice.innerText;
        const nowTotalPrice2 = parseFloat(nowTotalPrice1);
       const discountPrice = nowTotalPrice2 * 0.15;
       console.log(discountPrice)
       const discountGrantPrice = nowTotalPrice2-discountPrice.toFixed(2);
       const nowGrandPrice = document.getElementById('grand-price')
       nowGrandPrice.innerText =discountGrantPrice;
       const couponSection = document.getElementById('coupon-section')
       couponSection.classList.add('hidden') 
    }
    else if(couponCouple === 'couple20'){
        const nowTotalPrice =document.getElementById('total-price');
        const nowTotalPrice1 =nowTotalPrice.innerText;
        const nowTotalPrice2 = parseFloat(nowTotalPrice1);
       const discountPrice = nowTotalPrice2 * 0.20;
       const discountGrantPrice = nowTotalPrice2-discountPrice.toFixed(2);
       const nowGrandPrice = document.getElementById('grand-price')
       nowGrandPrice.innerText =discountGrantPrice;
       const couponSection = document.getElementById('coupon-section')
       couponSection.classList.add('hidden') 
    }
})


function showNextSection(){
    const hideSection= document.getElementById('hide-section')
    const hideSection1= document.getElementById('hide-section1')
    const hideSection2= document.getElementById('hide-section2')
    const nextSection= document.getElementById('thank-you')
    hideSection.classList.add('hidden')
    hideSection1.classList.add('hidden')
    hideSection2.classList.add('hidden')
    nextSection.classList.remove('hidden')
}

function showPreviousSection(){
    const hideSection= document.getElementById('hide-section')
    const hideSection1= document.getElementById('hide-section1')
    const hideSection2= document.getElementById('hide-section2')
    const nextSection= document.getElementById('thank-you')
    hideSection.classList.remove('hidden')
    hideSection1.classList.remove('hidden')
    hideSection2.classList.remove('hidden')
    nextSection.classList.add('hidden')
}