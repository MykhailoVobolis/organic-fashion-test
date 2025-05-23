import { useSelector } from "react-redux";
import { selectFollow } from "../../redux/content/selectors.js";

import ResponsiveImage from "../../components/ResponsiveImage/ResponsiveImage.jsx";
import FollowContent from "../../components/FollowContent/FollowContent.jsx";

export default function FollowSection() {
  const { title, formPlaceholders, btnText, image } = useSelector(selectFollow);

  return (
    <section
      id="contact"
      className="pt-[36px] pb-[77px] tablet:pt-[89px] tablet:pb-[103px] medium:pt-[79px] medium:pb-[131px] desktop:pt-[118px] desktop:pb-[142px] bg-[linear-gradient(to_bottom,_var(--background-light-grey)_0%,_var(--background-light-grey)_67%,_var(--background-grey)_67%,_var(--background-grey)_100%)] tablet:bg-[linear-gradient(to_right,_var(--background-light-grey)_0%,_var(--background-light-grey)_70%,_var(--background-grey)_70%,_var(--background-grey)_100%)]">
      <div className="flex flex-col items-center justify-between max-w-[257px] tablet:items-start tablet:flex-row ml-auto mr-auto tablet:max-w-[788px] medium:max-w-[1118px] desktop:ml-[274px] desktop:mr-[154px] desktop:max-w-[1492px] ">
        <FollowContent title={title} formPlaceholders={formPlaceholders} btnText={btnText} />
        <ResponsiveImage
          image={image}
          wrapperClasses="max-w-[243px] tablet:max-w-[302px] medium:max-w-[439px] desktop:max-w-[657px]"
        />
      </div>
    </section>
  );
}
