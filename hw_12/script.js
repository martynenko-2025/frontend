const starWarsHeroes = [
    { name: "Anakin Skywalker", age: 30, isJedi: true },
    { name: "Luke Skywalker", age: 25, isJedi: true },
    { name: "Han Solo", age: 35, isJedi: false },
    { name: "Princess Leia", age: 30, isJedi: false },
    { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
];


//const nameAndIsJedi = starWarsHeroes.map (el => 'name: ' +  el.name + ': ' + 'isJedi: ' + el.isJedi)
//console.log(nameAndIsJedi)

const nameAndIsJedi = starWarsHeroes.map(el => ({name: el.name, isJedi: el.isJedi}) )
console.log(nameAndIsJedi)


const ages = starWarsHeroes.filter(el => (el.age <40))
console.log(ages)

const allJediAges = starWarsHeroes.map(el => el.age)
const sumOfAges = allJediAges.reduce((acc, current) => acc + current,0)
console.log(sumOfAges)






//1.3 Посчитайте возраст всех джедаев

// 1.2 Создайте новый массив с джедаями младше 40 лет

//`[{ name: "Luke Skywalker", isJedi: true }, { name: "Han Solo", isJedi: false }, ...]`