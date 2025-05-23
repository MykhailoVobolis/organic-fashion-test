import { useSelector } from "react-redux";
import { selectAbout } from "../../redux/content/selectors.js";
import { useMedia } from "react-use";

import ResponsiveImage from "../../components/ResponsiveImage/ResponsiveImage.jsx";
import AboutContent from "../../components/AboutContent/AboutContent.jsx";

export default function AboutSection() {
  const { title, description, btnText, image } = useSelector(selectAbout);
  const isTablet = useMedia("(min-width: 900px)");

  return (
    <section
      id="about"
      className="pt-[27px] pb-[90px] tablet:pt-[68px] tablet:pb-[46px] laptop:pt-[107px] laptop:pb-[128px] desktop:pt-[160px] desktop:pb-[103px]">
      <div className="flex flex-col max-w-[280px] ml-auto mr-auto justify-between tablet:flex-row tablet:max-w-[852px] laptop:max-w-[1135px] desktop:max-w-[1700px] ">
        {isTablet && (
          <ResponsiveImage
            image={image}
            wrapperClasses="max-w-[198px] tablet:max-w-[251px] laptop:max-w-[316px] desktop:max-w-[473px]"
          />
        )}
        <AboutContent title={title} description={description} btnText={btnText} image={image} />
      </div>
    </section>
  );
}
