var boxes = document.querySelectorAll("#he");
var reset = document.querySelector("#reset");
var container = document.querySelector(".re");
var container2 = document.querySelector("#mesg");
var stop = document.querySelector(".mainn")


var turnO = true;


stop.addEventListener("dbclick" ,function(){
    bgmusic.pause();
})


var display = (pattern0) =>{
    container2.innerText =`Congratulations, Winner is ${pattern0}`
    gameover.play() ;
    container2.style.backgroundColor ="#32cd32"
    container2.style.transition = "width 0.3s"
    container2.style.width = "60%";  
}


reset.addEventListener("mouseenter" , function(){
    reset.style.transition = "width 0.3s"
    reset.style.width = "360px";
    reset.style.backgroundColor = "#ecffb0"  
})
reset.addEventListener("mouseleave",function(){
    reset.style.transition="width 0.3s";
    reset.style.width="180px";
    reset.style.backgroundColor = "white"  
})


var Win_patterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


boxes.forEach((he) =>{
    he.addEventListener("click" , function(){
        console.log("clicked");
        if(turnO){
            he.innerText="X"
            turnO=false;
        }
        else{
            he.innerText="O"
            turnO=true;
        }
        he.disabled=true;
        check();
    })
})


reset.addEventListener("click" , function(){
    turnO=true;
    for(let box of boxes){
        box.disabled=false;
        box.innerText =" "
    }
    container2.innerText = "Winner";
    container2.style.backgroundColor="#dddddd"
    container2.style.transition = "width 0.3s"
    container2.style.width = "20%";
})


var check = () =>{
    for(let patterns of Win_patterns){
        let pattern0 = boxes[patterns[0]].innerText
        let pattern1 = boxes[patterns[1]].innerText
        let pattern2 = boxes[patterns[2]].innerText


        if(pattern0 != "" && pattern1!="" && pattern2 !=""){
            if(pattern0 == pattern1 && pattern1 == pattern2){
                console.log(`Winner , ${pattern0}`)
                for(let box of boxes){
                    box.disabled=true;
                }
                display(pattern0)
            }
        }
    }
}


var sound = new Audio();
sound.src="ting.wav"


var gameover = new Audio();
gameover.src="mixkit-males-yes-victory-2012.wav"


var bgmusic = new Audio();
bgmusic.src="music.mp3"
