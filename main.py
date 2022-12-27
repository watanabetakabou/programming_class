def Shougatsu():
    music.set_volume(255)
    music.play_melody("E E E E F F E F ", 250)
    music.play_melody("G G B B G G G G ", 250)
    music.play_melody("F F E F G G G G ", 125)
    music.rest(music.beat(BeatFraction.WHOLE))
def FamiMa():
    music.play_melody("- - - - - - - - ", 120)
music.start_melody(music.built_in_melody(Melodies.ENTERTAINER),
    MelodyOptions.FOREVER_IN_BACKGROUND)

def on_forever():
    if cuteBot.tracking(cuteBot.TrackingState.L_R_LINE):
        cuteBot.motors(25, 25)
    elif cuteBot.tracking(cuteBot.TrackingState.L_UNLINE_R_LINE):
        cuteBot.motors(25, -15)
    elif cuteBot.tracking(cuteBot.TrackingState.L_LINE_R_UNLINE):
        cuteBot.motors(-15, 25)
    else:
        basic.pause(250)
        cuteBot.motors(25, -25)
basic.forever(on_forever)
