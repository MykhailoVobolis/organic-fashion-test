import { useSelector } from "react-redux";
import { selectHero } from "../../redux/content/selectors.js";

import ResponsiveImage from "../../components/ResponsiveImage/ResponsiveImage.jsx";
import HeroContent from "../../components/HeroContent/HeroContent.jsx";

export default function HeroSection() {
  const { title, description, btnText, image } = useSelector(selectHero);

  return (
    <section id="home" className="pt-[63px] pb-[204px]">
      <div className="flex ml-auto mr-auto max-w-[1620px] justify-between">
        <ResponsiveImage
          image={image}
          wrapperClasses="max-w-[220px] tablet:max-w-[320px] laptop:max-w-[410px] desktop:max-w-[578px]"
        />
        <HeroContent title={title} description={description} btnText={btnText} />
      </div>
    </section>
  );
}
