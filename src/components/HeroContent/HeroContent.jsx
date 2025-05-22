export default function HeroContent({ title, description, btnText }) {
  return (
    <div className="flex flex-col tablet:max-w-[526px] tablet:pt-6 laptop:max-w-[535px] laptop:pt-8 desktop:max-w-[986px] desktop:pt-6">
      <h1 className="tracking-[0.15em] tablet:text-[48px] laptop:mb-11 desktop:text-[90px] desktop:mb-6">{title}</h1>
      <p className="leading-[1.28] tablet:max-w-[418px] tablet:mb-[32px] tablet:text-[20px] laptop:mb-[60px] laptop:max-w-[535px] desktop:text-[36px] desktop:mb-14 desktop:max-w-[918px]">
        {description}
      </p>
      <a
        href="#shop"
        className="tablet:w-[227px] tablet:h-[43px] tablet:text-xl laptop:w-[206px] laptop:h-[55px] desktop:w-[291px] desktop:h-[77px] rounded-full bg-[var(--green-grey)] flex items-center justify-center uppercase tracking-[0.15em] text-white hover:bg-[var(--green-grey-hover)] transition-colors duration-200 ease-in-out">
        {btnText}
      </a>
    </div>
  );
}
