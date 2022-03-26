const closeModal = document.querySelector(".close");
const openModal = document.querySelectorAll(".open-modal");
const modalContainer = document.getElementById("modal-container");

const dateToday = function () {
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  document.getElementById("counter").innerHTML = date;
};
dateToday();

closeModal.addEventListener("click", () => {
  modalContainer.classList.add("active");
});
openModal.forEach((elem) => {
  elem.addEventListener("click", () => {
    modalContainer.classList.remove("active");
  });
});
