class Sensor {
  constructor(identificador, tipo, regiao, status) {
    this.identificador = identificador;
    this.tipo = tipo;
    this.regiao = regiao;
    this.status = status;
    this.alertas = 0;
  }

  ligar() {
    this.status = "ligado";
  }

  desligar() {
    this.status = "desligado";
  }

  manutencao() {
    this.status = "manutencao";
  }

  registrarLeitura(valor) {
    if (valor > 100) {
      this.alertas++;
    }

    if (this.alertas >= 3) {
      this.manutencao();
      console.log(`ALERTA: Sensor ${this.identificador} em manutenção`);
    }
  }
}

module.exports = Sensor;