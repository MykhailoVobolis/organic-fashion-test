export default function FormButton({ children }) {
  return (
    <button
      type="submit"
      className="w-[371px] h-[88px] rounded-[10px]  flex items-center justify-center text-4xl uppercase tracking-[0.15em] text-white bg-[var(--green-grey)] hover:bg-[var(--green-grey-hover)] transition-colors duration-200 ease-in-out">
      {children}
    </button>
  );
}
