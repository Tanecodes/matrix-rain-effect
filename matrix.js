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
  const fontsize = 16;
  const columns = Math.floor(matrixCanvas.width / fontsize);
  const drop = new Array(columns).fill(0);

  //creating matrix effect 

});