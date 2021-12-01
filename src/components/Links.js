import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="links">
      <nav>
        <div>
          <p className="path">
            <Link className="misc" to="/">
              Home
            </Link>
          </p>
          <p className="path">
            <Link className="misc" to="/transliterate">
              Transliterator
            </Link>
          </p>
          <p className="path">
            <Link className="misc" to="/hiscores">
              Hiscores
            </Link>
          </p>
          <p className="path">
            <Link className="misc" to="/suggestions">
              All Custom Words
            </Link>
          </p>
          <p className="path">
            <Link className="misc" to="/suggest">
              Add a Word
            </Link>
          </p>
          <p className="path">
            <Link className="misc" to="userwords">
              Custom Quiz Words
            </Link>
          </p>
        </div>
        <h2 className="path" id="playtitle">
          -Play-
        </h2>
        <div>
          <p className="path">
            <Link className="easy" to="/easynouns">
              Nouns (Easy)
            </Link>
          </p>
          <p className="path">
            <Link className="easy" to="/easyverbs">
              Verbs (Easy)
            </Link>
          </p>
          <p className="path">
            <Link className="easy" to="/easyadjectives">
              Adjectives (Easy)
            </Link>
          </p>
          <p className="path">
            <Link className="easy" to="/easyadverbs">
              Adverbs (Easy)
            </Link>
          </p>
        </div>
        <p></p>
        <div>
          <p className="path">
            <Link className="medium" to="/mediumnouns">
              Nouns (Medium)
            </Link>
          </p>
          <p className="path">
            <Link className="medium" to="/mediumverbs">
              Verbs (Medium)
            </Link>
          </p>
          <p className="path">
            <Link className="medium" to="/mediumadjectives">
              Adjectives (Medium)
            </Link>
          </p>
          <p className="path">
            <Link className="medium" to="/mediumadverbs">
              Adverbs (Medium)
            </Link>
          </p>
        </div>
        <p></p>
        <div>
          <p className="path">
            <Link className="hard" to="/hardnouns">
              Nouns (Hard)
            </Link>
          </p>
          <p className="path">
            <Link className="hard" to="/hardverbs">
              Verbs (Hard)
            </Link>
          </p>
          <p className="path">
            <Link className="hard" to="/hardadjectives">
              Adjectives (Hard)
            </Link>
          </p>
          <p className="path">
            <Link className="hard" to="/hardadverbs">
              Adverbs (Hard)
            </Link>
          </p>
          <p className="path">
            <Link className="all" to="/allnouns">
              Nouns (All)
            </Link>
          </p>
          <p className="path">
            <Link className="all" to="/allverbs">
              Verbs (All)
            </Link>
          </p>
          <p className="path">
            <Link className="customquiz" to="/customquiz">
              Custom
            </Link>
          </p>
        </div>
      </nav>
    </div>
  );
};

export default Links;
