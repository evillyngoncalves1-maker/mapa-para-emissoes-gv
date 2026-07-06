import { useState } from 'react'
import { airlines } from '../data/airports'
import { PageHead, Card, Tipbox, Badge, Tag, Input, Btn, C } from './UI'

export default function BuscadorCia() {
  const [q, setQ] = useState('')
  const results = q.trim().length < 1 ? [] : airlines.filter(a =>
    a.name.toLowerCase().includes(q.toLowerCase()) ||
    a.iata.toLowerCase().includes(q.toLowerCase()) ||
    a.programs.some(p => p.toLowerCase().includes(q.toLowerCase())) ||
    a.alliance.toLowerCase().includes(q.toLowerCase())
  )
  return (
    <div>
      <PageHead title="✈️ Buscar Companhia Aérea" subtitle="Busque por nome, sigla IATA, aliança ou programa de milhas." />
      <Card>
        <div style={{ display:'flex', gap:'.65rem', flexWrap:'wrap' }}>
          <Input value={q} onChange={e => setQ(e.target.value)} placeholder="Ex: United, Emirates, TAP, Smiles, Star Alliance…" style={{ flex:1 }} />
          <Btn gold onClick={() => setQ('')}>Limpar</Btn>
        </div>
      </Card>
      {q && results.length === 0 && <div style={{ textAlign:'center', color:'#8A9AB0', padding:'2rem' }}>Nenhum resultado para "{q}"</div>}
      {results.map(a => (
        <div key={a.name} style={{ background:'#fff', borderRadius:12, padding:'1rem 1.2rem', marginBottom:'.75rem', boxShadow:'0 2px 10px rgba(11,29,58,.07)', borderLeft:`4px solid ${C.navy}` }}>
          <div style={{ display:'flex', alignItems:'center', gap:'.55rem', flexWrap:'wrap', marginBottom:'.55rem' }}>
            <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'1.1rem', fontWeight:700 }}>✈ {a.name}</span>
            <span style={{ color:'#8A9AB0', fontSize:'.78rem', fontWeight:600 }}>{a.iata}</span>
            <Badge alliance={a.alliance} />
          </div>
          <div style={{ fontSize:'.76rem', fontWeight:600, color:'#8A9AB0', marginBottom:'.35rem' }}>💳 Programas para emitir:</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'.3rem', marginBottom:'.45rem' }}>
            {a.programs.map((p, i) => <Tag key={p} highlight={i < 2}>{p}</Tag>)}
          </div>
          <Tipbox>💡 {a.tip}</Tipbox>
        </div>
      ))}
    </div>
  )
}
