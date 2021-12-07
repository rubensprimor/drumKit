//adicionar o eventListener para todos os botões
for (i=0; i< document.querySelectorAll("button").length; i++){  //define o intervalo do 1º ao último botão
  document.querySelectorAll("button")[i].addEventListener("click", function () {  //aplica eventListener de clique para todos os botões

    //liga a animação e som para o botão clicado
    var button = this.innerHTML;
    makeSound(button);
    pressButton(button);
  });
}

  //adicona o eventListener para o teclado
  document.addEventListener("keyup", function(event) {
    makeSound(event.key);
    pressButton(event.key);
    console.log(event.key);
  });

  //converter as entradas em som
  function makeSound(buttonToPress){
    switch (buttonToPress) {
      case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
      case "a":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
      case "j":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
      case "k":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
        case "l":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;

      default: console.log("Comando inválido.");
    }
  }

  //Animação dos botões sendo apertados
  function pressButton(key){
    var activeKey = document.querySelector("." + key);
    console.log(activeKey);
    activeKey.classList.toggle("pressed");
    setTimeout(function(){
      activeKey.classList.toggle("pressed");
    }, 100);
  }
