export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  function handleClickOutside(event) {
    // se o evento ocorreu fora do elemento
    // remove events do html
    // executa a callback passada
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);

      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleClickOutside);
      });
      callback();
    }
  }
  // se o evento ainda nao ocorreu no elemento
  // adiciona events ao html
  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      // com o setTimeOut o callback do html nao eh disparado pelo Bubble
      setTimeout(() => html.addEventListener(userEvent, handleClickOutside));
    });
    element.setAttribute(outside, '');
  }
}
