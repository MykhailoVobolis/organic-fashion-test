import { useSelector } from "react-redux";
import { selectLogo } from "../../redux/content/selectors.js";

export default function Logo() {
  const { nameLogo } = useSelector(selectLogo);

  return (
    <a href="/" className="text-4xl">
      <span>{nameLogo}</span>
    </a>
  );
}
