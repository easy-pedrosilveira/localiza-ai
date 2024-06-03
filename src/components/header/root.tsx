import { InnerContainer, ItemsOfHeader } from "@/components";

export function Header() {
  return (
    <header className="fixed w-full h-20 flex items-center justify-center">
      <InnerContainer>
        <ItemsOfHeader />
      </InnerContainer>
    </header>
  );
}
