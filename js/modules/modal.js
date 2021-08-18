export default class Modal {
  constructor(btnAbrir, btnFechar, modal) {
    this.btnAbrir = document.querySelector(btnAbrir);
    this.btnFechar = document.querySelector(btnFechar);
    this.containerModal = document.querySelector(modal);

    // define o this das funções callback
    // para referenciar o objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  // abre ou fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // fecha o modal ao clicar do lado de fora dele
  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  // adiciona eventos aos elementos do modal
  addModalEvents() {
    this.btnAbrir.addEventListener('click', this.eventToggleModal);
    this.btnFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  init() {
    if (this.btnAbrir && this.btnFechar && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
