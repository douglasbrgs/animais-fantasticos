/**
 * Retorna uma função que ao ser ativada executará o callback apenas uma vez após o delay.
 */
export default function debounce(callback, delay) {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay);
  };
}
