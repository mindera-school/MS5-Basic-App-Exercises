const points = document.getElementById("points");
const cookieBtn = document.getElementsByClassName("cookieBtn");

for (let i = 0; i < cookieBtn.length; i++) {
  cookieBtn[i].addEventListener("click", () => {
    let val = +points.innerHTML;
    if (val % 10 === 0 && val != 0) {
      modal.style.display = "flex";
      modalBlocker.style.display = "flex";
    }
    points.innerHTML = val + 1;
  });
}
