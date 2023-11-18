input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # . # .
        # # # # #
        # . . . #
        `)
})
function Shougatsu () {
    music.setVolume(255)
    music.playMelody("E E E E F F E F ", 250)
    music.playMelody("G G B B G G G G ", 250)
    music.playMelody("F F E F G G G G ", 125)
    music.rest(music.beat(BeatFraction.Whole))
}
basic.forever(function () {
    basic.showString("KOSEN HAKASEJUKU")
    music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.ForeverInBackground)
})
basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.motors(17, -17)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.motors(-17, 17)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.motors(17, 40)
    } else {
        cuteBot.motors(-15, 19)
        basic.pause(100)
    }
})
