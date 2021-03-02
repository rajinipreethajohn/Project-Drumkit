// NOTE: If we use (button) in querySelectorAll, then it could lead to problems later if other buttons elsewhere are created!!!! its therefore better to use classes and be more specific!

// The below is a code sequence where a function is separately created called handleclick! This can also be executed by having an anonymous function like function() {doing something}!

// document.querySelector("button").addEventListener("click", handleClick);
// function handleClick() {
//   alert("I got clicked");
// }

// The below works too, but more lines of code!

// document.querySelector("button").addEventListener("click", handleClick);
// document.querySelector(" .a").addEventListener("click", handleClick);
// document.querySelector(" .s").addEventListener("click", handleClick);
// document.querySelector(" .d").addEventListener("click", handleClick);
// document.querySelector(" .j").addEventListener("click", handleClick);
// document.querySelector(" .k").addEventListener("click", handleClick);
// document.querySelector(" .l").addEventListener("click", handleClick);
//
// function handleClick() {
//   alert("I got clicked");
// }


// This below works too!

// var numberOfDrumButtons = document.querySelectorAll(".drum").length;
//
// for (var i = 0; i < numberOfDrumButtons; i++) {
//   document.querySelectorAll(".drum") [i].addEventListener("click", function () {
//     alert("I got clicked!");
//   })
// }

// Below is- Detecting button press!
var numberOfDrumButtons = document.querySelectorAll(".drum");

for (var i = 0; i < numberOfDrumButtons.length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {


    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);


  })
}

// Below is- Detecting keyboard press!

document.addEventListener("keydown", function(event) {
  makeSound(event.key);

  buttonAnimation(event.key);
})

function makeSound(key) {

  switch (key) {
    case "w":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "a":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "s":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "d":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    case "l":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;




    default: console.log(buttonInnerHTML);

}
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout (function() {
    activeButton.classList.remove("pressed");
  }, 200);


}
