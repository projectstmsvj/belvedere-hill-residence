import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { StatsBar } from "@/components/site/StatsBar";
import { Concept } from "@/components/site/Concept";
import { Amenities } from "@/components/site/Amenities";
import { FloorPlans } from "@/components/site/FloorPlans";
import { Location } from "@/components/site/Location";
import { Developer } from "@/components/site/Developer";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title:
          "Belvedere Hill Residence · 4 Suítes · 210m² no Caminho das Árvores",
      },
      {
        name: "description",
        content:
          "Apartamentos de alto padrão no Caminho das Árvores, Salvador. Torre única, 4 suítes, 210m² com gabinete, nascente total. Por Grupo Azinunes.",
      },
      { property: "og:title", content: "Belvedere Hill Residence" },
      {
        property: "og:description",
        content:
          "A vida a seu Bel-Prazer no Caminho das Árvores. 4 suítes, 210m², torre única.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <StatsBar />
      <Concept />
      <Amenities />
      <FloorPlans />
      <Location />
      <Developer />
      <Footer />
      <WhatsAppButton />
      <Toaster position="top-center" />
    </main>
  );
}
