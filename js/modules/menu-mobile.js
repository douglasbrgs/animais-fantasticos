import outsideClick from './outsideclick.js';

export default function menuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touchstart'];

  function openMenu() {
    menuButton.classList.add('active');
    menuList.classList.add('active');

    // detecta se houve click fora do elemento informado
    outsideClick(menuList, eventos, () => {
      menuButton.classList.remove('active');
      menuList.classList.remove('active');
    });
  }
  if (menuButton) {
    eventos.forEach((userEvent) => menuButton.addEventListener(userEvent, openMenu));
  }
}
