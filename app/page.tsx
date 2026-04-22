import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import HowItWorks from '@/components/HowItWorks'
import PricingAndForm from '@/components/PricingAndForm'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-bg min-h-screen">
      <Hero />
      <Problem />
      <HowItWorks />
      <PricingAndForm />
      <FAQ />
      <Footer />
    </main>
  )
}
