const colors = ["#00F430"]
const back = ["#FFFFFF"]
const btn = document.getElementById("btn");
const btnWhite = document.getElementById("btnWhite")
const color = document.querySelector(".color");

btn.addEventListener("click",  () => {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

// ajout
btnWhite.addEventListener("click",  () => {
  const randomNumber = getWhite();
  document.body.style.backgroundColor = back[randomNumber];
  color.textContent = back[randomNumber];
}); 

// ajout
function getWhite () {
  return Math.floor(Math.random() * back.length);
}

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
