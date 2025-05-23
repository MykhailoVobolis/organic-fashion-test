import { useSelector } from "react-redux";
import { selectNavItems } from "../../redux/content/selectors.js";

export default function NavigationList({ onCloseMenu }) {
  const navItems = useSelector(selectNavItems);

  return (
    <ul className="flex flex-col items-center gap-[20px] tablet:flex-row tablet:gap-[50px] laptop:gap-[80px] desktop:gap-[90px] ">
      {navItems.map((item) => (
        <li key={item} className="uppercase text-white tablet:text-black desktop:text-[32px] " onClick={onCloseMenu}>
          <a href={`#${item.toLowerCase()}`}>{item}</a>
        </li>
      ))}
    </ul>
  );
}
