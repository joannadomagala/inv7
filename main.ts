let Highest = 0
let value = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Highest)
})
basic.forever(function () {
    value = pins.analogReadPin(AnalogPin.P0)
    if (value > Highest) {
        Highest = value
    }
})
