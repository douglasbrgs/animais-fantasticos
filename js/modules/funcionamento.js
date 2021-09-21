export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.semana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horario = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  tempoAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horaAgora = this.dataAgora.getUTCHours() - 3; // horario de Brasilia
  }

  estaAberto() {
    this.semanaAberto = this.semana.indexOf(this.diaAgora) !== -1;
    this.horarioAberto = this.horaAgora >= this.horario[0] && this.horaAgora < this.horario[1];

    return this.semanaAberto && this.horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.tempoAgora();
      this.ativaAberto();
    }
    return this;
  }
}
