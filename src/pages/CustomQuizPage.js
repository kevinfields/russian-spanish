import { useState } from "react";
import { useContext } from "react";
import UserWordsContext from "../store/userwords-context";
import CustomQuestion from "../components/CustomQuestion";

let rounds = -1;
let wordarray = [];

const CustomQuizPage = () => {
  const wordsContext = useContext(UserWordsContext);
  let aword = Math.floor(Math.random() * 3) + 1;
  let qword = Math.floor(Math.random() * 3) + 1;

  const [newWord, setNewWord] = useState(0);
  let word = wordsContext.wordlist[newWord];
  let roundtotal = wordsContext.totalWords;
  let userArray = wordsContext.wordlist;

  console.log("wordarray1: " + wordarray);
  if (rounds < roundtotal - 1) {
    rounds++;
  } else {
    rounds = -1;
  }
  if (rounds === -1) {
    word = {
      english: "start",
      spanish: "start",
      russian: "start",
      cyrillic: "start",
    };
  } else {
    word = userArray[rounds];
  }
  console.log("rounds: " + rounds);
  console.log("word: " + word);

  return (
    <div className="userquiz">
      <CustomQuestion
        english={word.english}
        spanish={word.spanish}
        russian={word.russian}
        cyrillic={word.cyrillic}
        qword={qword}
        aword={aword}
        onChange={(number) => setNewWord(number)}
        rounds={roundtotal}
      />
    </div>
  );
};

export default CustomQuizPage;
