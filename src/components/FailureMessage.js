const FailureMessage = (props) => {
  let language;
  if (props.correctanswertype === "english") {
    language = " English ";
  }
  if (props.correctanswertype === "spanish") {
    language = " Spanish ";
  }
  if (props.correctanswertype === "cyrillic") {
    language = " Russian ";
  }
  return (
    <p className="failure">
      {" "}
      {props.answer === "nodataentered"
        ? "Not entering an answer "
        : "'" + props.answer + "' "}
      is
      {props.answer === "nodataentered" ? " obviously" : null} incorrect. The
      {language}translation of '{props.question}' is '{props.correctanswer}'{" "}
      {props.correctanswertype === "cyrillic"
        ? "(" + props.correctcyrillic + ")"
        : null}
    </p>
  );
};

export default FailureMessage;
