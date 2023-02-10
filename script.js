//side menu
const openSidebar = document.getElementById("sideMenuButton");
const closeSidebar = document.getElementById("closeSidebar");

openSidebar.addEventListener("click", () => {
    document.getElementById("sidebar").style.width = "250px";
})

closeSidebar.addEventListener("click", () => {
    document.getElementById("sidebar").style.width = "0";
})

//tabs
const tablinks = document.getElementsByClassName("tablinks");
const tabs = document.getElementsByClassName("tabcontent");
tabs[0].style.display = "block";

for (let i = 0; i < tablinks.length; i++) {

    tablinks[i].addEventListener("click", () => {
        let current = document.getElementsByClassName("active");
        for (let i = 0; i < current.length; i++) {
            current[i].className = current[i].className = "tablinks";
        }

        for (let i = 0; i < tabs.length; i++) {
            tabs[i].style.display = "none";
        }

        const tab = tabs[tablinks[i].value];
        tab.style.display = "block";
        tablinks[i].className = "active";
        console.log(tablinks);
    });
}

