const form = document.getElementById("form films");
const ul = document.getElementById("list films");

function clearList() {
  while (ul.hasChildNodes()) {
    ul.firstChild.remove();
  }
}

const movieList = [
  {
    id: "",
    name: "1+1",
    author: "Оливье Накаш",
    year: "2011",
    img: "https://avatars.mds.yandex.net/get-kinopoisk-image/10900341/caf9f155-1a19-42f1-a0f3-9c8773e9083e/600x900",
  },
  {
    id: "",
    name: "Побег из Шоушенка",
    author: "Френк Дарабонт",
    year: "1994",
    img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/600x900",
  },
  {
    id: "",
    name: "Джентельмены",
    author: "Гай Ричи",
    year: "2019",
    img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/637271d5-61b4-4e46-ac83-6d07494c7645/600x900",
  },
];

const changeStatus = (event) => {
  if (event.target.style.textDecoration === "line-through") {
    event.target.style.textDecoration = "none";
  } else {
    event.target.style.textDecoration = "line-through";
  }
};

function createList() {
  taskList.map((el) => {
    const li = document.createElement("li");
    li.innerText = `${el.name}: ${el.author}: ${el.year}: ${el.image}`;
    li.onclick = changeStatus;
    ul.append(li);
  });
}

createList();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let task = {
    where: event.target.name.value.toLowerCase(),
    what: event.target.author.value.toLowerCase(),
  };
  event.target.name.value = "";
  event.target.author.value = "";

  const check = taskList.find(
    (el) => el.name === task.name && el.author === task.author
  );

  if (check) {
    alert("Такой фильм уже есть 🙅‍♂️");
  } else {
    taskList.push(task);
    clearList();
    createList();
  }
});
