const prompt = require("prompt-sync")();

const Sensor = require("./classes/Sensor");
const Leitura = require("./classes/Leitura");
const SistemaController = require("./controllers/SistemaController");

const Usuario = require("./classes/Usuario");
const Operacao = require("./classes/Operacao");
const CoreController = require("./controllers/CoreController");

const sistema = new SistemaController();
const core = new CoreController();

let opcao;

while (opcao != 0) {

  console.log("\n===== SISTEMA TECHCITY =====");
  console.log("===== Monitoramento Ambiental =====");
  console.log("1 - Cadastrar Sensor");
  console.log("2 - Registrar Leitura");
  console.log("3 - Listar Todos os Sensores");
  console.log("4 - Listar Leituras");
  console.log("5 - Listar Sensores Ativos");
  console.log("6 - Listar Sensores em Manutenção");
  console.log("===== Core =====");
  console.log("7 - Cadastrar Usuário");
  console.log("8 - Ativar Usuário");
  console.log("9 - Desativar Usuário");
  console.log("10 - Listar Usuários");
  console.log("11 - Registrar Operação");
  console.log("12 - Listar Operações");
  console.log("0 - Sair");

  opcao = Number(prompt("Escolha uma opção: "));

  if (opcao == 1) {

    let id = prompt("Digite o ID do sensor: ");
    let tipo = prompt("Digite o tipo do sensor: ");
    let regiao = prompt("Digite a região do sensor: ");
    let status = prompt("Digite o status: ");

    let sensor = new Sensor(id, tipo, regiao, status);

    sistema.cadastrarSensor(sensor);

  }

  else if (opcao == 2) {

    let sensorId = prompt("Digite o ID do sensor: ");
    let sensor = sistema.sensores.find(s => s.identificador == sensorId);

    if (sensor) {

      let valor = Number(prompt("Digite o valor da leitura: "));
      let data = prompt("Digite a data dd/mm/aaaa: ");
      let hora = prompt("Digite a hora 00:00: ");

      let leitura = new Leitura(sensor, valor, data, hora);

      sistema.registraleituras(leitura);

    } else {

      console.log("Sensor não encontrado.");

    }

  }

  else if (opcao == 3) {

    sistema.listarTodosSensores();

  }

  else if (opcao == 4) {

    sistema.listarLeituras();

  }

  else if (opcao == 5) {

    sistema.listarSensoresAtivos();

  }

  else if (opcao == 6) {

    sistema.listarSensoresManutencao();

  }

  else if (opcao == 7) {

    let id = prompt("ID do usuário: ");
    let nome = prompt("Nome do usuário: ");

    let usuario = new Usuario(id, nome, true);

    core.cadastrarUsuario(usuario);

  }

  else if (opcao == 8) {

    let id = prompt("ID do usuário: ");

    core.ativarUsuario(id);

  }

  else if (opcao == 9) {

    let id = prompt("ID do usuário: ");

    core.desativarUsuario(id);

  }

  else if (opcao == 10) {

    core.listarUsuarios();

  }

  else if (opcao == 11) {

    let id = prompt("ID do usuário: ");

    let usuario = core.usuarios.find(u => u.identificador == id);

    if (usuario) {

      let descricao = prompt("Descrição da operação: ");
      let data = prompt("Data: ");
      let hora = prompt("Hora: ");

      let operacao = new Operacao(descricao, data, hora, usuario);

      core.registrarOperacao(operacao);

    } else {

      console.log("Usuário não encontrado.");

    }

  }

  else if (opcao == 12) {

    core.listarOperacoes();

  }

  else if (opcao == 0) {

    console.log("Programa encerrado.");

  }

  else {

    console.log("Opção inválida.");

  }

}
