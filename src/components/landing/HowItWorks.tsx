import { useState } from 'react'

const publisherSteps = [
  {
    num: '01',
    title: 'Submit your site',
    desc: 'Add your URL, describe your audience, and set a weekly price that feels right to you.',
    icon: '🌐',
  },
  {
    num: '02',
    title: 'Verify traffic (optional)',
    desc: 'Connect Vercel, PostHog, or Plausible. Verified sites get 3× more offers.',
    icon: '📊',
  },
  {
    num: '03',
    title: 'Review & accept offers',
    desc: 'You see every offer before anything touches your site. Full editorial control.',
    icon: '✅',
  },
  {
    num: '04',
    title: 'One paste → live',
    desc: 'Paste one script tag. The ad slot appears exactly as previewed. Done.',
    icon: '🚀',
  },
]

const sponsorSteps = [
  {
    num: '01',
    title: 'Browse the marketplace',
    desc: 'Filter by niche, monthly traffic, and price range. Every listing shows verified stats.',
    icon: '🔍',
  },
  {
    num: '02',
    title: 'Preview your ad live',
    desc: 'See exactly how your text + link looks in that site\'s navbar before you commit.',
    icon: '👁️',
  },
  {
    num: '03',
    title: 'Submit an offer',
    desc: 'Write your ad copy, pick your dates, pay securely. The owner reviews it.',
    icon: '💌',
  },
  {
    num: '04',
    title: 'Go live',
    desc: 'Clean 20px strip. Real builder audience. No middlemen, no wait.',
    icon: '⚡',
  },
]

interface Step {
  num: string
  title: string
  desc: string
  icon: string
}

interface StepListProps {
  steps: Step[]
  accentColor: string
}

function StepList({ steps, accentColor }: StepListProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {steps.map((step, i) => (
        <div
          key={i}
          onMouseEnter={() => setHoveredIdx(i)}
          onMouseLeave={() => setHoveredIdx(null)}
          style={{
            display: 'flex',
            gap: 16,
            paddingBottom: i < steps.length - 1 ? 28 : 0,
            cursor: 'default',
          }}
        >
          {/* Timeline */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
            <div style={{
              width: 38,
              height: 38,
              borderRadius: 10,
              border: `1.5px solid ${hoveredIdx === i ? accentColor + '60' : 'rgba(255,255,255,0.1)'}`,
              background: hoveredIdx === i ? accentColor + '18' : 'rgba(255,255,255,0.04)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: 1,
              transition: 'all 0.2s',
              boxShadow: hoveredIdx === i ? `0 0 0 3px ${accentColor}20` : 'none',
            }}>
              <span style={{ fontSize: 14, lineHeight: 1 }}>{step.icon}</span>
            </div>
            {i < steps.length - 1 && (
              <div style={{
                width: 1,
                flex: 1,
                marginTop: 6,
                background: `linear-gradient(180deg, ${accentColor}40 0%, rgba(255,255,255,0.06) 100%)`,
                transition: 'opacity 0.2s',
              }} />
            )}
          </div>

          {/* Content */}
          <div style={{ paddingTop: 7, paddingBottom: i < steps.length - 1 ? 0 : 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
              <span className="font-mono" style={{
                fontSize: 9.5,
                color: accentColor,
                opacity: 0.7,
                letterSpacing: '0.06em',
              }}>
                {step.num}
              </span>
              <div style={{ fontSize: 14.5, fontWeight: 600, color: '#fff', letterSpacing: '-0.01em' }}>
                {step.title}
              </div>
            </div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
              {step.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{
      background: 'var(--ink)',
      padding: '96px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative blobs */}
      <div style={{
        position: 'absolute',
        top: -80, left: -80,
        width: 360,
        height: 360,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(200,75,47,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
        filter: 'blur(40px)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: -60, right: -60,
        width: 280,
        height: 280,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,168,83,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
        filter: 'blur(40px)',
      }} />

      <div style={{ maxWidth: 1160, margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div className="font-mono" style={{
            fontSize: 11,
            letterSpacing: '0.1em',
            color: 'rgba(255,255,255,0.35)',
            marginBottom: 14,
            textTransform: 'uppercase',
          }}>
            How it works
          </div>
          <h2 className="font-serif" style={{
            fontSize: 'clamp(32px, 4vw, 50px)',
            color: '#fff',
            letterSpacing: '-0.035em',
            lineHeight: 1.08,
          }}>
            Built for both sides of the deal
          </h2>
        </div>

        {/* Two columns */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          {/* Publisher */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 18,
            padding: '36px 32px',
            position: 'relative',
            overflow: 'hidden',
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(200,75,47,0.3)'
            e.currentTarget.style.boxShadow = '0 0 0 1px rgba(200,75,47,0.1) inset'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
            e.currentTarget.style.boxShadow = 'none'
          }}
          >
            {/* Corner glow */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0,
              width: 180, height: 180,
              background: 'radial-gradient(circle at top left, rgba(200,75,47,0.1), transparent 70%)',
              pointerEvents: 'none',
            }} />
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 32,
              padding: '6px 14px',
              borderRadius: 100,
              background: 'rgba(200,75,47,0.12)',
              border: '1px solid rgba(200,75,47,0.25)',
            }}>
              <span style={{ fontSize: 13 }}>🏗️</span>
              <span style={{ fontSize: 12, color: 'var(--rust-light)', fontWeight: 600, letterSpacing: '-0.01em' }}>
                For Publishers
              </span>
            </div>
            <StepList steps={publisherSteps} accentColor="var(--rust-light)" />
          </div>

          {/* Sponsor */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 18,
            padding: '36px 32px',
            position: 'relative',
            overflow: 'hidden',
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(212,168,83,0.3)'
            e.currentTarget.style.boxShadow = '0 0 0 1px rgba(212,168,83,0.1) inset'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
            e.currentTarget.style.boxShadow = 'none'
          }}
          >
            <div style={{
              position: 'absolute',
              top: 0, right: 0,
              width: 180, height: 180,
              background: 'radial-gradient(circle at top right, rgba(212,168,83,0.1), transparent 70%)',
              pointerEvents: 'none',
            }} />
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 32,
              padding: '6px 14px',
              borderRadius: 100,
              background: 'rgba(212,168,83,0.12)',
              border: '1px solid rgba(212,168,83,0.25)',
            }}>
              <span style={{ fontSize: 13 }}>📣</span>
              <span style={{ fontSize: 12, color: 'var(--gold)', fontWeight: 600, letterSpacing: '-0.01em' }}>
                For Sponsors
              </span>
            </div>
            <StepList steps={sponsorSteps} accentColor="var(--gold)" />
          </div>
        </div>
      </div>
    </section>
  )
}
