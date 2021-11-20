import { useRef } from "react";

const WordRequest = (props) => {
  const englishInputRef = useRef();
  const spanishInputRef = useRef();
  const russianInputRef = useRef();
  const cyrillicInputRef = useRef();
  const wordTypeInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEnglish = englishInputRef.current.value;
    const enteredSpanish = spanishInputRef.current.value;
    const enteredRussian = russianInputRef.current.value;
    const enteredCyrillic = cyrillicInputRef.current.value;
    const enteredWordType = wordTypeInputRef.current.value;

    const wordData = {
      english: enteredEnglish,
      spanish: enteredSpanish,
      russian: enteredRussian,
      cyrillic: enteredCyrillic,
      wordType: enteredWordType,
    };
    props.onAddWord(wordData);
  };
  return (
    <div className="suggestioncontainer">
      <form onSubmit={submitHandler}>
        <ul>
          <li className="suggestionitem">
            <label className="suggestionlabel" htmlFor="engreq">
              English:{" "}
            </label>
            <input
              className="requestinput"
              required
              type="text"
              ref={englishInputRef}
              id="engreq"
            />
          </li>
          <li className="suggestionitem">
            <label className="suggestionlabel" htmlFor="spnreq">
              Spanish:{" "}
            </label>
            <input
              className="requestinput"
              required
              type="text"
              ref={spanishInputRef}
              id="spnreq"
            />
          </li>
          <li className="suggestionitem">
            <label className="suggestionlabel" htmlFor="rusreq">
              Russian:{" "}
            </label>
            <input
              className="requestinput"
              required
              type="text"
              ref={russianInputRef}
              id="rsnreq"
            />
          </li>
          <li className="suggestionitem">
            <label className="suggestionlabel" htmlFor="cyrreq">
              Cyrillic:{" "}
            </label>
            <input
              className="requestinput"
              required
              type="text"
              ref={cyrillicInputRef}
              id="cyrreq"
            />
          </li>
          <li className="suggestionitem">
            <label className="suggestionlabel" htmlFor="typreq">
              Type:{" "}
            </label>
            <input
              className="requestinput"
              required
              type="text"
              ref={wordTypeInputRef}
              id="typreq"
            />
          </li>
          <li>
            <button className="submitrequestbutton">Submit</button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default WordRequest;
