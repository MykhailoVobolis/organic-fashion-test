export default function MoreButton({ btnText }) {
  return (
    <button className="tablet:w-[194px] tablet:h-[46px] laptop:w-[205px] laptop:h-[59px] desktop:w-[350px] desktop:h-[88px] rounded-[10px] border-solid border-[5px] border-[var(--green-grey)] flex items-center justify-center tablet:text-xl desktop:text-4xl uppercase tracking-[0.15em] hover:border-[var(--green-grey-hover)] transition-colors duration-200 ease-in-out">
      {btnText}
    </button>
  );
}
