import { useState } from "react";
import { useNavigate } from "react-router";
import HighScoresList from "../components/HighScoresList";

const HighScoresPage = (props) => {
  let rounds = 0;
  let scores = [];
  const [loadedHighScores, setLoadedHighScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  if (loadedHighScores.length === 0 && rounds === 0) {
    fetch("https://formsprojec-default-rtdb.firebaseio.com/hiscores.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        for (const key in data) {
          const score = {
            id: key,
            ...data[key],
          };
          if (
            score.gamemode === props.mode &&
            loadedHighScores.includes(score) === false
          ) {
            console.log(loadedHighScores);
            console.log(score);
            scores.push(score);
            rounds++;
            scores.sort((currentscore, lastscore) =>
              lastscore.score > currentscore.score ? 1 : -1
            );
            for (let i = 0; i < scores.length; i++) {
              let scorenum = scores[i];
              scorenum.position = i + 1;
            }
            let extrascores = scores.length - 10;
            if (scores.length >= 10) {
              scores.splice(10, extrascores);
            }
            console.log(rounds);
          }
        }
        setLoadedHighScores(scores);
        setLoading(false);
      });
  }

  const reset = () => {
    navigate("../hiscores", { replace: true });
    rounds = 0;
  };

  return (
    <div>
      {!loading && loadedHighScores.length < 1 ? (
        <p className="white">You have no Highscores in this category yet.</p>
      ) : loading ? (
        <p className="white">Loading...</p>
      ) : (
        <HighScoresList highscores={loadedHighScores} />
      )}
      <button className="hsreturnbutton" onClick={() => reset()}>
        Return to High Scores Page
      </button>
    </div>
  );
};

export default HighScoresPage;
