"use strict";
class Level {
    enemies = [];
    clouds = [];
    backgroundObjects = [];
    coins = [];
    level_end = 7200;
    constructor(enemies, clouds, backgroundObjects, coins) {
        (this.enemies = enemies), (this.clouds = clouds), (this.backgroundObjects = backgroundObjects), (this.coins = coins);
    }
}
