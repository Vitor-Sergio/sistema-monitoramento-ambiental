class SistemaController {
  constructor() {
    this.sensores = []
    this.leituras = []
  }

  cadastrarSensor(sensor) {
    this.sensores.push(sensor)
    console.log("Sensor Registrado")
  }

  registraleituras(leitura) {
    this.leituras.push(leitura)
    leitura.sensorresponsavel.registrarLeitura(leitura.valor)
  }

  listarTodosSensores() {
    console.log("Todos os sensores:")

    for (let i = 0; i < this.sensores.length; i++) {
      let s = this.sensores[i]

      console.log(
        "ID:", s.identificador,
        "|", s.tipo,
        "|", s.regiao,
        "| Status:", s.status,
        "| Alertas:", s.alertas
      )
    }
  }

  listarLeituras() {
    console.log("Leituras registradas:")

    for (let i = 0; i < this.leituras.length; i++) {
      let l = this.leituras[i]

      console.log(
        "Sensor:", l.sensorresponsavel.identificador,
        "| Valor:", l.valor,
        "| Data:", l.data,
        "| Hora:", l.hora
      )
    }
  }

  listarSensoresAtivos() {
    console.log("Sensores ativos:")

    for (let i = 0; i < this.sensores.length; i++) {
      let s = this.sensores[i]

      if (s.status === "ligado") {
        console.log(
          "ID:", s.identificador,
          "|", s.tipo,
          "|", s.regiao
        )
      }
    }
  }

  listarSensoresManutencao() {
    console.log("Sensores em manutenção:")

    for (let i = 0; i < this.sensores.length; i++) {
      let s = this.sensores[i]

      if (s.status === "manutencao") {
        console.log(
          "ID:", s.identificador,
          "|", s.tipo,
          "|", s.regiao
        )
      }
    }
  }
}

module.exports = SistemaController