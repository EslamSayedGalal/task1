import {DateInput} from './import.js'
 const $btn = document.querySelector('#submit');
 const $result = document.querySelector('#print');
//const $countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
 //let $DateInput = document.getElementById('dateTime');

$btn.addEventListener("click",function()
{

  var x = setInterval(function() {

    var countDownDate = new Date(DateInput.value).getTime();
    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    let distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance /(1000*60*60)) %24);
    let minutes = Math.floor((distance /1000/60) % 60);
    let seconds = Math.floor((distance /1000) % 60);
  
    // Display the result in the element with id="demo"
    $result.innerHTML=`${days} days: ${hours} hours : ${minutes} minutes : ${seconds}`
    //If the count down is finished, write some text
    if (distance == 0) {
      clearInterval(x);
     $result.innerHTML= `this event should be strat now`;
    }
    if(distance<0)
    {
      clearInterval(x);
      $result.innerHTML= `EXPIRED`; 
    }
  }, 1000);

});