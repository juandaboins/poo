// objeto: coleccion de datos relacionados

class Evaluacion {
    constructor (matematicas, fisica, quimica) {
        this.matematicas = matematicas
        this.fisica = fisica
        this.quimica = quimica
    } 
    promedio () {
        let promedioDeNotasM = Number(prompt('Ingresar evaluacion Matematicas'))
        let promedioDeNotasF = Number(prompt('Ingresar evaluacion Fisica'))
        let promedioDeNotasQ = Number(prompt('Ingresar evaluacion Quimica'))
        //promediodenotasdetresmaterias
        //promedio = (n1 + n2 + n3) / 3

        let nuevoValor = ([promedioDeNotasM + promedioDeNotasF + promedioDeNotasQ] / 3)
        alert('Tu Promedio al finalizar el curso es  ' + nuevoValor + ' Puntos') 

    }
}

const evaluacion1 = new Evaluacion ('matematicas')
const evaluacion2 = new Evaluacion ('fisica')
const evaluacion3 = new Evaluacion ('quimica')

evaluacion1.promedio()
evaluacion2.promedio()
evaluacion3.promedio()
