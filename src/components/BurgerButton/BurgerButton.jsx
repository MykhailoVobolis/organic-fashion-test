import { IoMenuSharp } from "react-icons/io5";

export default function BurgerButton({ onOpenMenu }) {
  return (
    <button
      className="flex items-center justify-center w-[63px] h-[47px] text-[var(--background-grey)] bg-[var(--green-grey)] rounded-[6px]"
      onClick={onOpenMenu}
      aria-label="Open menu">
      <IoMenuSharp size={41} />
    </button>
  );
}
