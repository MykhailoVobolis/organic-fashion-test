export default function HeroContent({ title, description, btnText }) {
  return (
    <div className="flex flex-col max-w-[986px] pt-6">
      <h1 className="text-[90px] tracking-[0.15em] mb-6">{title}</h1>
      <p className="text-[36px] leading-[1.28] mb-14 max-w-[918px]">{description}</p>
      <a
        href="#shop"
        className="w-[291px] h-[77px] rounded-full bg-[var(--green-grey)] flex items-center justify-center text-xl uppercase tracking-[0.15em] text-white">
        {btnText}
      </a>
    </div>
  );
}
