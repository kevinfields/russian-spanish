const SuccessMessage = (props) => {
  return (
    <>
      <div className="success">
        <p>Good job!</p>
        <p>
          {props.cyrillic} = '{props.russian}'{" "}
        </p>
        <p> = {props.english} </p>
        <p> = {props.spanish} </p>
      </div>
    </>
  );
};

export default SuccessMessage;
