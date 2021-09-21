const card = document.querySelector(".card");
const container = document.querySelector(".container");
const handbag = document.querySelector(".handbag img");
const title = document.querySelector(".title");
const description = document.querySelector(".description");
const colors = document.querySelector(".colors");
const purchase = document.querySelector(".purchase button");

//animation to move the card
container.addEventListener("mousemove", (e) => {
  const xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 10;
  card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
});

//when mouse enters the card

container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  handbag.style.transform = "translateZ(100px)";
  title.style.transform = "translateZ(100px)";
  description.style.transform = "translateZ(100px)";
  colors.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(100px)";
});

//when mouse leaves the card

container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.9s ease";
  card.style.transform = `rotateX(0deg) rotateY( 0deg)`;
  handbag.style.transform = "translateZ(0px)";
  title.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
  colors.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});
