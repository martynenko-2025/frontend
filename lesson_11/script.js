// ! Arrays - массивы
// тип данных, который хранит списки элементов. хорошо подходит под перечисление чего-то с одинаковым набором свойств

// * создание массива:

const arr1 = new Array();
const arr2 = []; // предпочтительный способ

// * создание массива со значениями:

const numbers = [4, 8, 15, 16, 23, 42];
const fruits = ["apple", "orange", "pear"];

// обращение к элементам массива происходит через индекс - числовое значение начинающееся с 0
const pear = fruits[2];

// обращение по индексу к несуществующему элементу возвращает undefined
const none = fruits[8];

// мы можем создавать массивы из разных типов данных, но как правило это не нужно и не удобно 🫣
const party = ["alien", 42, undefined, ["man", "woman"]];

// * как узнать длину массива
// обратиться к свойству length возвращающему длину массива

const numbersLength = numbers.length;

// ! цикл for loop

// указываем:
// 1. переменную итератор
// 2. условие для выхода из цикла
// 3. изменение происходящее после каждой итерации (здесь увеличение переменной i на 1)

for (let i = 0; i < numbers.length; i++) {
  const answer = Number([i]) + 1 + "й " + "элемент: " + numbers[i];
  // console.log(answer)
}

// ! цикл while

// цикл операций, который будет происходить пока выражение в круглых скобках верно

let i = 0;

while (i < 6) {
  // console.log(i + ' раз')
  i++;
}

// ! методы массивов - добавление и удаление элементов

// функции которые позволяют удобно совершать основные операции с массивами

// * все методы делятся на мутирующие и не мутирующие

// 1. мутирующие - изменяют исходный массив
// 2. не мутирующие - не изменяют исходный, часто возвращают новый массив с измененными значениями

const animals = ["panda", "otter", "capybara", "rabbit"];

// animals = ['panda', 'otter', 'capybara']

// * push() - добавление элемента в конец массива

// мутирующий метод
// добавляет элемент в конец массива
// возвращенное значение - длинна нового массива

// const el = animals.push('hippo') // ! в el длина массива

animals.push("hippo");

// ! при этом animals изменится
// console.log(animals)
// console.log(el)

// * pop() - удаление элемента из конца массива

// мутирующий метод
// удаляет элемент из конца массива
// возвращенное значение - удаленный элемент

// const el = animals.pop() // ! в el удаленный элемент

animals.pop();

// * unshift() добавление элемента в начало массива

// мутирующий метод
// добавляет элемент в начало массива
// возвращенное значение - длинна нового массива

animals.unshift("racoon");

// * shift() удаление элемента из начала массива

// мутирующий метод
// удаляет элемент из начала массива
// возвращенное значение - удаленный элемент

animals.shift();

// ! spread syntax

// позволяет создавать копии массивов
// перед переменной ссылкой на массив пишем '...'

const newAnimals = [...animals];

newAnimals.unshift("racoon");

// console.log(newAnimals)
// console.log(animals)

// * можно создать новый массив из двух других
// через символ ... и запятую объединяем элементы из двух массивов
const fruitsAndAnimals = [...fruits, ...animals];

// * не путайте spread с созданием двумерного массива
const fruitsAndAnimals1 = [fruits, animals];

// * со spread можно дописывать новые элементы в массив

const zoo = ["squirrel", ...newAnimals, "🦊", "🐊"];

// console.log(zoo)

// ! деструктуризация массивов

// это способ в одну строку:
// объявить новые переменные
// забрать данные из исходного массива
// и положить в эти переменные

const cities = ["Hamburg", "Leipzig", "Berlin", "Hannover"];

// * решение задачи без деструктуризации (в четыре строки)

// const hamburg = cities[0];
// const leipzig = cities[1];
// const berlin = cities[2];
// const hannover = cities[3];

// * решение задачи c деструктуризацией (в одну строку)
// значение переменных зависит от их индекса и порядка при деструктуризации - имя переменной может быть любым

// если какой-то элемент не нужен - мы пропускаем его

const [hamburg, leipzig, , hannoverCity] = cities;

// console.log(hannoverCity);

// ! объекты - objects

// сложный тип данных, в котором данные хранятся в формате 'ключ: значение'
// ключи - это строковые значения

// * получить значения объекта можно обратившись к его ключу через точку

const person1 = {
  name: "Ron",
  lastname: "Weasley",
  age: 16,
  isAdult: false,
  siblings: ["Fred", "George", "Jinny"]
};

const person2 = {
  name: "Fred",
  lastname: "Weasley",
  age: 19,
  isAdult: true,
  siblings: ["Ron", "George", "Jinny"]
};

const family = [person1, person2];

// * практикуем цикл с массивом из объектов

for (let i = 0; i < family.length; i++) {
  // перезаписываем данные по возрасту на каждой итерации
  family[i].age = family[i].age + 2
}


const person3 = {
  name: "Jinny",
  lastname: "Weasley",
  age: 14,
  isAdult: false,
  siblings: ["Ron", "George", "Fred"]
};

// * добавили нового ребенка в семью

family.push(person3)

// family.shift()


person3.siblings.push('Bill')


for (let i = 0; i < person3.siblings.length; i++) {
  console.log(person3.siblings[i])
}

// ! document - это очень большой и подробный объект описывающий все данные о странице в браузере

console.dir(document)

// let el = document.getElementsByTagName('h1')

// console.log(el[0])