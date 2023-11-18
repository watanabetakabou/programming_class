def on_button_pressed_a():
    basic.show_leds("""
        . . # . .
        . # . # .
        . # . # .
        # # # # #
        # . . . #
        """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def Shougatsu():
    music.set_volume(255)
    music.play_melody("E E E E F F E F ", 250)
    music.play_melody("G G B B G G G G ", 250)
    music.play_melody("F F E F G G G G ", 125)
    music.rest(music.beat(BeatFraction.WHOLE))

def on_forever():
    basic.show_string("KOSEN HAKASEJUKU")
    music.start_melody(music.built_in_melody(Melodies.NYAN),
        MelodyOptions.FOREVER_IN_BACKGROUND)
basic.forever(on_forever)

def on_forever2():
    if cuteBot.tracking(cuteBot.TrackingState.L_UNLINE_R_LINE):
        cuteBot.motors(17, -17)
    elif cuteBot.tracking(cuteBot.TrackingState.L_LINE_R_UNLINE):
        cuteBot.motors(-17, 17)
    elif cuteBot.tracking(cuteBot.TrackingState.L_R_LINE):
        cuteBot.motors(17, 40)
    else:
        cuteBot.motors(-15, 19)
        basic.pause(100)
basic.forever(on_forever2)
