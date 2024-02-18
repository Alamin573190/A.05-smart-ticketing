const allSeat = document.getElementsByClassName('seat');
let count = 0;
let count2 =40;
for (const seat of allSeat){
    seat.addEventListener('click',function(e){
        count = count + 1;
        count2 = count2 - 1;
        const seatName =e.target.innerText;
        e.target.style.backgroundColor ='green';
        // const seatPrice =e.target.parentNode.parentNode.parentNode;
        // console.log(seatPrice)
    //     const seatPriceContainer = document.getElementById('seat-price-containar');
    //    const li = document.createElement('li');
    //   const p = document.createElement('p');
    //   p.innerText=e.target.innerText;

    //   li.appendChild(p);
        
        // seatPriceContainer.appendChild();
        setInnerText('seat-count',count)
        setInnerText('tottal-seat',count2)
    })
}
function setInnerText(id, value){
    document.getElementById(id).innerText=value;
}