function countdown() {
  var seconds = document.getElementById("seconds").value;

  function tick() {
    seconds = seconds - 1;
    timeRanges.innerHTML = seconds;
    var time = setTimeout(tick, 1000);
    if (seconds ==-1) {
      alert("Time's up!");
      clearTimeout(time);
      timer.innerHTML = "";
    }

}
tick();
}

let slideIndex = 1;

document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);

  // Optional: auto slide every 4 seconds
  setInterval(() => {
    plusSlides(1);
  }, 4000);
});

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

