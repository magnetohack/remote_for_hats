input.onButtonPressed(Button.A, function () {
    if (programnummer > 0) {
        programnummer += -1
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("alle", programnummer)
    basic.clearScreen()
    basic.pause(50)
})
input.onButtonPressed(Button.B, function () {
    if (programnummer < 9) {
        programnummer += 1
    }
})
let programnummer = 0
radio.setGroup(76)
programnummer = 0
basic.forever(function () {
    basic.showNumber(programnummer)
})
