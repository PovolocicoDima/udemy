const slides = document.querySelectorAll(".slide");
const header = document.querySelector("h1");

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    disableActiveElements();
    slide.classList.add("active");
    const cityName = document.querySelector(".slide.active > h3").textContent;
    header.innerText = cityName;
  });
});

function disableActiveElements() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}
