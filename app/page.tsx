import { Navigation } from "@/src/components/navigation"
import { Hero } from "@/src/components/hero"
import { ArtOfCandleMaking } from "@/src/components/art-of-candlemaking"
import { Materials } from "@/src/components/materials"
import { Footer } from "@/src/components/footer"
export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navigation/>
      <Hero/>
      <ArtOfCandleMaking/>
      <Materials/>
      <Footer/>
    </main>
  )
}
