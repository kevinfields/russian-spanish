import Question from "../components/Question";
import { useState } from "react";

const VerbPage = (props) => {
  const [newVerb, setNewVerb] = useState(0);
  const [language, setLanguage] = useState("All");
  const [languageR, setLanguageR] = useState("All");

  if (props.difficulty === "easy" && (newVerb < 0 || newVerb > 50)) {
    setNewVerb(0);
  }
  if (
    props.difficulty === "medium" &&
    (newVerb < 51 || newVerb > 100) &&
    newVerb !== -1
  ) {
    setNewVerb(-1);
  }
  if (
    props.difficulty === "hard" &&
    (newVerb < 101 || newVerb > 150) &&
    newVerb !== -2
  ) {
    setNewVerb(-2);
  }
  if (props.difficulty === "all" && newVerb < 0 && newVerb !== -3) {
    setNewVerb(-3);
  }

  let verb;
  let qverb = Math.floor(Math.random() * 4);
  let averb;
  if (qverb === 0) {
    qverb = 3;
  }
  switch (language) {
    case "English":
      qverb = 1;
      break;
    case "Spanish":
      qverb = 2;
      break;
    case "Russian":
      qverb = 3;
      break;
    default:
      break;
  }

  switch (qverb) {
    case 1:
      averb = Math.floor(Math.random() * 2) + 2;
      break;
    case 2:
      averb = 3 - 2 * Math.floor(Math.random() * 2);
      console.log("averb: " + averb);
      break;
    case 3:
      averb = Math.floor(Math.random() * 2) + 1;
      break;
    default:
      break;
  }

  switch (languageR) {
    case "English":
      averb = 1;
      break;
    case "Spanish":
      averb = 2;
      break;
    case "Russian":
      averb = 3;
      break;
    default:
      break;
  }

  switch (newVerb) {
    case -3:
      qverb = 4;
      averb = 4;
      verb = {
        english: "Verbs / Глаголы (All)",
        level: 4,
      };
      break;
    case -2:
      qverb = 4;
      averb = 4;
      verb = {
        english: "Verbs / Глаголы (Hard)",
        level: 3,
      };
      break;
    case -1:
      qverb = 4;
      averb = 4;
      verb = {
        english: "Verbs / Глаголы (Medium)",
        level: 2,
      };
      break;
    case 0:
      qverb = 4;
      averb = 4;
      verb = {
        english: "Verbs / Глаголы (Easy)",
        level: 1,
      };
      break;
    case 1:
      verb = {
        english: "go",
        russian: "идти",
        russianlatin: "idti",
        spanish: "ir",
        level: 1,
      };
      break;
    case 2:
      verb = {
        english: "be",
        russian: "быть",
        russianlatin: "byut",
        spanish: "estar",
        spanishalt: "ser",
        level: 1,
      };
      break;
    case 3:
      verb = {
        english: "have",
        russian: "иметь",
        russianlatin: "imet",
        spanish: "tener",
        level: 1,
      };
      break;
    case 4:
      verb = {
        english: "do",
        englishalt: "make",
        spanish: "hacer",
        russian: "делать",
        russianlatin: "delat",
        level: 1,
      };
      break;
    case 5:
      verb = {
        english: "take",
        russian: "брать",
        spanish: "tocar",
        russianlatin: "brat",
        level: 1,
      };
      break;
    case 6:
      verb = {
        english: "give",
        russian: "давaть",
        spanish: "dar",
        russianlatin: "davat",
        level: 1,
      };
      break;
    case 7:
      verb = {
        english: "can",
        englishalt: "be able",
        russian: "мочь",
        spanish: "poder",
        russianlatin: "mohch",
        level: 1,
      };
      break;
    case 8:
      verb = {
        english: "think",
        russian: "думать",
        spanish: "pensar",
        russianlatin: "dumat",
        level: 1,
      };
      break;
    case 9:
      verb = {
        english: "say",
        russian: "говорить/сказать",
        spanish: "decir",
        russianlatin: "govorit",
        russianlatinalt: "skazat",
        level: 1,
      };
      break;
    case 10:
      verb = {
        english: "know",
        russian: "знать",
        spanish: "conocer",
        spanishalt: "saber",
        russianlatin: "znat",
        level: 1,
      };
      break;
    case 11:
      verb = {
        english: "eat",
        russian: "есть",
        spanish: "comer",
        russianlatin: "yest",
        level: 1,
      };
      break;
    case 12:
      verb = {
        english: "want",
        russian: "хотеть",
        spanish: "querer",
        russianlatin: "khotet",
        level: 1,
      };
      break;
    case 13:
      verb = {
        english: "see",
        russian: "видеть",
        spanish: "ver",
        russianlatin: "videt",
        level: 1,
      };
      break;
    case 14:
      verb = {
        english: "live",
        russian: "жить",
        spanish: "vivir",
        russianlatin: "zhit",
        level: 1,
      };
      break;
    case 15:
      verb = {
        english: "become",
        russian: "стать / становиться",
        spanish: "convertirse",
        russianlatin: "stat",
        russianlatinalt: "stanovitsya",
        level: 1,
      };
      break;
    case 16:
      verb = {
        english: "stay",
        russian: "остаться",
        spanish: "quedar",
        russianlatin: "ostatsya",
        level: 1,
      };
      break;
    case 17:
      verb = {
        english: "wait",
        russian: "ждать",
        spanish: "esperar",
        russianlatin: "zhdat",
        level: 1,
      };
      break;
    case 18:
      verb = {
        english: "mean",
        englishalt: "signify",
        russian: "значить",
        spanish: "significar",
        russianlatin: "znachit",
        level: 1,
      };
      break;
    case 19:
      verb = {
        english: "work",
        russian: "работать",
        spanish: "trabajar",
        russianlatin: "rabotat",
        level: 1,
      };
      break;
    case 20:
      verb = {
        english: "love",
        russian: "любить",
        spanish: "amar",
        russianlatin: "lyubit",
        level: 1,
      };
      break;
    case 21:
      verb = {
        english: "hate",
        russian: "ненавидеть",
        spanish: "odiar",
        russianlatin: "nenavidet",
        level: 1,
      };
      break;
    case 22:
      verb = {
        english: "come",
        englishalt: "arrive",
        russian: "приходить",
        spanish: "venir",
        russianlatin: "prikhodit",
        level: 1,
      };
      break;
    case 23:
      verb = {
        english: "write",
        russian: "писать",
        spanish: "escribir",
        russianlatin: "pisat",
        level: 1,
      };
      break;
    case 24:
      verb = {
        english: "need",
        russian: "нуждаться",
        spanish: "necesitar",
        russianlatin: "nuzhdatsya",
        level: 1,
      };
      break;
    case 25:
      verb = {
        english: "return",
        russian: "возвращаться",
        spanish: "volver",
        russianlatin: "vozvrashatsya",
        level: 1,
      };
      break;
    case 26:
      verb = {
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
      verb = {
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
      verb = {
        english: "remember",
        russian: "помнить",
        spanish: "recordar",
        russianlatin: "pomnit",
        level: 1,
      };
      break;
    case 29:
      verb = {
        english: "ask",
        russian: "спрашивать",
        spanish: "pedir",
        russianlatin: "sprashivat",
        level: 1,
      };
      break;
    case 30:
      verb = {
        english: "answer",
        englishalt: "reply",
        englishalt2: "respond",
        russian: "отвечать",
        spanish: "responder",
        russianlatin: "otvechat",
        level: 1,
      };
      break;
    case 31:
      verb = {
        english: "walk",
        russian: "ходить",
        spanish: "caminar",
        russianlatin: "khodit",
        level: 1,
      };
      break;
    case 32:
      verb = {
        english: "understand",
        englishalt: "realize",
        russian: "понимать",
        spanish: "comprender",
        spanishalt: "entender",
        spanishalt2: "darse cuenta",
        russianlatin: "ponimat",
        level: 1,
      };
      break;
    case 33:
      verb = {
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
      verb = {
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
      verb = {
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
      verb = {
        english: "learn",
        russian: "узнать / учить",
        spanish: "aprender",
        russianlatin: "uznat",
        russianlatinalt: "uchit",
        level: 1,
      };
      break;
    case 37:
      verb = {
        english: "solve",
        englishalt: "decide",
        russian: "решить",
        spanish: "resolver",
        russianlatin: "reshit",
        level: 1,
      };
      break;
    case 38:
      verb = {
        english: "start",
        russian: "начать",
        spanish: "empezar",
        russianlatin: "nachat",
        level: 1,
      };
      break;
    case 39:
      verb = {
        english: "watch",
        russian: "смотреть / глядеть",
        spanish: "mirar",
        russianlatin: "smotret",
        level: 1,
      };
      break;
    case 40:
      verb = {
        english: "leave",
        russian: "уйти / бросить",
        spanish: "dejar",
        russianlatin: "uyti",
        russianlatinalt: "brosit",
        level: 1,
      };
      break;
    case 41:
      verb = {
        english: "let",
        englishalt: "allow",
        russian: "позволять",
        spanish: "permitir",
        russianlatin: "pozvolyat",
        level: 1,
      };
      break;
    case 42:
      verb = {
        english: "find",
        englishalt: "discover",
        russian: "искать / найти",
        spanish: "encontrar",
        spanishalt: "hallar",
        spanishalt2: "descubrir",
        russianlatin: "nayti",
        level: 1,
      };
      break;
    case 43:
      verb = {
        english: "hear",
        russian: "слышать",
        spanish: "oir",
        russianlatin: "slyshat",
        level: 1,
      };
      break;
    case 44:
      verb = {
        english: "feel",
        russian: "чувствовать",
        spanish: "sentir",
        russianlatin: "chuvstvovat",
        level: 1,
      };
      break;
    case 45:
      verb = {
        english: "read",
        russian: "читать",
        spanish: "leer",
        russianlatin: "chitat",
        level: 1,
      };
      break;
    case 46:
      verb = {
        english: "sit",
        russian: "сесть",
        spanish: "sentarse",
        russianlatin: "sest",
        level: 1,
      };
      break;
    case 47:
      verb = {
        english: "sleep",
        russian: "спать",
        spanish: "dormir",
        russianlatin: "spat",
        level: 1,
      };
      break;
    case 48:
      verb = {
        english: "die",
        russian: "умереть",
        spanish: "morir",
        russianlatin: "umeret",
        level: 1,
      };
      break;
    case 49:
      verb = {
        english: "kill",
        russian: "убить",
        spanish: "matar",
        russianlatin: "ubit",
        level: 1,
      };
      break;
    case 50:
      verb = {
        english: "call",
        russian: "называть",
        spanish: "llamar",
        russianlatin: "nazivat",
        level: 1,
      };
      break;

    case 51:
      verb = {
        english: "go out",
        spanish: "salir",
        russian: "выходить",
        russianlatin: "vykhodit",
        level: 2,
      };
      break;
    case 52:
      verb = {
        english: "notice",
        spanish: "noticiar",
        russian: "замечать",
        russianlatin: "zamechat",
        level: 2,
      };
      break;
    case 53:
      verb = {
        english: "fear",
        spanish: "temer",
        russian: "бояться",
        russianlatin: "boyatsya",
        level: 2,
      };
      break;
    case 54:
      verb = {
        english: "run",
        spanish: "correr",
        russian: "бежать",
        russianlatin: "bezhat",
        level: 2,
      };
      break;
    case 55:
      verb = {
        english: "lead",
        spanish: "liderar",
        russian: "вести",
        russianlatin: "vesti",
        level: 2,
      };
      break;
    case 56:
      verb = {
        english: "cook",
        spanish: "cocinar",
        russian: "готовить",
        russianlatin: "gotovit",
        level: 2,
      };
      break;
    case 57:
      verb = {
        english: "ruin",
        spanish: "arruinar",
        russian: "погубить",
        russianlatin: "pogubit",
        level: 2,
      };
      break;
    case 58:
      verb = {
        english: "break",
        spanish: "romper",
        russian: "сломать",
        russianlatin: "slomat",
        level: 2,
      };
      break;
    case 59:
      verb = {
        english: "damage",
        spanish: "dañar",
        russian: "повреждать",
        russianlatin: "povrezhdat",
        level: 2,
      };
      break;
    case 60:
      verb = {
        english: "hold",
        spanish: "sostener",
        russian: "держать",
        russianlatin: "derzhat",
        level: 2,
      };
      break;
    case 61:
      verb = {
        english: "leave",
        spanish: "abandonar",
        russian: "покидать",
        russianlatin: "pokidat",
        level: 2,
      };
      break;
    case 62:
      verb = {
        english: "imagine",
        spanish: "imaginar",
        russian: "представить",
        russianlatin: "predstavit",
        level: 2,
      };
      break;
    case 63:
      verb = {
        english: "dream",
        spanish: "soñar",
        russian: "мечтать",
        russianlatin: "mechtat",
        level: 2,
      };
      break;
    case 64:
      verb = {
        english: "carry out",
        spanish: "realizar",
        russian: "выполнять",
        russianlatin: "vypolnyat",
        level: 2,
      };
      break;
    case 65:
      verb = {
        english: "fill",
        spanish: "llenar",
        russian: "заполнить",
        russianlatin: "zapolnit",
        level: 2,
      };
      break;
    case 66:
      verb = {
        english: "design",
        spanish: "diseñar",
        russian: "разрабатывать",
        russianlatin: "razrabatyvat",
        level: 2,
      };
      break;
    case 67:
      verb = {
        english: "please",
        englishalt: "like",
        spanish: "gustar",
        russian: "нравится",
        russianlatin: "nravitsya",
        level: 2,
      };
      break;
    case 68:
      verb = {
        english: "care",
        spanish: "cuidar",
        russian: "позаботиться",
        russianlatin: "pozabotitsya",
        level: 2,
      };
      break;
    case 69:
      verb = {
        english: "worry",
        spanish: "preocupar",
        russian: "беспокоиться",
        russianlatin: "bespokoitsya",
        level: 2,
      };
      break;
    case 70:
      verb = {
        english: "hit",
        spanish: "pegar",
        russian: "ударить",
        russianlatin: "udarit",
        level: 2,
      };
      break;
    case 71:
      verb = {
        english: "desire",
        spanish: "desear",
        russian: "желать",
        russianlatin: "zhelat",
        level: 2,
      };
      break;
    case 72:
      verb = {
        english: "liberate",
        spanish: "liberar",
        russian: "освободить",
        russianlatin: "osvobodit",
        level: 2,
      };
      break;
    case 73:
      verb = {
        english: "draw",
        spanish: "dibujar",
        russian: "рисовать",
        russianlatin: "risovat",
        level: 2,
      };
      break;
    case 74:
      verb = {
        english: "swallow",
        spanish: "tragar",
        russian: "глотать",
        russianlatin: "glotat",
        level: 2,
      };
      break;
    case 75:
      verb = {
        english: "play",
        spanish: "jugar",
        russian: "играть",
        russianlatin: "igrat",
        level: 2,
      };
      break;
    case 76:
      verb = {
        english: "hug",
        spanish: "abrazar",
        russian: "обнимать",
        russianlatin: "obnimat",
        level: 2,
      };
      break;
    case 77:
      verb = {
        english: "use",
        spanish: "usar",
        russian: "утилизировать",
        russianlatin: "utilizirovat",
        level: 2,
      };
      break;
    case 78:
      verb = {
        english: "ride",
        spanish: "montar",
        russian: "ездить",
        russianlatin: "ezdit",
        level: 2,
      };
      break;
    case 79:
      verb = {
        english: "climb",
        spanish: "escalar",
        russian: "карабкаться",
        russianlatin: "karabkatsya",
        level: 2,
      };
      break;
    case 80:
      verb = {
        english: "jump",
        spanish: "saltar",
        russian: "прыгать",
        russianlatin: "prygat",
        level: 2,
      };
      break;
    case 81:
      verb = {
        english: "swim",
        spanish: "nadar",
        russian: "плавать",
        russianlatin: "plavat",
        level: 2,
      };
      break;
    case 82:
      verb = {
        english: "lose",
        spanish: "perder",
        russian: "терять",
        russianlatin: "teryat",
        level: 2,
      };
      break;
    case 83:
      verb = {
        english: "win",
        spanish: "ganar",
        russian: "побеждать",
        russianlatin: "pobezhdat",
        level: 2,
      };
      break;
    case 84:
      verb = {
        english: "forget",
        spanish: "olvidar",
        russian: "забывать",
        russianlatin: "zabivat",
        level: 2,
      };
      break;
    case 85:
      verb = {
        english: "fly",
        spanish: "volar",
        russian: "летать",
        russianlatin: "letat",
        level: 2,
      };
      break;
    case 86:
      verb = {
        english: "create",
        spanish: "crear",
        russian: "создать",
        russianlatin: "sozdat",
        level: 2,
      };
      break;
    case 87:
      verb = {
        english: "smell",
        spanish: "oler",
        russian: "нюхать",
        russianlatin: "nyukhat",
        level: 2,
      };
      break;
    case 88:
      verb = {
        english: "pack",
        spanish: "empacar",
        russian: "упаковать",
        russianlatin: "upakovat",
        level: 2,
      };
      break;
    case 89:
      verb = {
        english: "sing",
        spanish: "cantar",
        russian: "петь",
        russianlatin: "pet",
        level: 2,
      };
      break;
    case 90:
      verb = {
        english: "ignore",
        spanish: "ignorar",
        russian: "игнорировать",
        russianlatin: "ignorirovat",
        level: 2,
      };
      break;
    case 91:
      verb = {
        english: "neglect",
        spanish: "descuidar",
        russian: "пренебрегать",
        russianlatin: "prenebregat",
        level: 2,
      };
      break;
    case 92:
      verb = {
        english: "reward",
        spanish: "recompensar",
        russian: "наградить",
        russianlatin: "nagradit",
        level: 2,
      };
      break;
    case 93:
      verb = {
        english: "listen",
        spanish: "escuchar",
        russian: "слушать",
        russianlatin: "slushat",
        level: 2,
      };
      break;
    case 94:
      verb = {
        english: "quit",
        spanish: "liderar",
        russian: "бросить",
        russianlatin: "brosit",
        level: 2,
      };
      break;
    case 95:
      verb = {
        english: "pay",
        spanish: "pagar",
        russian: "платить",
        russianlatin: "platit",
        level: 2,
      };
      break;
    case 96:
      verb = {
        english: "grab",
        spanish: "agarrar",
        russian: "хватать",
        russianlatin: "khvatat",
        level: 2,
      };
      break;
    case 97:
      verb = {
        english: "guard",
        spanish: "guardar",
        russian: "охранять",
        russianlatin: "okhranyat",
        level: 2,
      };
      break;
    case 98:
      verb = {
        english: "protect",
        spanish: "proteger",
        russian: "защищать",
        russianlatin: "zashchischchat",
        level: 2,
      };
      break;
    case 99:
      verb = {
        english: "enjoy",
        spanish: "disfrutar",
        russian: "наслаждаться",
        russianlatin: "naslazhdatsya",
        level: 2,
      };
      break;
    case 100:
      verb = {
        english: "surround",
        spanish: "rodear",
        russian: "окружить",
        russianlatin: "okruzhit",
        level: 2,
      };
      break;
    case 101:
      verb = {
        english: "yell",
        spanish: "gritar",
        russian: "кричать",
        russianlatin: "krichat",
        level: 3,
      };
      break;
    case 102:
      verb = {
        english: "dress",
        spanish: "vestir",
        russian: "одеваться",
        russianlatin: "odevatsya",
        level: 3,
      };
      break;
    case 103:
      verb = {
        english: "connect",
        spanish: "conectar",
        russian: "соединить",
        russianlatin: "soyedinit",
        level: 3,
      };
      break;
    case 104:
      verb = {
        english: "fix",
        spanish: "arreglar",
        russian: "чинить",
        russianlatin: "chinit",
        level: 3,
      };
      break;
    case 105:
      verb = {
        english: "regret",
        spanish: "lamentar",
        russian: "сожалеть",
        russianlatin: "sozhalet",
        level: 3,
      };
      break;
    case 106:
      verb = {
        english: "crawl",
        spanish: "gatear",
        russian: "ползти",
        russianlatin: "polzti",
        level: 3,
      };
      break;
    case 107:
      verb = {
        english: "sneak",
        spanish: "escabullirse",
        russian: "красться",
        russianlatin: "krastsya",
        level: 3,
      };
      break;
    case 108:
      verb = {
        english: "smoke",
        spanish: "fumar",
        russian: "курить",
        russianlatin: "kurit",
        level: 3,
      };
      break;
    case 109:
      verb = {
        english: "drink",
        spanish: "beber",
        russian: "пить",
        russianlatin: "pit",
        level: 3,
      };
      break;
    case 110:
      verb = {
        english: "wander",
        englishalt: "roam",
        spanish: "andar",
        russian: "бродить",
        russianlatin: "brodit",
        level: 3,
      };
      break;
    case 111:
      verb = {
        english: "punch",
        spanish: "golpear",
        russian: "бить",
        russianlatin: "bit",
        level: 3,
      };
      break;
    case 112:
      verb = {
        english: "disappear",
        spanish: "desaparecer",
        russian: "исчезнуть",
        russianlatin: "izchesnut",
        level: 3,
      };
      break;
    case 113:
      verb = {
        english: "suppose",
        spanish: "suponer",
        russian: "предполагать",
        russianlatin: "predpolagat",
        level: 3,
      };
      break;
    case 114:
      verb = {
        english: "employ",
        spanish: "emplear",
        russian: "использовать",
        russianlatin: "ispolzovat",
        level: 3,
      };
      break;
    case 115:
      verb = {
        english: "explain",
        spanish: "explicar",
        russian: "объяснять",
        russianlatin: "obyasnyat",
        level: 3,
      };
      break;
    case 116:
      verb = {
        english: "power",
        spanish: "prender",
        russian: "властвовать",
        russianlatin: "vlastvovat",
        level: 3,
      };
      break;
    case 117:
      verb = {
        english: "cure",
        spanish: "curar",
        russian: "исцелить",
        russianlatin: "islechit",
        level: 3,
      };
      break;
    case 118:
      verb = {
        english: "heal",
        spanish: "sanar",
        russian: "лечить",
        russianlatin: "lechit",
        level: 3,
      };
      break;
    case 119:
      verb = {
        english: "hurt",
        spanish: "herir",
        russian: "ранить",
        russianlatin: "ranit",
        level: 3,
      };
      break;
    case 120:
      verb = {
        english: "tie",
        spanish: "atar",
        russian: "связать",
        russianlatin: "svyazat",
        level: 3,
      };
      break;
    case 121:
      verb = {
        english: "separate",
        spanish: "separar",
        russian: "разделять",
        russianlatin: "pazdelyat",
        level: 3,
      };
      break;
    case 122:
      verb = {
        english: "cause",
        spanish: "causar",
        russian: "вызывать",
        russianlatin: "vyzyvat",
        level: 3,
      };
      break;
    case 123:
      verb = {
        english: "owe",
        spanish: "deber",
        russian: "должен",
        russianlatin: "dolzhen",
        level: 3,
      };
      break;
    case 124:
      verb = {
        english: "perform",
        spanish: "ejecutar",
        russian: "выполнять",
        russianlatin: "vypolnyat",
        level: 3,
      };
      break;
    case 125:
      verb = {
        english: "impair",
        spanish: "perjudicar",
        russian: "ухудшать",
        russianlatin: "ukhudshat",
        level: 3,
      };
      break;
    case 126:
      verb = {
        english: "war",
        spanish: "guerrear",
        russian: "воевать",
        russianlatin: "voyevat",
        level: 3,
      };
      break;
    case 127:
      verb = {
        english: "compete",
        spanish: "competir",
        russian: "завершить",
        russianlatin: "zavershit",
        level: 3,
      };
      break;
    case 128:
      verb = {
        english: "laugh",
        spanish: "reir",
        russian: "смеяться",
        russianlatin: "smeyatsya",
        level: 3,
      };
      break;
    case 129:
      verb = {
        english: "smile",
        spanish: "sonreir",
        russian: "улыбаться",
        russianlatin: "ulybatsya",
        level: 3,
      };
      break;
    case 130:
      verb = {
        english: "whisper",
        spanish: "susrrar",
        russian: "шептать",
        russianlatin: "sheptat",
        level: 3,
      };
      break;
    case 131:
      verb = {
        english: "add",
        spanish: "agregar",
        russian: "добавить",
        russianlatin: "dobavit",
        level: 3,
      };
      break;
    case 132:
      verb = {
        english: "subtract",
        spanish: "restar",
        russian: "вычесть",
        russianlatin: "vychest",
        level: 3,
      };
      break;
    case 133:
      verb = {
        english: "multiply",
        spanish: "multiplicar",
        russian: "умножить",
        russianlatin: "umnozhit",
        level: 3,
      };
      break;
    case 134:
      verb = {
        english: "divide",
        spanish: "dividir",
        russian: "делить",
        russianlatin: "delit",
        level: 3,
      };
      break;
    case 135:
      verb = {
        english: "join",
        spanish: "unir",
        russian: "присоединиться",
        russianlatin: "prisoyedinitsya",
        level: 3,
      };
      break;
    case 136:
      verb = {
        english: "wash",
        spanish: "lavar",
        russian: "мыть",
        russianlatin: "myt",
        level: 3,
      };
      break;
    case 137:
      verb = {
        english: "search",
        spanish: "buscar",
        russian: "искать",
        russianlatin: "iskat",
        level: 3,
      };
      break;
    case 138:
      verb = {
        english: "translate",
        spanish: "traducir",
        russian: "переводить",
        russianlatin: "perevodit",
        level: 3,
      };
      break;
    case 139:
      verb = {
        english: "hum",
        spanish: "tararear",
        russian: "напевать",
        russianlatin: "napevat",
        level: 3,
      };
      break;
    case 140:
      verb = {
        english: "present",
        spanish: "presentar",
        russian: "представлять",
        russianlatin: "predstavlyat",
        level: 3,
      };
      break;
    case 141:
      verb = {
        english: "offer",
        spanish: "ofrecer",
        russian: "предлагать",
        russianlatin: "predlagat",
        level: 3,
      };
      break;
    case 142:
      verb = {
        english: "buy",
        spanish: "comprar",
        russian: "покупать",
        russianlatin: "pokupat",
        level: 3,
      };
      break;
    case 143:
      verb = {
        english: "travel",
        spanish: "viajar",
        russian: "путешествовать",
        russianlatin: "puteshestvovat",
        level: 3,
      };
      break;
    case 144:
      verb = {
        english: "hunt",
        spanish: "cazar",
        russian: "охотиться",
        russianlatin: "okhotitsya",
        level: 3,
      };
      break;
    case 145:
      verb = {
        english: "record",
        spanish: "grabar",
        russian: "записать",
        russianlatin: "zapisat",
        level: 3,
      };
      break;
    case 146:
      verb = {
        english: "entertain",
        spanish: "entrentener",
        russian: "развлекать",
        russianlatin: "razvlekat",
        level: 3,
      };
      break;
    case 147:
      verb = {
        english: "cover",
        spanish: "cubrir",
        russian: "покрывать",
        russianlatin: "pokryvat",
        level: 3,
      };
      break;
    case 148:
      verb = {
        english: "finish",
        spanish: "terminar",
        russian: "заканчивать",
        russianlatin: "zakanchivat",
        level: 3,
      };
      break;
    case 149:
      verb = {
        english: "overcome",
        spanish: "superar",
        russian: "преодолеть",
        russianlatin: "preodolet",
        level: 3,
      };
      break;
    case 150:
      verb = {
        english: "gather",
        spanish: "recoger",
        spanishalt: "reunir",
        russian: "собирать",
        russianlatin: "sobirat",
        level: 3,
      };
      break;

    default:
      verb = {
        english: " ",
        russian: " ",
        spanish: " ",
        russianlatin: " ",
        level: 3,
      };
      break;
  }

  return (
    <div>
      <div>
        <Question
          english={verb.english}
          russian={verb.russian}
          russianlatin={verb.russianlatin}
          spanish={verb.spanish}
          spanishalt={verb.spanishalt}
          spanishalt2={verb.spanishalt2}
          englishalt={verb.englishalt}
          englishalt2={verb.englishalt2}
          russianlatinalt={verb.russianlatinalt}
          qword={qverb}
          aword={averb}
          onChange={(number) => setNewVerb(number)}
          level={props.difficulty !== "all" ? verb.level : 4}
          type="Verbs"
        />
      </div>
      {qverb === 4 ? (
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
              <label htmlFor="all">Ask in any language </label>
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

export default VerbPage;
