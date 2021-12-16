def on_forever():
    music.play_melody("E E E E F F E F ", 250)
    music.play_melody("G G B B G G G G ", 250)
    music.play_melody("F F E F G G G G ", 125)
    music.play_melody("E5 E5  - - - - - ", 120)
basic.forever(on_forever)
