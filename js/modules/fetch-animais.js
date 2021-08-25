import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  // cria div contendo dados do animal informado
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;

    return div;
  }

  // cria div-animal e anexa ao target
  const numerosGrid = document.querySelector(target);
  function preencherAnimal(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // anima os números totais de animais
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // carrega infos de animais de um json e exibe no dom
  async function criarAnimais() {
    try {
      // fetch, espera resposta e transforma em json
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      // para cada animal ativa funções de preenchimento e animação dos dados
      animaisJson.forEach((animal) => preencherAnimal(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
