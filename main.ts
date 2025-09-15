class SpeechSay {
    _sprite: Sprite 

    constructor() {this._sprite = sprites.create(img`.`, -1)}

    say(text: string, timerMillis: number) {
    this._sprite.say(text)
    pause(timerMillis)
        let pressButtonUntilDone = sprites.create(img`
            . . . 6 6 6 6 6 . . .
            . 6 6 7 7 7 7 7 6 6 .
            . 6 7 7 1 1 1 7 7 6 .
            6 7 7 1 7 7 7 1 7 7 6
            6 7 7 1 7 7 7 1 7 7 6
            6 7 7 1 1 1 1 1 7 7 6
            6 6 7 1 7 7 7 1 7 6 6
            8 6 6 1 7 7 7 1 6 6 8
            8 6 6 7 6 6 6 7 6 6 8
            . 8 6 6 6 6 6 6 6 8 .
            . . 8 8 8 8 8 8 8 . .
        `, -1)
        pressButtonUntilDone.x += 50 - 30
        pressButtonUntilDone.y = 50
        pauseUntil(() => controller.anyButton.isPressed())
        pressButtonUntilDone.destroy()
        this._sprite.say("")
    }
}

