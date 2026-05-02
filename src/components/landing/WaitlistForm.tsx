import { useState } from 'react'

type Role = 'publisher' | 'sponsor'

interface WaitlistFormProps {
  /** 'dark' = white text on dark bg (footer), 'light' = dark text on cream bg (hero) */
  theme?: 'dark' | 'light'
  defaultRole?: Role
}

export default function WaitlistForm({
  theme = 'dark',
  defaultRole = 'publisher',
}: WaitlistFormProps) {
  const [email, setEmail] = useState('')
  const [role, setRole] = useState<Role>(defaultRole)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const isDark = theme === 'dark'

  const inputBg = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.9)'
  const inputBorder = isDark ? 'rgba(255,255,255,0.12)' : 'var(--landing-border)'
  const inputColor = isDark ? '#fff' : 'var(--ink)'
  const inputPlaceholder = isDark ? 'rgba(255,255,255,0.3)' : 'var(--landing-muted)'
  const labelColor = isDark ? 'rgba(255,255,255,0.5)' : 'var(--landing-muted)'

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return

    setStatus('loading')
    setMessage('')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), role }),
      })

      const data = await res.json()

      if (!res.ok) {
        setStatus('error')
        setMessage(data.error ?? 'Something went wrong. Please try again.')
      } else {
        setStatus('success')
        setMessage("You're on the list! We'll be in touch soon.")
        setEmail('')
      }
    } catch {
      setStatus('error')
      setMessage('Network error. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '14px 20px',
        borderRadius: 10,
        background: isDark ? 'rgba(34,197,94,0.1)' : 'rgba(34,197,94,0.08)',
        border: '1.5px solid rgba(34,197,94,0.3)',
        maxWidth: 480,
      }}>
        <span style={{
          width: 22,
          height: 22,
          borderRadius: '50%',
          background: '#22c55e',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <span style={{ fontSize: 14, color: isDark ? 'rgba(255,255,255,0.85)' : 'var(--ink)', fontWeight: 500 }}>
          {message}
        </span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 480 }}>
      {/* Role toggle */}
      <div style={{
        display: 'inline-flex',
        borderRadius: 8,
        border: `1px solid ${inputBorder}`,
        overflow: 'hidden',
        marginBottom: 12,
        background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
      }}>
        {(['publisher', 'sponsor'] as Role[]).map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setRole(r)}
            style={{
              padding: '6px 16px',
              fontSize: 12,
              fontWeight: role === r ? 600 : 400,
              border: 'none',
              cursor: 'pointer',
              background: role === r
                ? (isDark ? 'rgba(200,75,47,0.25)' : 'var(--rust)')
                : 'transparent',
              color: role === r
                ? (isDark ? 'var(--rust-light)' : '#fff')
                : labelColor,
              transition: 'all 0.15s',
              letterSpacing: '0.01em',
              textTransform: 'capitalize',
            }}
          >
            {r === 'publisher' ? '🏗️ Publisher' : '📣 Sponsor'}
          </button>
        ))}
      </div>

      {/* Email row */}
      <div style={{ display: 'flex', gap: 8 }}>
        <div style={{ flex: 1, position: 'relative' }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            disabled={status === 'loading'}
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: 8,
              border: `1.5px solid ${status === 'error' ? 'rgba(239,68,68,0.6)' : inputBorder}`,
              background: inputBg,
              color: inputColor,
              fontSize: 14,
              outline: 'none',
              transition: 'border-color 0.18s',
              boxSizing: 'border-box',
              fontFamily: 'inherit',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = isDark
                ? 'rgba(200,75,47,0.5)'
                : 'var(--rust)'
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor =
                status === 'error' ? 'rgba(239,68,68,0.6)' : inputBorder
            }}
          />
          {/* Placeholder color via CSS trick */}
          <style>{`
            input::placeholder { color: ${inputPlaceholder}; }
          `}</style>
        </div>

        <button
          type="submit"
          disabled={status === 'loading' || !email.trim()}
          style={{
            padding: '12px 20px',
            borderRadius: 8,
            background: status === 'loading' ? 'rgba(200,75,47,0.6)' : 'var(--rust)',
            color: '#fff',
            border: 'none',
            fontSize: 14,
            fontWeight: 600,
            cursor: status === 'loading' ? 'not-allowed' : 'pointer',
            whiteSpace: 'nowrap',
            transition: 'background 0.18s, transform 0.12s',
            letterSpacing: '-0.01em',
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            if (status !== 'loading') {
              e.currentTarget.style.background = 'var(--rust-light)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background =
              status === 'loading' ? 'rgba(200,75,47,0.6)' : 'var(--rust)'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          {status === 'loading' ? (
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <svg
                width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2"
                style={{ animation: 'spin 0.8s linear infinite' }}
              >
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
              </svg>
              Joining…
            </span>
          ) : (
            'Join waitlist →'
          )}
        </button>
      </div>

      {/* Error message */}
      {status === 'error' && message && (
        <p style={{
          marginTop: 8,
          fontSize: 12,
          color: '#f87171',
          display: 'flex',
          alignItems: 'center',
          gap: 5,
        }}>
          <span>⚠</span> {message}
        </p>
      )}

      <p style={{ marginTop: 10, fontSize: 11, color: labelColor, lineHeight: 1.5 }}>
        No spam. We'll notify you when we launch. Unsubscribe anytime.
      </p>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </form>
  )
}
