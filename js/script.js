const allSeat = document.getElementsByClassName('seat');
let count = 0;
let count2 = 40;
let tottalPrice = 0;
for (const seat of allSeat) {
    seat.addEventListener('click', function (e) {
        count = count + 1;
        count2 = count2 - 1;
        // calculate tottal price
        tottalPrice = tottalPrice + 550;
        if (count <= 4) {
            // hidden and disable and color  
            const seatName = e.target.innerText;
            e.target.style.backgroundColor = 'green';
            e.target.style.cursor = "not allowed";
            e.target.style.pointerEvents = "none";

            //   append child
            const seatPriceContainer = document.getElementById('seat-price-containar');
            const li = document.createElement('li');
            const p = document.createElement('p');
            const p2 = document.createElement('p');
            const SeatPrice = document.createElement('p');
            p.innerText = seatName;
            p2.innerText = "Economoy";
            SeatPrice.innerText = ("550");
            //  const SeatPriceNum = parseInt(SeatPrice.innerText)
            //   seatPrice =parseInt(p3.innerText);


            li.appendChild(p);
            li.appendChild(p2);
            li.appendChild(SeatPrice);

            seatPriceContainer.appendChild(li);
            setInnerText('grand-tottal', tottalPrice);
            setInnerText('tottal-price', tottalPrice);
            setInnerText('seat-count', count);
            setInnerText('tottal-seat', count2);
        }

        else {
            seat.setAttribute('disable', true)
        }
    })
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}


// couponBtn.parentNode.
const couponBtn = document.getElementById('coupon-btn');
console.log(couponBtn.parentNode);
couponBtn.addEventListener('click', function () {
    const couponElement = document.getElementById('coupon-field').value;
    const couponCode = couponElement;
    console.log(couponCode)
   
        if (couponElement === 'NEW15') {
            const grandTottal = document.getElementById('grand-tottal');
            const discountGrandTottal = tottalPrice * 0.15;
            const grandTottalPrice = tottalPrice - discountGrandTottal;
            grandTottal.innerText = grandTottalPrice;
           
            couponBtn.parentNode.classList.add('hidden')
           
            
        }
        else if (couponElement === 'Couple 20') {
            const grandTottal = document.getElementById('grand-tottal');
            const discountGrandTottal = tottalPrice * 0.2;
            const grandTottalPrice = tottalPrice - discountGrandTottal;
            grandTottal.innerText = grandTottalPrice;
            couponBtn.parentNode.classList.add('hidden')
        }
        else {
            alert('invalid coupon !')
        }
   
})



// congratulatin section and coupon

function congratulationSection() {
    const congratulatinSec = document.getElementById('succes');
    congratulatinSec.classList.remove('hidden')


}
