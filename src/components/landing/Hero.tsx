import { useState, useEffect } from 'react'
import WaitlistForm from './WaitlistForm'

const AD_COPIES = [
  { text: 'ShipFast — Launch your SaaS in days, not months.', link: 'shipfast.dev', color: '#fff' },
  { text: 'Lemon Squeezy — Sell software without the headache.', link: 'lemonsqueezy.com', color: '#fde68a' },
  { text: 'Resend — Email API built for developers.', link: 'resend.com', color: '#c7d2fe' },
]

function NavbarMockup() {
  const [adIdx, setAdIdx] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const t = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setAdIdx(i => (i + 1) % AD_COPIES.length)
        setFading(false)
      }, 320)
    }, 3200)
    return () => clearInterval(t)
  }, [])

  const ad = AD_COPIES[adIdx]

  return (
    <div style={{
      borderRadius: 16,
      overflow: 'hidden',
      border: '1.5px solid var(--landing-border)',
      background: 'var(--card-bg)',
      boxShadow: '0 2px 0 rgba(255,255,255,0.8) inset, 0 28px 80px rgba(15,13,10,0.1)',
      transition: 'box-shadow 0.3s',
    }}>
      {/* Browser chrome */}
      <div style={{
        background: 'linear-gradient(180deg, #EDE8E0 0%, #E5E0D8 100%)',
        padding: '10px 14px',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        borderBottom: '1px solid var(--landing-border)',
      }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {['#f87171','#fbbf24','#34d399'].map(c => (
            <div key={c} style={{
              width: 10, height: 10, borderRadius: '50%', background: c,
              boxShadow: `0 0 0 1px rgba(0,0,0,0.08)`,
            }} />
          ))}
        </div>
        <div style={{
          flex: 1,
          background: 'rgba(255,255,255,0.7)',
          border: '1px solid rgba(0,0,0,0.08)',
          borderRadius: 5,
          padding: '4px 10px',
          fontSize: 10.5,
          color: 'var(--landing-muted)',
          fontFamily: 'DM Mono, monospace',
          display: 'flex',
          alignItems: 'center',
          gap: 5,
        }}>
          <svg width="8" height="10" viewBox="0 0 8 10" fill="none">
            <path d="M4 1C2.3 1 1 2.3 1 4s1.3 3 3 3 3-1.3 3-3S5.7 1 4 1zm0 5.5C2.6 6.5 1.5 5.4 1.5 4S2.6 1.5 4 1.5 6.5 2.6 6.5 4 5.4 6.5 4 6.5zM4 7v2" stroke="#6B6560" strokeWidth="1" strokeLinecap="round"/>
          </svg>
          myopensourceproject.dev
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {[14, 14].map((_, i) => (
            <div key={i} style={{ width: 14, height: 14, borderRadius: 3, background: 'rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.06)' }} />
          ))}
        </div>
      </div>

      {/* THE PRODUCT: the ad slot */}
      <div style={{
        background: 'var(--ink)',
        padding: '0 16px',
        height: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
        }} />
        <span style={{
          fontSize: 9.5,
          color: 'rgba(255,255,255,0.4)',
          fontFamily: 'DM Mono, monospace',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          flexShrink: 0,
        }}>sponsor</span>
        <span style={{ width: 1, height: 10, background: 'rgba(255,255,255,0.15)', flexShrink: 0 }} />
        <span style={{
          fontSize: 11.5,
          color: fading ? 'transparent' : ad.color,
          fontWeight: 500,
          transition: 'color 0.28s ease',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}>
          {ad.text}
        </span>
        <span style={{
          fontSize: 11,
          color: fading ? 'transparent' : 'var(--gold)',
          fontWeight: 600,
          flexShrink: 0,
          transition: 'color 0.28s ease',
        }}>→ {ad.link}</span>
      </div>

      {/* Fake site content */}
      <div style={{ padding: '0 20px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '13px 0',
          borderBottom: '1px solid var(--landing-border)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <div style={{ width: 20, height: 20, borderRadius: 5, background: 'var(--rust)', opacity: 0.75 }} />
            <div style={{ width: 72, height: 7, borderRadius: 4, background: 'var(--landing-border)' }} />
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            {[40, 32, 44].map((w, i) => (
              <div key={i} style={{ width: w, height: 6, borderRadius: 3, background: 'var(--landing-border)', opacity: 0.7 }} />
            ))}
          </div>
        </div>

        <div style={{ padding: '28px 0 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ width: '66%', height: 16, borderRadius: 4, background: 'var(--landing-border)' }} />
          <div style={{ width: '48%', height: 16, borderRadius: 4, background: 'var(--landing-border)', opacity: 0.55 }} />
          <div style={{ width: '85%', height: 8, borderRadius: 3, background: 'var(--landing-border)', opacity: 0.35, marginTop: 6 }} />
          <div style={{ width: '70%', height: 8, borderRadius: 3, background: 'var(--landing-border)', opacity: 0.25 }} />
          <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
            <div style={{ width: 80, height: 28, borderRadius: 6, background: 'var(--rust)', opacity: 0.65 }} />
            <div style={{ width: 66, height: 28, borderRadius: 6, background: 'var(--landing-border)', opacity: 0.6 }} />
          </div>
        </div>
      </div>

      {/* Caption bar */}
      <div style={{
        padding: '10px 20px',
        borderTop: '1px solid var(--landing-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(245,240,232,0.5)',
      }}>
        <span className="font-mono" style={{ fontSize: 10, color: 'var(--landing-muted)' }}>
          ↑ live ad rotates automatically
        </span>
        <div style={{ display: 'flex', gap: 6 }}>
          {AD_COPIES.map((_, i) => (
            <div key={i} style={{
              width: i === adIdx ? 16 : 5,
              height: 5,
              borderRadius: 100,
              background: i === adIdx ? 'var(--rust)' : 'var(--landing-border)',
              transition: 'width 0.3s ease, background 0.3s',
            }} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section style={{
      maxWidth: 1160,
      margin: '0 auto',
      padding: '96px 24px 80px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 72,
      alignItems: 'center',
    }}>
      {/* Left: copy */}
      <div>
        <div className="animate-fade-up delay-1" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '5px 14px 5px 10px',
          borderRadius: 100,
          border: '1px solid rgba(200,75,47,0.25)',
          background: 'rgba(200,75,47,0.06)',
          marginBottom: 28,
          cursor: 'default',
        }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 18,
            height: 18,
            borderRadius: '50%',
            background: 'rgba(200,75,47,0.12)',
            fontSize: 10,
          }}>✕</span>
          <span className="font-mono" style={{ fontSize: 11, color: 'var(--rust)', letterSpacing: '0.02em' }}>
            Google Ads sucks. There's a better way.
          </span>
        </div>

        <h1 className="font-serif animate-fade-up delay-2" style={{
          fontSize: 'clamp(42px, 5vw, 66px)',
          lineHeight: 1.05,
          letterSpacing: '-0.035em',
          color: 'var(--ink)',
          marginBottom: 20,
        }}>
          Monetize your<br />
          free tool —{' '}
          <span style={{
            color: 'var(--rust)',
            fontStyle: 'italic',
            position: 'relative',
            display: 'inline-block',
          }}>
            without selling out.
            <svg style={{ position: 'absolute', bottom: -4, left: 0, width: '100%', height: 6 }} viewBox="0 0 200 6" preserveAspectRatio="none">
              <path d="M0 5 Q50 1 100 4 Q150 7 200 3" stroke="var(--rust)" strokeWidth="1.5" fill="none" opacity="0.4"/>
            </svg>
          </span>
        </h1>

        <div className="animate-fade-up delay-3" style={{
          display: 'inline-flex',
          alignItems: 'flex-start',
          gap: 10,
          padding: '12px 16px',
          borderRadius: 10,
          border: '1px solid var(--landing-border)',
          background: 'var(--card-bg)',
          marginBottom: 20,
          maxWidth: 460,
        }}>
          <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>💡</span>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink)' }}>
            <strong>We know Google Ads is irritating.</strong> With us, you run{' '}
            <em>premium ads</em> — a clean ~20px header slot — without disturbing your users' experience.
            Your audience stays happy. You get paid.
          </p>
        </div>

        <p className="animate-fade-up delay-3" style={{
          fontSize: 15.5,
          lineHeight: 1.65,
          color: 'var(--landing-muted)',
          marginBottom: 36,
          maxWidth: 460,
        }}>
          A marketplace connecting open-source projects, free tools &amp; indie sites with sponsors who want to
          reach real builder audiences — not random internet users.
        </p>

        <div className="animate-fade-up delay-4">
          <WaitlistForm theme="light" defaultRole="publisher" />
        </div>

        <div className="animate-fade-up delay-5" style={{
          display: 'flex',
          gap: 0,
          marginTop: 44,
          paddingTop: 32,
          borderTop: '1px solid var(--landing-border)',
        }}>
          {[
            { num: '120+', label: 'Sites listed' },
            { num: '$4,200', label: 'Paid to publishers' },
            { num: '3.2M', label: 'Impressions' },
          ].map((s, i) => (
            <div key={s.label} style={{
              flex: 1,
              paddingRight: 24,
              marginRight: 24,
              borderRight: i < 2 ? '1px solid var(--landing-border)' : 'none',
            }}>
              <div className="font-serif" style={{
                fontSize: 28,
                color: 'var(--ink)',
                letterSpacing: '-0.04em',
                lineHeight: 1,
              }}>{s.num}</div>
              <div style={{ fontSize: 11.5, color: 'var(--landing-muted)', marginTop: 4, letterSpacing: '0.01em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: live mockup */}
      <div className="animate-fade-up delay-3" style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute',
          top: '20%', left: '10%',
          width: '80%', height: '60%',
          background: 'radial-gradient(ellipse, rgba(200,75,47,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(32px)',
        }} />
        <NavbarMockup />

        <div style={{
          position: 'absolute',
          bottom: -16,
          right: -12,
          padding: '8px 14px',
          borderRadius: 10,
          background: 'var(--ink)',
          border: '1.5px solid rgba(255,255,255,0.06)',
          boxShadow: '0 8px 24px rgba(15,13,10,0.2)',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          zIndex: 10,
        }}>
          <span className="pulse-dot" style={{
            width: 7, height: 7, borderRadius: '50%', background: '#22c55e', display: 'inline-block',
          }} />
          <span className="font-mono" style={{ fontSize: 11, color: 'rgba(255,255,255,0.8)', whiteSpace: 'nowrap' }}>
            $29 / week · live now
          </span>
        </div>

        <div style={{
          position: 'absolute',
          top: -14,
          left: -14,
          padding: '7px 12px',
          borderRadius: 8,
          background: 'var(--card-bg)',
          border: '1.5px solid var(--landing-border)',
          boxShadow: '0 4px 16px rgba(15,13,10,0.08)',
          display: 'flex',
          alignItems: 'center',
          gap: 7,
          zIndex: 10,
        }}>
          <span style={{ fontSize: 13 }}>✓</span>
          <span style={{ fontSize: 11, color: 'var(--ink)', fontWeight: 600, whiteSpace: 'nowrap' }}>
            No popups. No trackers.
          </span>
        </div>
      </div>
    </section>
  )
}
