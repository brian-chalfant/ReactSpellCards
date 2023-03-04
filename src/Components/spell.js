class Spell {
  constructor(name, casting_time, ritual, range, comps, duration, concentration, desc, higherLevel, level, school) {
    this.name = name;
    this.casting_time = casting_time;
    this.ritual = ritual;
    this.range = range;
    this.comps = comps;
    this.duration = duration;
    this.concentration = concentration;
    this.desc = desc;
    this.higherLevel = higherLevel;
    this.level = level;
    this.school = school;
  }
}

class Spells {
  constructor(){
    this.spells = new Map();
  }

  newSpell(name, casting_time, ritual, range, comps, duration, concentration, desc, higherLevel, level, school) {
    let s = new Spell(name, casting_time, ritual, range, comps, duration, concentration, desc, higherLevel, level, school)
    this.spells.set(s.name, s);
  }

  getNumberOfSpells(){
    return this.spells.length;
  }

}