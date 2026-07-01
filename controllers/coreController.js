class CoreController {
  constructor() {
    this.usuarios = []
    this.operacoes = []
  }

  cadastrarUsuario(usuario) {
    this.usuarios.push(usuario)
    console.log("Usuário cadastrado")
  }

  ativarUsuario(id) {
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].identificador == id) {
        this.usuarios[i].ativar()
        console.log("Usuário ativado")
      }
    }
  }

  desativarUsuario(id) {
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].identificador == id) {
        this.usuarios[i].desativar()
        console.log("Usuário desativado")
      }
    }
  }

  registrarOperacao(operacao) {
    this.operacoes.push(operacao)
    console.log("Operação registrada")
  }

  listarUsuarios() {
    console.log("Usuários:")

    for (let i = 0; i < this.usuarios.length; i++) {
      let u = this.usuarios[i]

      console.log(
        "ID:", u.identificador,
        "| Nome:", u.nome,
        "| Ativo:", u.ativo
      )
    }
  }

  listarOperacoes() {
    console.log("Operações:")

    for (let i = 0; i < this.operacoes.length; i++) {
      let o = this.operacoes[i]

      console.log(
        "Descrição:", o.descricao,
        "| Data:", o.data,
        "| Hora:", o.hora,
        "| Usuário:", o.usuario.nome
      )
    }
  }
}

module.exports = CoreController