export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');

    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100);
      let start = 0;

      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = start;

        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  let observer;
  // funcao disparada quando ocorre uma mudanca no target (.numeros)
  // quando o target recebe a classe ativo (scroll-animacao)
  // a funcao animaNumeros é executada
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumeros();
    }
  }
  observer = new MutationObserver(handleMutation);
  // define observador para a section .numeros
  const oberserverTarget = document.querySelector('.numeros');

  observer.observe(oberserverTarget, { attributes: true });
}
