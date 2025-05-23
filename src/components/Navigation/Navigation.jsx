import { useMedia } from "react-use";

import Logo from "../Logo/Logo.jsx";
import NavigationList from "../NavigationList/NavigationList.jsx";
import BurgerButton from "../BurgerButton/BurgerButton.jsx";

export default function Navigation() {
  const isTablet = useMedia("(min-width: 900px)");

  return (
    <nav className="flex items-center justify-between ">
      <Logo />
      {isTablet ? <NavigationList /> : <BurgerButton />}
    </nav>
  );
}
