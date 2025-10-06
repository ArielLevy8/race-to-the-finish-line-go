scene.setBackgroundImage(assets.image`Racer`)
let car = sprites.create(assets.image`Car`, SpriteKind.Player)
car.setPosition(80, 100)
controller.moveSprite(car, 100, 0)
car.setStayInScreen(true)
info.setScore(0)
game.onUpdateInterval(800, function enemyCar() {
    let enemy = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
    enemy.setPosition(randint(20, 140), 0)
    enemy.setVelocity(0, 100)
})
game.onUpdateInterval(1000, function addScores() {
    info.changeScoreBy(50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function hit(player: Sprite, enemy: Sprite) {
    game.over(false)
})
