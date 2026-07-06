import { useState } from 'react'
import { airlines, regionRoutes } from '../data/airports'
import { PageHead, Card, Tipbox, Badge, Tag, RouteBox, Select, Input, C } from './UI'

export default function PorRegiao() {
  const [region, setRegion] = useState('')
  const [op, setOp] = useState('')
  const rInfo = region ? regionRoutes[region] : null
  const results = airlines.filter(a =>
    (region ? a.regions.includes(region) : true) &&
    (op ? a.name.toLowerCase().includes(op.toLowerCase()) || a.iata.toLowerCase().includes(op.toLowerCase()) : true)
  )
  return (
    <div>
      <PageHead title="🗺️ Buscar por Região" subtitle="Selecione a região de destino para ver rotas, hubs e programas recomendados." />
      <Card>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem', marginBottom:'1rem' }}>
          <div>
            <label style={{ fontWeight:700, fontSize:'.88rem', display:'block', marginBottom:'.4rem', color:C.navy }}>Região de Destino</label>
            <Select value={region} onChange={e => setRegion(e.target.value)}>
              <option value="">— Selecione a região —</option>
              <option value="América do Norte e Caribe">🇺🇸 América do Norte e Caribe</option>
              <option value="América do Sul e Central">🌎 América do Sul e Central</option>
              <option value="Europa">🇪🇺 Europa</option>
              <option value="África">🌍 África</option>
              <option value="Ásia e Oriente Médio">🌏 Ásia e Oriente Médio</option>
              <option value="Oceânia">🇦🇺 Oceânia</option>
              <option value="Brasil">🇧🇷 Brasil (Nacional)</option>
            </Select>
          </div>
          <div>
            <label style={{ fontWeight:700, fontSize:'.88rem', display:'block', marginBottom:'.4rem', color:C.navy }}>Companhia (opcional)</label>
            <Input value={op} onChange={e => setOp(e.target.value)} placeholder="Ex: United, TAP, Emirates…" />
          </div>
        </div>
        {rInfo && <RouteBox apt={`${region}`} routes={rInfo.routes} />}
        {rInfo && <Tipbox>🔑 {rInfo.tip}</Tipbox>}
      </Card>
      {(region || op) && results.map(a => (
        <div key={a.name} style={{ border:`2px solid ${C.gold}`, background:'#FFFBF0', borderRadius:12, padding:'1rem', marginBottom:'.7rem' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'.5rem', flexWrap:'wrap', marginBottom:'.5rem' }}>
            <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'1.05rem', fontWeight:700, color:C.navy }}>{a.name}</span>
            <Badge alliance={a.alliance} />
            <span style={{ background:C.navy, color:C.gold, fontSize:'.69rem', fontWeight:700, padding:'.17rem .5rem', borderRadius:7 }}>✨ {a.programs[0]}</span>
          </div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'.3rem', marginBottom:'.4rem' }}>
            {a.programs.map(p => <Tag key={p}>{p}</Tag>)}
          </div>
          <div style={{ fontSize:'.8rem', color:C.muted }}>💡 {a.tip}</div>
        </div>
      ))}
    </div>
  )
}
