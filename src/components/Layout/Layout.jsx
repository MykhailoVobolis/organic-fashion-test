import { Suspense } from "react";
import HeaderSection from "../../sections/HeaderSection/HeaderSection.jsx";

export default function Layout({ children }) {
  return (
    <div>
      <HeaderSection />
      <main>
        <Suspense fallback={<div></div>}>{children}</Suspense>
      </main>
    </div>
  );
}
