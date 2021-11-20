import { Link } from "react-router-dom";

const HsLinks = () => {
  return (
    <>
      <h1 className="hslinkstitle">High Score Pages</h1>
      <section className="hslinkcontainer">
        <div className="hslinkdiv" id="easyhs">
          <p className="easylinkitem">
            <Link to="/easynounhiscores" className="greenlink">
              Nouns (Easy)
            </Link>
          </p>
          <p className="easylinkitem">
            <Link to="/easyverbhiscores" className="greenlink">
              Verbs (Easy)
            </Link>
          </p>
          <p className="easylinkitem">
            <Link to="/easyadjectivehiscores" className="greenlink">
              Adjectives (Easy)
            </Link>
          </p>
          <p className="easylinkitem">
            <Link to="/easyadverbhiscores" className="greenlink">
              Adverbs (Easy)
            </Link>
          </p>
        </div>
        <div className="hslinkdiv" id="mediumhs">
          <p className="mediumlinkitem">
            <Link to="/mediumnounhiscores" className="bluelink">
              Nouns (Medium)
            </Link>
          </p>
          <p className="mediumlinkitem">
            <Link to="/mediumverbhiscores" className="bluelink">
              Verbs (Medium)
            </Link>
          </p>
          <p className="mediumlinkitem">
            <Link to="/mediumadjectivehiscores" className="bluelink">
              Adjectives (Medium)
            </Link>
          </p>
          <p className="mediumlinkitem">
            <Link to="/mediumadverbhiscores" className="bluelink">
              Adverbs (Medium)
            </Link>
          </p>
        </div>
        <div className="hslinkdiv" id="hardhs">
          <p className="hardlinkitem">
            <Link to="/hardnounhiscores" className="redlink">
              Nouns (Hard)
            </Link>
          </p>
          <p className="hardlinkitem">
            <Link to="/hardverbhiscores" className="redlink">
              Verbs (Hard)
            </Link>
          </p>
          <p className="hardlinkitem">
            <Link to="/hardadjectivehiscores" className="redlink">
              Adjectives (Hard)
            </Link>
          </p>
          <p className="hardlinkitem">
            <Link to="/hardadverbhiscores" className="redlink">
              Adverbs (Hard)
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default HsLinks;
