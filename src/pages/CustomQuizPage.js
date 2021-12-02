import { useState } from "react";
import { useContext } from "react";
import UserWordsContext from "../store/userwords-context";
import CustomQuestion from "../components/CustomQuestion";

let rounds = 0;

const CustomQuizPage = () => {
  const [newWord, setNewWord] = useState(-1);
  const wordsContext = useContext(UserWordsContext);
  let roundtotal = wordsContext.totalWords + 1;
  let word = wordsContext.wordlist[newWord];

  if (newWord === -1) {
    word = {
      english: "Press Enter to Start",
      spanish: "",
      russian: "",
      cyrillic: "",
    };
  }

  if (wordsContext.totalWords <= 1) {
    word = {
      english: "Please select some words from the Custom Word List Page.",
      spanish: "",
      russian: "",
      cyrillic: "",
    };
  }

  if (rounds >= roundtotal) {
    rounds = 0;
  } else {
    rounds++;
  }

  let aword = Math.floor(Math.random() * 3) + 1;

  let qword;

  if (aword !== 3) {
    qword = aword + 1;
  } else {
    qword = 1;
  }

  if (newWord === -1) {
    qword = 4;
    aword = 4;
  }

  console.log("rounds: " + rounds);
  console.log("word: " + word);

  return (
    <div className="userquiz">
      <CustomQuestion
        english={word.english}
        spanish={word.spanish}
        russian={word.cyrillic}
        russianlatin={word.russian}
        qword={qword}
        aword={aword}
        onChange={(number) => setNewWord(number)}
        rounds={roundtotal}
      />
    </div>
  );
};

export default CustomQuizPage;
