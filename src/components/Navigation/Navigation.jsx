import Logo from "../Logo/Logo.jsx";
import NavigationList from "../NavigationList/NavigationList.jsx";

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between ">
      <Logo />
      <NavigationList />
    </nav>
  );
}
