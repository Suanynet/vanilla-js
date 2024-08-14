class Contador {

  valor = 0
  siguiente() {
    return this.valor++
  }
  
}

const instancia = new Contador

export { instancia }