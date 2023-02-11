const tabBut = document.querySelectorAll(".tabLinks");

const cookieClickerTab = document.getElementById("cookieClickerTab");
const carrocelTab = document.getElementById("carrocelTab");
const calculatorTab = document.getElementById("calculatorTab");

cookieClickerTab.style.display = "flex";
carrocelTab.style.display = "none";
calculatorTab.style.display = "none";

for (let i = 0; i < tabBut.length; i++) {
  tabBut[i].addEventListener("click", () => {
    switch (tabBut[i].id) {
      case "cookieClickerBut":
        calculatorTab.style.display = "none";
        carrocelTab.style.display = "none";
        cookieClickerTab.style.display = "flex";
        break;
      case "carrocelBut":
        cookieClickerTab.style.display = "none";
        calculatorTab.style.display = "none";
        carrocelTab.style.display = "flex";
        break;
      case "calculatorBut":
        cookieClickerTab.style.display = "none";
        carrocelTab.style.display = "none";
        calculatorTab.style.display = "flex";
        break;
    }
  });
}