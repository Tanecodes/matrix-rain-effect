const enterButton = document.getElementById("enter-button");
const introText = document.getElementById("intro");

enterButton.addEventListener("click",function(){

  const matrixCanvas = document.createElement("canvas");
  matrixCanvas.id = "matrix-canvas";
  document.body.appendChild(matrixCanvas);

  matrixCanvas.width = window.innerWidth;
  matrixCanvas.height = window.innerHeight;

  enterButton.style.display = "none";
  introText.style.display = "none";
  console.log(matrixCanvas);
});