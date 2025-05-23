import Navigation from "../../components/Navigation/Navigation.jsx";

export default function HeaderSection() {
  return (
    <header className="pt-[16px] pb-[16px] tablet:pt-[46px] tablet:pb-[46px] laptop:pt-[73px] laptop:pb-[44px] desktop:pt-[84px] desktop:pb-[61px]">
      <div className="pl-[15px] pr-[15px] tablet:pl-[15px] tablet:pr-[15px] ml-auto mr-auto tablet:max-w-[852px] laptop:max-w-[1070px] desktop:max-w-[1526px]">
        <Navigation />
      </div>
    </header>
  );
}
