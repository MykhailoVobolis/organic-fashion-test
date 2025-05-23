import { createPortal } from "react-dom";
import { IoCloseSharp } from "react-icons/io5";

export default function BurgerMenuModal({ children, onCloseMenu }) {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onCloseMenu();
  };

  return createPortal(
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black/50 z-50 flex justify-end"
      role="dialog"
      aria-modal="true">
      <div className="flex items-center justify-center w-3/4 max-w-sm bg-[var(--green-grey)] h-full p-4 shadow-lg">
        <button
          onClick={onCloseMenu}
          className="text-2xl absolute top-5 right-5 text-[var(--background-grey)]"
          aria-label="Close menu">
          <IoCloseSharp size={41} />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
