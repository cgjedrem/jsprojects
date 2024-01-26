"use strict";

const modals = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");
const btnsCloseModals = document.querySelectorAll(".close-modal");
const btnsOpenModals = document.querySelectorAll(".show");

//open modals
for (let i = 0; i < btnsOpenModals.length; i++) {
  btnsOpenModals[i].addEventListener("click", function () {
    console.log(`button clicked`);
    modals[i].classList.remove("hidden");
    overlay.remove("hidden");

    btnsCloseModals[i].addEventListener("click", function () {
      console.log("close butten clicked");
      modals[i].classList.add("hidden");
      overlay.classList.add("hidden");
    });
  });
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    for (let i = 0; i < btnsOpenModals.length; i++) {
      if (!modals[i].classList.contains("hidden")) {
        modals[i].classList.add("hidden");
      }
    }
  }
});
