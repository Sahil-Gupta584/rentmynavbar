import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'

export default function LandingNavbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      borderBottom: scrolled ? '1px solid var(--landing-border)' : '1px solid transparent',
      background: scrolled ? 'rgba(245,240,232,0.92)' : 'rgba(245,240,232,0.6)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
      boxShadow: scrolled ? '0 1px 0 rgba(15,13,10,0.04), 0 4px 20px rgba(15,13,10,0.04)' : 'none',
    }}>
      <div style={{
        maxWidth: 1160,
        margin: '0 auto',
        padding: '0 24px',
        height: 58,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link to="/landing" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 30,
            height: 22,
            borderRadius: 4,
            border: '2px solid var(--ink)',
            position: 'relative',
            overflow: 'hidden',
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--rust)'
            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(200,75,47,0.12)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--ink)'
            e.currentTarget.style.boxShadow = 'none'
          }}
          >
            <div style={{
              width: '100%',
              height: 5,
              background: 'linear-gradient(90deg, var(--rust) 0%, var(--gold) 100%)',
              position: 'absolute',
              top: 0,
            }} />
          </div>
          <span className="font-mono" style={{
            fontSize: 13.5,
            fontWeight: 500,
            letterSpacing: '-0.02em',
            color: 'var(--ink)',
            transition: 'color 0.15s',
          }}>
            rentmynavbar
          </span>
        </Link>

        {/* Nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {[
            { label: 'How it works', href: '#how-it-works' },
            { label: 'Browse',       href: '#browse' },
            { label: 'Pricing',      href: '#pricing' },
          ].map(link => (
            <a key={link.label} href={link.href} className="nav-link">{link.label}</a>
          ))}

          <a href="#" className="btn-primary" style={{ padding: '8px 18px', fontSize: 13 }}>
            List your site
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  )
}
