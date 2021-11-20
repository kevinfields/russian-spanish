import { createContext, useState } from "react";

const UserWordsContext = createContext({
  wordlist: [],
  totalWords: 0,
  addWord: (userWord) => {},
  removeWord: (wordId) => {},
  wordStatus: (wordId) => {},
});

export function UserWordsContextProvider(props) {
  const [userWordList, setUserWordList] = useState([]);
  const addWordHandler = (userWord) => {
    console.log("adding word");
    setUserWordList((prevUserWordList) => {
      return prevUserWordList.concat(userWord);
    });
  };
  const removeWordHandler = (wordId) => {
    setUserWordList((prevUserWordList) => {
      return prevUserWordList.filter((word) => word.id !== wordId);
    });
  };
  const wordStatusHandler = (wordId) => {
    return userWordList.some((word) => word.id === wordId);
  };

  const context = {
    wordlist: userWordList,
    totalWords: userWordList.length,
    addWord: addWordHandler,
    removeWord: removeWordHandler,
    wordStatus: wordStatusHandler,
  };
  return (
    <UserWordsContext.Provider value={context}>
      {props.children}
    </UserWordsContext.Provider>
  );
}

export default UserWordsContext;
