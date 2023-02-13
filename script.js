//language
const lang = document.getElementById("lang");
const block = document.getElementById("block");

const titleText = {
    "pt": "Capivaras",
    "en": "Capybaras",
    "es": "Carpinchos"
}

const orangeText = {
    "pt": "Capivara Laranja",
    "en": "Orange Capybara",
    "es": "Carpincho naranja"
}

const catText = {
    "pt": "Capivara com um gato",
    "en": "Capybara with a cat",
    "es": "Carpincho com un gato"
}

const loveText = {
    "pt": "Capivara Apaixonada",
    "en": "Falling in love capybara",
    "es": "carpincho enamorado"
}

const edText = {
    "pt": "Capivara Ed Sheeran",
    "en": "Ed Sheeran capybara",
    "es": "Carpincho Ed Sheeran"
}

const rainbowText = {
    "pt": "Capivara arco-iris",
    "en": "Rainbow capybara",
    "es": "Carpincho arcoiris"
}

const babyText = {
    "pt": "Capivara bebê",
    "en": "Baby capybara",
    "es": "Carpincho bebé"
}
const galleryText = {
    "pt": "Galeria",
    "en": "Gallery",
    "es": "Galería"
}
const adoptText = {
    "pt": "Adotar",
    "en": "Adopt",
    "es": "Adoptar"
}
const nameLabeltext = {
    "pt": "Nome",
    "en": "Name",
    "es": "Nombre"
}
const whyLabeltext = {
    "pt": "Por que você quer uma capivara?",
    "en": "Why do you want a capybara?",
    "es": "¿por qué quieres un carpincho?"
}

lang.addEventListener("change", () => {
    document.getElementById("orange-text").innerHTML = orangeText[lang.value];
    document.getElementById("cat-text").innerHTML = catText[lang.value];
    document.getElementById("love-text").innerHTML = loveText[lang.value];
    document.getElementById("ed-text").innerHTML = edText[lang.value];
    document.getElementById("rainbow-text").innerHTML = rainbowText[lang.value];
    document.getElementById("baby-text").innerHTML = babyText[lang.value];
    document.getElementById("galleryLink").innerHTML = galleryText[lang.value];
    document.getElementById("adoptLink").innerHTML = adoptText[lang.value];
    document.getElementById("nameLabel").innerHTML = nameLabeltext[lang.value];
    document.getElementById("whyLabel").innerHTML = whyLabeltext[lang.value];
});


//side menu
const openSidebar = document.getElementById("sideMenuButton");
const closeSidebar = document.getElementById("closeSidebar");

openSidebar.addEventListener("click", (e) => {
    document.getElementById("sidebar").style.width = "250px";
    block.style.display = "block";

})

closeSidebar.addEventListener("click", () => {
    document.getElementById("sidebar").style.width = "0";
    block.style.display = "none";
})

//tabs
const tablinks = document.getElementsByClassName("tablinks");
const tabs = document.getElementsByClassName("tabcontent");


for (let i = 0; i < tablinks.length; i++) {

    tablinks[i].addEventListener("click", () => {
        let current = document.getElementsByClassName("active");
        for (let i = 0; i < current.length; i++) {
            current[i].className = current[i].className = "tablinks";
        }

        for (let i = 0; i < tabs.length; i++) {
            tabs[i].style.display = "none";
        }

        let tab = tabs[tablinks[i].value];
        tab.style.display = "block";
        tablinks[i].className = "active";
    });
}

tabs[0].style.display = "block";

//Adopte
const modal = document.getElementById("modal");
const name = document.getElementById("name");
document.getElementById("adopteForm").addEventListener("submit", (e) => {
    e.preventDefault();
    modal.style.display = "block";
    document.getElementById("modalText").innerHTML = `Hello ${name.value}, congratulations to you for your adoption! We will send you an email with your adoption details. and we hope you enjoy your new capybara!`;
    block.style.display = "block";

});
document.getElementById("closeModal").addEventListener("click", () => {
    modal.style.display = "none";
    block.style.display = "none";
});
document.getElementById("modal-ok").addEventListener("click", () => {
    modal.style.display = "none";
    block.style.display = "none";
});

//gallery
const images = document.getElementsByClassName("gallery-image");
let index = 0;
images[index].style.display = "block";
document.getElementById("prev").addEventListener("click", () => {
    if (index - 1 < 0) {
        images[index].style.display = "none";
        index = images.length - 1;
        images[index].style.display = "block";
        return
    }
    images[index].style.display = "none";
    index--;
    images[index].style.display = "block";
});
document.getElementById("next").addEventListener("click", () => {
    if (index + 1 == images.length) {
        images[index].style.display = "none";
        index = 0;
        images[index].style.display = "block";
        return
    }
    images[index].style.display = "none";
    index++;
    images[index].style.display = "block";
});

