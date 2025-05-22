export default function FormButton({ children }) {
  return (
    <button
      type="submit"
      className="tablet:w-[100%] tablet:h-[45px] laptop:w-[205px] laptop:h-[59px] desktop:w-[371px] desktop:h-[88px] rounded-[10px]  flex items-center justify-center tablet:text-xl desktop:text-4xl uppercase tracking-[0.15em] text-white bg-[var(--green-grey)] hover:bg-[var(--green-grey-hover)] transition-colors duration-200 ease-in-out">
      {children}
    </button>
  );
}
