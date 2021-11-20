import { useState } from "react";

const LatinToCyrillic = () => {
  const [latin, setLatin] = useState("latin transliteration");
  const latinArray = latin.split("");
  let cyrillicArray = [""];
  for (let i = 0; i < latinArray.length; i++) {
    let letter = latinArray[i];
    let previous = "";
    let next = latinArray[i + 1];
    if (i > 0) {
      previous = latinArray[i - 1];
    }
    cyrillicArray[i] = "";
    if (letter === "a") {
      if (
        previous === "y" ||
        previous === "Y" ||
        previous === "i" ||
        previous === "I"
      ) {
        cyrillicArray[i - 1] = "я";
        cyrillicArray[i] = "";
      } else if (previous === "e") {
        cyrillicArray[i] = "";
      } else {
        cyrillicArray[i] = "а";
      }
    }
    if (letter === "b") {
      cyrillicArray[i] = "б";
    }
    if (letter === "c") {
      if (next === "h") {
        cyrillicArray[i] = "ч";
        cyrillicArray[i + 1] = "";
      } else if (next === "y" || next === "e" || next === "i") {
        cyrillicArray[i] = "с";
      } else {
        cyrillicArray[i] = "к";
      }
    }
    if (letter === "d") {
      cyrillicArray[i] = "д";
    }
    if (letter === "e") {
      if (next === "e" || next === "E") {
        cyrillicArray[i] = "и";
      } else if (
        previous === "e" ||
        previous === "E" ||
        previous === "Y" ||
        previous === "y"
      ) {
        cyrillicArray[i] = "";
      } else if (next === "a") {
        cyrillicArray[i] = "и";
      } else if (!next || previous === "i") {
        cyrillicArray[i] = "";
      } else {
        cyrillicArray[i] = "е";
      }
    }
    if (letter === "f") {
      cyrillicArray[i] = "ф";
    }
    if (letter === "g") {
      if (next === "e" || next === "a" || next === "E" || next === "A") {
        cyrillicArray[i] = "ж";
      } else {
        cyrillicArray[i] = "г";
      }
    }
    if (letter === "h") {
      if (
        previous === "c" ||
        previous === "s" ||
        previous === "w" ||
        previous === "z" ||
        previous === "C" ||
        previous === "S" ||
        previous === "W" ||
        previous === "Z"
      ) {
        if (
          latinArray[i - 3] === "s" &&
          latinArray[i - 2] === "h" &&
          latinArray[i - 1] === "c"
        ) {
          cyrillicArray[i - 3] = "щ";
          cyrillicArray[i - 2] = "";
          cyrillicArray[i - 1] = "";
          cyrillicArray[i] = "";
        }
        cyrillicArray[i] = "";
      } else if (previous === "p") {
        cyrillicArray[i] = "";
      } else {
        cyrillicArray[i] = "х";
      }
    }
    if (letter === "i") {
      if (next === "a" || next === "A") {
        cyrillicArray[i] = "ия";
      } else {
        cyrillicArray[i] = "и";
      }
    }
    if (letter === "j") {
      cyrillicArray[i] = "ж";
    }
    if (letter === "k") {
      if (next !== "n") {
        cyrillicArray[i] = "к";
      } else {
        cyrillicArray[i] = "";
      }
    }
    if (letter === "l") {
      if (next === "e" && !latinArray[i + 2]) {
        cyrillicArray[i] = "ель";
      } else {
        cyrillicArray[i] = "л";
      }
    }
    if (letter === "m") {
      cyrillicArray[i] = "м";
    }
    if (letter === "n") {
      cyrillicArray[i] = "н";
    }
    if (letter === "o") {
      if (next === "o") {
        cyrillicArray[i] = "у";
      } else if (
        previous === "o" ||
        previous === "O" ||
        previous === "y" ||
        previous === "Y"
      ) {
        cyrillicArray[i] = "";
      } else {
        cyrillicArray[i] = "о";
      }
    }
    if (letter === "p") {
      if (next === "h") {
        cyrillicArray[i] = "ф";
      } else {
        cyrillicArray[i] = "п";
      }
    }
    if (letter === "q") {
      cyrillicArray[i] = "кв";
    }
    if (letter === "r") {
      cyrillicArray[i] = "р";
    }
    if (letter === "s") {
      if (next === "h") {
        cyrillicArray[i] = "ш";
      } else if (previous === "t" || previous === "p") {
        cyrillicArray[i] = "";
      } else {
        cyrillicArray[i] = "с";
      }
    }
    if (letter === "t") {
      if (next === "s") {
        cyrillicArray[i] = "ц";
      } else if (!next && previous === "a") {
        cyrillicArray[i] = "т";
        cyrillicArray[i + 1] = "ь";
      } else if (latinArray[i + 1] === "i" && latinArray[i + 2] === "o") {
        cyrillicArray[i] = "шо";
        latinArray[i + 1] = "";
        latinArray[i + 2] = "";
      } else {
        cyrillicArray[i] = "т";
      }
    }
    if (letter === "u") {
      if (previous === "Y" || previous === "y") {
        cyrillicArray[i] = "";
      } else {
        cyrillicArray[i] = "у";
      }
    }
    if (letter === "v") {
      cyrillicArray[i] = "в";
    }
    if (letter === "w") {
      cyrillicArray[i] = "в";
    }
    if (letter === "x") {
      cyrillicArray[i] = "к";
    }
    if (letter === "y") {
      if (
        previous === "A" ||
        previous === "E" ||
        previous === "I" ||
        previous === "O" ||
        previous === "U" ||
        previous === "a" ||
        previous === "e" ||
        previous === "i" ||
        previous === "o" ||
        previous === "u"
      ) {
        cyrillicArray[i] = "й";
      } else if (next === "a" || next === "A") {
        cyrillicArray[i] = "я";
      } else if (next === "e" || next === "E") {
        cyrillicArray[i] = "е";
      } else if (next === "o" || next === "O") {
        cyrillicArray[i] = "ё";
      } else if (next === "u" || next === "U") {
        cyrillicArray[i] = "ю";
      } else {
        cyrillicArray[i] = "й";
      }
    }
    if (letter === "z") {
      if (next === "Z" || next === "z") {
        cyrillicArray[i] = "ц";
      } else if (next === "H" || next === "h") {
        cyrillicArray[i] = "ж";
      } else if (previous === "z" || previous === "Z") {
        cyrillicArray[i] = "";
      } else {
        cyrillicArray[i] = "з";
      }
    }
    if (letter === "A") {
      if (previous !== "Y" && previous !== "y") {
        cyrillicArray[i] = "A";
      } else {
        cyrillicArray[i - 1] = "Я";
        cyrillicArray[i] = "";
      }
    }
    if (letter === "B") {
      cyrillicArray[i] = "Б";
    }
    if (letter === "C") {
      if (next === "i" || next === "e" || next === "I" || next === "E") {
        cyrillicArray[i] = "С";
      } else {
        cyrillicArray[i] = "К";
      }
    }
    if (letter === "D") {
      cyrillicArray[i] = "Д";
    }
    if (letter === "E") {
      if (next === "E" || next === "e") {
        cyrillicArray[i] = "И";
      } else if (previous === "E" || previous === "e") {
        cyrillicArray[i] = "";
      } else {
        cyrillicArray[i] = "Е";
      }
    }
    if (letter === "F") {
      cyrillicArray[i] = "Ф";
    }
    if (letter === "G") {
      if (
        next === "e" ||
        next === "a" ||
        next === "E" ||
        next === "A" ||
        next === "y" ||
        next === "Y"
      ) {
        cyrillicArray[i] = "Ж";
      } else {
        cyrillicArray[i] = " Г";
      }
    }
    if (letter === "H") {
      if (
        previous === "c" ||
        previous === "s" ||
        previous === "w" ||
        previous === "C" ||
        previous === "S" ||
        previous === "W" ||
        previous === "z" ||
        previous === "Z"
      ) {
        if (
          (latinArray[i - 3] === "s" || latinArray[i - 3] === "S") &&
          (latinArray[i - 2] === "h" || latinArray[i - 2] === "H") &&
          (latinArray[i - 1] === "c" || latinArray[i - 3] === "C")
        ) {
          cyrillicArray[i - 3] = "Щ";
          cyrillicArray[i - 2] = "";
          cyrillicArray[i - 1] = "";
          cyrillicArray[i] = "";
        }
        cyrillicArray[i] = "";
      } else if (previous === "p" || previous === "P") {
        cyrillicArray[i] = "";
      } else {
        cyrillicArray[i] = "Х";
      }
    }
    if (letter === "I") {
      cyrillicArray[i] = "И";
    }
    if (letter === "J") {
      cyrillicArray[i] = "Ж";
    }
    if (letter === "K") {
      if (next !== "n" && next !== "N") {
        cyrillicArray[i] = "K";
      } else {
        cyrillicArray[i] = "";
      }
    }
    if (letter === "L") {
      cyrillicArray[i] = "Л";
    }
    if (letter === "M") {
      cyrillicArray[i] = "М";
    }
    if (letter === "N") {
      cyrillicArray[i] = "Н";
    }
    if (letter === "O") {
      if (next === "o" || next === "O") {
        cyrillicArray[i] = "У";
      } else if (previous === "o" || previous === "O") {
        cyrillicArray[i] = "";
      } else {
        cyrillicArray[i] = "О";
      }
    }
    if (letter === "P") {
      if (next === "h" || next === "H") {
        cyrillicArray[i] = "Ф";
      } else {
        cyrillicArray[i] = "П";
      }
    }
    if (letter === "Q") {
      if (next === "A" || next === "U" || next === "I") {
        cyrillicArray[i] = "КВ";
      } else {
        cyrillicArray[i] = "Кв";
      }
    }
    if (letter === "R") {
      cyrillicArray[i] = "Р";
    }
    if (letter === "S") {
      if (next === "h" || next === "H") {
        cyrillicArray[i] = "Ш";
      } else if (
        previous === "t" ||
        previous === "p" ||
        previous === "T" ||
        previous === "P"
      ) {
        cyrillicArray[i] = "";
      } else {
        cyrillicArray[i] = "С";
      }
    }
    if (letter === "T") {
      if (next === "S" || next === "s") {
        cyrillicArray[i] = "Ц";
      } else if (!next && (previous === "a" || previous === "A")) {
        cyrillicArray[i] = "Т";
        cyrillicArray[i + 1] = "ь";
      } else {
        cyrillicArray[i] = "Т";
      }
    }
    if (letter === "U") {
      if (!previous || previous === " ") {
        cyrillicArray[i] = "Ю";
      } else if (previous === "y" || previous === "Y") {
        cyrillicArray[i] = "";
      } else {
        cyrillicArray[i] = "У";
      }
    }
    if (letter === "V") {
      cyrillicArray[i] = "В";
    }
    if (letter === "W") {
      cyrillicArray[i] = "В";
    }
    if (letter === "X") {
      if (
        next === "A" ||
        next === "E" ||
        next === "I" ||
        next === "O" ||
        next === "U" ||
        next === "Y" ||
        next === "a" ||
        next === "e" ||
        next === "i" ||
        next === "o" ||
        next === "u" ||
        next === "y"
      ) {
        cyrillicArray[i] = "Z";
      } else {
        cyrillicArray[i] = "КС";
      }
    }
    if (letter === "Y") {
      if (
        previous === "A" ||
        previous === "E" ||
        previous === "I" ||
        previous === "O" ||
        previous === "U" ||
        previous === "a" ||
        previous === "e" ||
        previous === "i" ||
        previous === "o" ||
        previous === "u"
      ) {
        cyrillicArray[i] = "Й";
      } else if (next === "a" || next === "A") {
        cyrillicArray[i] = "Я";
      } else if (next === "e" || next === "E") {
        cyrillicArray[i] = "Е";
      } else if (next === "o" || next === "O") {
        cyrillicArray[i] = "Ё";
      } else if (next === "u" || next === "U") {
        cyrillicArray[i] = "Ю";
      } else {
        cyrillicArray[i] = "Й";
      }
    }
    if (letter === "Z") {
      if (next === "Z" || next === "z") {
        cyrillicArray[i] = "Ц";
      } else if (next === "h" || next === "H") {
        cyrillicArray[i] = "Ж";
      } else if (previous === "z" || previous === "Z") {
        cyrillicArray[i] = "";
      } else {
        cyrillicArray[i] = "З";
      }
    }
    if (letter === " ") {
      cyrillicArray[i] = " ";
    }
  }
  let cyrillic = cyrillicArray.join("");
  return (
    <div className="transliterate">
      <input type="text" onChange={(e) => setLatin(e.target.value)} />
      <p>Latin: </p>
      <p>{latin}</p>
      <p>Cyrillic: </p>
      <p>{cyrillic}</p>
    </div>
  );
};

export default LatinToCyrillic;
