themeToggler.onclick = () => {
  document.body.classList.toggle("light-mode");
  document.getElementById("header__themeToggler__image").src =
    document.body.classList.contains("light-mode")
      ? "./images/Icon.moon.svg"
      : "./images/Icon.sun.svg";
};
