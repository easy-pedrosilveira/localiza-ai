import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Localia Aí - Busca de CEP e Endereços, Rastreamento de Encomendas",
  description:
    "Encontre CEPs e endereços de forma rápida e fácil com o Localia Aí. Também oferecemos rastreamento de encomendas dos Correios e uma timeline para acompanhamento de eventos.",
  keywords:
    "busca de CEP, localizar endereço, rastreamento de encomendas, Correios, timeline, momentos históricos do Brasil, Localia Aí, estudo divertido",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
