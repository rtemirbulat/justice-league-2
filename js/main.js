$(document).ready(function () {
  const mMenuBtn = $(".m-menu-button");
  const mMenu = $(".m-menu");
  const actorsBtn = $(".actors-btn");
  const actorsTab = $(".actors-tab");
  const creatorsBtn = $(".creators-btn");
  const creatorsTab = $(".creators-tab");
  mMenuBtn.on("click", function (param) {
    mMenu.toggleClass("active");
    $("body").toggleClass("no-scroll");
  });

  actorsBtn.on("click", function (param) {
    actorsTab.toggleClass("active", true);
    creatorsTab.toggleClass("active", false);
  });
  creatorsBtn.on("click", function (param) {
    creatorsTab.toggleClass("active", true);
    actorsTab.toggleClass("is-inactive", true);
    actorsTab.toggleClass("active", false);
  });
  var mySwiper = new Swiper(".swiper-container", {
    slidePerView: 2,
    spaceBetween: 25,
    breakpoints: {
      992: {},
      768: {},
      320: {
        slidesOffsetAfter: 50,
        navigation: {
          nextEl: ".button-next",
        },
      },
    },
    loop: true,
  });
});
