const enterButton = document.getElementById("enter-btn");
const introText = document.getElementById("intro");

enterButton.addEventListener("click",function(){
// creating canvas for the matrix rain effect.
  const matrixCanvas = document.createElement("canvas");
  matrixCanvas.id = "matrix-canvas";
  document.body.appendChild(matrixCanvas);

// setting the canvas width and height to fill the browser
  matrixCanvas.width = window.innerWidth;
  matrixCanvas.height = window.innerHeight;

// removing button and paragraph
  enterButton.style.display = "none";
  introText.style.display = "none";

//setting variables for the matrix rain effect.
  const matrixContext = matrixCanvas.getContext("2d");
  const letters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const fontSize = 20;
  const columns = Math.floor(matrixCanvas.width / fontSize);
  const drop = new Array(columns).fill(0);

//creating matrix effect 
  function matrixRainEffect() {
    matrixContext.fillStyle = "rgb(0, 0, 0, 0.05)";
    matrixContext.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

    matrixContext.fillStyle = "#0F0";
    matrixContext.font = `${fontSize}px monospace`;

// Loop
    for( let i = 0; i < drop.length; i++){
      let randomCharacter = letters[Math.floor(Math.random() * letters.length)];
      let x = i * fontSize;
      let y = drop[i] * fontSize;

      matrixContext.fillText(randomCharacter, x, y);

      if(y > matrixCanvas.height && Math.random() > 0.975) {
        drop[i] = 0;
      } else {
        drop[i]++;
      }
    };
  };

  setInterval(matrixRainEffect, 40);

});