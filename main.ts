function Shougatsu () {
    music.setVolume(255)
    music.playMelody("E E E E F F E F ", 250)
    music.playMelody("G G B B G G G G ", 250)
    music.playMelody("F F E F G G G G ", 125)
    music.rest(music.beat(BeatFraction.Whole))
}
basic.forever(function () {
    Shougatsu()
})
