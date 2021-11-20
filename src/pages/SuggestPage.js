import { useNavigate } from "react-router";
import WordRequestForm from "../components/WordRequestForm";

const SuggestPage = () => {
  const navigate = useNavigate();

  async function addRequestHandler(requestData) {
    await fetch(
      "https://formsprojec-default-rtdb.firebaseio.com/requests.json",
      {
        method: "POST",
        body: JSON.stringify(requestData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    navigate("/");
  }
  return (
    <div className="suggestpage">
      <p className="white">Add a New Word</p>
      <WordRequestForm onAddWord={addRequestHandler} />
    </div>
  );
};

export default SuggestPage;
