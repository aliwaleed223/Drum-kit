var numOfbut= document.querySelectorAll(".drum").length;// will return the number of button 
let myAudio = document.querySelectorAll('.audio') ; //will select all audio 
var num=0;
var keys=0;

var elements = document.getElementsByClassName("drum"); //will return all element  his class name drum ( button )

var myFunction = function() {
    var attribute = this.getAttribute("class");
    num=attribute[0];
    keys=attribute[2];
    animationKey(keys);

 };

for (var i = 0; i < elements.length; i++) {
elements[i].addEventListener('click', myFunction);
}

function handClick(){
    if( myAudio[num] )
        {
         myAudio[num].currentTime=0;
         myAudio[num].play();
        }
}


for (let i = 0; i <numOfbut; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", handClick)
}


 function hClick(event){
    for (var i = 0; i < elements.length; i++){
 
   if(event.key==elements[i].getAttribute("class")[2])
        {
           num=elements[i].getAttribute("class")[0]
           handClick();
           animationKey(elements[i].getAttribute("class")[2]);
         }
}

}

document.addEventListener('keydown', hClick);


function animationKey(currentKey)
{
var activation =  document.querySelector("."+currentKey);

activation.classList.add("pressed");

setTimeout(function() {
    activation.classList.remove("pressed");
}, 100);

 
 }
