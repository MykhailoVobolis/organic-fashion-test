export default function FormButton({ children }) {
  return (
    <button
      type="submit"
      className="w-[100%] h-[45px] medium:w-[205px] medium:h-[59px] desktop:w-[371px] desktop:h-[88px] rounded-[10px]  flex items-center justify-center text-[15px] tablet:text-xl desktop:text-4xl uppercase tracking-[0.15em] text-white bg-[var(--green-grey)] hover:bg-[var(--green-grey-hover)] transition-colors duration-200 ease-in-out">
      {children}
    </button>
  );
}
