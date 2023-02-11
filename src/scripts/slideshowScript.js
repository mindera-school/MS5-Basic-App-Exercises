const prev = document.getElementsByClassName("prev")[0];
const next = document.getElementsByClassName("next")[0];
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");

let currentActive = [true, false, false];

slides[0].style.display = "flex";
dots[0].className = "dot active";

prev.addEventListener("click", () => {
  for (let i = 0; i < currentActive.length; i++) {
    if (currentActive[i]) {
      if (i == 0) {
        for (let f = 0; f < currentActive.length; f++) {
          slides[f].style.display = "none";
          dots[f].className = "dot";
        }
        slides[currentActive.length - 1].style.display = "flex";
        dots[currentActive.length - 1].className = "dot active";
        currentActive[currentActive.length - 1] = true;
        currentActive[i] = false;
        break;
      }
      for (let f = 0; f < currentActive.length; f++) {
        slides[f].style.display = "none";
        dots[f].className = "dot";
      }
      slides[i - 1].style.display = "flex";
      dots[i - 1].className = "dot active";
      currentActive[i - 1] = true;
      currentActive[i] = false;
      break;
    }
  }
});

next.addEventListener("click", () => {
  for (let i = 0; i < currentActive.length; i++) {
    if (currentActive[i]) {
      if (i == currentActive.length - 1) {
        for (let f = 0; f < currentActive.length; f++) {
          slides[f].style.display = "none";
          dots[f].className = "dot";
        }
        slides[0].style.display = "flex";
        dots[0].className = "dot active";
        currentActive[0] = true;
        currentActive[i] = false;
        break;
      }
      for (let f = 0; f < currentActive.length; f++) {
        slides[f].style.display = "none";
        dots[f].className = "dot";
      }
      slides[i + 1].style.display = "flex";
      dots[i + 1].className = "dot active";
      currentActive[i + 1] = true;
      currentActive[i] = false;
      break;
    }
  }
});

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", () => {
    switch (i) {
      case 0:
        slides[0].style.display = "flex";
        dots[0].className = "dot active";
        slides[1].style.display = "none";
        dots[1].className = "dot";
        slides[2].style.display = "none";
        dots[2].className = "dot";
        currentActive[0] = true;
        currentActive[1] = false;
        currentActive[2] = false;
        break;
      case 1:
        slides[0].style.display = "none";
        dots[0].className = "dot";
        slides[1].style.display = "flex";
        dots[1].className = "dot active";
        slides[2].style.display = "none";
        dots[2].className = "dot";
        currentActive[0] = false;
        currentActive[1] = true;
        currentActive[2] = false;
        break;
      case 2:
        slides[0].style.display = "none";
        dots[0].className = "dot";
        slides[1].style.display = "none";
        dots[1].className = "dot";
        slides[2].style.display = "flex";
        dots[2].className = "dot active";
        currentActive[0] = false;
        currentActive[1] = false;
        currentActive[2] = true;
        break;
    }
  });
}
