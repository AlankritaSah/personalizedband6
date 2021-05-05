
//BUTTON PRESS
for(var i = 0; i < document.querySelectorAll(".drum").length; i++){

  document.querySelectorAll("button")[i].addEventListener("mouseover", handleClick);

  function handleClick(){

  var buttonInnerHTML = this.innerHTML;

makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);

}
}

//KEYBOARD PRESSED

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});


function makeSound(key){

  switch (key) {
    case "d":
          var tom1 = new Audio('tom-1.mp3');
          tom1.play();
      break;

      case "r":
            var tom2 = new Audio('tom-2.mp3');
            tom2.play();
        break;

        case "m":
              var tom3 = new Audio('tom-3.mp3');
              tom3.play();
          break;

          case "f":
                var tom4 = new Audio('tom-4.mp3');
                tom4.play();
            break;

            case "s":
                  var crash = new Audio('crash.mp3');
                  crash.play();
              break;

              case "l":
                    var snare = new Audio('snare.mp3');
                    snare.play();
                break;

                case "t":
                      var kick = new Audio('kick-bass.mp3');
                      kick.play();
                  break;
    default:console.log(buttonInnerHTML);

  }

}


function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

setTimeout(function() {
  activeButton.classList.remove("pressed");
}, 100);

}
