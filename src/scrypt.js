const seeLateral = document.getElementById("seeLateral");
const lateralDiv = document.getElementById("lateralDiv");
const close = document.getElementById("close");
const firstTabs = document.getElementById("firstTabs");
const secondTabs = document.getElementById("secondTabs");
const thirdTabs = document.getElementById("thirdTabs");
const firstTab = document.getElementById("firstTab");
const secondTab = document.getElementById("secondTab");
const thirdTab = document.getElementById("thirdTab");
const blocker = document.getElementById("blocker");
const before = document.getElementById("before");
const changeImage = document.getElementById("changeImage");
const next = document.getElementById("next");
const donkeyKong = document.getElementById("donkeyKong");
const closet = document.getElementById("closet");
const closetMario = document.getElementById("closetMario");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("secondModal");
const language = document.getElementById("language");
const localRead = localStorage.getItem("language");
const images = [
  "images/Yoshi.png",
  "images/MarioNSMBUDeluxe.png",
  "images/MPSS_Luigi.webp",
  "images/MPS_Donkey_Kong_Artwork.webp",
  "images/MPSS_Peach.webp",
];
const tabs = [firstTab, secondTab, thirdTab];
const tabContents = [firstTabs, secondTabs, thirdTabs];
let counter = 0;

if (localRead) {
  switchLanguage(localRead);
} else {
  localStorage.setItem("language", "pt");
}

seeLateral.addEventListener("click", () => {
  lateralDiv.style.display = "block";
  blocker.style.display = "block";

  close.addEventListener("click", () => {
    lateralDiv.style.display = "none";
    blocker.style.display = "none";
  });
});

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContents.forEach((content, i) => {
      content.style.display = i === index ? "flex" : "none";
    });
  });
});

next.addEventListener("click", () => changeImage(1));
before.addEventListener("click", () => changeImage(-1));

function changeImage(delta) {
  counter += delta;
  if (counter < 0) {
    counter = images.length - 1;
  } else if (counter >= images.length) {
    counter = 0;
  }
  changeImage.src = images[counter];
}


/*next.addEventListener("click", () => {
  if (counter < images.length - 1) {
    counter++;
    changeImage.src = images[counter];
  } else {
    counter = 0;
    changeImage.src = images[counter];
  }
});
before.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    changeImage.src = images[counter];
  } else {
    counter = images.length - 1;
    changeImage.src = images[counter];
  }
});*/

closet.addEventListener("mouseenter", () => {
  closetMario.style.transform = "rotate(60deg) translate(30%)";
  closet.addEventListener("mouseleave", () => {
    closetMario.style.transform = "rotate(0deg)";
  });
});

closet.addEventListener("click", () => {
  modal.style.display = "flex";
  blocker.style.display = "block";
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    blocker.style.display = "none";
  });
});

donkeyKong.addEventListener("click", () => {
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
});

language.addEventListener("change", () => {
  switchLanguage(language.value);
  localStorage.setItem("language", language.value);
});

function switchLanguage(lang) {
  const trans = {
    en: "this doesn't really work in english.",
    pt: "Mario? Aquele que te comeu atras do armario.",
    cn: "读白 不要忘记 不要错过 记得去电影院看《速度与激情9 因为非常好电影 动作非常好 差不多一样冰淇淋 再见",
  }
  const langQuote = document.getElementById("langQuote");
  langQuote.innerHTML = trans[lang];
}
