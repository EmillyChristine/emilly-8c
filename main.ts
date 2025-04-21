basic.forever(function () {
    basic.showLeds(`
        # . . . #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . # . # .
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        # # # # #
        `)
    basic.pause(500)
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        . # . # .
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . # .
        # . # . .
        # # . . .
        # . # . .
        # . . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . # .
        # . . # .
        # . . # .
        # . . # .
        . # # . .
        `)
    basic.pause(500)
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showLeds(`
        # # # # .
        # . . . .
        # # # . .
        # . . . .
        # # # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . . #
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        # # # # #
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # # # # .
        `)
    basic.pause(200)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # # # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(200)
    basic.showIcon(IconNames.Happy)
    basic.pause(500)
})
basic.forever(function () {
    music.play(music.stringPlayable("C5 A E E B A C5 G ", 159), music.PlaybackMode.UntilDone)
})
