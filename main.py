scene.set_background_image(assets.image("Racer"))

car = sprites.create(assets.image("Car"), SpriteKind.player)
car.set_position(80, 100)
controller.move_sprite(car, 100, 0)
car.set_stay_in_screen(True)


info.set_score(0)

def enemyCar():
    enemy = sprites.create(assets.image("myImage"), SpriteKind.enemy)
    enemy.set_position(randint(20, 140), 0)
    enemy.set_velocity(0, 100)

game.on_update_interval(800, enemyCar)

def addScores():
    info.change_score_by(50)

game.on_update_interval(1000, addScores)

def hit(player, enemy):
    game.over(False)

sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, hit)