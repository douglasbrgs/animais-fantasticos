export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');

  const semana = funcionamento.dataset.semana.split(',').map(Number);
  const horario = funcionamento.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horaAgora = dataAgora.getHours();

  const semanaAberto = semana.indexOf(diaAgora) !== -1;
  const horarioAberto = horaAgora >= horario[0] && horaAgora < horario[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add('ativo');
  }
}
