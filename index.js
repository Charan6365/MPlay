function CreatorAudio(s){
(new Audio(s)).play();
}


var arr=document.querySelectorAll(".drum");
for(var i=0;i<arr.length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var ch=this.innerHTML;
        buttonAnimation(ch);
        switch (ch) {
            case "w":
                CreatorAudio("./sounds/tom-1.mp3");
                break;
            case "a":
                CreatorAudio("./sounds/tom-2.mp3");
                break;
            case "s":
                CreatorAudio("./sounds/tom-3.mp3");
                    break;
            case "d":
                CreatorAudio("./sounds/tom-4.mp3");
                break;
            case "j":
                CreatorAudio("./sounds/snare.mp3");
            break;
            case "k":
                CreatorAudio("./sounds/crash.mp3");
                    break;
            case "l":
                CreatorAudio("./sounds/kick-bass.mp3");
                        break;
            default:
                break;
        }

       });
    }
    document.addEventListener("keypress",function (event){
       var ch=event.key;
       buttonAnimation(ch);
       switch (ch) {
        case "w":
            CreatorAudio("./sounds/tom-1.mp3");
            break;
        case "a":
            CreatorAudio("./sounds/tom-2.mp3");
            break;
        case "s":
            CreatorAudio("./sounds/tom-3.mp3");
                break;
        case "d":
            CreatorAudio("./sounds/tom-4.mp3");
            break;
        case "j":
            CreatorAudio("./sounds/snare.mp3");
        break;
        case "k":
            CreatorAudio("./sounds/crash.mp3");
                break;
        case "l":
            CreatorAudio("./sounds/kick-bass.mp3");
                    break;
        default:
            break;
    }
    });
    
    function buttonAnimation(currentKey){
      var element=document.querySelector("."+currentKey);
      element.classList.add("pressed");
      setTimeout(timer,250);
      function timer(){
        element.classList.remove("pressed");
      }
    }
