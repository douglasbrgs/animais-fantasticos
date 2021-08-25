export default class AnimaNumeros {
  constructor(numeros, oberserverTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.oberserverTarget = document.querySelector(oberserverTarget);
    this.observerClass = observerClass;

    // bind de callback ao objeto da classe
    this.handleMutation = this.handleMutation.bind(this);
  }

  // recebe um elemento do dom contendo um número em seu texto
  // realiza uma animação incrementando de zero até o número especificado
  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let valorAtual = 0;

    const timer = setInterval(() => {
      valorAtual += incremento;
      numero.innerText = valorAtual;

      if (valorAtual > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // adiciona a animação de incremento para cada um dos números
  animaNumeros() {
    this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero));
  }

  // executado quando uma mutação no target é identificada
  // se target possui a classe indicada
  // desconecta o observador e executa animação dos números
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  // cria observador para mutações nos atributos do target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.oberserverTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.oberserverTarget) {
      this.addMutationObserver();
    }
  }
}
