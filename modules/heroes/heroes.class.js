class Hero {

    constructor(jsonHero){
        this.idHero = jsonHero._id;
        this.heroName = jsonHero.heroName;
        this.intelligence = jsonHero.intelligence;
        this.strength = jsonHero.strength;
        this.speed = jsonHero.speed;
        this.durability = jsonHero.durability;
        this.power = jsonHero.power;
        this.combat = jsonHero.combat;
        this.fullName = jsonHero.fullName;
        this.alignment = jsonHero.alignment;
        this.gender = jsonHero.gender;
        this.race = jsonHero.race;
    }
    
}
    
module.exports = Hero;