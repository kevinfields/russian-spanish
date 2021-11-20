const HighScore = (props) => {
  return (
    <div className="highscoreitem">
      <p id="hsposition">Position: {props.position}</p>
      <p id="hsscore">Score: {props.score}</p>
      <p id="hsgamemode">Game Mode: {props.gamemode}</p>
      <p id="hsusername">Username: {props.username}</p>
    </div>
  );
};

export default HighScore;
