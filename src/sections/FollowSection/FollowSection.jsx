import { useSelector } from "react-redux";
import { selectFollow } from "../../redux/content/selectors.js";

import ResponsiveImage from "../../components/ResponsiveImage/ResponsiveImage.jsx";
import FollowContent from "../../components/FollowContent/FollowContent.jsx";

export default function FollowSection() {
  const { title, formPlaceholders, btnText, image } = useSelector(selectFollow);

  return (
    <section
      id="contact"
      className="tablet:pt-[89px] tablet:pb-[103px] laptop:pt-[79px] laptop:pb-[131px] desktop:pt-[118px] desktop:pb-[142px] bg-[linear-gradient(to_right,_var(--background-light-grey)_0%,_var(--background-light-grey)_70%,_var(--background-grey)_70%,_var(--background-grey)_100%)]">
      <div className="flex justify-between tablet:ml-auto tablet:mr-auto tablet:max-w-[788px] laptop:max-w-[1118px] desktop:ml-[274px] desktop:mr-[154px] desktop:max-w-[1492px] ">
        <FollowContent title={title} formPlaceholders={formPlaceholders} btnText={btnText} />
        <ResponsiveImage
          image={image}
          wrapperClasses="max-w-[243px] tablet:max-w-[302px] laptop:max-w-[439px] desktop:max-w-[657px]"
        />
      </div>
    </section>
  );
}
