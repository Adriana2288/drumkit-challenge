document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "a":
      case "A":
        document.querySelector("#boom").play();
        break;
      case "s":
      case "S":
        document.querySelector("#clap").play();
        break;
      case "d":
      case "D":
        document.querySelector("#hihat").play();
        break;
      case "f":
      case "F":
        document.querySelector("#kick").play();
        break;
      case "g":
      case "G":
        document.querySelector("#openhat").play();
        break;
      case "H":
      case "h":
        document.querySelector("#ride").play();
        break;
      case "j":
      case "J":
        document.querySelector("#snare").play();
        break;
      case "k":
      case "K":
        document.querySelector("#tink").play();
        break;
      case "l":
      case "L":
        document.querySelector("#tom").play();
        break;
    }
  });