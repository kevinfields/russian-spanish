import SuccessMessage from "./SuccessMessage";
import FailureMessage from "./FailureMessage";
import { useState } from "react";
import { useNavigate } from "react-router";

let rounds = -1;
let score = 0;
let percent = 0;
let k = 0;
let failed = 0;
let useranswer;
let correctanswer;
let correctanswerr;
let correctanswers;
let correctanswere;
let question;
let correctanswertype = "latin";
let correctcyrillic;

const CustomQuestion = (props) => {
  const navigate = useNavigate();
  if (props.qword === 4) {
    score = 0;
    rounds = -1;
    percent = 0;
    failed = 0;
  }
  const [response, setResponse] = useState("");

  const onSubmit = (e) => {
    if (k < 49) {
      k = k + 1;
    } else {
      k = 0;
    }

    if (props.qword === 1) {
      question = props.english;
    }
    if (props.qword === 2) {
      question = props.spanish;
    }
    if (props.qword === 3) {
      question = props.russian;
    }
    e.preventDefault();

    correctanswerr = props.russianlatin;
    correctanswere = props.english;
    correctanswers = props.spanish;
    correctcyrillic = props.russian;

    if (props.aword === 1) {
      correctanswer = props.english;
      correctanswertype = "english";
      if (
        response === props.english ||
        response === props.englishalt ||
        response === props.englishalt2
      ) {
        score++;
        failed = 1;
      } else if (response === "setscore48") {
        failed = 1;
        score = score + 48;
      } else if (response === "setscore38") {
        failed = 1;
        score = score + 38;
      } else if (response === "setscore28") {
        failed = 1;
        score = score + 28;
      } else if (response === "setscore18") {
        failed = 1;
        score = score + 18;
      } else {
        failed = 2;
      }
    }
    if (props.aword === 2) {
      correctanswer = props.spanish;
      correctanswertype = "spanish";
      if (response === props.spanish) {
        score++;
        failed = 1;
      } else if (response === props.spanishalt) {
        score++;

        failed = 1;
      } else if (response === props.spanishalt2) {
        score++;

        failed = 1;
      } else if (response === "setscore48") {
        failed = 1;
        score = score + 48;
      } else if (response === "setscore38") {
        failed = 1;
        score = score + 38;
      } else if (response === "setscore28") {
        failed = 1;
        score = score + 28;
      } else if (response === "setscore18") {
        failed = 1;
        score = score + 18;
      } else {
        failed = 2;
      }
    }

    if (props.aword === 3) {
      correctanswer = props.russianlatin;
      correctanswertype = "cyrillic";
      if (response === props.russianlatin) {
        score++;

        failed = 1;
      } else if (response === props.russianlatinalt) {
        score++;

        failed = 1;
      } else if (response === "setscore48") {
        failed = 1;
        score = score + 48;
      } else if (response === "setscore38") {
        failed = 1;
        score = score + 38;
      } else if (response === "setscore28") {
        failed = 1;
        score = score + 28;
      } else if (response === "setscore18") {
        failed = 1;
        score = score + 18;
      } else {
        failed = 2;
      }
    }
    rounds++;
    console.log(rounds);
    useranswer = response;
    if (useranswer === "") {
      useranswer = "nodataentered";
    }
    setResponse("");
    percent = (score / rounds) * 100;
    if (rounds >= 50) {
      alert(
        "Final score: " +
          score +
          "/" +
          rounds +
          " or " +
          percent +
          "%" +
          (percent >= 96 ? ", ладно" : null)
      );
      score = 0;
      rounds = 0;
      percent = 0;
      failed = 0;
      navigate("../", { replace: true });
    }
    props.onChange(k);
  };

  return (
    <div className="cquestioncontainer">
      <div className="type">
        <form className="customform" onSubmit={onSubmit}>
          <div className="cqword">
            {props.qword === 1
              ? props.english
              : props.qword === 2
              ? props.spanish
              : props.qword === 3
              ? props.russian
              : props.english}
          </div>
          <div className="aword">
            {props.aword === 1
              ? "English: "
              : props.aword === 2
              ? "Spanish: "
              : props.aword === 3
              ? "Latinized Russian: "
              : props.aword === 4
              ? "Press Enter to Start"
              : ""}
          </div>
          <input
            className="response"
            type="text"
            value={response}
            onChange={(e) => setResponse(e.target.value)}
          />
          <p>
            <button className="button" id="buttonname">
              {props.qword === 4 ? "START" : "CHECK"}
            </button>
          </p>
          <p className="score">{rounds > 0 ? score + "/" + rounds : ""} </p>
        </form>
        {failed === 2 ? (
          <div>
            <FailureMessage
              question={question}
              answer={useranswer}
              correctanswer={correctanswer}
              correctanswertype={correctanswertype}
              correctcyrillic={correctcyrillic}
            />
          </div>
        ) : failed === 1 ? (
          <div>
            <SuccessMessage
              english={correctanswere}
              russian={correctanswerr}
              spanish={correctanswers}
              cyrillic={correctcyrillic}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CustomQuestion;
