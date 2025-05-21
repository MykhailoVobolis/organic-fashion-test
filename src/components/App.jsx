import { lazy } from "react";
import Layout from "./Layout/Layout.jsx";

const HeroSection = lazy(() => import("../sections/HeroSection/HeroSection.jsx"));
const ShopSection = lazy(() => import("../sections/ShopSection/ShopSection.jsx"));

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <ShopSection />
    </Layout>
  );
}
