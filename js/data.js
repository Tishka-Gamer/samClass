import { Exam } from "./Exam.js";

export let students = [
    {
        surname: "Иванов",
        name: "Иван",
        estiBD: 5,
        estiJS: 4,
        estiPHP: 5
    },
    {
        surname: "Сергеев",
        name: "Сергей",
        estiBD: 5,
        estiJS: 5,
        estiPHP: 5
    },
    {
        surname: "Валуев",
        name: "Валентин",
        estiBD: 2,
        estiJS: 2,
        estiPHP: 2
    },
    {
        surname: "Петров",
        name: "Петр",
        estiBD: 5,
        estiJS: 4,
        estiPHP: 3
    }
    
]
export let people = [];
students.forEach(elem => {
   let exam = new Exam(elem.surname, elem.name, elem.estiBD, elem.estiJS, elem.estiPHP);
   people.push(exam);
});