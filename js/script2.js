import { Exam } from "./Exam.js";
import { people } from "./data.js";

//сортировка
let srBallAsMin = people.sort((a, b) => b.srBall - a.srBall);
srBallAsMin.forEach(item => console.log(item.toString()))

//хорошисты
let goodPeople = people.filter(item => item.good)
goodPeople.forEach(item => console.log(item.toString()));

//кач. успеваемость
console.log(`качественная успеваемость: ${(goodPeople.length / people.length) * 100}%`);

//абсолют. успеваемость
let badPeople = people.filter(item => item.debtor)
console.log(`абсолютная успеваемость: ${(people.length - badPeople.length/ people.length) * 100}%`);

//ср.балл
let sred = [];
people.forEach(item => { 
    sred.push(item.srBall) ;
    console.log(sred)
});
let res = 0;
sred.forEach(item => {res += item})
console.log(`средний балл: ${res/ people.length}`);
