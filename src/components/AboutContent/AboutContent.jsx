export default function AboutContent({ title, description, btnText }) {
  const { firstRaragraph, secondParagraph } = description;

  return (
    <div className="flex flex-col max-w-[1086px] pt-6">
      <h2 className="text-[48px] tracking-[0.15em] font-bold mb-[55px]">{title}</h2>
      <p className="text-[36px] leading-[1.28] mb-3 ">{firstRaragraph}</p>
      <p className="text-[36px] leading-[1.28] mb-20 ">{secondParagraph}</p>
      <button className="w-[350px] h-[88px] rounded-[10px] border-solid border-[5px] border-[var(--green-grey)] flex items-center justify-center text-4xl uppercase tracking-[0.15em] hover:border-[var(--green-grey-hover)] transition-colors duration-200 ease-in-out">
        {btnText}
      </button>
    </div>
  );
}
