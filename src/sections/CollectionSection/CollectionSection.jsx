import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/content/selectors.js";

import ResponsiveImage from "../../components/ResponsiveImage/ResponsiveImage.jsx";

export default function CollectionSection() {
  const { title, subtitle, images } = useSelector(selectCollection);
  return (
    <section className="pt-[33px] pb-[62px] tablet:pt-[60px] tablet:pb-[70px] laptop:pt-[80px] laptop:pb-[150px] desktop:pt-[118px] desktop:pb-[133px] bg-[linear-gradient(to_bottom,_var(--background-light-grey)_0%,_var(--background-light-grey)_50%,_var(--background-grey)_50%,_var(--background-grey)_100%)]">
      <div className="flex flex-col items-center ml-auto mr-auto tablet:max-w-[906px] medium:max-w-[1162px] laptop:max-w-[1173px] desktop:max-w-[1740px] ">
        <h2 className="text-[20px] tablet:text-[32px] desktop:text-[48px] tracking-[0.15em] mb-[30px] tablet:mb-12 laptop:mb-[102px] desktop:mb-[76px] tablet:w-[310px] medium:w-[620px] text-center">
          {title}
        </h2>
        <div className="flex justify-between w-[100%] mb-[24px]  tablet:mb-[48px] laptop:mb-[62px] desktop:mb-[94px]">
          <ResponsiveImage
            image={images[0]}
            wrapperClasses="max-w-[143px] tablet:max-w-[261px] medium:max-w-[335px] laptop:max-w-[338px] desktop:max-w-[502px]"
          />
          <ResponsiveImage
            image={images[1]}
            wrapperClasses="max-w-[177px] tablet:max-w-[261px] medium:max-w-[335px] laptop:max-w-[338px] desktop:max-w-[502px]"
          />
          <ResponsiveImage
            image={images[2]}
            wrapperClasses="max-w-[151px] tablet:max-w-[261px] medium:max-w-[335px] laptop:max-w-[338px] desktop:max-w-[502px]"
          />
        </div>
        <p className="text-[15px] max-w-[300px] tablet:text-[32px] desktop:text-[40px] leading-[1.28] tracking-[0.15em] tablet:max-w-[750px] medium:max-w-[970px] desktop:max-w-[1346px] text-center">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
