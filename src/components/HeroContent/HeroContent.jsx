import { useMedia } from "react-use";
import HeroTitle from "../HeroTitle/HeroTitle.jsx";

export default function HeroContent({ title, description, btnText }) {
  const isTablet = useMedia("(min-width: 900px)");

  return (
    <div className="flex flex-col max-w-[198px] tablet:max-w-[526px] pl-8 tablet:pl-0 tablet:pt-6 laptop:max-w-[535px] laptop:pt-8 desktop:max-w-[986px] desktop:pt-6">
      {isTablet && <HeroTitle title={title} />}
      <p className="leading-[1.28] tablet:max-w-[418px] mb-[32px] text-[14px] tablet:text-[20px] laptop:mb-[60px] laptop:max-w-[535px] desktop:text-[36px] desktop:mb-14 desktop:max-w-[918px]">
        {description}
      </p>
      <a
        href="#shop"
        className="w-[151px] h-[32px] text-[13px] tablet:w-[227px] tablet:h-[43px] tablet:text-xl laptop:w-[206px] laptop:h-[55px] desktop:w-[291px] desktop:h-[77px] rounded-full bg-[var(--green-grey)] flex items-center justify-center uppercase tracking-[0.15em] text-white hover:bg-[var(--green-grey-hover)] transition-colors duration-200 ease-in-out">
        {btnText}
      </a>
    </div>
  );
}
