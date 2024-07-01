const button = document.getElementById("button");
const squares = document.querySelectorAll(".square");

// Function to generate a random RGB color
function getRandomColor() {
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
  ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  return randomColor;
}

// Function to shuffle colors with a spinning animation
function shuffleColors() {
  squares.forEach((square) => {
    const randomColor = getRandomColor();
    square.classList.add("spin");

    // Apply the new color after a short delay to allow animation to start
    setTimeout(() => {
      square.style.backgroundColor = randomColor;
      square.classList.remove("spin");}, 500);
  });
}


button.addEventListener("click", shuffleColors);
document.querySelector(".button").addEventListener("click", shuffleColors);
