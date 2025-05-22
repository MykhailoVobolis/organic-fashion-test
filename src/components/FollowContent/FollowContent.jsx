import FollowForm from "../FollowForm/FollowForm.jsx";

export default function FollowContent({ title, formPlaceholders, btnText }) {
  return (
    <div className="flex flex-col max-w-[1086px] pt-24">
      <h2 className="text-[48px] tracking-[0.15em] font-bold mb-[62px]">{title}</h2>
      <FollowForm formPlaceholders={formPlaceholders} btnText={btnText} />
    </div>
  );
}
