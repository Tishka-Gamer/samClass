export function Exam(surname, name, estiBD, estiJS, estiPHP) {
    this.surname = surname;
    this.name = name;
    this.estiBD = estiBD;
    this.estiJS = estiJS;
    this.estiPHP = estiPHP;
    this.toString = function () {
        return `${this.surname} ${this.name} сдал экзамены на оценки - по БД: ${this.estiBD}, по JS: ${this.estiJS} и по PHP: ${this.estiPHP}`;
    };
  }
  
  Object.defineProperty(Exam.prototype, "srBall", {
    get() {
        return (this.estiBD + this.estiJS + this.estiPHP)/3
    },
  });
  
  Object.defineProperty(Exam.prototype, "good", {
    get() {
        return this.estiBD >= 4 && this.estiJS >=4 && this.estiPHP >=4;
    },
  });
  
  Object.defineProperty(Exam.prototype, "debtor", {
    get() {
        return this.estiBD == 2 || this.estiJS == 2 || this.estiPHP == 2;
    },
  });