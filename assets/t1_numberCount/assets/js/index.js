let valueDisplays = document.querySelectorAll(".num");
let interval = 2000;

/* console.log(valueDisplays) Uso para teste*/

valueDisplays.forEach((valueDisplay) =>{
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
   /*  console.log(endValue) mais um teste */
   let duration = Math.floor(interval / endValue );
   let counter = setInterval(function(){
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter)
        }
   }, duration);
});