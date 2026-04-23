controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    _87.setVelocity(0, -100)
})
let _87: Sprite = null
scene.setBackgroundColor(9)
_87 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 1 1 . . . . 
    . . . . . . . . . . f f f . . . 
    . . . 1 f f f f f f f 9 f 1 . . 
    . . . f f f 1 f 1 1 f f 1 1 . . 
    1 f f 1 1 1 1 1 1 1 1 . . . . . 
    . . . f . f . f . f . . . . . . 
    . . . 1 . f . 1 . 1 . . . . . . 
    . . . f . 1 . f . f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(_87, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
_87.ay = 350
