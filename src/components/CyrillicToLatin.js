import { useState } from "react";

const CyrillicToLatin = () => {
  const [text, setText] = useState("");
  const cyrillicArray = text.split("");
  let latinArray = [""];

  for (let i = 0; i < cyrillicArray.length; i++) {
    let letter = cyrillicArray[i].toLowerCase();
    let next = cyrillicArray[i + 1];
    let previous = cyrillicArray[i - 1];
    if (next) {
      next = next.toLowerCase();
    }
    if (previous) {
      previous = previous.toLowerCase();
    }
    let soundArray = [
      "а",
      "б",
      "в",
      "г",
      "д",
      "е",
      "ё",
      "ж",
      "з",
      "и",
      "й",
      "к",
      "л",
      "м",
      "н",
      "о",
      "п",
      "р",
      "с",
      "т",
      "у",
      "ф",
      "х",
      "ц",
      "ч",
      "ш",
      "щ",
      "ъ",
      "ы",
      "ь",
      "э",
      "ю",
      "я",
    ];
    let vowelArray = ["a", "е", "ё", "и", "й", "о", "у", "ы", "э", "ю", "я"];
    let prevIsSound = soundArray.includes(previous);
    let prevIsVowel = vowelArray.includes(previous);
    let nextIsSound = soundArray.includes(next);

    latinArray[i] = "";
    switch (letter) {
      case "б":
        latinArray[i] = "b";
        break;
      case "в":
        if (previous === "к") {
          latinArray[i] = "";
        } else {
          latinArray[i] = "v";
        }
        break;
      case "г":
        latinArray[i] = "g";
        break;
      case "д":
        latinArray[i] = "d";
        break;
      case "ж":
        if (prevIsVowel && !nextIsSound) {
          latinArray[i] = "ge";
        } else {
          latinArray[i] = "zh";
        }
        break;
      case "з":
        latinArray[i] = "z";
        break;
      case "к":
        if ((previous === "и" || previous === "а") && (!next || next === "т")) {
          latinArray[i] = "c";
        } else if (
          (!previous || previous === "с" || prevIsVowel) &&
          next === "в"
        ) {
          latinArray[i] = "qu";
        } else if (prevIsVowel) {
          latinArray[i] = "ck";
        } else {
          latinArray[i] = "k";
        }
        break;
      case "л":
        latinArray[i] = "l";
        break;
      case "м":
        latinArray[i] = "m";
        break;
      case "н":
        latinArray[i] = "n";
        break;
      case "п":
        latinArray[i] = "p";
        break;
      case "р":
        if (!nextIsSound && prevIsVowel) {
          latinArray[i] = "re";
        } else {
          latinArray[i] = "r";
        }
        break;
      case "с":
        latinArray[i] = "s";
        break;
      case "т":
        if (next === "и" && cyrillicArray[i + 2] === "с") {
          latinArray[i] = "th";
        } else if (!prevIsSound && !nextIsSound) {
          latinArray[i] = "the";
        } else {
          latinArray[i] = "t";
        }
        break;
      case "ф":
        latinArray[i] = "f";
        break;
      case "х":
        latinArray[i] = "kh";
        break;
      case "ц":
        latinArray[i] = "ts";
        break;
      case "ч":
        if (
          previous === "и" ||
          previous === "а" ||
          previous === "e" ||
          previous === "y"
        ) {
          latinArray[i] = "tch";
        } else {
          latinArray[i] = "ch";
        }
        break;
      case "ш":
        if (
          (next === "о" || next === "и") &&
          cyrillicArray[i + 2] === "н" &&
          cyrillicArray[i + 3]
        ) {
          latinArray[i] = "tion";
          cyrillicArray[i + 1] = "";
          cyrillicArray[i + 2] = "";
        } else {
          latinArray[i] = "sh";
        }
        break;
      case "щ":
        latinArray[i] = "shch";
        break;
      case "а":
        latinArray[i] = "a";
        break;
      case "е":
        if (!prevIsSound || prevIsVowel) {
          latinArray[i] = "ye";
        } else if (
          previous === "y" &&
          (!next || next === " " || next === ".")
        ) {
          latinArray[i] = "";
        } else {
          latinArray[i] = "e";
        }
        break;
      case "ё":
        latinArray[i] = "yo";
        break;
      case "и":
        if (previous !== "и") {
          latinArray[i] = "i";
        } else {
          latinArray[i] = "y";
        }
        break;
      case "о":
        latinArray[i] = "o";
        break;
      case "у":
        latinArray[i] = "u";
        break;
      case "ы":
        latinArray[i] = "y";
        break;
      case "э":
        latinArray[i] = "e";
        break;
      case "ю":
        latinArray[i] = "u";
        break;
      case "я":
        latinArray[i] = "ya";
        break;
      case "й":
        latinArray[i] = "y";
        break;
      case "ь":
        latinArray[i] = "'";
        break;
      case "ъ":
        latinArray[i] = "y";
        break;
      case " ":
        latinArray[i] = " ";
        break;
      case "-":
        latinArray[i] = "-";
        break;
      case "/":
        latinArray[i] = "/";
        break;
      case ",":
        latinArray[i] = ",";
        break;
      default:
        latinArray[i] = "";
    }
  }
  let latin = latinArray.join("");
  return (
    <div className="tlitem">
      <section className="input">
        <h4 className="tlhead">Cyrillic to Latin</h4>
        <textarea
          className="tlinput"
          rows="3"
          onChange={(e) => setText(e.target.value)}
        />
      </section>
      <section>
        <p className="tlspelling">Latin: {latin}</p>
      </section>
    </div>
  );
};

export default CyrillicToLatin;
