const buttonAdd = document.body.querySelector(".add");
const buttonClear = document.body.querySelector(".clear");

buttonClear.addEventListener("click", () => {
  let p = document.body.querySelectorAll("p");
  for (let i = 0; i < p.length; i++) {
    p[i].remove();
  }
});
buttonAdd.addEventListener("click", () => {
  pushText();
});
const pushText = () => {
  const inputText = document.body.querySelector("input").value;

  document.querySelector(".eng").append(createParagraph(translit(inputText)));
  document.querySelector(".rus").append(createParagraph(inputText));
};
const createParagraph = (text) => {
  const p = document.createElement("p");
  if (text.length > 7) {
    p.title = text;
    p.innerText = text.slice(0, 7) + "...";
  } else p.innerText = text;
  return p;
};
const translit = (str) => {
  let translit = "";
  let converter = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "e",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "c",
    ч: "ch",
    ш: "sh",
    щ: "sch",
    ь: "",
    ы: "y",
    ъ: "",
    э: "e",
    ю: "yu",
    я: "ya",

    А: "A",
    Б: "B",
    В: "V",
    Г: "G",
    Д: "D",
    Е: "E",
    Ё: "E",
    Ж: "Zh",
    З: "Z",
    И: "I",
    Й: "Y",
    К: "K",
    Л: "L",
    М: "M",
    Н: "N",
    О: "O",
    П: "P",
    Р: "R",
    С: "S",
    Т: "T",
    У: "U",
    Ф: "F",
    Х: "H",
    Ц: "C",
    Ч: "Ch",
    Ш: "Sh",
    Щ: "Sch",
    Ь: "",
    Ы: "Y",
    Ъ: "",
    Э: "E",
    Ю: "Yu",
    Я: "Ya",
  };
  for (let i = 0; i < str.length; i++) {
    if (converter[str[i]]) translit += converter[str[i]];
    else translit += str[i];
  }
  return translit;
};
