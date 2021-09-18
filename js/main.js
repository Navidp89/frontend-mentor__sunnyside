var miniMenu = document.querySelector(".mini-menu");
console.log(miniMenu);
console.log(popupMenu);

var popupMenu = document.querySelector(".mini-menu__content");
const mainHeader = document.querySelector(".main-header");
const introSection = document.querySelector(".intro-section");
const headerContent = document.querySelectorAll(".main-header > *");
// console.log(headerContent);
miniMenu.addEventListener("click", function () {
  popupMenu.classList.toggle("show-menu");
});
const options = {
  root: null,
  threshold: 0.12,
  rootMargin: "0px",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      mainHeader.classList.add("fixed-nav");
      //   for (i = 0; i < headerContent; i++) {
      //     headerContent[i].classList.add("fade");
      //   }
      //   return;
    } else {
      console.log(entry);
      // entry.target.style.opacity = "1";
      mainHeader.classList.remove("fixed-nav");
    }
  });
}, options);

observer.observe(introSection);
