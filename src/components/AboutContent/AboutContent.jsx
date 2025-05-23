import { useMedia } from "react-use";

import MoreButton from "../MoreButton/MoreButton.jsx";
import ResponsiveImage from "../ResponsiveImage/ResponsiveImage.jsx";

export default function AboutContent({ title, description, btnText, image }) {
  const { firstRaragraph, secondParagraph } = description;
  const isTablet = useMedia("(min-width: 900px)");

  return (
    <div className="flex flex-col items-center tablet:items-start tablet:max-w-[561px] laptop:max-w-[725px] desktop:max-w-[1086px] tablet:pt-2 laptop:pt-0">
      <h2 className="text-[20px] text-center tablet:text-left tablet:text-[32px] desktop:text-[48px] tracking-[0.15em] font-bold mb-[10px] tablet:mb-[20px] laptop:mb-[37px] desktop:mb-[55px]">
        {title}
      </h2>
      <p className="text-center tablet:text-left tablet:text-[20px] desktop:text-[36px] leading-[1.28] mb-[47px] tablet:mb-3 laptop:mb-5 desktop:mb-3 ">
        {firstRaragraph}
      </p>
      {!isTablet && (
        <ResponsiveImage
          image={image}
          wrapperClasses="max-w-[198px] tablet:max-w-[251px] laptop:max-w-[316px] desktop:max-w-[473px]"
        />
      )}
      <p className="text-center tablet:text-left tablet:text-[20px] desktop:text-[36px] leading-[1.28] mb-[33px] mt-[33px] tablet:mb-8 tablet:mt-0 laptop:mb-[71px] desktop:mb-20 ">
        {secondParagraph}
      </p>
      <MoreButton btnText={btnText} />
    </div>
  );
}
