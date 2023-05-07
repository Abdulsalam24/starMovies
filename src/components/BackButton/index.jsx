import { Link, useLocation } from "react-router-dom";
import { ReactComponent as BackArrowIcon } from "../../assets/icons/backArrowIcon.svg";
import { ReactComponent as BackArrowIconGray } from "../../assets/icons/backArrowIconGray.svg";

function BackButton({ url }) {
  const { pathname } = useLocation();

  return (
    <Link to={url}>
      {pathname.slice(13, 17) === "Cast" ? (
        <BackArrowIconGray />
      ) : (
        <BackArrowIcon />
      )}
    </Link>
  );
}

export default BackButton;
