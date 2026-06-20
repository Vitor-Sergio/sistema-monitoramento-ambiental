class SistemaController {
  constructor() {
    this.sensores = [];
    this.leituras = [];
  }

  cadastrarSensor(sensor) {
    this.sensores.push(sensor);
    console.log("Sensor Registrado");
  }

  registraleituras(leitura) {
    this.leituras.push(leitura);
    leitura.sensorresponsavel.registrarLeitura(leitura.valor);
  }

  listarSensoresAtivos() {
    console.log("Sensores ativos:");

    for (let s of this.sensores) {
      if (s.status === "ligado") {
        console.log(`ID: ${s.identificador} | ${s.tipo} | ${s.regiao}`);
      }
    }
  }
}

module.exports = SistemaController;