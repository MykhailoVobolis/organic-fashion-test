import { useSelector } from "react-redux";
import { selectNavItems } from "../../redux/content/selectors.js";

export default function NavigationList() {
  const navItems = useSelector(selectNavItems);

  return (
    <ul className="flex tablet:gap-[50px] laptop:gap-[80px] desktop:gap-[90px] ">
      {navItems.map((item) => (
        <li key={item} className="uppercase desktop:text-[32px] ">
          <a href={`#${item.toLowerCase()}`}>{item}</a>
        </li>
      ))}
    </ul>
  );
}
