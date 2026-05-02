const sites = [
  { name: 'devutils.app', niche: 'Dev Tools', price: '$45/wk', traffic: '18k/mo' },
  { name: 'logsnag.com', niche: 'SaaS', price: '$80/wk', traffic: '42k/mo' },
  { name: 'readme.so', niche: 'Open Source', price: '$35/wk', traffic: '11k/mo' },
  { name: 'codebeautify.org', niche: 'Dev Tools', price: '$120/wk', traffic: '200k/mo' },
  { name: 'tinypng.com', niche: 'Free Tool', price: '$200/wk', traffic: '1.1M/mo' },
  { name: 'excalidraw.com', niche: 'Open Source', price: '$300/wk', traffic: '2M/mo' },
  { name: 'jsonformatter.org', niche: 'Dev Tools', price: '$60/wk', traffic: '28k/mo' },
  { name: 'typescale.com', niche: 'Design Tools', price: '$25/wk', traffic: '9k/mo' },
]

const doubled = [...sites, ...sites]

export default function Ticker() {
  return (
    <div style={{
      borderTop: '1px solid var(--landing-border)',
      borderBottom: '1px solid var(--landing-border)',
      background: 'var(--card-bg)',
      overflow: 'hidden',
      padding: '12px 0',
    }}>
      <div className="ticker-track" style={{ gap: 0 }}>
        {doubled.map((site, i) => (
          <div key={i} style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            padding: '0 32px',
            borderRight: '1px solid var(--landing-border)',
            flexShrink: 0,
          }}>
            <span style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: 'var(--rust)',
              opacity: 0.7,
              flexShrink: 0,
            }} />
            <span className="font-mono" style={{ fontSize: 12, color: 'var(--ink)', fontWeight: 500 }}>
              {site.name}
            </span>
            <span style={{
              fontSize: 10,
              padding: '2px 7px',
              borderRadius: 100,
              background: 'var(--cream)',
              color: 'var(--landing-muted)',
              border: '1px solid var(--landing-border)',
            }}>
              {site.niche}
            </span>
            <span style={{ fontSize: 11, color: 'var(--landing-muted)' }}>{site.traffic}</span>
            <span style={{ fontSize: 12, color: 'var(--rust)', fontWeight: 600 }}>{site.price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
