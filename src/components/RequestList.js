import WordRequest from "./WordRequest";

const RequestList = (props) => {
  return (
    <section className="requestlistcontainer">
      {props.requests.map((request) => (
        <WordRequest
          key={request.id}
          id={request.id}
          english={request.english}
          spanish={request.spanish}
          russian={request.russian}
          cyrillic={request.cyrillic}
          wordType={request.wordType}
        />
      ))}
    </section>
  );
};

export default RequestList;
