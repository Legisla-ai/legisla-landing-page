import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Benefits } from "@/components/benefits"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen gradient-background">
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <Footer />
    </main>
  )
}
