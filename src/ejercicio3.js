function clonarArreglo() {
   
    const newclon = [...newarreglo]


    return newclon
}

const newarreglo = [1, 2, 3]

clonarArreglo(newarreglo)



function clonarObjeto() {

    const objeto = {nombre: "Maria", edad: 20}
    
    const result = {...objeto}

    return result
    
}

function sumar(...numeros1) {

    return numeros1.reduce((acumulador, numerosActual) => {
        return acumulador + numerosActual
    }, 0)
    
    
}

sumar(10,20,30,40,50)



function saludar(nombre = `Desconocido`) {

    return "Hola", nombre

}


// NO MODIFICAR
export { clonarArreglo, clonarObjeto, sumar, saludar };