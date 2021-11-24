import Card from "../interface/Card";
import { useContext } from "react";
import UserWordsContext from "../store/userwords-context";
import { useState } from "react";

const WordRequest = (props) => {
  const wordCtx = useContext(UserWordsContext);
  const wordStatus = wordCtx.wordStatus(props.id);
  const [altClass, setAltClass] = useState(false);

  const toggleWordStatusHandler = () => {
    if (wordStatus) {
      wordCtx.removeWord(props.id);
      setAltClass(false);
    } else {
      wordCtx.addWord({
        id: props.id,
        english: props.english,
        spanish: props.spanish,
        russian: props.russian,
        cyrillic: props.cyrillic,
        wordType: props.wordType,
      });
      setAltClass(true);
      console.log(props.id);
    }
  };
  return (
    <div className={altClass ? "checkedrequest" : "requestlistitem"}>
      <Card>
        <section className="requestcontainer">
          <div>
            <p className="requestitem">English: {props.english}</p>
            <p className="requestitem">Spanish: {props.spanish}</p>
            <p className="requestitem">Russian: {props.russian}</p>
            <p className="requestitem">Cyrillic: {props.cyrillic}</p>
            <p className="requestitem">Type: {props.wordType}</p>
            <button className="usewordbutton" onClick={toggleWordStatusHandler}>
              {wordStatus ? "Remove from Quiz" : "Add to Quiz"}
            </button>
          </div>
        </section>
      </Card>
    </div>
  );
};

export default WordRequest;
