tabBut[0].className = "tabLinks_active";

for (let i = 0; i < tabBut.length; i++) {
  tabBut[i].addEventListener("click", () => {
    switch (tabBut[i].id) {
      case "cookieClickerBut":
        tabBut[0].className = "tabLinks_active";
        tabBut[1].className = "tabLinks";
        tabBut[2].className = "tabLinks";
        break;
      case "carrocelBut":
        tabBut[0].className = "tabLinks";
        tabBut[1].className = "tabLinks_active";
        tabBut[2].className = "tabLinks";
        break;
      case "calculatorBut":
        tabBut[0].className = "tabLinks";
        tabBut[1].className = "tabLinks";
        tabBut[2].className = "tabLinks_active";
        break;
    }
  });
}
