import WaitlistForm from './WaitlistForm'

export default function LandingFooter() {
  return (
    <footer style={{ background: '#080807', padding: '64px 24px 40px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        {/* Top: CTA + Waitlist */}
        <div style={{
          textAlign: 'center',
          paddingBottom: 64,
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          marginBottom: 48,
        }}>
          <h2 className="font-serif" style={{
            fontSize: 'clamp(36px, 5vw, 64px)',
            color: '#fff',
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            marginBottom: 24,
          }}>
            Your navbar is <br />
            <span style={{ color: 'var(--rust)', fontStyle: 'italic' }}>already worth something.</span>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 420, margin: '0 auto 32px' }}>
            Join the waitlist — we'll let you know the moment we launch.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <WaitlistForm theme="dark" defaultRole="publisher" />
          </div>
        </div>

        {/* Bottom row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 28,
              height: 20,
              borderRadius: 3,
              border: '2px solid rgba(255,255,255,0.3)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                width: '100%',
                height: 4,
                background: 'var(--rust)',
                position: 'absolute',
                top: 0,
              }} />
            </div>
            <span className="font-mono" style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', letterSpacing: '-0.02em' }}>
              rentmynavbar.com
            </span>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy', 'Terms', 'Contact', 'Twitter / X'].map(l => (
              <a key={l} href="#" style={{
                fontSize: 13,
                color: 'rgba(255,255,255,0.35)',
                textDecoration: 'none',
                transition: 'color 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
              >
                {l}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>
            © 2025 rentmynavbar.com
          </div>
        </div>
      </div>
    </footer>
  )
}
