import FollowForm from "../FollowForm/FollowForm.jsx";

export default function FollowContent({ title, formPlaceholders, btnText }) {
  return (
    <div className="flex flex-col tablet:max-w-[436px] tablet:pt-4 medium:max-w-[561px] medium:pt-16 desktop:max-w-[617px] desktop:pt-24">
      <h2 className="text-[20px] mb-[30px] text-center tablet:text-left tablet:text-[32px] desktop:text-[48px] tracking-[0.15em] font-bold tablet:mb-[18px] medium:mb-[33px] desktop:mb-[62px]">
        {title}
      </h2>
      <FollowForm formPlaceholders={formPlaceholders} btnText={btnText} />
    </div>
  );
}
