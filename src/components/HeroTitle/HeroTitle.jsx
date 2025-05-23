export default function HeroTitle({ title }) {
  return (
    <h1 className="text-[32px] tracking-[0.15em] tablet:text-[48px] mb-3 tablet:mb-0 laptop:mb-11 desktop:text-[90px] desktop:mb-6 text-center tablet:text-left">
      {title}
    </h1>
  );
}
