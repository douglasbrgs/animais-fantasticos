import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeClass = 'ativo';

    // define eventos a serem observados fora do menu
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    // bind do callback a classe
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // adiciona classe para ativar o menu
  // além de um observador para eventos fora dele
  activeDropdownMenu(event) {
    event.preventDefault();

    const element = event.currentTarget;

    element.classList.add(this.activeClass);

    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // adiciona evento a cada um dos menus
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
