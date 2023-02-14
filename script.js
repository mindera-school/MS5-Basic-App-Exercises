const btnShirt = document.getElementById("shirt");
const btnClub = document.getElementById("club");
const btnStats = document.getElementById("imgage-roni");
const divShirt = document.getElementById("box");
const divClub = document.getElementById("clubs");
const divStats = document.getElementById("stats");
const fechar = document.getElementById("close");
const modal = document.getElementById("roni-gif-modal");
const overlay = document.getElementById("overlay");
const modalLanguage = document.getElementById("language");
const closebtn = document.getElementById("close-btn");
const btnlateral = document.getElementById("menu-lateral");




btnShirt.addEventListener("click", () => {
    divShirt.style.display = "block";
    btnShirt.style.color = "black";
    btnShirt.style.background = "#90e0ef";
    //view clubes
    btnClub.style.color = "white";
    btnClub.style.background = "#023e8a";
    divClub.style.display = "none";

    //view stats
    btnStats.style.color = "white";
    btnStats.style.background = "#023e8a";
    divStats.style.display = "none";

    //carrossel
    divCarrosselSp.style.display = "none";
    divCarrosselReal.style.display = "none";
    divCarrosselUnited.style.display = "none";
    divCarrosselPortugal.style.display = "none";
    divCarrosselJuventus.style.display = "none";
    overlay.style.display = "none";
    modal.style.display = "none";

});
btnClub.addEventListener("click", () => {
    btnClub.style.color = "black";
    btnClub.style.background = "#90e0ef";
    divClub.style.display = "block";

    //view camisolas
    btnShirt.style.color = "white";
    btnShirt.style.background = "#023e8a";
    divShirt.style.display = "none";
    //view stats
    btnStats.style.color = "white";
    btnStats.style.background = "#023e8a";
    divStats.style.display = "none";

    //carrossel
    divCarrosselSp.style.display = "none";
    divCarrosselReal.style.display = "none";
    divCarrosselUnited.style.display = "none";
    divCarrosselPortugal.style.display = "none";
    divCarrosselJuventus.style.display = "none";
    overlay.style.display = "none";
    overlay.style.display = "none";
    modal.style.display = "none";

});
btnStats.addEventListener("click", () => {
    divStats.style.display = "none";
    btnStats.style.color = "black";
    btnStats.style.background = "#90e0ef";
    overlay.style.display = "block";
    modal.style.display = "block";
    //view camisolas
    btnShirt.style.color = "white";
    btnShirt.style.background = "#023e8a";
    divShirt.style.display = "none";
    //view clubes
    btnClub.style.color = "white";
    btnClub.style.background = "#023e8a";
    divClub.style.display = "none";
    //carrossel
    divCarrosselSp.style.display = "none";
    divCarrosselReal.style.display = "none";
    divCarrosselUnited.style.display = "none";
    divCarrosselPortugal.style.display = "none";
    divCarrosselJuventus.style.display = "none";


});

fechar.addEventListener("click", () => {
    overlay.style.display = "none";
    modal.style.display = "none";
    divStats.style.display = "block";

});
btnlateral.addEventListener("click", () => {
    overlay.style.display = "block";
    modalLanguage.style.display = "block";

});

closebtn.addEventListener("click", () => {
    overlay.style.display = "none";
    modalLanguage.style.display = "none";

});






