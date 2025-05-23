import { Suspense } from "react";
import HeaderSection from "../../sections/HeaderSection/HeaderSection.jsx";

export default function Layout({ children, onOpenMenu }) {
  return (
    <div>
      <HeaderSection onOpenMenu={onOpenMenu} />
      <main>
        <Suspense fallback={<div></div>}>{children}</Suspense>
      </main>
    </div>
  );
}
