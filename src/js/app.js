export default function Character(name, type) {
    if (name.length<2 || name.length>10 || typeof (name) !== 'string' || typeof (type) !== 'string' || type !=='Bowman' && type !=='Swordsman' && type !== 'Magician' && type !== 'Daemon' && type !== 'Undead' && type !== 'Zombie'){
      throw new Error('Ошибка ввода!');
    };
    if (type === 'Bowman') {
      this.attackDefence = 'Bowman: 25/25';
    } else if (type === 'Swordsman') {
      this.attackDefence = 'Swordsman: 40/10';
    } else if (type === 'Magician') {
      this.attackDefence = 'Magician: 10/40';
    } else if (type === 'Daemon') {
      this.attackDefence = 'Daemon: 10/40';
    } else if (type === 'Undead') {
      this.attackDefence = 'Undead: 25/25';
    } else if (type === 'Zombie') {
      this.attackDefence = 'Zombie: 40/10';
    } 
    this.health = 100;
    this.level = 1;
    this.name = name;
    this.type = type
}