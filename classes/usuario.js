class Usuario {
  constructor(identificador, nome, ativo) {
    this.identificador = identificador
    this.nome = nome
    this.ativo = ativo
  }

  ativar() {
    this.ativo = true
  }

  desativar() {
    this.ativo = false
  }
}

module.exports = Usuario