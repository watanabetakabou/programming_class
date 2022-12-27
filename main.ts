function RTA () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.motors(velocity, velocity)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        direction = 1
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, randint(0, 255), randint(0, 255), randint(0, 255))
        cuteBot.motors(velocity, 0)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        direction = -1
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, randint(0, 255), randint(0, 255), randint(0, 255))
        cuteBot.motors(0, velocity)
    } else {
        if (direction == -1) {
            cuteBot.motors(-23, velocity)
        } else {
            cuteBot.motors(velocity, -23)
        }
    }
}
function Shougatsu () {
    music.setVolume(255)
    music.playMelody("E E E E F F E F ", 250)
    music.playMelody("G G B B G G G G ", 250)
    music.playMelody("F F E F G G G G ", 125)
    music.rest(music.beat(BeatFraction.Whole))
}
function FamiMa () {
    music.playMelody("- - - - - - - - ", 120)
}
let velocity = 0
let direction = 0
direction = 0
velocity = 70
basic.forever(function () {
    RTA()
})
