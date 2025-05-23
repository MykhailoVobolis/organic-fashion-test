import { useSelector } from "react-redux";
import { selectHero } from "../../redux/content/selectors.js";
import { useMedia } from "react-use";

import ResponsiveImage from "../../components/ResponsiveImage/ResponsiveImage.jsx";
import HeroContent from "../../components/HeroContent/HeroContent.jsx";
import HeroTitle from "../../components/HeroTitle/HeroTitle.jsx";

export default function HeroSection() {
  const { title, description, btnText, image } = useSelector(selectHero);

  const isTablet = useMedia("(min-width: 900px)");

  return (
    <section
      id="home"
      className="pt-[19px] pb-[49px] tablet:pt-[46px] tablet:pb-[101px] medium:pt-[60px] medium:pb-[131px] laptop:pt-[44px] laptop:pb-[144px] desktop:pt-[63px] desktop:pb-[204px]">
      {!isTablet && <HeroTitle title={title} />}
      <div className="flex flex-row-reverse tablet:flex-row ml-auto mr-auto justify-between tablet:max-w-[866px] medium:max-w-[1090px] laptop:max-w-[1044px] desktop:max-w-[1620px]">
        <ResponsiveImage
          image={image}
          wrapperClasses="max-w-[220px] tablet:max-w-[320px] medium:max-w-[410px] desktop:max-w-[578px]"
        />
        <HeroContent title={title} description={description} btnText={btnText} />
      </div>
    </section>
  );
}
