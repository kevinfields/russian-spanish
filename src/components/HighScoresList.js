import HighScore from "./HighScore";

const HighScoresList = (props) => {
  return (
    <ul>
      <section className="highscorecontainer">
        <h1 id="highscoretitle">HIGH SCORES</h1>
        {props.highscores.map((hiscore) => (
          <HighScore
            key={hiscore.id}
            id={hiscore.id}
            username={hiscore.username}
            score={hiscore.score}
            gamemode={hiscore.gamemode}
            position={hiscore.position}
          />
        ))}
      </section>
    </ul>
  );
};

export default HighScoresList;
