// На отдельной странице добавьте отображение данных для нашей API `https://api.genderize.io/?name=alla`

// 1. Сделайте верстку которая бы показывала данные по своему имени на странице
// 2. Добавьте форму, чтобы можно было подставлять в запрос разные данные и в ответе по нажатию кнопки получать информацию по разным именам

const formGender = document.getElementById("form-gender");
const containerGender = document.getElementById("container-gender");

async function getGender(person) {
  const res = await fetch("https://api.genderize.io/?name=" + person);
  const data = await res.json();
  if (data.gender === null) {
    containerGender.textContent = "No valid name for analyze! 🙇‍♂️ try another one!";
  } else {
    containerGender.textContent = `${data.name} is ${data.gender === "male" ? "💁‍♂️" : "🙋‍♀️"} ${data.probability * 100}%`;
  }
}

formGender.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstname = e.target.firstname.value;
  getGender(firstname);
});