let X = 0
let Y = 0
let A = 0
let B = 0
basic.forever(function () {
    if (A == 0 && B == 0) {
        if (input.buttonIsPressed(Button.A)) {
            A = 1
            B = 1
        }
    }
})
basic.forever(function () {
    if (A == 1) {
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
        A = 2
    }
})
basic.forever(function () {
    if (B == 1) {
        music.playMelody("C5 B A G F E D C ", 1000)
        B = 0
    } else if (B == 2) {
        for (let カウンター = 0; カウンター <= 4; カウンター++) {
            music.playMelody("C D E F G A B C5 ", 3000)
            B = 0
        }
    }
})
basic.forever(function () {
    led.unplot(X, Y)
    if (input.acceleration(Dimension.X) < -32) {
        if (0 < X) {
            X += -1
        }
    } else if (input.acceleration(Dimension.X) > 32) {
        if (X < 4) {
            X += 1
        }
    }
    if (input.acceleration(Dimension.Y) < -32) {
        if (0 < Y) {
            Y += -1
        }
    } else if (input.acceleration(Dimension.Y) > 32) {
        if (Y < 4) {
            Y += 1
        }
    }
    basic.pause(100)
    led.plot(X, Y)
    if (A == 2) {
        if (X == 2 && Y == 2) {
            B = 2
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
        }
        A = 0
    }
    basic.pause(100)
})
