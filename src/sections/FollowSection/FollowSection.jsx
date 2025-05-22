import { useSelector } from "react-redux";
import { selectFollow } from "../../redux/content/selectors.js";

import ResponsiveImage from "../../components/ResponsiveImage/ResponsiveImage.jsx";
import FollowContent from "../../components/FollowContent/FollowContent.jsx";

export default function FollowSection() {
  const { title, formPlaceholders, btnText, image } = useSelector(selectFollow);

  return (
    <section
      id="contact"
      className="pt-[118px] pb-[142px] bg-[linear-gradient(to_right,_var(--background-light-grey)_0%,_var(--background-light-grey)_70%,_var(--background-grey)_70%,_var(--background-grey)_100%)]">
      <div className="flex ml-[274px] mr-[154px] max-w-[1492px] justify-between">
        <FollowContent title={title} formPlaceholders={formPlaceholders} btnText={btnText} />
        <ResponsiveImage
          image={image}
          wrapperClasses="max-w-[243px] tablet:max-w-[302px] laptop:max-w-[439px] desktop:max-w-[657px]"
        />
      </div>
    </section>
  );
}
