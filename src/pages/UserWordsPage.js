import { useContext } from "react";
import UserWordsContext from "../store/userwords-context";
import RequestList from "../components/RequestList";

const UserWordsPage = () => {
  const wordsContext = useContext(UserWordsContext);
  let content;
  if (wordsContext.totalWords < 1) {
    content = <p className="white">You have not added any words</p>;
  } else {
    content = <RequestList requests={wordsContext.wordlist} />;
  }
  console.log("current words context: " + wordsContext);
  return (
    <section>
      <h1>User Words</h1>
      {content}
    </section>
  );
};

export default UserWordsPage;
