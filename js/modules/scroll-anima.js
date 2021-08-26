export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindowHeight = window.innerHeight * 0.5;

    // bind de callback ao objeto da classe
    this.checkDistance = this.checkDistance.bind(this);
  }

  // obtém a distância de cada seção ao topo da página
  getDistance() {
    // ao contrário do getBoundingClientRect o offset é constante
    this.distances = [...this.sections].map((section) => {
      const sectionTop = section.offsetTop;
      return {
        element: section,
        offset: sectionTop - this.halfWindowHeight,
      };
    });
  }

  // verifica a posição de cada elemento em relação ao scroll
  checkDistance() {
    this.distances.forEach((item) => {
      // adiciona classe se o scroll passou da posição do elemento
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('ativo');
      } else if (item.element.classList.contains('ativo')) {
        item.element.classList.remove('ativo');
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  // remove o event listener de scroll do window
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
