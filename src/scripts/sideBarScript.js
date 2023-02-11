const closeBut = document.getElementById("closeBut");
const sideNavBut = document.getElementById("sideNavBut");
const sideNav = document.getElementById("sideNav");
const main = document.getElementsByTagName("main")[0];
const blocker = document.getElementsByClassName("blocker")[0];

sideNavBut.addEventListener("click", () => {
  sideNav.style.width = "500px";
  blocker.style.display = "block";
});

closeBut.addEventListener("click", () => {
  sideNav.style.width = "0px";
  blocker.style.display = "none";
});
