const $menu = document.querySelector(".menu-icon");

$menu.addEventListener("click", (e) => {
  $menu.classList.toggle("active");
  console.log($menu.children);
  Array.prototype.forEach.call($menu.children, (element) => {
    element.classList.remove("no-animation");
  });
});
