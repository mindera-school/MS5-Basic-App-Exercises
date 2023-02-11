console.clear();

const textLanguage = document.getElementById("textLanguage");
const textPortugues = document.getElementById("textPortuguese");
const textEnglish = document.getElementById("textEnglish");
const firstTabButton = document.getElementById("cookieClickerBut");
const secondTabButton = document.getElementById("carrocelBut");
const thirdTabButton = document.getElementById("calculatorBut");
const firstImageCap = document.getElementById("firstImageCap");
const secondImageCap = document.getElementById("secondImageCap");
const thirdImageCap = document.getElementById("thirdImageCap");
const modalText = document.getElementById("modalText");

const defaultLanguage = "english";
const storage = localStorage.getItem("language") || defaultLanguage;

const languagesOptions = document.getElementById("languages");
let jsonFile;

const setLanguage = (language) => {
  switch (language) {
    case "english":
      textLanguage.innerHTML = jsonFile.english.textLanguage;
      textEnglish.innerHTML = jsonFile.english.textEnglish;
      textPortugues.innerHTML = jsonFile.english.textPortuguese;

      firstTabButton.innerHTML = jsonFile.english.firstTabButton;
      secondTabButton.innerHTML = jsonFile.english.secondTabButton;
      thirdTabButton.innerHTML = jsonFile.english.thirdTabButton;

      firstImageCap.innerHTML = jsonFile.english.firstImageCap;
      secondImageCap.innerHTML = jsonFile.english.secondImageCap;
      thirdImageCap.innerHTML = jsonFile.english.thirdImageCap;

      modalText.innerHTML = jsonFile.english.modalText;
      localStorage.setItem("language", "english");
      break;
    case "portuguese":
      textLanguage.innerHTML = jsonFile.portuguese.textLanguage;
      textEnglish.innerHTML = jsonFile.portuguese.textEnglish;
      textPortugues.innerHTML = jsonFile.portuguese.textPortuguese;

      firstTabButton.innerHTML = jsonFile.portuguese.firstTabButton;
      secondTabButton.innerHTML = jsonFile.portuguese.secondTabButton;
      thirdTabButton.innerHTML = jsonFile.portuguese.thirdTabButton;

      firstImageCap.innerHTML = jsonFile.portuguese.firstImageCap;
      secondImageCap.innerHTML = jsonFile.portuguese.secondImageCap;
      thirdImageCap.innerHTML = jsonFile.portuguese.thirdImageCap;

      modalText.innerHTML = jsonFile.portuguese.modalText;
      localStorage.setItem("language", "portuguese");
      break;
  }
};

fetch("/src/data/languages.json")
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    jsonFile = json;

    setLanguage(storage);

    languagesOptions.addEventListener("change", () => {
      setLanguage(languagesOptions.value);
    });
  });
