import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/content/selectors.js";

import ResponsiveImage from "../../components/ResponsiveImage/ResponsiveImage.jsx";

export default function CollectionSection() {
  const { title, subtitle, images } = useSelector(selectCollection);
  return (
    <section className="pt-[118px] pb-[133px] bg-[linear-gradient(to_bottom,_var(--background-light-grey)_0%,_var(--background-light-grey)_50%,_var(--background-grey)_50%,_var(--background-grey)_100%)]">
      <div className="flex flex-col items-center ml-auto mr-auto max-w-[1740px] ">
        <h2 className="text-[48px] tracking-[0.15em] mb-[76px] text-center">{title}</h2>
        <div className="flex justify-between w-[100%] mb-[94px]">
          <ResponsiveImage
            image={images[0]}
            wrapperClasses="max-w-[143px] tablet:max-w-[261px] laptop:max-w-[338px] desktop:max-w-[502px]"
          />
          <ResponsiveImage
            image={images[1]}
            wrapperClasses="max-w-[177px] tablet:max-w-[261px] laptop:max-w-[338px] desktop:max-w-[502px]"
          />
          <ResponsiveImage
            image={images[2]}
            wrapperClasses="max-w-[151px] tablet:max-w-[261px] laptop:max-w-[338px] desktop:max-w-[502px]"
          />
        </div>
        <p className="text-[40px] leading-[1.28] tracking-[0.15em] max-w-[1346px] text-center">{subtitle}</p>
      </div>
    </section>
  );
}
