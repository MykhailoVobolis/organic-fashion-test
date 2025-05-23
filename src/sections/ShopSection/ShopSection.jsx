import { useSelector } from "react-redux";
import ResponsiveImage from "../../components/ResponsiveImage/ResponsiveImage.jsx";
import { selectShop } from "../../redux/content/selectors.js";

export default function ShopSection() {
  const { title, images } = useSelector(selectShop);

  return (
    <section id="shop" className="pt-[25px] tablet:pt-[60px] desktop:pt-[70px] bg-white">
      <div className="flex flex-col ml-auto mr-auto justify-between items-center tablet:max-w-[992px] laptop:max-w-[1372px] desktop:max-w-[1920px]">
        <h2 className="text-[20px] mb-[31px] tablet:text-[32px] desktop:text-[48px] tablet:mb-12 laptop:mb-[86px] desktop:mb-8 tablet:w-[310px] laptop:w-[620px] tracking-[0.15em] text-center">
          {title}
        </h2>
        <div className="flex justify-between w-[100%] mb-[10px] tablet:mb-[18px]">
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
