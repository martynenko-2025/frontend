const names = ["Семен", "Иван", "Петр", "Татьяна"];
const ages = [18, 27, 74, 34];

for (let i = 0; i < names.length; i++) {
  const answer = names[i] + ages[i] + " лет ";
  console.log(answer);
}

//const NamesAndAges = [...names,...ages]
//console.log(NamesAndAges.reverse())

const NamesAndAges = [];
NamesAndAges.push("Семен", "Иван", "Петр", "Татьяна", 18, 27, 74, 34);

for (let i = 0; i = NamesAndAges.length - 1; i--) {
  console.log(NamesAndAges[i]);
}

const fruits = ["яблоко", "банан", "апельсин"];
