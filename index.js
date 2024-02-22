
// Detecting button press
for( var i=0; i<document.querySelectorAll(".drum").length; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
        }
    )
}

//Detecting keyboard press
document.addEventListener("keydown",function(key){

    makeSound(event.key);

    buttonAnimation(event.currentKey);
})



function makeSound(key){
    switch(key){

        case "w":
            var tom1 = new Audio("tom-1.mp3");
            tom1.play();
         break;

        case "a":
            var tom2 = new Audio("tom-2.mp3");
            tom2.play(); 
         break;
         
        case "s":
            var tom3 = new Audio("tom-3.mp3");
            tom3.play(); 
        
        case "d":
            var tom4 = new Audio("tom-1.mp3");
            tom4.play();    
        
        case "j":
            var snare = new Audio("snare.mp3");
            snare.play();        
         break;
         
        case "k":
            var crash = new Audio("crash.mp3");
            crash.play();    
         break;
         
        case "l":
            var kick = new Audio("kick-bass.mp3");
            kick.play();     
         break;

        default: console.log(key);
}
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout (function(){
        activeButton.classList.remove("pressed")
    }, 100);


    }

