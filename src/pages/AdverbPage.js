import { useState } from "react";
import Question from "../components/Question";

const AdverbPage = (props) => {
  const [newAdverb, setNewAdverb] = useState(0);
  const [language, setLanguage] = useState("All");
  const [languageR, setLanguageR] = useState("All");

  if (props.difficulty === "easy" && (newAdverb < 0 || newAdverb > 50)) {
    setNewAdverb(0);
  }
  if (
    props.difficulty === "medium" &&
    (newAdverb < 51 || newAdverb > 100) &&
    newAdverb !== -1
  ) {
    setNewAdverb(-1);
  }
  if (
    props.difficulty === "hard" &&
    (newAdverb < 101 || newAdverb > 150) &&
    newAdverb !== -2
  ) {
    setNewAdverb(-2);
  }

  let adverb;
  let qadverb = Math.floor(Math.random() * 4);
  let aadverb;
  if (qadverb === 0) {
    qadverb = 3;
  }
  switch (language) {
    case "English":
      qadverb = 1;
      break;
    case "Spanish":
      qadverb = 2;
      break;
    case "Russian":
      qadverb = 3;
      break;
    default:
      break;
  }

  switch (qadverb) {
    case 1:
      aadverb = Math.floor(Math.random() * 2) + 2;
      break;
    case 2:
      aadverb = 3 - 2 * Math.floor(Math.random() * 2);
      console.log("aadverb: " + aadverb);
      break;
    case 3:
      aadverb = Math.floor(Math.random() * 2) + 1;
      break;
    default:
      break;
  }

  switch (languageR) {
    case "English":
      aadverb = 1;
      break;
    case "Spanish":
      aadverb = 2;
      break;
    case "Russian":
      aadverb = 3;
      break;
    default:
      break;
  }

  switch (newAdverb) {
    case -2:
      qadverb = 4;
      aadverb = 4;
      adverb = {
        english: "Adverbs / Наречия (Hard)",
        level: 3,
      };
      break;
    case -1:
      qadverb = 4;
      aadverb = 4;
      adverb = {
        english: "Adverbs / Наречия (Medium)",
        level: 2,
      };
      break;
    case 0:
      qadverb = 4;
      aadverb = 4;
      adverb = {
        english: "Adverbs / Наречия (Easy)",
        level: 1,
      };
      break;
    case 1:
      adverb = {
        english: "go",
        russian: "идти",
        russianlatin: "idti",
        spanish: "ir",
        level: 1,
      };
      break;
    case 2:
      adverb = {
        english: "be",
        russian: "быть",
        russianlatin: "byut",
        spanish: "estar",
        spanishalt: "ser",
        level: 1,
      };
      break;
    case 3:
      adverb = {
        english: "have",
        russian: "иметь",
        russianlatin: "imet",
        spanish: "tener",
        level: 1,
      };
      break;
    case 4:
      adverb = {
        english: "do",
        englishalt: "make",
        spanish: "hacer",
        russian: "делать",
        russianlatin: "delat",
        level: 1,
      };
      break;
    case 5:
      adverb = {
        english: "take",
        russian: "брать",
        spanish: "tocar",
        russianlatin: "brat",
        level: 1,
      };
      break;
    case 6:
      adverb = {
        english: "give",
        russian: "давaть",
        spanish: "dar",
        russianlatin: "davat",
        level: 1,
      };
      break;
    case 7:
      adverb = {
        english: "can",
        englishalt: "be able",
        russian: "мочь",
        spanish: "poder",
        russianlatin: "mohch",
        level: 1,
      };
      break;
    case 8:
      adverb = {
        english: "think",
        russian: "думать",
        spanish: "pensar",
        russianlatin: "dumat",
        level: 1,
      };
      break;
    case 9:
      adverb = {
        english: "say",
        russian: "говорить/сказать",
        spanish: "decir",
        russianlatin: "govorit",
        russianlatinalt: "skazat",
        level: 1,
      };
      break;
    case 10:
      adverb = {
        english: "know",
        russian: "знать",
        spanish: "conocer",
        spanishalt: "saber",
        russianlatin: "znat",
        level: 1,
      };
      break;
    case 11:
      adverb = {
        english: "eat",
        russian: "есть",
        spanish: "comer",
        russianlatin: "yest",
        level: 1,
      };
      break;
    case 12:
      adverb = {
        english: "want",
        russian: "хотеть",
        spanish: "querer",
        russianlatin: "khotet",
        level: 1,
      };
      break;
    case 13:
      adverb = {
        english: "see",
        russian: "видеть",
        spanish: "ver",
        russianlatin: "videt",
        level: 1,
      };
      break;
    case 14:
      adverb = {
        english: "live",
        russian: "жить",
        spanish: "vivir",
        russianlatin: "zhit",
        level: 1,
      };
      break;
    case 15:
      adverb = {
        english: "become",
        russian: "стать / становиться",
        spanish: "convertirse",
        russianlatin: "stat",
        russianlatinalt: "stanovitsya",
        level: 1,
      };
      break;
    case 16:
      adverb = {
        english: "stay",
        russian: "остаться",
        spanish: "quedar",
        russianlatin: "ostatsya",
        level: 1,
      };
      break;
    case 17:
      adverb = {
        english: "wait",
        russian: "ждать",
        spanish: "esperar",
        russianlatin: "zhdat",
        level: 1,
      };
      break;
    case 18:
      adverb = {
        english: "mean",
        englishalt: "signify",
        russian: "значить",
        spanish: "significar",
        russianlatin: "znachit",
        level: 1,
      };
      break;
    case 19:
      adverb = {
        english: "work",
        russian: "работать",
        spanish: "trabajar",
        russianlatin: "rabotat",
        level: 1,
      };
      break;
    case 20:
      adverb = {
        english: "love",
        russian: "любить",
        spanish: "amar",
        russianlatin: "lyubit",
        level: 1,
      };
      break;
    case 21:
      adverb = {
        english: "hate",
        russian: "ненавидеть",
        spanish: "odiar",
        russianlatin: "nenavidet",
        level: 1,
      };
      break;
    case 22:
      adverb = {
        english: "come",
        englishalt: "arrive",
        russian: "приходить",
        spanish: "venir",
        russianlatin: "prikhodit",
        level: 1,
      };
      break;
    case 23:
      adverb = {
        english: "write",
        russian: "писать",
        spanish: "escribir",
        russianlatin: "pisat",
        level: 1,
      };
      break;
    case 24:
      adverb = {
        english: "need",
        russian: "нуждаться",
        spanish: "necesitar",
        russianlatin: "nuzhdatsya",
        level: 1,
      };
      break;
    case 25:
      adverb = {
        english: "return",
        russian: "возвращаться",
        spanish: "volver",
        russianlatin: "vozvrashchatsya",
        russianlatinalt: "vozvrashatsya",
        level: 1,
      };
      break;
    case 26:
      adverb = {
        english: "seem",
        englishalt: "appear",
        russian: "казаться",
        spanish: "aparecer",
        spanishalt: "parecer",
        russianlatin: "kazatsya",
        level: 1,
      };
      break;
    case 27:
      adverb = {
        english: "lay",
        englishalt: "lie",
        russian: "лежать",
        spanish: "acostar",
        russianlatin: "leyzhat",
        russianlatinalt: "layzhat",
        level: 1,
      };
      break;
    case 28:
      adverb = {
        english: "remember",
        russian: "помнить",
        spanish: "recordar",
        russianlatin: "pomnit",
        level: 1,
      };
      break;
    case 29:
      adverb = {
        english: "ask",
        russian: "спрашивать",
        spanish: "pedir",
        russianlatin: "sprashivat",
        level: 1,
      };
      break;
    case 30:
      adverb = {
        english: "answer",
        englishalt: "reply",
        russian: "отвечать",
        spanish: "responder",
        russianlatin: "otvechat",
        level: 1,
      };
      break;
    case 31:
      adverb = {
        english: "walk",
        russian: "ходить",
        spanish: "caminar",
        russianlatin: "khodit",
        level: 1,
      };
      break;
    case 32:
      adverb = {
        english: "understand",
        englishalt: "realize",
        russian: "понимать",
        spanish: "comprender",
        spanishalt: "darse cuenta",
        russianlatin: "ponimat",
        level: 1,
      };
      break;
    case 33:
      adverb = {
        english: "get",
        englishalt: "receive",
        englishalt2: "obtain",
        russian: "получать",
        spanish: "obtener",
        spanishalt: "recibir",
        russianlatin: "poluchat",
        level: 1,
      };
      break;
    case 34:
      adverb = {
        english: "count",
        englishalt: "consider",
        russian: "считать",
        spanish: "considerar",
        spanishalt: "contar",
        russianlatin: "schitat",
        level: 1,
      };
      break;
    case 35:
      adverb = {
        english: "stand",
        englishalt: "rise",
        englishalt2: "wake up",
        russian: "стоять",
        spanish: "levantar",
        spanishalt: "parar",
        russianlatin: "stoyat",
        level: 1,
      };
      break;
    case 36:
      adverb = {
        english: "learn",
        russian: "узнать / учить",
        spanish: "aprender",
        russianlatin: "uznat",
        russianlatinalt: "uchit",
        level: 1,
      };
      break;
    case 37:
      adverb = {
        english: "solve",
        englishalt: "decide",
        russian: "решить",
        spanish: "resolver",
        russianlatin: "reshit",
        level: 1,
      };
      break;
    case 38:
      adverb = {
        english: "start",
        russian: "начать",
        spanish: "empezar",
        russianlatin: "nachat",
        level: 1,
      };
      break;
    case 39:
      adverb = {
        english: "watch",
        englishalt: "look",
        russian: "смотреть",
        spanish: "mirar",
        russianlatin: "smotret",
        level: 1,
      };
      break;
    case 40:
      adverb = {
        english: "go out",
        englishalt: "leave",
        russian: "уйти",
        spanish: "salir",
        russianlatin: "uyti",
        level: 1,
      };
      break;
    case 41:
      adverb = {
        english: "leave behind",
        englishalt: "leave",
        russian: "позволять",
        spanish: "dejar",
        russianlatin: "pozvolyat",
        level: 1,
      };
      break;
    case 42:
      adverb = {
        english: "find",
        englishalt: "discover",
        russian: "искать / найти",
        spanish: "encontrar",
        spanishalt: "hallar",
        spanishalt2: "descubrir",
        russianlatin: "iskat",
        russianlatinalt: "nayti",
        level: 1,
      };
      break;
    case 43:
      adverb = {
        english: "hear",
        russian: "слышать",
        spanish: "oir",
        russianlatin: "slyshat",
        level: 1,
      };
      break;
    case 44:
      adverb = {
        english: "feel",
        russian: "чувствовать",
        spanish: "sentir",
        russianlatin: "chuvstvovat",
        level: 1,
      };
      break;
    case 45:
      adverb = {
        english: "read",
        russian: "читать",
        spanish: "leer",
        russianlatin: "chitat",
        level: 1,
      };
      break;
    case 46:
      adverb = {
        english: "sit",
        russian: "сесть",
        spanish: "sentarse",
        russianlatin: "sest",
        level: 1,
      };
      break;
    case 47:
      adverb = {
        english: "sleep",
        russian: "спать",
        spanish: "dormir",
        russianlatin: "spat",
        level: 1,
      };
      break;
    case 48:
      adverb = {
        english: "die",
        russian: "умереть",
        spanish: "morir",
        russianlatin: "umeret",
        level: 1,
      };
      break;
    case 49:
      adverb = {
        english: "kill",
        russian: "убить",
        spanish: "matar",
        russianlatin: "ubit",
        level: 1,
      };
      break;
    case 50:
      adverb = {
        english: "call",
        russian: "называть",
        spanish: "llamar",
        russianlatin: "nazivat",
        level: 1,
      };
      break;
    default:
      adverb = {
        english: " ",
        russian: " ",
        spanish: " ",
        russianlatin: " ",
        level: 3,
      };
      if (newAdverb > 50 && newAdverb < 101) {
        adverb.level = 2;
      }
      break;
  }

  return (
    <div>
      <div>
        <Question
          english={adverb.english}
          russian={adverb.russian}
          russianlatin={adverb.russianlatin}
          spanish={adverb.spanish}
          spanishalt={adverb.spanishalt}
          spanishalt2={adverb.spanishalt2}
          englishalt={adverb.englishalt}
          englishalt2={adverb.englishalt2}
          russianlatinalt={adverb.russianlatinalt}
          qword={qadverb}
          aword={aadverb}
          onChange={(number) => setNewAdverb(number)}
          level={adverb.level}
          type="Adverbs"
        />
      </div>
      {qadverb === 4 ? (
        <>
          <div className="langselector">
            <form>
              {languageR === "English" ? null : (
                <>
                  <input
                    type="radio"
                    id="onlyenglish"
                    name="langselector"
                    value="English"
                    onChange={(e) => setLanguage(e.target.value)}
                  />
                  <label htmlFor="onlyenglish">Only ask in English</label>
                </>
              )}
              <br />
              {languageR === "Spanish" ? null : (
                <>
                  <input
                    type="radio"
                    id="onlyspanish"
                    name="langselector"
                    value="Spanish"
                    onChange={(e) => setLanguage(e.target.value)}
                  />
                  <label htmlFor="onlyspanish">Only ask in Spanish</label>
                </>
              )}
              <br />
              {languageR === "Russian" ? null : (
                <>
                  <input
                    type="radio"
                    id="onlyrussian"
                    name="langselector"
                    value="Russian"
                    onChange={(e) => setLanguage(e.target.value)}
                  />
                  <label htmlFor="onlyrussian">Only ask in Russian</label>
                </>
              )}
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
          <div className="alangselector">
            <form>
              {language === "English" ? null : (
                <>
                  <input
                    type="radio"
                    id="englishonly"
                    name="langselector"
                    value="English"
                    onChange={(e) => setLanguageR(e.target.value)}
                  />
                  <label htmlFor="englishonly">Only respond in English</label>
                </>
              )}
              <br />
              {language === "Spanish" ? null : (
                <>
                  <input
                    type="radio"
                    id="spanishonly"
                    name="langselector"
                    value="Spanish"
                    onChange={(e) => setLanguageR(e.target.value)}
                  />
                  <label htmlFor="spanishonly">Only respond in Spanish</label>
                </>
              )}
              <br />
              {language === "Russian" ? null : (
                <>
                  <input
                    type="radio"
                    id="russianonly"
                    name="langselector"
                    value="Russian"
                    onChange={(e) => setLanguageR(e.target.value)}
                  />
                  <label htmlFor="russianonly">Only respond in Russian</label>
                </>
              )}
              <br />
              <input
                type="radio"
                id="allagain"
                name="langselector"
                value="All"
                onChange={(e) => setLanguageR(e.target.value)}
              />
              <label htmlFor="allagain">Respond in any language</label>
            </form>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default AdverbPage;
