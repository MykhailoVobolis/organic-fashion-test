import { lazy, useState } from "react";
import Layout from "./Layout/Layout.jsx";
import { Toaster } from "react-hot-toast";
import NavigationList from "./NavigationList/NavigationList.jsx";
import BurgerMenuModal from "./BurgerMenuModal/BurgerMenuModal.jsx";

const HeroSection = lazy(() => import("../sections/HeroSection/HeroSection.jsx"));
const ShopSection = lazy(() => import("../sections/ShopSection/ShopSection.jsx"));
const CollectionSection = lazy(() => import("../sections/CollectionSection/CollectionSection.jsx"));
const AboutSection = lazy(() => import("../sections/AboutSection/AboutSection.jsx"));
const FollowSection = lazy(() => import("../sections/FollowSection/FollowSection.jsx"));

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const onCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <Layout onOpenMenu={onOpenMenu}>
        <HeroSection />
        <ShopSection />
        <CollectionSection />
        <AboutSection />
        <FollowSection />
      </Layout>
      <Toaster position="top-right" />

      {isMenuOpen && (
        <BurgerMenuModal onCloseMenu={onCloseMenu}>
          <NavigationList onCloseMenu={onCloseMenu} />
        </BurgerMenuModal>
      )}
    </>
  );
}
