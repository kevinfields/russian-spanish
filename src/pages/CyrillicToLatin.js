import { useState } from "react";

const CyrillicToLatin = () => {
  const [cyrillic, setCyrillic] = useState("сйриллик транслитерашон");
  const cyrillicArray = cyrillic.split("");
  let latinArray = [""];

  for (let i = 0; i < cyrillicArray.length; i++) {
    let letter = cyrillicArray[i];
    let previous;
    let next;
    if (i > 0) {
      previous = cyrillicArray[i - 1];
    }
    next = cyrillicArray[i + 1];
    latinArray[i] = "";
    if (letter === "б") {
      latinArray[i] = "b";
    }
    if (letter === "в") {
      latinArray[i] = "v";
    }
    if (letter === "г") {
      latinArray[i] = "g";
    }
    if (letter === "д") {
      latinArray[i] = "d";
    }
    if (letter === "ж") {
      latinArray[i] = "zh";
    }
    if (letter === "з") {
      latinArray[i] = "z";
    }
    if (letter === "к") {
      if (previous === "и" || previous === "а") {
        latinArray[i] = "c";
      } else {
        latinArray[i] = "k";
      }
    }
    if (letter === "л") {
      latinArray[i] = "l";
    }
    if (letter === "м") {
      latinArray[i] = "m";
    }
    if (letter === "н") {
      latinArray[i] = "n";
    }
    if (letter === "п") {
      latinArray[i] = "p";
    }
    if (letter === "р") {
      latinArray[i] = "r";
    }
    if (letter === "с") {
      latinArray[i] = "s";
    }
    if (letter === "т") {
      latinArray[i] = "t";
    }
    if (letter === "ф") {
      latinArray[i] = "f";
    }
    if (letter === "х") {
      if (!previous || previous === " ") {
        latinArray[i] = "h";
      } else {
        latinArray[i] = "kh";
      }
    }
    if (letter === "ц") {
      latinArray[i] = "ts";
    }
    if (letter === "ч") {
      latinArray[i] = "ch";
    }
    if (letter === "ш") {
      if (next === "о" && cyrillicArray[i + 2] === "н") {
        latinArray[i] = "tion";
        cyrillicArray[i + 1] = "";
        cyrillicArray[i + 2] = "";
      } else {
        latinArray[i] = "sh";
      }
    }
    if (letter === "щ") {
      latinArray[i] = "shch";
    }
    if (letter === "а") {
      latinArray[i] = "a";
    }
    if (letter === "е") {
      if (!previous || previous === "'" || previous === " ") {
        latinArray[i] = "ye";
      } else {
        latinArray[i] = "e";
      }
    }
    if (letter === "ё") {
      latinArray[i] = "yo";
    }
    if (letter === "и") {
      latinArray[i] = "i";
    }
    if (letter === "о") {
      latinArray[i] = "o";
    }
    if (letter === "у") {
      latinArray[i] = "u";
    }
    if (letter === "ы") {
      latinArray[i] = "y";
    }
    if (letter === "э") {
      latinArray[i] = "e";
    }
    if (letter === "ю") {
      latinArray[i] = "yu";
    }
    if (letter === "я") {
      latinArray[i] = "ya";
    }
    if (letter === "й") {
      latinArray[i] = "y";
    }
    if (letter === "ь") {
      latinArray[i] = "'";
    }
    if (letter === "ъ") {
      latinArray[i] = "'";
    }
    if (letter === "А") {
      latinArray[i] = "A";
    }
    if (letter === "Б") {
      latinArray[i] = "b";
    }
    if (letter === "В") {
      latinArray[i] = "V";
    }
    if (letter === "Г") {
      latinArray[i] = "G";
    }
    if (letter === "Д") {
      latinArray[i] = "D";
    }
    if (letter === "Е") {
      if (!previous || previous === "'" || previous === " ") {
        latinArray[i] = "Ye";
      } else {
        latinArray[i] = "E";
      }
    }
    if (letter === "Ё") {
      latinArray[i] = "Yo";
    }
    if (letter === "Ж") {
      if (previous !== "" && previous !== " " && previous) {
        latinArray[i] = "ZH";
      } else {
        latinArray[i] = "Zh";
      }
    }
    if (letter === "З") {
      latinArray[i] = "Z";
    }
    if (letter === "И") {
      latinArray[i] = "I";
    }
    if (letter === "Й") {
      latinArray[i] = "Y";
    }
    if (letter === "К") {
      if (
        previous === "a" ||
        previous === "e" ||
        previous === "i" ||
        previous === "o" ||
        previous === "u" ||
        previous === "A" ||
        previous === "E" ||
        previous === "I" ||
        previous === "O" ||
        previous === "U"
      ) {
        latinArray[i] = "CK";
      }
      latinArray[i] = "K";
    }
    if (letter === "Л") {
      latinArray[i] = "L";
    }
    if (letter === "М") {
      latinArray[i] = "M";
    }
    if (letter === "Н") {
      latinArray[i] = "N";
    }
    if (letter === "О") {
      latinArray[i] = "O";
    }
    if (letter === "П") {
      latinArray[i] = "P";
    }
    if (letter === "Р") {
      latinArray[i] = "R";
    }
    if (letter === "С") {
      latinArray[i] = "S";
    }
    if (letter === "Т") {
      latinArray[i] = "T";
    }
    if (letter === "У") {
      latinArray[i] = "U";
    }
    if (letter === "Ф") {
      latinArray[i] = "F";
    }
    if (letter === "Х") {
      if (previous !== " " && previous !== "" && previous) {
        latinArray[i] = "Kh";
      } else {
        latinArray[i] = "KH";
      }
    }
    if (letter === "Ц") {
      if (previous !== " " && previous !== "" && previous) {
        latinArray[i] = "Ts";
      } else {
        latinArray[i] = "TS";
      }
    }
    if (letter === "Ч") {
      if (previous !== " " && previous !== "" && previous) {
        latinArray[i] = "Ch";
      } else {
        latinArray[i] = "CH";
      }
    }
    if (letter === "Ш") {
      if (previous !== " " && previous !== "" && previous) {
        latinArray[i] = "Ch";
      } else {
        latinArray[i] = "CH";
      }
    }
    if (letter === "Щ") {
      if (previous !== " " && previous !== "" && previous) {
        latinArray[i] = "Shch";
      } else {
        latinArray[i] = "SHCH";
      }
    }
    if (letter === "Ы") {
      latinArray[i] = "I";
    }
    if (letter === "Э") {
      latinArray[i] = "E";
    }
    if (letter === "Ю") {
      if (previous !== " " && previous !== "" && previous) {
        latinArray[i] = "U";
      } else {
        latinArray[i] = "Yu";
      }
    }
    if (letter === "Я") {
      if (previous !== " " && previous !== "" && previous) {
        latinArray[i] = "Ya";
      } else {
        latinArray[i] = "YA";
      }
    }
    if (letter === " ") {
      latinArray[i] = " ";
    }
    if (letter === ",") {
      latinArray[i] = ",";
    }
    if (letter === ".") {
      latinArray[i] = ".";
    }
    if (letter === "?") {
      latinArray[i] = "?";
    }
    if (letter === "!") {
      latinArray[i] = "?";
    }
    if (letter === "/") {
      latinArray[i] = "?";
    }
  }
  let latin = latinArray.join("");
  return (
    <div className="transliterate">
      <input type="text" onChange={(e) => setCyrillic(e.target.value)} />
      <p>Cyrillic: </p>
      <p>{cyrillic}</p>
      <p>Latin: </p>
      <p>{latin}</p>
    </div>
  );
};

export default CyrillicToLatin;
