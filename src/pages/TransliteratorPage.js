import LatinToCyrillic from "../components/LatinToCyrillic";
import CyrillicToLatin from "../components/CyrillicToLatin";

const TransliteratorPage = () => {
  return (
    <div className="tlcontainer">
      <LatinToCyrillic />
      <p></p>
      <CyrillicToLatin />
    </div>
  );
};

export default TransliteratorPage;
