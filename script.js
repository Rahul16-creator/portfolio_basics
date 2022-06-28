"use strict";
let toggle = document.querySelector(".toggle");
let sidebar = document.querySelector(".sidebar");
let imgBx = document.querySelector(".imgBx");
let progress = document.querySelector(".progress");

function ToggleMenu() {
  toggle.classList.toggle("active");
  sidebar.classList.toggle("active");
}

// ToggleMenu();

toggle.onclick = function () {
  toggle.classList.toggle("active");
  sidebar.classList.toggle("active");
  // imgBx.classList.toggle("active");
};

document.addEventListener("scroll", (e) => {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  progress.style.width = scrolled + "%";
});
