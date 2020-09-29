let GPA3 = 0
input.onButtonPressed(Button.A, function () {
    GPA3 = randint(80, 100)
    basic.showNumber(GPA3)
    if (GPA3 <= 84) {
        basic.showString("A-")
    }
    if (GPA3 <= 89) {
        basic.showString("A")
    }
    if (GPA3 <= 100) {
        basic.showString("A+")
    }
})
