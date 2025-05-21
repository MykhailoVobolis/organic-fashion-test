import { useSelector } from "react-redux";
import ResponsiveImage from "../../components/ResponsiveImage/ResponsiveImage.jsx";
import { selectShop } from "../../redux/content/selectors.js";

export default function ShopSection() {
  const { title, images } = useSelector(selectShop);

  return (
    <section id="shop" className="pt-[70px] bg-white">
      <h2 className="text-[48px] tracking-[0.15em] mb-8 text-center">{title}</h2>
      <div className="flex flex-col gap-[18px] ml-auto mr-auto max-w-[1920px] justify-between items-center">
        <div className="flex justify-between w-[100%]">
          <ResponsiveImage
            image={images[0]}
            wrapperClasses="max-w-[105px] tablet:max-w-[213px] laptop:max-w-[291px] desktop:max-w-[409px]"
          />
          <ResponsiveImage
            image={images[1]}
            wrapperClasses="max-w-[133px] tablet:max-w-[269px] laptop:max-w-[368px] desktop:max-w-[517px]"
          />
          <ResponsiveImage
            image={images[2]}
            wrapperClasses="max-w-[133px] tablet:max-w-[269px] laptop:max-w-[368px] desktop:max-w-[517px]"
          />
          <ResponsiveImage
            image={images[3]}
            wrapperClasses="max-w-[104px] tablet:max-w-[211px] laptop:max-w-[289px] desktop:max-w-[406px]"
          />
        </div>
        <ResponsiveImage image={images[4]} wrapperClasses="w-[100%]" />
      </div>
    </section>
  );
}
