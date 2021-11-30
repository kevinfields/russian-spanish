import Question from "../components/Question";
import { useState } from "react";

const NounPage = (props) => {
  const [newNoun, setNewNoun] = useState(0);
  const [language, setLanguage] = useState("All");

  if (props.difficulty === "easy" && (newNoun < 0 || newNoun > 50)) {
    setNewNoun(0);
  }
  if (
    props.difficulty === "medium" &&
    (newNoun < 51 || newNoun > 100) &&
    newNoun !== -1
  ) {
    setNewNoun(-1);
  }
  if (
    props.difficulty === "hard" &&
    (newNoun < 101 || newNoun > 150) &&
    newNoun !== -2
  ) {
    setNewNoun(-2);
  }

  let noun;
  let qnoun = Math.floor(Math.random() * 4);
  let anoun;
  if (qnoun === 0) {
    qnoun = 3;
  }
  if (language === "English") {
    qnoun = 1;
  }
  if (language === "Spanish") {
    qnoun = 2;
  }
  if (language === "Russian") {
    qnoun = 3;
  }
  if (qnoun === 1) {
    anoun = 3;
  }
  if (qnoun === 2) {
    anoun = 3;
  }
  if (qnoun === 3) {
    anoun = Math.floor(Math.random() * 2) + 1;
  }

  switch (newNoun) {
    case -2:
      qnoun = 4;
      anoun = 4;
      noun = {
        english: "Nouns / Существительные (Hard)",
        level: 3,
      };
      break;
    case -1:
      qnoun = 4;
      anoun = 4;
      noun = {
        english: "Nouns / Существительные (Medium)",
        level: 2,
      };
      break;
    case 0:
      qnoun = 4;
      anoun = 4;
      noun = {
        english: "Nouns / Существительные (Easy)",
        level: 1,
      };
      break;
    case 1:
      noun = {
        english: "boy",
        russian: "мальчик",
        spanish: "chico",
        russianlatin: "malchik",
        level: 1,
      };
      break;
    case 2:
      noun = {
        english: "girl",
        russian: "девочка",
        spanish: "chica",
        russianlatin: "devochka",
        level: 1,
      };
      break;
    case 3:
      noun = {
        english: "dog",
        russian: "собака",
        spanish: "perro",
        russianlatin: "sobaka",
        level: 1,
      };
      break;
    case 4:
      noun = {
        english: "house",
        englishalt: "home",

        russian: "дом",
        spanish: "casa",
        spanishalt: "hogar",
        russianlatin: "dom",
        level: 1,
      };
      break;
    case 5:
      noun = {
        english: "water",
        russian: "воды / вода",
        spanish: "agua",
        russianlatin: "voda",
        russianlatinalt: "vody",
        level: 1,
      };
      break;
    case 6:
      noun = {
        english: "area",
        englishalt: "zone",
        russian: "зона / площадь",
        spanish: "zona",
        spanishalt: "area",
        russianlatin: "zona",
        russianlatinalt: "ploshchad",
        level: 1,
      };
      break;
    case 7:
      noun = {
        english: "book",
        russian: "книга",
        spanish: "libro",
        russianlatin: "kniga",
        level: 1,
      };
      break;
    case 8:
      noun = {
        english: "business",
        russian: "бизнес",
        spanish: "negocios",
        russianlatin: "biznis",
        level: 1,
      };
      break;
    case 9:
      noun = {
        english: "company",
        russian: "компания",
        spanish: "empresa",
        russianlatin: "companiya",
        russianlatinalt: "compania",
        level: 1,
      };
      break;
    case 10:
      noun = {
        english: "case",
        russian: "кейс",
        spanish: "caso",
        russianlatin: "keys",
        level: 1,
      };
      break;
    case 11:
      noun = {
        english: "child",
        russian: "ребенок",
        spanish: "niño",
        spanishalt: "nino",
        russianlatin: "rebenok",
        level: 1,
      };
      break;
    case 12:
      noun = {
        english: "day",
        russian: "день",
        spanish: "dia",
        russianlatin: "den",
        level: 1,
      };
      break;
    case 13:
      noun = {
        english: "night",
        russian: "ночь",
        spanish: "noche",
        russianlatin: "noch",
        level: 1,
      };
      break;
    case 14:
      noun = {
        english: "mother",
        russian: "мать",
        spanish: "madre",
        russianlatin: "mat",
        level: 1,
      };
      break;
    case 15:
      noun = {
        english: "father",
        russian: "отец",
        spanish: "padre",
        russianlatin: "otets",
        level: 1,
      };
      break;
    case 16:
      noun = {
        english: "cat",
        russian: "кошка",
        spanish: "gato",
        russianlatin: "koshka",
        russianlatinalt: "kot",
        level: 1,
      };
      break;
    case 17:
      noun = {
        english: "sun",
        russian: "солнце",
        spanish: "sol",
        russianlatin: "solnste",
        level: 1,
      };
      break;
    case 18:
      noun = {
        english: "moon",
        russian: "луна",
        spanish: "luna",
        russianlatin: "luna",
        level: 1,
      };
      break;
    case 19:
      noun = {
        english: "money",
        russian: "деньги",
        spanish: "dinero",
        russianlatin: "dengi",
        level: 1,
      };
      break;
    case 20:
      noun = {
        english: "student",
        russian: "ученик",
        spanish: "estudiante",
        russianlatin: "uchenik",
        level: 1,
      };
      break;
    case 21:
      noun = {
        english: "week",
        russian: "неделя",
        spanish: "semana",
        russianlatin: "nedelya",
        level: 1,
      };
      break;
    case 22:
      noun = {
        english: "month",
        russian: "месяц",
        spanish: "mes",
        russianlatin: "mesyats",
        level: 1,
      };
      break;
    case 23:
      noun = {
        english: "year",
        russian: "год",
        spanish: "año",
        spanishalt: "ano",
        russianlatin: "god",
        level: 1,
      };
      break;
    case 24:
      noun = {
        english: "man",
        russian: "мужчина",
        spanish: "hombre",
        russianlatin: "muzchina",
        level: 1,
      };
      break;
    case 25:
      noun = {
        english: "woman",
        russian: "женщина",
        spanish: "mujer",
        russianlatin: "zhenshchina",
        level: 1,
      };
      break;
    case 26:
      noun = {
        english: "bird",
        russian: "птица",
        spanish: "ave",
        spanishalt: "pajaro",
        russianlatin: "ptitsa",
        level: 1,
      };
      break;
    case 27:
      noun = {
        english: "car",
        russian: "автомобиль / машина",
        spanish: "coche",
        russianlatin: "machina",
        russianlatinalt: "avtomobil",
        level: 1,
      };
      break;
    case 28:
      noun = {
        english: "train",
        russian: "тренироваться",
        spanish: "tren",
        russianlatin: "trenirovatsya",
        level: 1,
      };
      break;
    case 29:
      noun = {
        english: "bus",
        russian: "автобус",
        spanish: "autobus",
        russianlatin: "avtobus",
        level: 1,
      };
      break;
    case 30:
      noun = {
        english: "airplane",
        englishalt: "plane",
        russian: "самолет",
        spanish: "avion",
        russianlatin: "samolet",
        level: 1,
      };
      break;
    case 31:
      noun = {
        english: "bike",
        englishalt: "bicicleta",
        russian: "велосипед",
        spanish: "bicicleta",
        russianlatin: "velosiped",
        level: 1,
      };
      break;
    case 32:
      noun = {
        english: "food",
        russian: "еда",
        spanish: "comida",
        russianlatin: "yeda",
        level: 1,
      };
      break;
    case 33:
      noun = {
        english: "drink",
        russian: "напиток",
        spanish: "bebida",
        russianlatin: "napitok",
        level: 1,
      };
      break;
    case 34:
      noun = {
        english: "time",
        russian: "время",
        spanish: "tiempo",
        russianlatin: "vremya",
        level: 1,
      };
      break;
    case 35:
      noun = {
        english: "word",
        russian: "слово",
        spanish: "palabra",
        russianlatin: "slovo",
        level: 1,
      };
      break;
    case 36:
      noun = {
        english: "world",
        russian: "мир",
        spanish: "mundo",
        russianlatin: "mir",
        level: 1,
      };
      break;
    case 37:
      noun = {
        english: "country",
        englishalt: "nation",
        russian: "страна",
        spanish: "pais",
        russianlatin: "strana",
        level: 1,
      };
      break;
    case 38:
      noun = {
        english: "number",
        russian: "количество",
        spanish: "numero",
        russianlatin: "kolichestvo",
        level: 1,
      };
      break;
    case 39:
      noun = {
        english: "people",
        russian: "люди",
        spanish: "gente",
        russianlatin: "lyudi",
        level: 1,
      };
      break;
    case 40:
      noun = {
        english: "job",
        russian: "работа",
        spanish: "trabajo",
        russianlatin: "rabota",
        level: 1,
      };
      break;
    case 41:
      noun = {
        english: "government",
        russian: "правительство",
        spanish: "gobierno",
        russianlatin: "pravitelstvo",
        level: 1,
      };
      break;
    case 42:
      noun = {
        english: "life",
        russian: "жизнь",
        spanish: "vida",
        russianlatin: "zhizn",
        level: 1,
      };
      break;
    case 43:
      noun = {
        english: "fact",
        russian: "факт",
        spanish: "hecho",
        russianlatin: "fakt",
        level: 1,
      };
      break;
    case 44:
      noun = {
        english: "eye",
        russian: "глаз",
        spanish: "ojo",
        russianlatin: "glaz",
        level: 1,
      };
      break;
    case 45:
      noun = {
        english: "ear",
        russian: "ухо",
        spanish: "oreja",
        russianlatin: "ukho",
        level: 1,
      };
      break;
    case 46:
      noun = {
        english: "nose",
        russian: "нос",
        spanish: "nariz",
        russianlatin: "nos",
        level: 1,
      };
      break;
    case 47:
      noun = {
        english: "mouth",
        russian: "рот",
        spanish: "boca",
        russianlatin: "rot",
        level: 1,
      };
      break;
    case 48:
      noun = {
        english: "head",
        russian: "голова",
        spanish: "cabeza",
        russianlatin: "golova",
        level: 1,
      };
      break;
    case 49:
      noun = {
        english: "body",
        russian: "тело",
        spanish: "cuerpo",
        russianlatin: "telo",
        level: 1,
      };
      break;
    case 50:
      noun = {
        english: "hand",
        russian: "рука",
        spanish: "mano",
        russianlatin: "ruka",
        level: 1,
      };
      break;
    case 51:
      noun = {
        english: "fish",
        spanish: "pez",
        russian: "рыба",
        russianlatin: "ryba",
        level: 2,
      };
      break;
    case 52:
      noun = {
        english: "horse",
        spanish: "caballo",
        russian: "лошадь",
        russianlatin: "loshad",
        level: 2,
      };
      break;
    case 53:
      noun = {
        english: "mouse",
        spanish: "raton",
        russian: "мышь",
        russianlatin: "mysh",
        level: 2,
      };
      break;
    case 54:
      noun = {
        english: "rabbit",
        spanish: "conejo",
        russian: "кролик",
        russianlatin: "krolik",
        level: 2,
      };
      break;
    case 55:
      noun = {
        english: "rat",
        spanish: "rata",
        russian: "крыса",
        russianlatin: "krysa",
        level: 2,
      };
      break;
    case 56:
      noun = {
        english: "frog",
        spanish: "rana",
        russian: "лягушка",
        russianlatin: "lyagushka",
        level: 2,
      };
      break;
    case 57:
      noun = {
        english: "goat",
        spanish: "cabra",
        russian: "козел",
        russianlatin: "kozel",
        level: 2,
      };
      break;
    case 58:
      noun = {
        english: "pig",
        spanish: "cerdo",
        russian: "свинья",
        russianlatin: "svinya",
        level: 2,
      };
      break;
    case 59:
      noun = {
        english: "cow",
        spanish: "vaca",
        russian: "корова",
        russianlatin: "korova",
        level: 2,
      };
      break;
    case 60:
      noun = {
        english: "sheep",
        spanish: "oveja",
        russian: "овец",
        russianlatin: "ovets",
        level: 2,
      };
      break;
    case 61:
      noun = {
        english: "deer",
        spanish: "cierva",
        russian: "олень",
        russianlatin: "olen",
        level: 2,
      };
      break;
    case 62:
      noun = {
        english: "crow",
        spanish: "cuervo",
        russian: "ворона",
        russianlatin: "volona",
        level: 2,
      };
      break;
    case 63:
      noun = {
        english: "eagle",
        spanish: "aguila",
        russian: "орел",
        russianlatin: "orel",
        level: 2,
      };
      break;
    case 64:
      noun = {
        english: "snake",
        spanish: "serpiente",
        russian: "змея",
        russianlatin: "zmeya",
        level: 2,
      };
      break;
    case 65:
      noun = {
        english: "turtle",
        spanish: "tortuga",
        russian: "черепаха",
        russianlatin: "cherepakha",
        level: 2,
      };
      break;
    case 66:
      noun = {
        english: "bear",
        spanish: "oso",
        russian: "нести",
        russianlatin: "nesti",
        level: 2,
      };
      break;
    case 67:
      noun = {
        english: "monkey",
        spanish: "mono",
        russian: "обезьяна",
        russianlatin: "obezyana",
        level: 2,
      };
      break;
    case 68:
      noun = {
        english: "lion",
        spanish: "leon",
        russian: "лев",
        russianlatin: "lev",
        level: 2,
      };
      break;
    case 69:
      noun = {
        english: "tiger",
        spanish: "tigre",
        russian: "тигр",
        russianlatin: "tigr",
        level: 2,
      };
      break;
    case 70:
      noun = {
        english: "chicken",
        spanish: "pollo",
        russian: "курица",
        russianlatin: "kuritsa",
        level: 2,
      };
      break;
    case 71:
      noun = {
        english: "shark",
        spanish: "tiburon",
        russian: "акула",
        russianlatin: "akula",
        level: 2,
      };
      break;
    case 72:
      noun = {
        english: "owl",
        spanish: "buho",
        russian: "сова",
        russianlatin: "sova",
        level: 2,
      };
      break;
    case 73:
      noun = {
        english: "moose",
        spanish: "alce",
        russian: "лось",
        russianlatin: "los",
        level: 2,
      };
      break;
    case 74:
      noun = {
        english: "squirrel",
        spanish: "ardilla",
        spanishalt: "ardillo",
        russian: "белка",
        russianlatin: "belka",
        level: 2,
      };
      break;
    case 75:
      noun = {
        english: "human",
        spanish: "humano",
        russian: "человек",
        russianlatin: "chelovek",
        level: 2,
      };
      break;
    case 76:
      noun = {
        english: "tree",
        spanish: "arbol",
        russian: "дерево",
        russianlatin: "derevo",
        level: 2,
      };
      break;
    case 77:
      noun = {
        english: "bush",
        spanish: "arbusto",
        russian: "куст",
        russianlatin: "kust",
        level: 2,
      };
      break;
    case 78:
      noun = {
        english: "leaf",
        spanish: "hoja",
        russian: "лист",
        russianlatin: "list",
        level: 2,
      };
      break;
    case 79:
      noun = {
        english: "river",
        spanish: "rio",
        russian: "река",
        russianlatin: "reka",
        level: 2,
      };
      break;
    case 80:
      noun = {
        english: "sea",
        spanish: "mar",
        russian: "море",
        russianlatin: "morye",
        level: 2,
      };
      break;
    case 81:
      noun = {
        english: "ocean",
        spanish: "oceano",
        russian: "океан",
        russianlatin: "okean",
        level: 2,
      };
      break;
    case 82:
      noun = {
        english: "sky",
        spanish: "cielo",
        russian: "небо",
        russianlatin: "nebo",
        level: 2,
      };
      break;
    case 83:
      noun = {
        english: "land",
        englishalt: "ground",
        spanish: "tierra",
        russian: "земля",
        russianlatin: "zemlya",
        level: 2,
      };
      break;
    case 84:
      noun = {
        english: "rain",
        spanish: "lluvia",
        russian: "дождь",
        russianlatin: "dozhd",
        level: 2,
      };
      break;
    case 85:
      noun = {
        english: "snow",
        spanish: "nieve",
        russian: "снег",
        russianlatin: "sneg",
        level: 2,
      };
      break;
    case 86:
      noun = {
        english: "light",
        spanish: "luz",
        russian: "свет",
        russianlatin: "svet",
        level: 2,
      };
      break;
    case 87:
      noun = {
        english: "dark",
        spanish: "oscuridad",
        russian: "темнота",
        russianlatin: "temnota",
        level: 2,
      };
      break;
    case 88:
      noun = {
        english: "cloud",
        spanish: "nube",
        russian: "облако",
        russianlatin: "oblako",
        level: 2,
      };
      break;
    case 89:
      noun = {
        english: "forest",
        spanish: "bosque",
        russian: "лес",
        russianlatin: "les",
        level: 2,
      };
      break;
    case 90:
      noun = {
        english: "rock",
        spanish: "roca",
        russian: "рок",
        russianlatin: "rok",
        level: 2,
      };
      break;
    case 91:
      noun = {
        english: "sand",
        spanish: "arena",
        russian: "песок",
        russianlatin: "pesok",
        level: 2,
      };
      break;
    case 92:
      noun = {
        english: "beach",
        spanish: "playa",
        russian: "пляж",
        russianlatin: "plyazh",
        level: 2,
      };
      break;
    case 93:
      noun = {
        english: "desert",
        spanish: "desierto",
        russian: "пустыня",
        russianlatin: "pustynya",
        level: 2,
      };
      break;
    case 94:
      noun = {
        english: "mountain",
        spanish: "montaña",
        spanishalt: "montana",
        russian: "гора",
        russianlatin: "gora",
        level: 2,
      };
      break;
    case 95:
      noun = {
        english: "hill",
        spanish: "cierro",
        russian: "холм",
        russianlatin: "kholm",
        level: 2,
      };
      break;
    case 96:
      noun = {
        english: "field",
        spanish: "campo",
        russian: "поле",
        russianlatin: "polye",
        level: 2,
      };
      break;
    case 97:
      noun = {
        english: "fruit",
        spanish: "fruta",
        russian: "фрукты",
        russianlatin: "frukty",
        level: 2,
      };
      break;
    case 98:
      noun = {
        english: "vegetable",
        spanish: "vegetal",
        russian: "овощ",
        russianlatin: "ovoshch",
        level: 2,
      };
      break;
    case 99:
      noun = {
        english: "grass",
        spanish: "cesped",
        russian: "трава",
        russianlatin: "trava",
        level: 2,
      };
      break;
    case 100:
      noun = {
        english: "lake",
        spanish: "lago",
        russian: "озеро",
        russianlatin: "ozero",
        level: 2,
      };
      break;
    default:
      noun = {
        english: "",
        russian: "",
        spanish: "",
        russianlatin: "",
        level: 3,
      };
  }

  return (
    <div>
      <div>
        <Question
          english={noun.english}
          russian={noun.russian}
          russianlatin={noun.russianlatin}
          spanish={noun.spanish}
          spanishalt={noun.spanishalt}
          spanishalt2={noun.spanishalt2}
          englishalt={noun.englishalt}
          englishalt2={noun.englishalt2}
          russianlatinalt={noun.russianlatinalt}
          qword={qnoun}
          aword={anoun}
          onChange={(number) => setNewNoun(number)}
          level={noun.level}
          type="Nouns"
        />
      </div>
      {qnoun === 4 ? (
        <div className="langselector">
          <form>
            <input
              type="radio"
              id="englishonly"
              name="langselector"
              value="English"
              onChange={(e) => setLanguage(e.target.value)}
            />
            <label htmlFor="englishonly">Only ask in English </label>
            <br />
            <input
              type="radio"
              id="spanishonly"
              name="langselector"
              value="Spanish"
              onChange={(e) => setLanguage(e.target.value)}
            />
            <label htmlFor="spanishonly">Only ask in Spanish </label>
            <br />
            <input
              type="radio"
              id="russianonly"
              name="langselector"
              value="Russian"
              onChange={(e) => setLanguage(e.target.value)}
            />
            <label htmlFor="russianonly">Only ask in Russian </label>
            <br />
            <input
              type="radio"
              id="all"
              name="langselector"
              value="All"
              onChange={(e) => setLanguage(e.target.value)}
            />
            <label htmlFor="all">Ask in any language </label>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default NounPage;
