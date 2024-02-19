const allSeat = document.getElementsByClassName('seat');
let count = 0;
let count2 =40;
let tottalPrice = 0;
for (const seat of allSeat){
    seat.addEventListener('click',function(e){
        count = count + 1;
        count2 = count2 - 1;
        // calculate tottal price
        tottalPrice = tottalPrice + 550;
        if(count <= 4){
            // hidden and disable and color  
        const seatName =e.target.innerText;
        e.target.style.backgroundColor ='green';
        e.target.style.cursor ="not allowed";
        e.target.style.pointerEvents ="none";
        
    //   append child
        const seatPriceContainer = document.getElementById('seat-price-containar');
       const li = document.createElement('li');
      const p = document.createElement('p');
      const p2 =document.createElement('p');
      const SeatPrice =document.createElement('p');
      p.innerText=seatName;
      p2.innerText="Economoy";
      SeatPrice.innerText=("550");
     const SeatPriceNum = parseInt(SeatPrice.innerText)
    //   seatPrice =parseInt(p3.innerText);
    // console.log(typeof SeatPriceNum);
       
      li.appendChild(p);
      li.appendChild(p2); 
      li.appendChild(SeatPrice);
        
        seatPriceContainer.appendChild(li);
        setInnerText('tottal-price',tottalPrice);
        setInnerText('seat-count',count);
        setInnerText('tottal-seat',count2);
        }
        else {
            seat.setAttribute('disable' ,true)
        }
    })
}

function setInnerText(id, value){
    document.getElementById(id).innerText=value;
} 

const btn =document.getElementById('copon-btn');
console.log(btn)