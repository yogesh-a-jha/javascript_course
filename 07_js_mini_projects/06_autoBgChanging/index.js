function randomColor(){
    const hex ="0123456789ABCDEF"
    let color="#"

    for (let i = 0; i < 6; i++) {
       color += hex[Math.floor(Math.random()*16)]
        
    }
    return color;
}

let interval;
function startChangingColor(){
    if(!interval){
    interval = setInterval(colors,1000)
    }
   
    function colors(){
        console.log(randomColor());
        document.querySelector('body').style.background = randomColor();
        

    }
    
}

function stopChangingColor(){
    clearInterval(interval)
    interval=null;
}

document.querySelector("#start").addEventListener("click",startChangingColor)
document.querySelector("#stop").addEventListener("click",stopChangingColor)

