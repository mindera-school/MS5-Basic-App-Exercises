const realBtn = document.getElementById("real-logo");
const juveBtn = document.getElementById("juve-logo");
const spBtn = document.getElementById("spt-logo");
const unitedBtn = document.getElementById("manu-logo");
const alBtn = document.getElementById("al-logo");
const ptBtn = document.getElementById("pt-logo");
//stats
const stats = document.getElementById("show-stats");
const realStats = document.getElementById("stats-real");
const juveStats = document.getElementById("stats-juve");
const spStats = document.getElementById("stats-sp");
const manStats = document.getElementById("stats-manu");
const ptStats = document.getElementById("stats-pt");
const alNassrStats = document.getElementById("stats-al");




realBtn.addEventListener("mouseover", () => {
    realBtn.style.display = "none";
    realStats.setAttribute("class", "stats-display");

});
realBtn.addEventListener("mouseleave", () => {

    realBtn.style.display = "block";
    realStats.setAttribute("class", "stats-real-none");

});
//juventus
juveBtn.addEventListener("mouseover", () => {
    juveBtn.style.display = "none";
    juveStats.setAttribute("class", "stats-display");
});

juveBtn.addEventListener("mouseleave", () => {

    juveBtn.style.display = "block";
    juveStats.setAttribute("class", "stats-juve-none");
});

//sporting
spBtn.addEventListener("mouseover", () => {

    spBtn.style.display = "none";
    spStats.setAttribute("class", "stats-display");
});

spBtn.addEventListener("mouseleave", () => {

    spBtn.style.display = "block";
    spStats.setAttribute("class", "stats-sp-none");
});

//united
unitedBtn.addEventListener("mouseover", () => {

    unitedBtn.style.display = "none";
    manStats.setAttribute("class", "stats-display");
});

unitedBtn.addEventListener("mouseleave", () => {

    unitedBtn.style.display = "block";
    manStats.setAttribute("class", "stats-manu-none");
});
//alNassr
alBtn.addEventListener("mouseover", () => {

    alBtn.style.display = "none";
    alNassrStats.setAttribute("class", "stats-display");
});

alBtn.addEventListener("mouseleave", () => {

    alBtn.style.display = "block";
    alNassrStats.setAttribute("class", "stats-al-none");
});

//portugal
ptBtn.addEventListener("mouseover", () => {

    ptBtn.style.display = "none";
    ptStats.setAttribute("class", "stats-display");
});

ptBtn.addEventListener("mouseleave", () => {

    ptBtn.style.display = "block";
    ptStats.setAttribute("class", "stats-pt-none");
});