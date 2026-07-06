// Shared design tokens and reusable UI components

export const C = {
  navy: '#0B1D3A', navy2: '#1B2D5B',
  gold: '#F5C842', gold2: '#E8A720',
  cream: '#F8F4EC', cream2: '#EDE8DC',
  white: '#FFFFFF', muted: '#5A6A82', light: '#EEF2F8',
}

export function PageHead({ title, subtitle }) {
  return (
    <div style={{ marginBottom:'1.25rem', paddingBottom:'.85rem', borderBottom:`1px solid ${C.cream2}` }}>
      <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'1.65rem', fontWeight:700, color:C.navy, marginBottom:'.2rem' }}>{title}</h2>
      {subtitle && <p style={{ color:C.muted, fontSize:'.86rem' }}>{subtitle}</p>}
    </div>
  )
}

export function Card({ children, style }) {
  return (
    <div style={{ background:C.white, borderRadius:16, padding:'1.35rem', boxShadow:'0 2px 10px rgba(11,29,58,.07)', marginBottom:'1rem', ...style }}>
      {children}
    </div>
  )
}

export function SectionTitle({ children, color }) {
  return (
    <div style={{ background: color || C.navy, color: color ? C.navy : C.gold, padding:'.6rem 1.1rem', borderRadius:10, marginBottom:'.9rem', fontSize:'1.05rem', fontWeight:700, display:'flex', alignItems:'center', gap:'.5rem', fontFamily:"'Cormorant Garamond',serif" }}>
      {children}
    </div>
  )
}

export function Tipbox({ children, variant }) {
  const styles = {
    default: { bg:'#FFFBF0', border:'#E8A720', color:'#5A4100' },
    green:   { bg:'#F0FFF5', border:'#27ae60', color:'#1a4a2e' },
    red:     { bg:'#FFF5F5', border:'#e74c3c', color:'#5a0a0a' },
    navy:    { bg:C.navy, border:C.gold, color:C.gold },
  }
  const v = styles[variant] || styles.default
  return (
    <div style={{ background:v.bg, borderLeft:`3px solid ${v.border}`, borderRadius:8, padding:'.75rem 1rem', marginTop:'.7rem', fontSize:'.83rem', color:v.color, lineHeight:1.55 }}>
      {children}
    </div>
  )
}

export function Badge({ alliance }) {
  const styles = {
    'Star Alliance': { bg:'#FFF3CC', color:'#8A5C00', border:'1px solid #E8C840' },
    'OneWorld':      { bg:'#FDEAEA', color:'#7B1010', border:'1px solid #E09090' },
    'SkyTeam':       { bg:'#E6F0FB', color:'#004E7C', border:'1px solid #8AB8D8' },
    'Independente':  { bg:C.light,   color:'#3A4A5A', border:`1px solid #C0CDD8` },
  }
  const icons = { 'Star Alliance':'⭐', 'OneWorld':'💎', 'SkyTeam':'🌐', 'Independente':'✈️' }
  const st = styles[alliance] || styles['Independente']
  return (
    <span style={{ padding:'.18rem .55rem', borderRadius:20, fontSize:'.67rem', fontWeight:700, textTransform:'uppercase', letterSpacing:.5, ...st }}>
      {icons[alliance]} {alliance}
    </span>
  )
}

export function Tag({ children, highlight }) {
  return (
    <span style={{ background: highlight ? C.navy : C.light, color: highlight ? C.gold : C.navy2, padding:'.22rem .6rem', borderRadius:7, fontSize:'.75rem', fontWeight: highlight ? 700 : 500 }}>
      {children}
    </span>
  )
}

export function MilhasBadge({ children }) {
  return (
    <span style={{ background:C.navy, color:C.gold, padding:'.14rem .48rem', borderRadius:6, fontWeight:700, fontSize:'.75rem', whiteSpace:'nowrap' }}>
      {children}
    </span>
  )
}

export function Input({ style, ...props }) {
  return (
    <input
      style={{ padding:'.7rem 1rem', border:`2px solid ${C.cream2}`, borderRadius:10, fontSize:'.9rem', fontFamily:'Inter,sans-serif', outline:'none', color:C.navy, background:C.cream, width:'100%', boxSizing:'border-box', ...style }}
      {...props}
    />
  )
}

export function Select({ style, ...props }) {
  return (
    <select
      style={{ padding:'.7rem 1rem', border:`2px solid ${C.cream2}`, borderRadius:10, fontSize:'.9rem', fontFamily:'Inter,sans-serif', outline:'none', color:C.navy, background:C.cream, width:'100%', boxSizing:'border-box', ...style }}
      {...props}
    />
  )
}

export function Btn({ children, gold, style, ...props }) {
  return (
    <button
      style={{ background: gold ? C.gold : C.navy, color: gold ? C.navy : C.white, border:'none', padding:'.7rem 1.25rem', borderRadius:10, cursor:'pointer', fontSize:'.88rem', fontWeight:700, fontFamily:'Inter,sans-serif', whiteSpace:'nowrap', ...style }}
      {...props}
    >
      {children}
    </button>
  )
}

export function Grid({ cols, children, style }) {
  return (
    <div style={{ display:'grid', gridTemplateColumns: cols || 'repeat(auto-fill,minmax(300px,1fr))', gap:'1rem', ...style }}>
      {children}
    </div>
  )
}

export function ICard({ title, children, style }) {
  return (
    <div style={{ background:C.white, borderRadius:12, padding:'1rem', boxShadow:'0 2px 10px rgba(11,29,58,.07)', ...style }}>
      {title && <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'1.05rem', fontWeight:700, color:C.navy, marginBottom:'.6rem' }}>{title}</div>}
      {children}
    </div>
  )
}

export function UL({ items }) {
  return (
    <ul style={{ listStyle:'none', padding:0, margin:0 }}>
      {items.map((item, i) => (
        <li key={i} style={{ padding:'.28rem 0', borderBottom:'1px solid #EDE8DC', fontSize:'.84rem', display:'flex', alignItems:'flex-start', gap:'.4rem', lineHeight:1.45 }}>
          <span style={{ color:'#E8A720', flexShrink:0, fontSize:'.65rem', marginTop:'.2rem' }}>✦</span>
          <span dangerouslySetInnerHTML={{ __html: item }} />
        </li>
      ))}
    </ul>
  )
}

export function RouteBox({ apt, routes }) {
  return (
    <div style={{ background:'linear-gradient(135deg,#0B1D3A,#1B2D5B)', borderRadius:14, padding:'1.1rem 1.35rem', marginBottom:'1rem', color:'#fff' }}>
      <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'1.1rem', fontWeight:700, color:'#F5C842', marginBottom:'.7rem' }}>
        🗺️ Caminhos do Brasil → {apt}
      </div>
      {routes.map((r, i) => (
        <div key={i} style={{ display:'flex', alignItems:'center', flexWrap:'wrap', gap:'.4rem', marginBottom:'.45rem' }}>
          <span style={rnode}>GRU/VCP</span>
          <span style={rarr}>→</span>
          <span style={rnode}>{r.via}</span>
          <span style={rarr}>→</span>
          <span style={rnode}>{apt}</span>
          <span style={rprog}>{r.cia}</span>
          <span style={rprog}>{r.prog}</span>
          {r.custo && <span style={rcost}>💳 {r.custo}</span>}
        </div>
      ))}
    </div>
  )
}
const rnode = { background:'rgba(245,200,66,.18)', border:'1px solid rgba(245,200,66,.4)', color:'#F5C842', padding:'.28rem .7rem', borderRadius:8, fontWeight:700, fontSize:'.86rem' }
const rarr  = { color:'rgba(255,255,255,.4)', fontSize:'.9rem' }
const rprog = { background:'rgba(255,255,255,.1)', color:'rgba(255,255,255,.9)', padding:'.2rem .55rem', borderRadius:7, fontSize:'.75rem', fontWeight:600 }
const rcost = { background:'rgba(245,200,66,.25)', color:'#F5C842', padding:'.2rem .55rem', borderRadius:7, fontSize:'.75rem', fontWeight:700 }

export function EmptyState({ text }) {
  return <div style={{ textAlign:'center', color:'#8A9AB0', padding:'2rem', fontSize:'.9rem' }}>{text}</div>
}
