import { lazy } from "react";
import Layout from "./Layout/Layout.jsx";
import { Toaster } from "react-hot-toast";

const HeroSection = lazy(() => import("../sections/HeroSection/HeroSection.jsx"));
const ShopSection = lazy(() => import("../sections/ShopSection/ShopSection.jsx"));
const CollectionSection = lazy(() => import("../sections/CollectionSection/CollectionSection.jsx"));
const AboutSection = lazy(() => import("../sections/AboutSection/AboutSection.jsx"));
const FollowSection = lazy(() => import("../sections/FollowSection/FollowSection.jsx"));

export default function App() {
  return (
    <>
      <Layout>
        <HeroSection />
        <ShopSection />
        <CollectionSection />
        <AboutSection />
        <FollowSection />
      </Layout>
      <Toaster position="top-right" />
    </>
  );
}
