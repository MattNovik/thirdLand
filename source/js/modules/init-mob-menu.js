const wrapperRef = document.querySelector(".wrapper");
const menuRef = document.querySelector(".menu");
const html = document.querySelector("html");

const burger = document.querySelector(".header__burger");

const menuItems = document.querySelectorAll(".menu__item");
const menuLinks = document.querySelectorAll(".menu__link");
const menuClose = document.querySelector(".menu__close");

const handleOpenMenu = () => {
  wrapperRef.classList.add("open");
  menuRef.classList.add("open");
  html.classList.add("hidden");
};

const handleCloseMenu = () => {
  wrapperRef.classList.remove("open");
  menuRef.classList.remove("open");
  html.classList.remove("hidden");
};

const initMenuOpener = () => {
  burger.addEventListener("click", handleOpenMenu);
  Array.from(menuItems).map((item) =>
    item.addEventListener("click", handleCloseMenu)
  );
  Array.from(menuLinks).map((item) =>
    item.addEventListener("click", handleCloseMenu)
  );
  const buttonEnterFromMenu = document.querySelector(".menu__enter");
  if (buttonEnterFromMenu) {
    buttonEnterFromMenu.addEventListener("click", handleCloseMenu);
  }
  menuClose.addEventListener("click", handleCloseMenu);
  wrapperRef.addEventListener("click", handleCloseMenu);
};

export { initMenuOpener };
