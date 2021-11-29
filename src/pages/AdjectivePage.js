import { useState } from "react";
import Question from "../components/Question";

const AdjectivePage = (props) => {
  const [language, setLanguage] = useState("All");
  const [newAdj, setNewAdj] = useState(0);

  if (props.difficulty === "easy" && (newAdj < 0 || newAdj > 50)) {
    setNewAdj(0);
  }
  if (
    props.difficulty === "medium" &&
    (newAdj < 51 || newAdj > 100) &&
    newAdj !== -1
  ) {
    setNewAdj(-1);
  }
  if (
    props.difficulty === "hard" &&
    (newAdj < 101 || newAdj > 150) &&
    newAdj !== -2
  ) {
    setNewAdj(-2);
  }

  let adj;
  let qadj = Math.floor(Math.random() * 4);
  let aadj;
  if (qadj === 0) {
    qadj = 3;
  }
  switch (language) {
    case "English":
      qadj = 1;
      break;
    case "Spanish":
      qadj = 2;
      break;
    case "Russian":
      qadj = 3;
      break;
    default:
      qadj = 3;
  }
  switch (language) {
    case "English":
      qadj = 1;
      break;
    case "Spanish":
      qadj = 2;
      break;
    case "Russian":
      qadj = 3;
      break;
    default:
      qadj = 3;
  }
  if (qadj === 1) {
    aadj = 3;
  }
  if (qadj === 2) {
    aadj = 3;
  }
  if (qadj === 3) {
    aadj = Math.floor(Math.random() * 2) + 1;
  }
  switch (newAdj) {
    case -2:
      qadj = 4;
      aadj = 4;
      adj = {
        english: "Adjectives / Прилагательные (Hard)",
        level: 3,
      };
      break;
    case -1:
      qadj = 4;
      aadj = 4;
      adj = {
        english: "Adjectives / Прилагательные (Medium)",
        level: 2,
      };
      break;
    case 0:
      qadj = 4;
      aadj = 4;
      adj = {
        english: "Adjectives / Прилагательные (Easy)",
        level: 1,
      };
      break;

    case 1:
      adj = {
        english: "tall",
        englishalt: "high",
        russian: "высокая",
        russianlatin: "vysokaya",
        spanish: "alto",
        level: 1,
      };
      break;
    case 2:
      adj = {
        english: "small",
        russian: "маленькая",
        russianlatin: "malenkaya",
        spanish: "pequeño",
        spanishalt: "pequeno",
        level: 1,
      };
      break;
    case 3:
      adj = {
        english: "short",
        russian: "короткая",
        russianlatin: "korotkaya",
        spanish: "corto",
        level: 1,
      };
      break;
    case 4:
      adj = {
        english: "large",
        englishalt: "big",
        spanish: "largo",
        spanishalt: "grande",
        russian: "большая",
        russianlatin: "bolshaya",
        level: 1,
      };
      break;
    case 5:
      adj = {
        english: "elevated",
        russian: "повышенная",
        spanish: "elevado",
        spanishalt: "alto",
        russianlatin: "povyshennaya",
        level: 1,
      };
      break;
    case 6:
      adj = {
        english: "low",
        russian: "низкая",
        spanish: "bajo",
        russianlatin: "nizkaya",
        level: 1,
      };
      break;
    case 7:
      adj = {
        english: "good",
        englishalt: "well",
        russian: "хорошая",
        spanish: "bueno",
        russianlatin: "khoroshaya",
        level: 1,
      };
      break;
    case 8:
      adj = {
        english: "bad",
        englishalt: "poor",
        russian: "плохая",
        spanish: "mal",
        russianlatin: "plokhaya",
        level: 1,
      };
      break;
    case 9:
      adj = {
        english: "happy",
        russian: "счастливая",
        spanish: "contento",
        russianlatin: "schastlivaya",
        level: 1,
      };
      break;
    case 10:
      adj = {
        english: "sad",
        russian: "грустная",
        spanish: "triste",
        russianlatin: "grustnaya",
        level: 1,
      };
      break;
    case 11:
      adj = {
        english: "angry",
        russian: "злое",
        spanish: "enojado",
        russianlatin: "zloye",
        level: 1,
      };
      break;
    case 12:
      adj = {
        english: "gris",
        russian: "серая",
        spanish: "gray",
        russianlatin: "ceraya",
        level: 1,
      };
      break;
    case 13:
      adj = {
        english: "black",
        russian: "черная",
        spanish: "negro",
        russianlatin: "chernaya",
        level: 1,
      };
      break;
    case 14:
      adj = {
        english: "white",
        russian: "белая",
        spanish: "blanco",
        russianlatin: "belaya",
        level: 1,
      };
      break;
    case 15:
      adj = {
        english: "red",
        russian: "красная",
        spanish: "rojo",
        russianlatin: "krasnaya",
        level: 1,
      };
      break;
    case 16:
      adj = {
        english: "orange",
        russian: "оранжевая",
        spanish: "naranja",
        russianlatin: "oranzhevaya",
        level: 1,
      };
      break;
    case 17:
      adj = {
        english: "yellow",
        russian: "желтая",
        spanish: "amarillo",
        russianlatin: "zheltaya",
        level: 1,
      };
      break;
    case 18:
      adj = {
        english: "green",
        russian: "зеленая",
        spanish: "verde",
        russianlatin: "zelenaya",
        level: 1,
      };
      break;
    case 19:
      adj = {
        english: "blue",
        russian: "синяя",
        spanish: "azul",
        russianlatin: "sinyaya",
        level: 1,
      };
      break;
    case 20:
      adj = {
        english: "violet",
        russian: "фиолетовая",
        spanish: "morado",
        russianlatin: "fioletovaya",
        level: 1,
      };
      break;
    case 21:
      adj = {
        english: "pink",
        russian: "розовая",
        spanish: "rosa",
        russianlatin: "rozovaya",
        level: 1,
      };
      break;
    case 22:
      adj = {
        english: "brown",
        englishalt: "brunette",
        russian: "коричневая",
        spanish: "moreno",
        russianlatin: "korichnevaya",
        level: 1,
      };
      break;
    case 23:
      adj = {
        english: "blonde",
        russian: "блондинка",
        spanish: "rubio",
        russianlatin: "blondinka",
        level: 1,
      };
      break;
    case 24:
      adj = {
        english: "old",
        russian: "старая",
        spanish: "viejo",
        russianlatin: "staraya",
        level: 1,
      };
      break;
    case 25:
      adj = {
        english: "young",
        russian: "молодая",
        spanish: "joven",
        russianlatin: "molodaya",
        level: 1,
      };
      break;
    case 26:
      adj = {
        english: "cute",
        russian: "милая",
        spanish: "lindo",
        spanishalt: "mono",
        russianlatin: "milaya",
        level: 1,
      };
      break;
    case 27:
      adj = {
        english: "ugly",
        russian: "уродливая",
        spanish: "feo",
        russianlatin: "urodlivaya",
        level: 1,
      };
      break;
    case 28:
      adj = {
        english: "thin",
        russian: "тонкая",
        spanish: "delgado",
        russianlatin: "tonkaya",
        level: 1,
      };
      break;
    case 29:
      adj = {
        english: "thick",
        englishalt: "wide",
        russian: "широкая",
        spanish: "grueso",
        russianlatin: "shirokaya",
        level: 1,
      };
      break;
    case 30:
      adj = {
        english: "skinny",
        russian: "тощая",
        spanish: "flaco",
        russianlatin: "toshchaya",
        level: 1,
      };
      break;
    case 31:
      adj = {
        english: "fat",
        russian: "толстая",
        spanish: "gordo",
        russianlatin: "tolstaya",
        level: 1,
      };
      break;
    case 32:
      adj = {
        english: "fast",
        englishalt: "quick",
        englishalt2: "rapid",
        russian: "быстрая",
        spanish: "rapido",
        spanishalt: "darse cuenta",
        russianlatin: "bystraya",
        level: 1,
      };
      break;
    case 33:
      adj = {
        english: "slow",
        russian: "медленная",
        spanish: "lento",
        russianlatin: "medlennaya",
        level: 1,
      };
      break;
    case 34:
      adj = {
        english: "smart",
        russian: "умная",
        spanish: "inteligente",
        russianlatin: "umnaya",
        level: 1,
      };
      break;
    case 35:
      adj = {
        english: "dumb",
        russian: "тупая",
        spanish: "tonto",
        russianlatin: "tupaya",
        level: 1,
      };
      break;
    case 36:
      adj = {
        english: "light",
        russian: "легкая",
        spanish: "ligero",
        russianlatin: "legkaya",
        level: 1,
      };
      break;
    case 37:
      adj = {
        english: "heavy",
        russian: "тяжелая",
        spanish: "pesado",
        russianlatin: "tyazhelaya",
        level: 1,
      };
      break;
    case 38:
      adj = {
        english: "cold",
        russian: "холодная",
        spanish: "frio",
        russianlatin: "kholodnaya",
        level: 1,
      };
      break;
    case 39:
      adj = {
        english: "hot",
        russian: "горячая",
        spanish: "caliente",
        russianlatin: "goryachaya",
        level: 1,
      };
      break;
    case 40:
      adj = {
        english: "dry",
        russian: "сухая",
        spanish: "seco",
        russianlatin: "sukhaya",
        level: 1,
      };
      break;
    case 41:
      adj = {
        english: "wet",
        russian: "мокрая",
        spanish: "mojado",
        russianlatin: "mokraya",
        level: 1,
      };
      break;
    case 42:
      adj = {
        english: "full",
        russian: "полная",
        spanish: "lleno",
        russianlatin: "polnaya",
        level: 1,
      };
      break;
    case 43:
      adj = {
        english: "empty",
        russian: "пустая",
        spanish: "vacia",
        russianlatin: "pustaya",
        level: 1,
      };
      break;
    case 44:
      adj = {
        english: "past",
        russian: "прошлая",
        spanish: "pasado",
        russianlatin: "proshlaya",
        level: 1,
      };
      break;
    case 45:
      adj = {
        english: "presente",
        russian: "настоящая",
        spanish: "real",
        spanishalt: "presente",
        russianlatin: "nastoyashchaya",
        level: 1,
      };
      break;
    case 46:
      adj = {
        english: "future",
        russian: "будущая",
        spanish: "futuro",
        russianlatin: "budushchaya",
        level: 1,
      };
      break;
    case 47:
      adj = {
        english: "fun",
        russian: "веселая",
        spanish: "divertido",
        russianlatin: "veselaya",
        level: 1,
      };
      break;
    case 48:
      adj = {
        english: "boring",
        russian: "скучная",
        spanish: "aburrido",
        russianlatin: "skuchnaya",
        level: 1,
      };
      break;
    case 49:
      adj = {
        english: "loud",
        russian: "громкая",
        spanish: "ruidoso",
        russianlatin: "gromkaya",
        level: 1,
      };
      break;
    case 50:
      adj = {
        english: "quiet",
        russian: "тихая",
        spanish: "tranquilo",
        russianlatin: "tikhaya",
        level: 1,
      };
      break;
    default:
      adj = {
        english: "",
        russian: "",
        spanish: "",
        russianlatin: "",
        level: "",
      };
      break;
  }

  return (
    <div>
      <div>
        <Question
          english={adj.english}
          russian={adj.russian}
          russianlatin={adj.russianlatin}
          spanish={adj.spanish}
          spanishalt={adj.spanishalt}
          spanishalt2={adj.spanishalt2}
          englishalt={adj.englishalt}
          englishalt2={adj.englishalt2}
          russianlatinalt={adj.russianlatinalt}
          qword={qadj}
          aword={aadj}
          onChange={(number) => setNewAdj(number)}
          level={adj.level}
          type="Adjectives"
        />
      </div>
      {qadj === 4 ? (
        <div className="langselector">
          <form>
            <input
              type="radio"
              id="englishonly"
              name="langselector"
              value="English"
              onChange={(e) => setLanguage(e.target.value)}
            />
            <label htmlFor="englishonly">Only ask in English</label>
            <br />
            <input
              type="radio"
              id="spanishonly"
              name="langselector"
              value="Spanish"
              onChange={(e) => setLanguage(e.target.value)}
            />
            <label htmlFor="spanishonly">Only ask in Spanish</label>
            <br />
            <input
              type="radio"
              id="russianonly"
              name="langselector"
              value="Russian"
              onChange={(e) => setLanguage(e.target.value)}
            />
            <label htmlFor="russianonly">Only ask in Russian</label>
            <br />
            <input
              type="radio"
              id="all"
              name="langselector"
              value="All"
              onChange={(e) => setLanguage(e.target.value)}
            />
            <label htmlFor="all">Ask in any language</label>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default AdjectivePage;
