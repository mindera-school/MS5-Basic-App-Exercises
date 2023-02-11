const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("myModal");
const modalBlocker = document.getElementsByClassName("modalBlocker")[0];

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    modalBlocker.style.display = "none";
});