import { createFileRoute } from '@tanstack/react-router'
import LandingNavbar from '#/components/landing/LandingNavbar'
import Hero from '#/components/landing/Hero'
import Ticker from '#/components/landing/Ticker'
import HowItWorks from '#/components/landing/HowItWorks'
import LandingFooter from '#/components/landing/LandingFooter'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function LandingPage() {
  return (
    <div className="landing-page" style={{ background: 'var(--cream)', minHeight: '100vh' }}>
      <LandingNavbar />
      <Hero />
      <Ticker />
      <HowItWorks />
      <LandingFooter />
    </div>
  )
}

