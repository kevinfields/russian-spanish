import { useState } from "react";
import { useContext } from "react";
import UserWordsContext from "../store/userwords-context";
import CustomQuestion from "../components/CustomQuestion";

let rounds = -1;

const CustomQuizPage = () => {
  const wordsContext = useContext(UserWordsContext);
  const [newWord, setNewWord] = useState(0);
  let roundtotal = wordsContext.totalWords;
  if (rounds >= roundtotal - 1) {
    rounds = -1;
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
  let word = wordsContext.wordlist[newWord];

  let userArray = wordsContext.wordlist;

  if (rounds === -1) {
    word = {
      english: "start",
      spanish: "start",
      russian: "start",
      cyrillic: "start",
    };
    qword = 4;
    aword = 4;
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
