import { useSelector } from "react-redux";
import { selectNavItems } from "../../redux/content/selectors.js";

export default function NavigationList() {
  const navItems = useSelector(selectNavItems);

  return (
    <ul className="flex gap-[90px] ">
      {navItems.map((item) => (
        <li key={item} className="text-[32px] uppercase">
          <a href={`#${item.toLowerCase()}`}>{item}</a>
        </li>
      ))}
    </ul>
  );
}
