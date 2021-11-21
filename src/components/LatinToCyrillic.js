import { useState } from "react";

const LatinToCyrillic = () => {
  const [text, setText] = useState("");
  const latinArray = text.split("");
  let cyrillicArray = [""];

  for (let i = 0; i < latinArray.length; i++) {
    let letter = latinArray[i].toLowerCase();
    let next = latinArray[i + 1];
    let previous = latinArray[i - 1];
    if (next) {
      next = next.toLowerCase();
    }
    if (previous) {
      previous = previous.toLowerCase();
    }
    let soundArray = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    let vowelArray = ["a", "e", "i", "o", "u", "y"];
    let prevIsSound = soundArray.includes(previous);
    let nextIsSound = soundArray.includes(next);
    let prevIsVowel = vowelArray.includes(previous);
    console.log(prevIsSound + "prevIsSound value");
    cyrillicArray[i] = "";
    switch (letter) {
      case "a":
        if (previous === "y" || previous === "i") {
          cyrillicArray[i - 1] = "я";
          cyrillicArray[i] = "";
        } else if (previous === "e" && next !== "h") {
          cyrillicArray[i] = "";
        } else {
          cyrillicArray[i] = "а";
        }
        break;
      case "b":
        cyrillicArray[i] = "б";
        break;
      case "c":
        if (previous === "n" && next === "i") {
          cyrillicArray[i] = "ч";
          break;
        }
        if (next === "h") {
          cyrillicArray[i] = "ч";
          cyrillicArray[i + 1] = "";
        } else if (next === "y" || next === "e" || next === "i") {
          cyrillicArray[i] = "с";
        } else {
          cyrillicArray[i] = "к";
        }
        break;
      case "d":
        cyrillicArray[i] = "д";
        break;
      case "e":
        if ((next === "e" || next === "a") && latinArray[i + 2] !== "h") {
          cyrillicArray[i] = "и";
        } else if (
          prevIsVowel ||
          (next === "r" && !latinArray[i + 2]) ||
          (!nextIsSound && previous !== "y")
        ) {
          cyrillicArray[i] = "";
        } else if ((!nextIsSound && previous !== "y") || previous === "i") {
          cyrillicArray[i] = "";
        } else {
          cyrillicArray[i] = "е";
        }
        break;
      case "f":
        cyrillicArray[i] = "ф";
        break;
      case "g":
        if (next === "e" && !soundArray.includes(latinArray[i + 2])) {
          cyrillicArray[i] = "ж";
          break;
        }
        if (
          (next === "e" || next === "i") &&
          !prevIsSound &&
          latinArray[i + 2] !== "t"
        ) {
          cyrillicArray[i] = "ж";
        } else {
          cyrillicArray[i] = "г";
        }
        break;
      case "h":
        if (!nextIsSound) {
          cyrillicArray[i] = "";
          break;
        }
        if (
          previous === "c" ||
          previous === "s" ||
          previous === "w" ||
          previous === "z"
        ) {
          if (
            latinArray[i - 3] === "s" &&
            latinArray[i - 2] === "h" &&
            latinArray[i - 1] === "c"
          ) {
            cyrillicArray[i - 3] = "щ";
            cyrillicArray[i - 2] = "";
            cyrillicArray[i - 1] = "";
          }
          cyrillicArray[i] = "";
        } else if (previous === "p" || previous === "t") {
          cyrillicArray[i] = "";
        } else {
          cyrillicArray[i] = "х";
        }
        break;
      case "i":
        if (next === "a" || next === "A") {
          cyrillicArray[i] = "ия";
        } else {
          cyrillicArray[i] = "и";
        }
        break;
      case "j":
        if (!prevIsSound) {
          cyrillicArray[i] = "дж";
        } else {
          cyrillicArray[i] = "ж";
        }
        break;
      case "k":
        if (next === "n") {
          cyrillicArray[i] = "";
        } else {
          cyrillicArray[i] = "к";
        }
        break;
      case "l":
        if (
          next === "e" &&
          (latinArray[i + 2] === " " ||
            latinArray[i + 2] === "" ||
            latinArray[i + 2] === "." ||
            !latinArray[i + 2])
        ) {
          cyrillicArray[i] = "ель";
        } else {
          cyrillicArray[i] = "л";
        }
        break;
      case "m":
        cyrillicArray[i] = "м";
        break;
      case "n":
        if (previous === "m") {
          cyrillicArray[i] = "";
        } else {
          cyrillicArray[i] = "н";
        }
        break;
      case "o":
        if (next === "o") {
          cyrillicArray[i] = "у";
          break;
        }
        if (previous === "o" || previous === "y") {
          cyrillicArray[i] = "";
        } else if (!nextIsSound) {
          cyrillicArray[i] = "у";
        } else {
          cyrillicArray[i] = "о";
        }
        break;
      case "p":
        if (next === "h") {
          cyrillicArray[i] = "ф";
        } else {
          cyrillicArray[i] = "п";
        }
        break;
      case "q":
        if (next) {
          cyrillicArray[i] = "кв";
        } else {
          cyrillicArray[i] = "к";
        }
        break;
      case "r":
        cyrillicArray[i] = "р";
        break;
      case "s":
        if (next === "h") {
          cyrillicArray[i] = "ш";
        } else if (previous === "t" || (previous === "p" && !next)) {
          cyrillicArray[i] = "";
        } else {
          cyrillicArray[i] = "с";
        }
        break;
      case "t":
        if (next === "s") {
          cyrillicArray[i] = "ц";
        } else if (!next && previous === "a") {
          cyrillicArray[i] = "т";
          cyrillicArray[i + 1] = "ь";
        } else if (
          next === "i" &&
          latinArray[i + 2] === "o" &&
          latinArray[i + 3] === "n"
        ) {
          cyrillicArray[i] = "шо";
          latinArray[i + 1] = "";
          latinArray[i + 2] = "";
        } else {
          cyrillicArray[i] = "т";
        }
        break;
      case "u":
        if (previous === "y") {
          cyrillicArray[i] = "";
        } else if (
          !prevIsSound &&
          (latinArray[i + 2] === "a" ||
            latinArray[i + 2] === "e" ||
            latinArray[i + 2] === "i" ||
            latinArray[i + 2] === "o" ||
            latinArray[i + 2] === "u")
        ) {
          cyrillicArray[i] = "ю";
        } else if (next === "e") {
          cyrillicArray[i] = "ю";
        } else {
          cyrillicArray[i] = "у";
        }
        break;
      case "v":
        cyrillicArray[i] = "в";
        break;
      case "w":
        if (!nextIsSound && previous === "o") {
          cyrillicArray[i - 1] = "у";
        } else if (next === "h") {
          cyrillicArray[i] = "х";
        } else {
          cyrillicArray[i] = "в";
        }
        break;
      case "x":
        if (!prevIsSound) {
          if (next === "y") {
            cyrillicArray[i] = "зи";
          } else {
            cyrillicArray[i] = "з";
          }
        } else {
          cyrillicArray[i] = "ск";
        }
        break;
      case "y":
        if (
          next === "o" &&
          latinArray[i + 2] !== "o" &&
          latinArray[i + 2] !== "u"
        ) {
          cyrillicArray[i] = "ё";
        } else if (next === "a") {
          cyrillicArray[i] = "я";
        } else if (next === "e") {
          cyrillicArray[i] = "е";
        } else {
          cyrillicArray[i] = "й";
        }
        break;
      case "z":
        if (next === "z") {
          cyrillicArray[i] = "ц";
          break;
        }
        if (previous === "z") {
          cyrillicArray[i] = "";
          break;
        }
        cyrillicArray[i] = "з";
        break;
      case "!":
        cyrillicArray[i] = "!";
        break;
      case "@":
        cyrillicArray[i] = "@";
        break;
      case "#":
        cyrillicArray[i] = "#";
        break;
      case "%":
        cyrillicArray[i] = "%";
        break;
      case "^":
        cyrillicArray[i] = "^";
        break;
      case "&":
        cyrillicArray[i] = "&";
        break;
      case "(":
        cyrillicArray[i] = "(";
        break;
      case ")":
        cyrillicArray[i] = ")";
        break;
      case "-":
        cyrillicArray[i] = "-";
        break;
      case "_":
        cyrillicArray[i] = "_";
        break;
      case "+":
        cyrillicArray[i] = "+";
        break;
      case "=":
        cyrillicArray[i] = "=";
        break;
      case '"':
        cyrillicArray[i] = '"';
        break;
      case "'":
        cyrillicArray[i] = "'";
        break;
      case ";":
        cyrillicArray[i] = ";";
        break;
      case ":":
        cyrillicArray[i] = ":";
        break;
      case ",":
        cyrillicArray[i] = ",";
        break;
      case ".":
        cyrillicArray[i] = ".";
        break;
      case "?":
        cyrillicArray[i] = "?";
        break;
      case "/":
        cyrillicArray[i] = "/";
        break;
      case "<":
        cyrillicArray[i] = "<";
        break;
      case ">":
        cyrillicArray[i] = ">";
        break;
      case "{":
        cyrillicArray[i] = "{";
        break;
      case "}":
        cyrillicArray[i] = "}";
        break;
      case "[":
        cyrillicArray[i] = "[";
        break;
      case "]":
        cyrillicArray[i] = "]";
        break;
      case "|":
        cyrillicArray[i] = "|";
        break;
      case " ":
        cyrillicArray[i] = " ";
        break;
      case "1":
        cyrillicArray[i] = "1";
        break;
      case "2":
        cyrillicArray[i] = "2";
        break;
      case "3":
        cyrillicArray[i] = "3";
        break;
      case "4":
        cyrillicArray[i] = "4";
        break;
      case "5":
        cyrillicArray[i] = "5";
        break;
      case "6":
        cyrillicArray[i] = "6";
        break;
      case "7":
        cyrillicArray[i] = "7";
        break;
      case "8":
        cyrillicArray[i] = "8";
        break;
      case "9":
        cyrillicArray[i] = "9";
        break;
      case "0":
        cyrillicArray[i] = "0";
        break;
      default:
        cyrillicArray[i] = "*";
    }
  }
  let cyrillic = cyrillicArray.join("");
  return (
    <div className="tlmaindiv">
      <section className="input">
        <h4 className="tlhead">Latin to Cyrillic</h4>
        <textarea
          className="tltextinput"
          onChange={(e) => setText(e.target.value)}
        />
      </section>
      <section>
        <p className="tlspelling">Cyrillic: {cyrillic}</p>
      </section>
    </div>
  );
};

export default LatinToCyrillic;
