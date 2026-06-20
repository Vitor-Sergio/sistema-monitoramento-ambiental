const Sensor = require("./classes/Sensor");
const Leitura = require("./classes/Leitura");
const SistemaController = require("./controllers/SistemaController");

const sistema = new SistemaController();

const sensor1 = new Sensor("S01", "Temperatura", "Centro", "ligado");

sistema.cadastrarSensor(sensor1);

const leitura1 = new Leitura(sensor1, 120, "20/06/2026", "15:00");

sistema.registraleituras(leitura1);

sistema.listarSensoresAtivos();
console.log(sistema)