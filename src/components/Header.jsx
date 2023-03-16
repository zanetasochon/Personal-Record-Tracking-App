import "primeicons/primeicons.css";
import "../scss/Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="container--header">
      <div className="header--logo__container">
        <h1 className="header--logo">Personal Record Tracking</h1>
        <FontAwesomeIcon icon={faDumbbell} />
      </div>
    </div>
  );
};

export default Header;
