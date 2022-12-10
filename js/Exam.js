export class Exam {
    //создали конструктор
    constructor(surname, name, estiBD, estiJS, estiPHP) {
      this.surname = surname;
      this.name = name;
      this.estiBD = estiBD;
      this.estiJS = estiJS;
      this.estiPHP = estiPHP;
    }
    toString() {
        return `${this.surname} ${this.name} сдал экзамены на оценки - по БД: ${this.estiBD}, по JS: ${this.estiJS} и по PHP: ${this.estiPHP}`;
    }
    get srBall() {
        return (this.estiBD + this.estiJS + this.estiPHP)/3
    }
    get good() {
        return this.estiBD >= 4 && this.estiJS >=4 && this.estiPHP >=4;
    }
    get debtor() {
        return this.estiBD == 2 || this.estiJS == 2 || this.estiPHP == 2;
    }
}  