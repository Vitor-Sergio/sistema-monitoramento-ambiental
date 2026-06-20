const Sensor = require("./classes/Sensor")
const Leitura = require("./classes/Leitura")
const SistemaController = require("./controllers/SistemaController")

const sistema = new SistemaController()

const sensor1 = new Sensor("S001", "Temperatura", "Centro", "ligado")
const sensor2 = new Sensor("S002", "Umidade", "Norte", "ligado")

sistema.cadastrarSensor(sensor1)
sistema.cadastrarSensor(sensor2)

sistema.registraleituras(
  new Leitura(sensor1, 120, "20/06/2026", "14:00")
)

sistema.registraleituras(
  new Leitura(sensor1, 130, "20/06/2026", "14:10")
)

sistema.registraleituras(
  new Leitura(sensor1, 140, "20/06/2026", "14:20")
)

console.log("\n--- Todos os Sensores ---")
sistema.listarTodosSensores()

console.log("\n--- Leituras Registradas ---")
sistema.listarLeituras()

console.log("\n--- Sensores Ativos ---")
sistema.listarSensoresAtivos()

console.log("\n--- Sensores em Manutenção ---")
sistema.listarSensoresManutencao()