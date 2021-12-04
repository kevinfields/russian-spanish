import RequestList from "../components/RequestList";
import { useState, useEffect } from "react";

const SuggestionsPage = () => {
  const [loadedSuggestions, setLoadedSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  async function loadSuggestions() {
    setLoading(true);
    await fetch(
      "https://russian-english-a2575-default-rtdb.firebaseio.com/requests.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const requests = [];
        for (const key in data) {
          const request = {
            id: key,
            ...data[key],
          };
          requests.push(request);
        }
        setLoadedSuggestions(requests);
        setLoading(false);
      });
  }

  useEffect(() => {
    loadSuggestions();
    console.log("loop");
  }, []);
  return (
    <section>
      {loading ? <p className="loadingscreen">Loading...</p> : null}
      {loadedSuggestions.length < 1 && !loading ? (
        <p className="centered">There are currently no new suggestions.</p>
      ) : null}
      <RequestList requests={loadedSuggestions} />
    </section>
  );
};

export default SuggestionsPage;
