const card = document.querySelector(".card");
const container = document.querySelector(".container");

//animation to move the card
container.addEventListener("mousemove", (e) => {
  const xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 10;
  card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
});

//when mouse enters the card

container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
});

//when mouse leaves the card

container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5 ease";
  card.style.transform = `rotateX(0deg) rotateY( 0deg)`;
});
