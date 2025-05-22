import { useSelector } from "react-redux";
import { selectHero } from "../../redux/content/selectors.js";

import ResponsiveImage from "../../components/ResponsiveImage/ResponsiveImage.jsx";
import HeroContent from "../../components/HeroContent/HeroContent.jsx";

export default function HeroSection() {
  const { title, description, btnText, image } = useSelector(selectHero);

  return (
    <section
      id="home"
      className="tablet:pt-[46px] tablet:pb-[101px] laptop:pt-[44px] laptop:pb-[144px]  desktop:pt-[63px] desktop:pb-[204px]">
      <div className="flex ml-auto mr-auto justify-between tablet:max-w-[866px] laptop:max-w-[1044px] desktop:max-w-[1620px]">
        <ResponsiveImage
          image={image}
          wrapperClasses="max-w-[220px] tablet:max-w-[320px] laptop:max-w-[410px] desktop:max-w-[578px]"
        />
        <HeroContent title={title} description={description} btnText={btnText} />
      </div>
    </section>
  );
}
