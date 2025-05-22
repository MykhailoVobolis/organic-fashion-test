import MoreButton from "../MoreButton/MoreButton.jsx";

export default function AboutContent({ title, description, btnText }) {
  const { firstRaragraph, secondParagraph } = description;

  return (
    <div className="flex flex-col tablet:max-w-[561px] laptop:max-w-[725px] desktop:max-w-[1086px] tablet:pt-2 laptop:pt-0">
      <h2 className="tablet:text-[32px] desktop:text-[48px] tracking-[0.15em] font-bold tablet:mb-[20px] laptop:mb-[37px] desktop:mb-[55px]">
        {title}
      </h2>
      <p className="tablet:text-[20px] desktop:text-[36px] leading-[1.28] tablet:mb-3 laptop:mb-5 desktop:mb-3 ">
        {firstRaragraph}
      </p>
      <p className="tablet:text-[20px] desktop:text-[36px] leading-[1.28] tablet:mb-8 laptop:mb-[71px] desktop:mb-20 ">
        {secondParagraph}
      </p>
      <MoreButton btnText={btnText} />
    </div>
  );
}
