import { useState } from "react";
import { useContext } from "react";
import UserWordsContext from "../store/userwords-context";
import CustomQuestion from "../components/CustomQuestion";

let aword = 1;
let qword = 2;
let word;
let rounds = -1;
let wordarray = [];

const CustomQuizPage = () => {
  const wordsContext = useContext(UserWordsContext);
  const [newWord, setNewWord] = useState(0);

  let userArray = wordsContext.wordlist;

  for (let i = wordsContext.totalWords; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = wordarray[i];
    wordarray[i] = wordarray[j];
    wordarray[j] = temp;
  }
  console.log("wordarray1: " + wordarray);
  if (newWord < wordsContext.totalWords) {
    rounds++;
  } else {
    rounds = 0;
  }
  word = userArray[rounds];
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
      />
    </div>
  );
};

export default CustomQuizPage;
