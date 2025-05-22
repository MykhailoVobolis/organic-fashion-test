import { useSelector } from "react-redux";
import { selectAbout } from "../../redux/content/selectors.js";

import ResponsiveImage from "../../components/ResponsiveImage/ResponsiveImage.jsx";
import AboutContent from "../../components/AboutContent/AboutContent.jsx";

export default function AboutSection() {
  const { title, description, btnText, image } = useSelector(selectAbout);

  return (
    <section id="about" className="pt-[160px] pb-[103px]">
      <div className="flex ml-auto mr-auto max-w-[1700px] justify-between">
        <ResponsiveImage
          image={image}
          wrapperClasses="max-w-[198px] tablet:max-w-[251px] laptop:max-w-[316px] desktop:max-w-[473px]"
        />
        <AboutContent title={title} description={description} btnText={btnText} />
      </div>
    </section>
  );
}
