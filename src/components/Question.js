import React from "react";
import FailureMessage from "./FailureMessage";
import SuccessMessage from "./SuccessMessage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

let easyarray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50,
];
let mediumarray = [
  51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
  70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88,
  89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
];
let hardarray = [
  101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115,
  116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130,
  131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145,
  146, 147, 148, 149, 150,
];

for (let i = easyarray.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * i);
  const temp = easyarray[i];
  easyarray[i] = easyarray[j];
  easyarray[j] = temp;
}

for (let z = mediumarray.length - 1; z > 0; z--) {
  const l = Math.floor(Math.random() * z);
  const temp = mediumarray[z];
  mediumarray[z] = mediumarray[l];
  mediumarray[l] = temp;
}
for (let m = hardarray.length - 1; m > 0; m--) {
  const n = Math.floor(Math.random() * m);
  const temp = hardarray[m];
  hardarray[m] = hardarray[n];
  hardarray[n] = temp;
}

console.log(easyarray);
console.log(mediumarray);
console.log(hardarray);

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
let highscore = false;
let submittedscore = 0;

const Question = (props) => {
  const navigate = useNavigate();
  const [name1, setName1] = useState("");
  let mode;
  let buttonname = "l" + props.level.toString() + "button";
  console.log(buttonname);
  if (props.level === 1) {
    mode = "Easy";
  } else if (props.level === 2) {
    mode = "Medium";
  } else if (props.level === 3) {
    mode = "Hard";
  }

  let modetype = mode + " " + props.type;

  function submitScore(hiscore) {
    const hiscoreItem = {
      score: hiscore,
      username: name1,
      id: Math.floor(Math.random() * 9999),
      gamemode: modetype,
    };
    fetch("https://formsprojec-default-rtdb.firebaseio.com/hiscores.json", {
      method: "POST",
      body: JSON.stringify(hiscoreItem),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("../hiscores");
      highscore = false;
      submittedscore = 0;
      setName1("");
    });
  }

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
      if (score > 40) {
        highscore = true;
        submittedscore = score;
      } else {
        highscore = false;
      }
      score = 0;
      rounds = 0;
      percent = 0;
      failed = 0;
      if (!highscore) {
        navigate("../", { replace: true });
      }
    }

    if (props.level === 1) {
      props.onChange(easyarray[k]);
    }
    if (props.level === 2) {
      props.onChange(mediumarray[k]);
    }
    if (props.level === 3) {
      props.onChange(hardarray[k]);
    }
  };

  return (
    <div className="questioncontainer">
      <p className="type">{props.type}</p>
      <form
        className={
          props.level === 1
            ? "easyform"
            : props.level === 2
            ? "mediumform"
            : props.level === 3
            ? "hardform"
            : "otherform"
        }
        onSubmit={onSubmit}
      >
        <div className="qword">
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
          <button className="button" id={buttonname}>
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
      {highscore === true ? (
        <div className="whitetext">
          <p>Want to submit to the highscores?</p>
          <p>
            Username:
            <input
              className="getname"
              type="text"
              value={name1}
              onChange={(e) => setName1(e.target.value)}
              maxLength="15"
            />
            <p>Score: {submittedscore}</p>
            <button
              className="submit"
              onClick={() => submitScore(submittedscore, name1)}
            >
              Submit
            </button>
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Question;
