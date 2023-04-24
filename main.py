A = 0
B = 0
X = 0

def on_forever():
    global A, B
    if input.button_is_pressed(Button.A):
        A = 1
        B = 1
basic.forever(on_forever)

def on_forever2():
    global A
    if A == 1:
        basic.show_leds("""
            # . . . #
                        . . . . .
                        . . . . .
                        . . . . .
                        # . . . #
        """)
        basic.show_leds("""
            . . . . .
                        . # . # .
                        . . . . .
                        . # . # .
                        . . . . .
        """)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
        """)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
        A = 0
basic.forever(on_forever2)

def on_forever3():
    global B
    if B == 1:
        music.play_melody("C5 B A G F E D C ", 1000)
        music.play_melody("C5 B A G F E D C ", 1000)
        B = 0
basic.forever(on_forever3)

def on_forever4():
    global X
    if input.acceleration(Dimension.X) < 0:
        X += -1
    else:
        X += 1
        led.plot(X, 0)
basic.forever(on_forever4)
