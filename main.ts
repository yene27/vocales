// Muestra la palabra en la posición de una posicion al azar
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    posicionPalabra = randint(0, 5)
    basic.showString("" + (palabras[posicionPalabra]))
})
// Compara si el contador es igual a la cantidad de vocales que tiene la palabra escogida al azar
input.onButtonPressed(Button.AB, function () {
    if (contador == cantidadVocalesEnPalabras[posicionPalabra]) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
        basic.showNumber(cantidadVocalesEnPalabras[posicionPalabra])
        basic.pause(500)
        music.playTone(988, music.beat(BeatFraction.Whole))
    }
    contador = 0
    basic.clearScreen()
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
"monitor",
"cpu",
"teclado",
"twitter",
"mouse"
]
cantidadVocalesEnPalabras = [
2,
3,
1,
3,
2,
3
]
music.setVolume(70)
