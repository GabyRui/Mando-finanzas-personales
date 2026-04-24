import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import Problem from '@/components/Problem'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import PricingAndForm from '@/components/PricingAndForm'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import WaitlistModal from '@/components/WaitlistModal'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-bg min-h-screen">
        <Hero />
        <SocialProof />
        <Problem />
        <Features />
        <HowItWorks />
        <PricingAndForm />
        <FAQ />
        <Footer />
      </main>
      <WaitlistModal />
    </>
  )
}
