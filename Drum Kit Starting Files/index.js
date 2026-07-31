for(var i = 0; i<document.querySelectorAll(".drum").length; i++){
document.querySelectorAll("button")[i].addEventListener("click", function (){

var buttonin = this.innerHTML;

switch (buttonin) {
    case "w":
        var abc = new Audio('sounds/tom-1.mp3');
        abc.play();
        break;

    case "a":
        var abc = new Audio('sounds/tom-2.mp3');
        abc.play();
        break;

    case "s":
        var abc = new Audio('sounds/tom-3.mp3');
        abc.play();
        break;

    case "d":
        var abc = new Audio('sounds/tom-4.mp3');
        abc.play();
        break;

    case "j":
        var abc = new Audio('sounds/snare.mp3');
        abc.play();
        break;

    case "k":
        var abc = new Audio('sounds/crash.mp3');
        abc.play();
        break;

    case "l":
        var abc = new Audio('sounds/kick-bass.mp3');
        abc.play();
        break;

    default:
        console.log(buttonin);
}

});

}
document.addEventListener("keydown", function(){

    alert("key is pressed");

})



















    