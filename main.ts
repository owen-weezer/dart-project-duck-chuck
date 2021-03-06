namespace SpriteKind {
    export const obstacle = SpriteKind.create()
    export const bystander = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    info.changeLifeBy(-1)
    myDart.sprite.setPosition(DART_X_VALUE, DART_Y_VALUE)
    myDart.stopDart()
    music.playMelody("E D E D E D C - ", 1110)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.throwDart()
    music.playMelody("F F B G A G - - ", 300)
})
function createAsteroid () {
    for (let index = 0; index < 3; index++) {
        obstacle = sprites.create(img`
            . . . . . . . . c c c c . . . . 
            . . . . c c c c c c c c c . . . 
            . . . c f c c 2 2 2 2 c 2 c . . 
            . . c c f f f f 2 2 2 c 2 2 c . 
            . . c c 2 f f c 2 2 f f f 2 2 c 
            . . c c 2 2 2 2 b c f f f 2 2 c 
            . c c c c 2 c c b 2 f c 2 2 c c 
            c 2 f f c c c 2 b b 3 b b b c c 
            c 2 f f f f c c c 3 b b b 2 2 c 
            c 2 2 c f f c 2 3 3 b b b 2 2 c 
            c c b 2 2 2 2 b 3 b b 2 b b 2 . 
            . c c b b b b b b b 2 c c b 2 . 
            . . c c c b c c c b 2 2 b c . . 
            . . . . c b 2 c c b b b c . . . 
            . . . . c b b 2 2 3 b c . . . . 
            . . . . . . b 3 3 c c . . . . . 
            `, SpriteKind.obstacle)
        obstacle.setPosition(randint(60, 160), randint(88, 0))
        animation.runImageAnimation(
        obstacle,
        [img`
            . . . . . . . . c c c c . . . . 
            . . . . c c c c c c c c c . . . 
            . . . c f c c a a a a c a c . . 
            . . c c f f f f a a a c a a c . 
            . . c c a f f c a a f f f a a c 
            . . c c a a a a b c f f f a a c 
            . c c c c a c c b a f c a a c c 
            c a f f c c c a b b 6 b b b c c 
            c a f f f f c c c 6 b b b a a c 
            c a a c f f c a 6 6 b b b a a c 
            c c b a a a a b 6 b b a b b a . 
            . c c b b b b b b b a c c b a . 
            . . c c c b c c c b a a b c . . 
            . . . . c b a c c b b b c . . . 
            . . . . c b b a a 6 b c . . . . 
            . . . . . . b 6 6 c c . . . . . 
            `,img`
            . . . . . . . c c c a c . . . . 
            . . c c b b b a c a a a c . . . 
            . c c a b a c b a a a b c c . . 
            . c a b c f f f b a b b b a . . 
            . c a c f f f 8 a b b b b b a . 
            . c a 8 f f 8 c a b b b b b a . 
            c c c a c c c c a b c f a b c c 
            c c a a a c c c a c f f c b b a 
            c c a b 6 a c c a f f c c b b a 
            c a b c 8 6 c c a a a b b c b c 
            c a c f f a c c a f a c c c b . 
            c a 8 f c c b a f f c b c c c . 
            . c b c c c c b f c a b b a c . 
            . . a b b b b b b b b b b b c . 
            . . . c c c c b b b b b c c . . 
            . . . . . . . . c b b c . . . . 
            `],
        500,
        true
        )
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.obstacle, function (sprite, otherSprite) {
    myDart.sprite.setPosition(DART_X_VALUE, DART_Y_VALUE)
    music.thump.play()
    myDart.stopDart()
    info.changeLifeBy(-1)
})
function createBadguy () {
    bad_guy = sprites.create(assets.image`badguy dragon`, SpriteKind.Enemy)
    bad_guy.setPosition(139, randint(0, 100))
}
function createDuck () {
    myDart = darts.create(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . . . . b c . . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        b d d d b b d 5 5 5 4 4 4 4 4 b 
        b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
        b d c 5 5 5 5 d 5 5 5 5 5 b . . 
        c d d c d 5 5 b 5 5 5 5 5 5 b . 
        c b d d c c b 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Player, DART_X_VALUE, DART_Y_VALUE)
    info.setLife(3)
    myDart.setTrace()
    myDart.controlWithArrowKeys()
    myDart.angle = -50
}
function createGreensnake () {
    greensnake = sprites.create(img`
        . . . c c c c c c . . . . . . . 
        . . c 6 7 7 7 7 6 c . . . . . . 
        . c 7 7 7 7 7 7 7 7 c . . . . . 
        c 6 7 7 7 7 7 7 7 7 6 c . . . . 
        c 7 c 6 6 6 6 c 7 7 7 c . . . . 
        f 7 6 f 6 6 f 6 7 7 7 f . . . . 
        f 7 7 7 7 7 7 7 7 7 7 f . . . . 
        . f 7 7 7 7 6 c 7 7 6 f . . . . 
        . . f c c c c 7 7 6 f c c c . . 
        . . c 6 2 7 7 7 f c c 7 7 7 c . 
        . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
        . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
        . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
        . . c 6 1 1 1 1 1 7 6 6 c c . . 
        . . . c c c c c c c c c c . . . 
        `, SpriteKind.bystander)
    greensnake.setPosition(103, 90)
    animation.runImageAnimation(
    greensnake,
    [img`
        . . . c c c c c c . . . . . . . 
        . . c 6 7 7 7 7 6 c . . . . . . 
        . c 7 7 7 7 7 7 7 7 c . . . . . 
        c 6 7 7 7 7 7 7 7 7 6 c . . . . 
        c 7 c 6 6 6 6 c 7 7 7 c . . . . 
        f 7 6 f 6 6 f 6 7 7 7 f . . . . 
        f 7 7 7 7 7 7 7 7 7 7 f . . . . 
        . f 7 7 7 7 6 c 7 7 6 f . . . . 
        . . f c c c c 7 7 6 f c c c . . 
        . . c 6 2 7 7 7 f c c 7 7 7 c . 
        . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
        . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
        . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
        . . c 6 1 1 1 1 1 7 6 6 c c . . 
        . . . c c c c c c c c c c . . . 
        `,img`
        . . . . c c c c c c . . . . . . 
        . . . c 6 7 7 7 7 6 c . . . . . 
        . . c 7 7 7 7 7 7 7 7 c . . . . 
        . c 6 7 7 7 7 7 7 7 7 6 c . . . 
        . c 7 c 6 6 6 6 c 7 7 7 c . . . 
        . f 7 6 f 6 6 f 6 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 6 c 7 7 6 f c . . 
        . . . f c c c c 7 7 6 f 7 7 c . 
        . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
        . c 7 7 2 7 7 c f c 6 7 7 6 c c 
        c 1 1 1 1 7 6 f c c 6 6 6 c . . 
        f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
        f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
        . f 6 1 1 1 1 1 1 6 6 6 f . . . 
        . . c c c c c c c c c f . . . . 
        `,img`
        . . . . . c c c c c c c . . . . 
        . . . . c 6 7 7 7 7 7 6 c . . . 
        . . . c 7 c 6 6 6 6 c 7 6 c . . 
        . . c 6 7 6 f 6 6 f 6 7 7 c . . 
        . . c 7 7 7 7 7 7 7 7 7 7 c . . 
        . . f 7 8 1 f f 1 6 7 7 7 f . . 
        . . f 6 f 1 f f 1 f 7 7 7 f . . 
        . . . f f 2 2 2 2 f 7 7 6 f . . 
        . . c c f 2 2 2 2 7 7 6 f c . . 
        . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
        c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
        f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
        f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
        f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . f 6 1 1 1 1 1 6 6 6 6 c . . . 
        . . f f c c c c c c c c . . . . 
        `,img`
        . . . . c c c c c c . . . . . . 
        . . . c 6 7 7 7 7 6 c . . . . . 
        . . c 7 7 7 7 7 7 7 7 c . . . . 
        . c 6 7 7 7 7 7 7 7 7 6 c . . . 
        . c 7 c 6 6 6 6 c 7 7 7 c . . . 
        . f 7 6 f 6 6 f 6 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 6 c 7 7 6 f c . . 
        . . . f c c c c 7 7 6 f 7 7 c . 
        . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
        . c 7 7 2 7 7 c f c 6 7 7 6 c c 
        c 1 1 1 1 7 6 f c c 6 6 6 c . . 
        f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
        f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
        . f 6 1 1 1 1 1 1 6 6 6 f . . . 
        . . c c c c c c c c c f . . . . 
        `],
    300,
    true
    )
}
info.onLifeZero(function () {
    game.over(false, effects.melt)
})
function createRedsnake () {
    redsnake = sprites.create(img`
        . . . c c c c c c . . . . . . . 
        . . c 2 3 3 3 3 2 c . . . . . . 
        . c 3 3 3 3 3 3 3 3 c . . . . . 
        c 2 3 3 3 3 3 3 3 3 2 c . . . . 
        c 3 c 2 2 2 2 c 3 3 3 c . . . . 
        f 3 2 f 2 2 f 2 3 3 3 f . . . . 
        f 3 3 3 3 3 3 3 3 3 3 f . . . . 
        . f 3 3 3 3 2 c 3 3 2 f . . . . 
        . . f c c c c 3 3 2 f c c c . . 
        . . c 2 9 3 3 3 f c c 3 3 3 c . 
        . c 2 3 3 9 3 3 c f 2 3 3 3 3 c 
        . c 1 1 1 1 3 2 2 c 2 2 2 c c c 
        . c 1 1 1 1 1 2 2 2 2 2 2 c . . 
        . c 2 1 1 1 1 1 2 2 2 2 2 c . . 
        . . c 2 1 1 1 1 1 3 2 2 c c . . 
        . . . c c c c c c c c c c . . . 
        `, SpriteKind.bystander)
    redsnake.setPosition(84, 90)
    animation.runImageAnimation(
    redsnake,
    [img`
        . . . c c c c c c . . . . . . . 
        . . c 2 3 3 3 3 2 c . . . . . . 
        . c 3 3 3 3 3 3 3 3 c . . . . . 
        c 2 3 3 3 3 3 3 3 3 2 c . . . . 
        c 3 c 2 2 2 2 c 3 3 3 c . . . . 
        f 3 2 f 2 2 f 2 3 3 3 f . . . . 
        f 3 3 3 3 3 3 3 3 3 3 f . . . . 
        . f 3 3 3 3 2 c 3 3 2 f . . . . 
        . . f c c c c 3 3 2 f c c c . . 
        . . c 2 9 3 3 3 f c c 3 3 3 c . 
        . c 2 3 3 9 3 3 c f 2 3 3 3 3 c 
        . c 1 1 1 1 3 2 2 c 2 2 2 c c c 
        . c 1 1 1 1 1 2 2 2 2 2 2 c . . 
        . c 2 1 1 1 1 1 2 2 2 2 2 c . . 
        . . c 2 1 1 1 1 1 3 2 2 c c . . 
        . . . c c c c c c c c c c . . . 
        `,img`
        . . . . c c c c c c . . . . . . 
        . . . c 2 3 3 3 3 2 c . . . . . 
        . . c 3 3 3 3 3 3 3 3 c . . . . 
        . c 2 3 3 3 3 3 3 3 3 2 c . . . 
        . c 3 c 2 2 2 2 c 3 3 3 c . . . 
        . f 3 2 f 2 2 f 2 3 3 3 f . . . 
        . f 3 3 3 3 3 3 3 3 3 3 f . . . 
        . . f 3 3 3 3 2 c 3 3 2 f c . . 
        . . . f c c c c 3 3 2 f 3 3 c . 
        . . c 3 9 3 3 3 2 c f 3 3 3 3 c 
        . c 3 3 9 3 3 c f c 2 3 3 2 c c 
        c 1 1 1 1 3 2 f c c 2 2 2 c . . 
        f 1 1 1 1 1 2 2 c 2 2 2 2 f . . 
        f 2 1 1 1 1 1 2 2 2 2 2 c f . . 
        . f 2 1 1 1 1 1 1 2 2 2 f . . . 
        . . c c c c c c c c c f . . . . 
        `,img`
        . . . . . c c c c c c c . . . . 
        . . . . c 2 3 3 3 3 3 2 c . . . 
        . . . c 3 c 2 2 2 2 c 3 2 c . . 
        . . c 2 3 2 f 2 2 f 2 3 3 c . . 
        . . c 3 3 3 3 3 3 3 3 3 3 c . . 
        . . f 3 a 1 f f 1 2 3 3 3 f . . 
        . . f 2 f 1 f f 1 f 3 3 3 f . . 
        . . . f f 9 9 9 9 f 3 3 2 f . . 
        . . c c f 9 9 9 9 3 3 2 f c . . 
        . c 3 3 3 3 3 3 3 3 c c 3 3 c . 
        c 3 1 1 1 3 3 3 3 f c 2 3 3 3 c 
        f 1 1 1 1 1 3 2 f c c 2 2 2 c c 
        f 1 1 1 1 1 1 2 2 c 2 2 2 c . . 
        f 2 1 1 1 1 1 2 2 2 2 2 2 c . . 
        . f 2 1 1 1 1 1 2 2 2 2 c . . . 
        . . f f c c c c c c c c . . . . 
        `,img`
        . . . . c c c c c c . . . . . . 
        . . . c 2 3 3 3 3 2 c . . . . . 
        . . c 3 3 3 3 3 3 3 3 c . . . . 
        . c 2 3 3 3 3 3 3 3 3 2 c . . . 
        . c 3 c 2 2 2 2 c 3 3 3 c . . . 
        . f 3 2 f 2 2 f 2 3 3 3 f . . . 
        . f 3 3 3 3 3 3 3 3 3 3 f . . . 
        . . f 3 3 3 3 2 c 3 3 2 f c . . 
        . . . f c c c c 3 3 2 f 3 3 c . 
        . . c 3 9 3 3 3 2 c f 3 3 3 3 c 
        . c 3 3 9 3 3 c f c 2 3 3 2 c c 
        c 1 1 1 1 3 2 f c c 2 2 2 c . . 
        f 1 1 1 1 1 2 2 c 2 2 2 2 f . . 
        f 2 1 1 1 1 1 2 2 2 2 2 c f . . 
        . f 2 1 1 1 1 1 1 2 2 2 f . . . 
        . . c c c c c c c c c f . . . . 
        `],
    300,
    true
    )
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.bigCrash.play()
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bystander, function (sprite, otherSprite) {
    redsnake.sayText(">:{")
    greensnake.sayText(">:{")
})
let redsnake: Sprite = null
let greensnake: Sprite = null
let bad_guy: Sprite = null
let obstacle: Sprite = null
let myDart: Dart = null
let DART_Y_VALUE = 0
let DART_X_VALUE = 0
tiles.setTilemap(tilemap`level2`)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffff9999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff999999ff99ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999ff99fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff999999999f99999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999f99999fffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffff9999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999fffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffff9999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999fffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffff99999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999ffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffff9999999999999999999fff99ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999fff99fffffffffffffffffffffffffffffffffffff
    fffffffffffff9999f999999999999999999ff99999ffffffffffffffffffffffffffffffffffffffffffffffffffff9999f999999999999999999ff99999fffffffffffffffffffffffffffffffffff
    ffffffffffff999999f9999999999999999fff99999fffffffffffffffffffffffffffffffffffffffffffffffffff999999f9999999999999999fff99999fffffffffffffffffffffffffffffffffff
    ffffffffffff9999999999999999999999f999999999ffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999f999999999ffffffffffffffffffffffffffffffffff
    ffffffffffff99999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999ffffffffffffffffffffffffffffffffff
    fffffffffffff9999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999ffffffffffffffffffffffffffffffffff
    ff999ffff9999f99999999999999999999999999999ff99fffffffffffff9999ffffffffffffffffffff999ffff9999f99999999999999999999999999999ff99fffffffffffff9999ffffffffffffff
    f99999ff99999999999999999999999999999999999f9999fffffffffff999999ffffffffffffffffff99999ff99999999999999999999999999999999999f9999fffffffffff999999fffffffffffff
    f99999f999999999999999999999999999999999999f9999fffffffffff999999f999ffffffffffffff99999f999999999999999999999999999999999999f9999fffffffffff999999f999fffffffff
    ff9999999999999999999999999999999999999999999999fffffffffffff999999999ffffffffffffff9999999999999999999999999999999999999999999999fffffffffffff999999999ffffffff
    f9999999999999999999999999999999999999999999999fffffffff9999f999999999fffffffffffff9999999999999999999999999999999999999999999999fffffffff9999f999999999ffffffff
    999999999999999999999999999999999999999999999999fffffff99999999999999ffffffffff5ff999999999889999999999999999999999999999999999999fffffff99999999999999fffffffff
    9999999999999999999999999999999999999999999999999f999ff999999999999999999ffffff8889999999998889999999999999999999999999999999999999f999ff999999999999999999fffff
    99999999999999999999999999999999999999999999999999999999999999999999999999ffff588899999999988899999999999999999999999999999999999999999999999999999999999999ffff
    99999999999999999999999999999999999999999999999999999999999999999999999999fff8888888999999888889999999999999999999999999999999999999999999999999999999999999ffff
    9999999999999999999999999999999999999999988888888899999999999999999999999999988888889999998888899999999999999999999999999999999999999999988888888889999999999999
    9999999999999999999999999999999999999999988888888899999999999999999999999999988888889999998888899999999999999999999999999999999999999999988888888889999999999999
    9999999999999999999888999999999999999999985588888899999999999999999999999999985588889999988888889999999999999999999988999999999999999999988585888889999999999999
    9999999999999999998888899999999999999999988888885899999999999999999999999999988888889999988888889999999999999999999888899999999999999999988888855889999999999999
    9999999999999999988888899999999999999999988888888899999999998999999998888899985888889999988888889999999999999999988888899999999999999999988888888889999999999999
    9999999999999999988858999999899999999999988888888899999999988999999998888899988888889999988888889999999999999999988858999999889999999999988885888889999999988999
    9999999999999999988888899999899999999999988888885899999999988999999998888899988888889999988888889999999999999999988888899999889999999999988888885889999999988999
    9999999988899999988558999998889999999999988888888899888888988999999998888899988888889999988888889999999998899999988858999998889999999999988888888889888888888999
    8988999988888888888588899988888999999999988888885899855888988999999999885889988888889998888888888988999988888888888885899998888999999999988888855889855888888999
    8888999998588588888888899988888999999999988888888899888858988999999998888889988588889998888888888888999988588858888888899998888999999999988888888889888858888999
    8858999998885555888888899988888999999999988888888899888858888999999998888889988888889998888888888858999988885855888888899998888999999999988888888889888858888999
    8888999988888888888888889988888899889889888888888889855888888999999998888889988888889998888888888888999988888888888888889988888899989988888888888889855888888999
    8858999988888888888888889988888899888888888888888889888888888998998998888889988888889998888888888858999988888888888888889988888899988888888888888889888888888999
    8888898858588888888888889988888889888855888888888888855668888888988899885889988888889998888888888888889888588888888888889988888889998558888886888888855666888988
    8888898888888888888888888858888889888888888666888888888666888888988898888889988888889998888888888888889888888888888888888888888889888888888866888888888666888988
    8888898888888888888888888888888889888888888666888888888666888888888888888888888888889998888888888888889888888888888888888888888889888888888866888888888666888888
    8888898888888888888888888888888889888888866666668888886666688888888888888888888888888898888888888888889888888888888888888888888889858888886666666888886666688888
    8888866666666688888888888888888889888888866666668888886666688888888888888888888888888898888888888888866666666668888888888888888889888888886666666888886666688888
    8888866666666688888888888888888889888888866666668888886666688888888888888888888888888898888888888888866666666668888888888888888889888888886666666888886666688888
    8888864466666688888888888888888889888888864466668888866666668855588888888888888866888898888888888888866464666668888888888888888889888888886666666888866666666558
    8888866666664688888888888888888889888888866666668888866666668885588888888888888666688898888888888888866666644668888888888888888889888888886666666888866666666888
    8888866666666688888888886888888886666688864666668888866666668888888888858888866666688898888888888888866666666668888888888888888888666688886664666888866666666888
    8888866666666688888888866888888886666688866666668888866666668858888888888888866646888888668888888888866664666668888888866888888888666688886664666888866666666858
    8888866666664688888888866888888886666688866666668888866666668855588888888888866666688888668888888888866666664668888888866888888886666668886666666888866666666558
    8888866666666688666666866888888886666688866666668888866666668888888886658888866646888886668888888888866666666668666666666888888886666668886664666888866666666888
    8888866666664688644666866888888888664668866666668886666666666866888866666666666664688886666888888888866666644668644666666888888886666666886666666886666666666666
    8888866666666688666646866888888886666668866466668886666666666666888866466646666666688886666888888888866666666668666646666888888886666666886666466886666666666666
    8888866666666688666646666888888886666668866666668886666666666646888866664644666666688886666888888888866666666668666646666888888886666666886666666886666666666666
    8668666666666668644666666888888886666668866666668886666666666666888866666666666666668866666688868866666666666668644666666888888886666666886666666886666666666666
    6666666666666668666666666886886886666668866666668886666666666646888866666666666666668866666688866666666666666668666666666888886886666666886666666886666666666666
    6644666666666666644446666666866688664668866666668886666666666666668666466666666666668866666668886446666666666666644646666866866686666666886666666886666666666666
    6666666666666666666666666666866686666668866666668886666666666666668666666666666666666666666668666666666666666666666666666866866666666666886666466886666666666666
    6666666666666666666666666666666666666666666666668886666666666666668666666666666666666666666668666666666666666666666666666666666666666666666666666886666666666666
    6666666666666666666666666666666666666666666666666686666666666666668666666666666666666666666668646666666666666666666666666666666666666666666666666686666666666666
    6666666666666666666666666666666666666666666666666686666666666666668666666666666666666666666668666666666666666666666666666666664666666666666666666686666666666666
    6666666666666666666666666666666666666666666666666686666666666666668666666666666666666666666668666666666666666666666666666666666666666666666666666686666666666666
    6666666666666666666666666644466666666666666666666686666666666666668666666666666666666666666668666666666666666666666666666446464666666666666666666666666666666666
    6666666666666666666666666664466666666666666666666686666666666666668666666666666666666666666668666666666666666666666666666666464666666666666666666666666666666666
    6666666666666666666666666666666666646666666666666686666666666666666666666666666666666666666666666666666666666666666666666666664666646666666666666666666666666666
    6666666666666666666666666646666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666646666666666666666666666666666666666666
    6666666666666666666666666644466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666446466666666666666666666666666666666666
    6666666666666666666666666666666666646666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666a6666666666666666a6666666666666666666666a6666666666666666a6666666666666666666666a6666666666666666a6666666666666666666666a6666666666666666a66666
    666666a666aa66666aa6666a666a6666a6aa666a666666a666aa66666aa6666a666a6666a6aa666a666666a666aa66666aa6666a666a6666a6aa666a666666a666aa66666aa6666a666a6666a6aa666a
    66a666aa6aa66a666aa666aa666aa666a66aa6aa66a666aa6aa66a666aa666aa666aa666a66aa6aa66a666aa6aa66a666aa666aa666aa666a66aa6aa66a666aa6aa66a666aa666aa666aa666a66aa6aa
    66aa66aa6aa66aa666aa6aa6666aa6a6aa6aaaa666aa66aa6aa66aa666aa6aa6666aa6a6aa6aaaa666aa66aa6aa66aa666aa6aa6666aa6a6aa6aaaa666aa66aa6aa66aa666aa6aa6666aa6a6aa6aaaab
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    `)
DART_X_VALUE = 10
DART_Y_VALUE = 60
createDuck()
createBadguy()
createAsteroid()
createGreensnake()
createRedsnake()
