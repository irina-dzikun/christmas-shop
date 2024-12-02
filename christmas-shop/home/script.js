function toggleNav() {
  const navMob = document.querySelector(".nav-wrapper-mob");
  const burger = document.querySelector(".burger");
  const body = document.body;
  burger.classList.toggle("burger-active");
  navMob.classList.toggle("nav-wrapper-mob-active");
  body.classList.toggle("noscroll");
}
