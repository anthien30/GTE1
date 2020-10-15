// Hide nav bar
const navBar = document.querySelector("nav");
let currentPos = window.pageYOffset;
window.onscroll = function () {
  currentPos = window.pageYOffset;
  navBar.style.opacity = "1";
  setTimeout(hideNav, 2000);
};
navBar.addEventListener("mouseover", function () {
  navBar.style.opacity = "1";
});
navBar.addEventListener("mouseout", function (e) {
  if (e.clientY <= 70) {
    navBar.style.opacity = "1";
  } else {
    setTimeout(hideNav, 700);
  }
});
function hideNav() {
  if (currentPos > 0) navBar.style.opacity = "0";
}
// onmousemove = function (e) {
//   console.log("mouse location:", e.clientX, e.clientY);
//   if (e.clientY <= 70) {
//     navBar.style.opacity = "1";
//   } else {
//     setTimeout(hideNav, 700);
//   }
// };

//
//
//
//
//
//
//
//
//
let currentImgContainer = document.querySelector(".image-container.School");
currentImgContainer.style.opacity = "1";

const schoolBtn = document.querySelector(".school");
const majorBtn = document.querySelector(".major");
const homeBtn = document.querySelector(".home");
const countryBtn = document.querySelector(".country");
let currentBtn = schoolBtn;

majorBtn.addEventListener("click", function () {
  currentBtn.classList.remove("current-picker");
  currentBtn = majorBtn;
  currentBtn.classList.add("current-picker");
  currentImgContainer.style.opacity = "0";
  currentImgContainer = document.querySelector(".image-container.Major");
  currentImgContainer.style.opacity = "1";
});
schoolBtn.addEventListener("click", function () {
  currentBtn.classList.remove("current-picker");
  currentBtn = schoolBtn;
  currentBtn.classList.add("current-picker");
  currentImgContainer.style.opacity = "0";
  currentImgContainer = document.querySelector(".image-container.School");
  currentImgContainer.style.opacity = "1";
});
homeBtn.addEventListener("click", function () {
  currentBtn.classList.remove("current-picker");
  currentBtn = homeBtn;
  currentBtn.classList.add("current-picker");
  currentImgContainer.style.opacity = "0";
  currentImgContainer = document.querySelector(".image-container.Home");
  currentImgContainer.style.opacity = "1";
});
countryBtn.addEventListener("click", function () {
  currentBtn.classList.remove("current-picker");
  currentBtn = countryBtn;
  currentBtn.classList.add("current-picker");
  currentImgContainer.style.opacity = "0";
  currentImgContainer = document.querySelector(".image-container.Country");
  currentImgContainer.style.opacity = "1";
});
