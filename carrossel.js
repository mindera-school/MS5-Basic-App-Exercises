const divCarrosselSp = document.getElementById("box-carrossel-sp");
const btnesquerda = document.getElementById("button-esquerda-sp");
const btndireita = document.getElementById("button-direita-sp");
let imgSp = document.getElementsByClassName("slides-Sp");
const btnsp = document.getElementById("sp-btn");



//carroussel Sp
btnsp.addEventListener("click", () => {
    divCarrosselSp.style.display = "block";
    divShirt.style.display = "none";
});

let slideSp = 1;
showDivsSp(slideSp);
function plus(n) {
    showDivsSp(slideSp += n);
}

function showDivsSp(n) {
    
    if (n > imgSp.length) { slideSp = 1 }
    if (n < 1) { slideSp = imgSp.length };
    for (i = 0; i < imgSp.length; i++) {
        imgSp[i].style.display = "none";
    }
    imgSp[slideSp - 1].style.display = "block";
}

btnesquerda.addEventListener("click", () => {
    plus(-1);
});

btndireita.addEventListener("click", () => {
    plus(+1)
});

//real
const divCarrosselReal = document.getElementById("box-carrossel-real");
const btnReal = document.getElementById("real-btn");
const btnesquerdaReal = document.getElementById("button-esquerda-real");
const btndireitaReal = document.getElementById("button-direita-real");
let imgReal = document.getElementsByClassName("slides-Real");

let slide = 1;
showDivsReal(slide);

function plusDivs(n) {
    showDivsReal(slide += n);
}
function showDivsReal(n) {
    
    if (n > imgReal.length) { slide = 1 }
    if (n < 1) { slide = imgReal.length };
    for (i = 0; i < imgReal.length; i++) {
        imgReal[i].style.display = "none";
    }
    imgReal[slide - 1].style.display = "block";
}

btnReal.addEventListener("click", () => {
    divCarrosselReal.style.display = "block";
    divShirt.style.display = "none";
});

btnesquerdaReal.addEventListener("click", () => {
    plusDivs(-1);
});

btndireitaReal.addEventListener("click", () => {
    plusDivs(+1)
});

//united
const divCarrosselUnited = document.getElementById("box-carrossel-united");
const btnUnited = document.getElementById("united-btn");
const btnesquerdaUnited = document.getElementById("button-esquerda-united");
const btndireitaUnited = document.getElementById("button-direita-united");
let imgUnited = document.getElementsByClassName("slides-united");

let slideU = 1;
showDivsUnited(slideU);

function plusUnited(n) {
    showDivsUnited(slideU += n);
}
function showDivsUnited(n) {
   
    if (n > imgUnited.length) { slideU = 1 }
    if (n < 1) { slideU = imgUnited.length };
    for (i = 0; i < imgUnited.length; i++) {
        imgUnited[i].style.display = "none";
    }
    imgUnited[slideU - 1].style.display = "block";
}

btnUnited.addEventListener("click", () => {
    divCarrosselUnited.style.display = "block";
    divShirt.style.display = "none";
});

btnesquerdaUnited.addEventListener("click", () => {
    plusUnited(-1);
});

btndireitaUnited.addEventListener("click", () => {
    plusUnited(+1)
});


//portugal
const divCarrosselPortugal = document.getElementById("box-carrossel-portugal");
const btnPortugal = document.getElementById("portugal-btn");
const btnesquerdaPortugal = document.getElementById("button-esquerda-portugal");
const btndireitaPortugal = document.getElementById("button-direita-portugal");
let imgPortugal = document.getElementsByClassName("slides-portugal");

let slidePortugal = 1;
showDivsPortugal(slidePortugal);

function plusPortugal(n) {
    showDivsPortugal(slidePortugal += n);
}
function showDivsPortugal(n) {
    let i;
    if (n > imgPortugal.length) { slidePortugal = 1 }
    if (n < 1) { slidePortugal = imgPortugal.length };
    for (i = 0; i < imgPortugal.length; i++) {
        imgPortugal[i].style.display = "none";
    }
    imgPortugal[slidePortugal - 1].style.display = "block";
}

btnPortugal.addEventListener("click", () => {
    divCarrosselPortugal.style.display = "block";
    divShirt.style.display = "none";
});

btnesquerdaPortugal.addEventListener("click", () => {
    plusPortugal(-1);
});

btndireitaPortugal.addEventListener("click", () => {
    plusPortugal(+1)
});

//juventus
const divCarrosselJuventus = document.getElementById("box-carrossel-juventus");
const btnJuventus = document.getElementById("juventus-btn");
const btnesquerdaJuventus = document.getElementById("button-esquerda-juventus");
const btndireitaJuventus = document.getElementById("button-direita-juventus");
let imgJuventus = document.getElementsByClassName("slides-juventus");

let slideJuventus = 1;
showDivsJuventus(slideJuventus);

function plusJuventus(n) {
    showDivsJuventus(slideJuventus += n);
}
function showDivsJuventus(n) {
    
    if (n > imgJuventus.length) { slideJuventus = 1 }
    if (n < 1) { slideJuventus = imgJuventus.length };
    for (i = 0; i < imgJuventus.length; i++) {
        imgJuventus[i].style.display = "none";
    }
    imgJuventus[slideJuventus - 1].style.display = "block";
}

btnJuventus.addEventListener("click", () => {
    divCarrosselJuventus.style.display = "block";
    divShirt.style.display = "none";
});

btnesquerdaJuventus.addEventListener("click", () => {
    plusJuventus(-1);
});

btndireitaJuventus.addEventListener("click", () => {
    plusJuventus(+1)
});

