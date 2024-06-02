import { InnerContainer } from "@/components";
import Button from "@/components/button/root";

export default function Home() {
  return (
    <main className="w-full h-[100vh] flex items-center justify-center">
      <InnerContainer className="bg-red-600 flex-col items-center justify-center">
        BUSCA CEP
        <Button className="text-white">Pesquisar</Button>
      </InnerContainer>
    </main>
  );
}
