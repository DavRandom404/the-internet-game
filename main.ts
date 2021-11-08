let sprite = sprites.create(img`
    . . . . f f f f . . . . 
    . . f f e e e e f f . . 
    . f f e e e e e e f f . 
    f f f f 4 e e e f f f f 
    f f f 4 4 4 e e f f f f 
    f f f 4 4 4 4 e e f f f 
    f 4 e 4 4 4 4 4 4 e 4 f 
    f 4 4 f f 4 4 f f 4 4 f 
    f e 4 d d d d d d 4 e f 
    . f e d d b b d d e f . 
    . f f e 4 4 4 4 e f f . 
    e 4 f b 1 1 1 1 b f 4 e 
    4 d f 1 1 1 1 1 1 f d 4 
    4 4 f 6 6 6 6 6 6 f 4 4 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(15)
story.startCutscene(function () {
    story.spriteSayText(sprite, "Are you ready for the quiz?", 1, 15)
    story.showPlayerChoices("Yes", "No")
    if (story.checkLastAnswer("No")) {
        game.over(false)
    } else {
        info.setScore(0)
        story.spriteSayText(sprite, "What is a network made-up from multiple devices to share information?")
        story.showPlayerChoices("WWW", "Internet", "Web browser")
        if (story.checkLastAnswer("Internet")) {
            info.changeScoreBy(1)
            music.playMelody("D E F G A B C5 - ", 120)
            story.spriteSayText(sprite, "Nice job!")
        } else {
            game.over(false)
            story.spriteSayText(sprite, "Incorrect sorry!")
        }
    }
})
