import outsideClick from './outsideclick.js';

export default class menuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = 'active';

    // define eventos a serem observados fora do menu
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    // bind de callback a classe
    this.openMenu = this.openMenu.bind(this);
  }

  // abre menu adicionando classe ao css
  openMenu() {
    this.menuButton.classList.add(this.activeClass);
    this.menuList.classList.add(this.activeClass);

    outsideClick(this.menuList, this.events, () => {
      this.menuButton.classList.remove(this.activeClass);
      this.menuList.classList.remove(this.activeClass);
    });
  }

  // adiciona ao botão, evento de abertura do menu
  addMenuMobileEvent() {
    this.events.forEach((userEvent) => this.menuButton.addEventListener(userEvent, this.openMenu));
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvent();
    }
    return this;
  }
}
