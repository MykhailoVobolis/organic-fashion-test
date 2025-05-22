import { lazy } from "react";
import Layout from "./Layout/Layout.jsx";

const HeroSection = lazy(() => import("../sections/HeroSection/HeroSection.jsx"));
const ShopSection = lazy(() => import("../sections/ShopSection/ShopSection.jsx"));
const CollectionSection = lazy(() => import("../sections/CollectionSection/CollectionSection.jsx"));

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <ShopSection />
      <CollectionSection />
    </Layout>
  );
}
