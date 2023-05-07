let GY = 0
let GX = 0
let M = 0
let X = 0
let Y = 0
let A = 0
A = 0
let SCORE = 0
basic.forever(function () {
    if (A == 0 && M == 0) {
        if (input.buttonIsPressed(Button.A)) {
            A = 1
            M = 1
        }
    }
})
basic.forever(function () {
    if (M == 1) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        M = 2
    }
})
basic.forever(function () {
    if (A == 1) {
        A = 0
        music.playMelody("C5 B A G F E D C ", 1000)
    } else if (A == 2) {
        A = 0
        for (let カウンター = 0; カウンター <= 4; カウンター++) {
            music.playMelody("C D E F G A B C5 ", 3000)
        }
    }
})
basic.forever(function () {
    led.unplot(X, Y)
    GX = input.acceleration(Dimension.X)
    GY = input.acceleration(Dimension.Y)
    if (GX < -32) {
        if (0 < X) {
            X += -1
        }
    } else if (GX > 32) {
        if (X < 4) {
            X += 1
        }
    }
    if (GY < -32) {
        if (0 < Y) {
            Y += -1
        }
    } else if (GY > 32) {
        if (Y < 4) {
            Y += 1
        }
    }
    basic.pause(100)
    led.plot(X, Y)
    if (M == 2) {
        if (X == 2 && Y == 2) {
            A = 2
            basic.showLeds(`
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                . . . . .
                `)
            basic.showLeds(`
                # . # . #
                . . . . .
                # . . . #
                . . . . .
                # . # . #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            X = 0
            Y = 0
            SCORE = SCORE + 1
            for (let index = 0; index < 4; index++) {
                basic.showNumber(SCORE)
                basic.clearScreen()
                basic.pause(100)
            }
        }
        M = 0
    }
    basic.pause(100)
})
