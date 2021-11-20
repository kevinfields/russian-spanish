import { useState } from "react";
import { useContext } from "react";
import UserWordsContext from "../store/userwords-context";
import CustomQuestion from "../components/CustomQuestion";

let aword = 1;
let qword = 2;

const CustomQuizPage = () => {
  const wordsContext = useContext(UserWordsContext);
  const [newQuestion, setNewQuestion] = useState(0);
  let wordarray = wordsContext.wordlist;

  for (let i = wordarray.length; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = wordarray[i];
    wordarray[i] = wordarray[j];
    wordarray[j] = temp;
  }

  let word = wordsContext.wordlist[newQuestion];

  let english = word.english;
  let spanish = word.spanish;
  let russian = word.russian;
  let cyrillic = word.cyrillic;

  return (
    <div className="userquiz">
      <CustomQuestion
        english={english}
        spanish={spanish}
        russian={russian}
        cyrillic={cyrillic}
        qword={qword}
        aword={aword}
        onChange={(number) => setNewQuestion(number)}
      />
    </div>
  );
};

export default CustomQuizPage;
