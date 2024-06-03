import { linksOfNavigation } from "@/const";
import { InnerContainer, ScrollToTop } from "@/components";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative w-full h-auto flex justify-center py-6 bg-black-161616 text-gray-495263">
      <InnerContainer className="flex-col gap-6">
        <nav className="w-full flex flex-col items-center gap-2">
          {linksOfNavigation.map((items, index) => (
            <Link key={index} href={items?.link}>
              {items?.name}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col items-center gap-4 text-center ">
          <div className="w-20 h-20 rounded-lg bg-black-33303E" />
          <p className="">
            Somos uma plataforma inovadora dedicada a tornar a busca por
            endereços e locais mais fácil e precisa. Com a nossa ferramenta de
            busca por CEP, você pode explorar e descobrir diversos lugares
            incríveis de um país tropical sem sair de casa. Nosso objetivo é
            conectar você a todos os cantos deste paraíso, proporcionando uma
            experiência única e prática.
          </p>
        </div>
        <ScrollToTop />
        <div className="text-center">
          Copyright © 2024 PM Media. Todos os direitos reservados.
        </div>
      </InnerContainer>
    </footer>
  );
}
