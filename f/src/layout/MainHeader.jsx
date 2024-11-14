import Avatar from "../reusable/components/basicComponents/Avatar";
import H1mdAndUp from "../reusable/components/basicComponents/H1mdAndUp";
import H1smOnly from "../reusable/components/basicComponents/H1smOnly";
import Logo from "../reusable/components/componentsLvl1/Logo";

export default function MainHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-12 items-center gap-4 border-b border-gray-300/20 bg-black/60 p-3 backdrop-blur-sm">
      <Logo>
        <Avatar></Avatar>
        <H1mdAndUp>Tiberio Optical</H1mdAndUp>
        <H1smOnly>Tib&apos;s Opt.</H1smOnly>
      </Logo>
    </header>
  );
}
