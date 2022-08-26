// Muestra la palabra en la posición de una posicion al azar
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    posicionPalabra = randint(0, 5)
    basic.showString("" + (palabras[posicionPalabra]))
})
input.onButtonPressed(Button.AB, function () {
    if (contador == cantidadVocalesEnPalabras[posicionPalabra]) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
        basic.showNumber(cantidadVocalesEnPalabras[posicionPalabra])
        music.playTone(988, music.beat(BeatFraction.Whole))
    }
})
// Contador que incrementa en la medida que presiono el botón.
input.onButtonPressed(Button.B, function () {
    if (contador == 10) {
        contador = 1
    } else {
        contador += 1
    }
    basic.showNumber(contador)
})
// Se definen las palabras y la cantidad de vocales que tiene cada palabra. Ambos en arreglos
let contador = 0
let posicionPalabra = 0
let cantidadVocalesEnPalabras: number[] = []
let palabras: string[] = []
let puntuacion = 0
palabras = [
"casa",
"tecnologia",
"computador",
"teclado",
"twitter",
"mouse"
]
cantidadVocalesEnPalabras = [
2,
5,
3,
4,
2,
3
]
music.setVolume(70)
