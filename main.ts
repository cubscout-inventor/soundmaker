let myNumber = 0
basic.forever(function () {
    myNumber = Math.map(input.compassHeading(), 0, 359, 200, 3000)
    music.playTone(myNumber, music.beat(BeatFraction.Quarter))
})
