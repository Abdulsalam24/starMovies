import { Link } from "react-router-dom";
import { ReactComponent as BackArrowIcon } from "../assets/icons/backArrowIcon.svg";

function BackButton({ url }) {
  return (
    <div className="absolute z-40 left-5 top-10">
      <Link to={url}>
        <BackArrowIcon />
      </Link>
    </div>
  );
}

export default BackButton;
