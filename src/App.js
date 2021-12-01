import VerbPage from "./pages/VerbPage";
import NounPage from "./pages/NounPage";
import AdjectivePage from "./pages/AdjectivePage";
import AdverbPage from "./pages/AdverbPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Links from "./components/Links";
import HighScoresFrontPage from "./pages/HighScoresFrontPage";
import HighScoresPage from "./pages/HighScoresPage";
import SuggestionsPage from "./pages/SuggestionsPage";
import SuggestPage from "./pages/SuggestPage";
import UserWordsPage from "./pages/UserWordsPage";
import CustomQuizPage from "./pages/CustomQuizPage";
import TransliteratorPage from "./pages/TransliteratorPage";

function App() {
  return (
    <section className="bigwrap">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/transliterate" element={<TransliteratorPage />} />
        <Route path="/hiscores" element={<HighScoresFrontPage />} />
        <Route path="/suggestions" element={<SuggestionsPage />} />
        <Route path="/suggest" element={<SuggestPage />} />
        <Route path="/userwords" element={<UserWordsPage />} />
        <Route
          path="/easynounhiscores"
          element={<HighScoresPage mode="Easy Nouns" />}
        />
        <Route
          path="/easyverbhiscores"
          element={<HighScoresPage mode="Easy Verbs" />}
        />
        <Route
          path="/easyadjectivehiscores"
          element={<HighScoresPage mode="Easy Adjectives" />}
        />
        <Route
          path="/easyadverbhiscores"
          element={<HighScoresPage mode="Easy Adverbs" />}
        />
        <Route
          path="/mediumnounhiscores"
          element={<HighScoresPage mode="Medium Nouns" />}
        />
        <Route
          path="/mediumverbhiscores"
          element={<HighScoresPage mode="Medium Verbs" />}
        />
        <Route
          path="/mediumadjectivehiscores"
          element={<HighScoresPage mode="Medium Adjectives" />}
        />
        <Route
          path="/mediumadverbhiscores"
          element={<HighScoresPage mode="Medium Adverbs" />}
        />
        <Route
          path="/hardnounhiscores"
          element={<HighScoresPage mode="Hard Nouns" />}
        />
        <Route
          path="/hardverbhiscores"
          element={<HighScoresPage mode="Hard Verbs" />}
        />
        <Route
          path="/hardadjectivehiscores"
          element={<HighScoresPage mode="Hard Adjectives" />}
        />
        <Route
          path="/hardadverbhiscores"
          element={<HighScoresPage mode="Hard Adverbs" />}
        />
        <Route path="/easyverbs" element={<VerbPage difficulty="easy" />} />
        <Route path="/easynouns" element={<NounPage difficulty="easy" />} />
        <Route
          path="/easyadjectives"
          element={<AdjectivePage difficulty="easy" />}
        />
        <Route path="/easyadverbs" element={<AdverbPage difficulty="easy" />} />
        <Route path="/mediumverbs" element={<VerbPage difficulty="medium" />} />
        <Route path="/mediumnouns" element={<NounPage difficulty="medium" />} />
        <Route
          path="/mediumadjectives"
          element={<AdjectivePage difficulty="medium" />}
        />
        <Route
          path="/mediumadverbs"
          element={<AdverbPage difficulty="medium" />}
        />
        <Route path="/hardverbs" element={<VerbPage difficulty="hard" />} />
        <Route path="/hardnouns" element={<NounPage difficulty="hard" />} />
        <Route
          path="/hardadjectives"
          element={<AdjectivePage difficulty="hard" />}
        />
        <Route path="/hardadverbs" element={<AdverbPage difficulty="hard" />} />
        <Route path="/allnouns" element={<NounPage difficulty="all" />} />
        <Route path="/allverbs" element={<VerbPage difficulty="all" />} />
        <Route path="/customquiz" element={<CustomQuizPage />} />
      </Routes>
      <p> </p>
      <Links />
    </section>
  );
}

export default App;
