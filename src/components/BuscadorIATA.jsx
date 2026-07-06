import { useState } from 'react'
import { airports, regionRoutes, airlines } from '../data/airports'
import { PageHead, Card, Tipbox, Badge, Tag, RouteBox, Input, Btn, ICard, C } from './UI'

const QUICK = ['MCO','MIA','LHR','CDG','LIS','MAD','FRA','IST','DXB','DOH','NRT','SIN','JNB','ADD','SYD','EZE','BOG','SCL']

export default function BuscadorIATA() {
  const [iata, setIata] = useState('')
  const [city, setCity] = useState('')
  const [result, setResult] = useState(null)
  const [suggestions, setSuggestions] = useState([])
  const [notFound, setNotFound] = useState(false)

  function search(code) {
    const q = (code || iata).toUpperCase().trim()
    setNotFound(false); setSuggestions([])
    const apt = airports.find(a => a.iata === q)
    if (apt) { setResult(apt) }
    else { setResult(null); setNotFound(true) }
  }

  function searchByCity(val) {
    setCity(val)
    if (val.length < 2) { setSuggestions([]); return }
    const res = airports.filter(a =>
      a.city.toLowerCase().includes(val.toLowerCase()) ||
      a.country.toLowerCase().includes(val.toLowerCase())
    )
    setSuggestions(res.slice(0, 8))
  }

  function pickAirport(apt) {
    setIata(apt.iata); setCity(''); setSuggestions([])
    setResult(apt); setNotFound(false)
  }

  function clear() {
    setIata(''); setCity(''); setResult(null); setSuggestions([]); setNotFound(false)
  }

  const rInfo = result ? regionRoutes[result.region] : null
  const relAirlines = result ? airlines.filter(a => a.regions.includes(result.region)).slice(0, 5) : []

  return (
    <div>
      <PageHead
        title="🛫 Buscar por IATA"
        subtitle="Digite o código IATA do aeroporto de destino e veja o caminho completo de emissão saindo do Brasil."
      />

      <Card>
        {/* Search row */}
        <div style={{ display:'flex', gap:'.65rem', flexWrap:'wrap', marginBottom:'.75rem' }}>
          <input
            value={iata}
            onChange={e => setIata(e.target.value.toUpperCase())}
            onKeyDown={e => e.key === 'Enter' && search()}
            maxLength={3}
            placeholder="MCO"
            style={{ padding:'.7rem 1rem', border:`2px solid ${C.cream2}`, borderRadius:10, fontSize:'1.4rem', fontWeight:700, letterSpacing:4, textTransform:'uppercase', width:130, textAlign:'center', fontFamily:'Inter,sans-serif', outline:'none', color:C.navy, background:C.cream, boxSizing:'border-box' }}
          />
          <Input value={city} onChange={e => searchByCity(e.target.value)} placeholder="Ou busque por cidade: Orlando, Paris, Tóquio..." style={{ flex:1, minWidth:200 }} />
          <Btn onClick={() => search()}>🔍 Buscar</Btn>
          <Btn gold onClick={clear}>Limpar</Btn>
        </div>

        {/* City suggestions */}
        {suggestions.length > 0 && (
          <div style={{ display:'flex', flexWrap:'wrap', gap:'.35rem', marginBottom:'.5rem' }}>
            {suggestions.map(a => (
              <button key={a.iata} onClick={() => pickAirport(a)}
                style={{ background:C.navy, color:C.gold, border:'none', padding:'.28rem .7rem', borderRadius:8, fontSize:'.78rem', fontWeight:700, cursor:'pointer', fontFamily:'Inter,sans-serif' }}>
                {a.iata} — {a.city}
              </button>
            ))}
          </div>
        )}

        {/* Quick buttons */}
        <div style={{ display:'flex', flexWrap:'wrap', gap:'.3rem', alignItems:'center' }}>
          <span style={{ fontSize:'.73rem', color:C.muted, fontWeight:600 }}>Rápido:</span>
          {QUICK.map(code => (
            <button key={code} onClick={() => { setIata(code); search(code) }}
              style={{ background:'rgba(11,29,58,.08)', color:C.navy2, border:'none', padding:'.22rem .55rem', borderRadius:7, fontSize:'.72rem', fontWeight:700, cursor:'pointer', fontFamily:'Inter,sans-serif' }}>
              {code}
            </button>
          ))}
        </div>
      </Card>

      {/* Not found */}
      {notFound && (
        <Card style={{ textAlign:'center', color:C.muted }}>
          ❌ Aeroporto <strong>{iata}</strong> não encontrado. Busque pela cidade ou use{' '}
          <a href="https://www.seat.aero" target="_blank" rel="noreferrer" style={{ color:C.gold2, fontWeight:700 }}>Seats.aero</a>.
        </Card>
      )}

      {/* Result */}
      {result && (
        <div style={{ background:C.white, borderRadius:16, overflow:'hidden', boxShadow:'0 4px 24px rgba(11,29,58,.1)' }}>
          {/* Header */}
          <div style={{ background:C.navy, padding:'1.25rem 1.5rem' }}>
            <div style={{ display:'flex', alignItems:'center', gap:'.85rem', flexWrap:'wrap' }}>
              <div style={{ background:'rgba(245,200,66,.18)', border:'2px solid rgba(245,200,66,.5)', color:C.gold, fontFamily:"'Cormorant Garamond',serif", fontSize:'2.2rem', fontWeight:700, padding:'.2rem .7rem', borderRadius:10, letterSpacing:4 }}>
                {result.iata}
              </div>
              <div>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'1.8rem', fontWeight:700, color:C.gold, lineHeight:1.1 }}>{result.city}</div>
                <div style={{ display:'flex', gap:'.75rem', flexWrap:'wrap', alignItems:'center', marginTop:'.35rem' }}>
                  <span style={{ color:'rgba(255,255,255,.6)', fontSize:'.82rem' }}>{result.country}</span>
                  <span style={{ background:'rgba(245,200,66,.2)', border:'1px solid rgba(245,200,66,.4)', color:C.gold, padding:'.18rem .6rem', borderRadius:12, fontSize:'.72rem', fontWeight:700 }}>{result.region}</span>
                  {result.exec
                    ? <span style={{ background:'rgba(39,174,96,.2)', border:'1px solid rgba(39,174,96,.5)', color:'#27ae60', padding:'.18rem .6rem', borderRadius:12, fontSize:'.72rem', fontWeight:700 }}>✅ Executiva Disponível</span>
                    : <span style={{ background:'rgba(231,76,60,.15)', border:'1px solid rgba(231,76,60,.4)', color:'#e74c3c', padding:'.18rem .6rem', borderRadius:12, fontSize:'.72rem', fontWeight:700 }}>⚠️ Verificar Executiva</span>
                  }
                </div>
              </div>
            </div>
          </div>

          <div style={{ padding:'1.25rem 1.5rem' }}>
            {/* Info grid */}
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:'1rem', marginBottom:'1rem' }}>
              <div style={{ background:C.cream, borderRadius:12, padding:'1rem' }}>
                <div style={{ fontSize:'.73rem', fontWeight:700, color:C.muted, textTransform:'uppercase', letterSpacing:.5, marginBottom:'.5rem' }}>💳 Melhor Programa</div>
                <div style={{ fontSize:'1rem', fontWeight:700, color:C.navy, marginBottom:'.35rem' }}>{result.programs}</div>
                <div style={{ fontSize:'.77rem', color:C.muted }}>{result.airlines.slice(0,4).join(' · ')}</div>
              </div>
              <div style={{ background:C.cream, borderRadius:12, padding:'1rem' }}>
                <div style={{ fontSize:'.73rem', fontWeight:700, color:C.muted, textTransform:'uppercase', letterSpacing:.5, marginBottom:'.5rem' }}>🔗 Hubs de Conexão</div>
                <div style={{ display:'flex', flexWrap:'wrap', gap:'.35rem' }}>
                  {result.hubs.map(h => {
                    const found = airports.find(a => a.iata === h)
                    return (
                      <button key={h} title={found?.city || h}
                        onClick={() => { setIata(h); search(h) }}
                        style={{ background:C.navy, color:C.gold, border:'none', padding:'.28rem .65rem', borderRadius:8, fontSize:'.8rem', fontWeight:700, cursor:'pointer', fontFamily:'Inter,sans-serif' }}>
                        {h}
                      </button>
                    )
                  })}
                </div>
              </div>
              <div style={{ background:C.cream, borderRadius:12, padding:'1rem' }}>
                <div style={{ fontSize:'.73rem', fontWeight:700, color:C.muted, textTransform:'uppercase', letterSpacing:.5, marginBottom:'.5rem' }}>✈️ Cias que Operam</div>
                <div style={{ display:'flex', flexWrap:'wrap', gap:'.3rem' }}>
                  {result.airlines.map(a => <Tag key={a}>{a}</Tag>)}
                </div>
              </div>
            </div>

            {/* Routes */}
            {rInfo?.routes && <RouteBox apt={result.iata} routes={rInfo.routes} />}

            {/* Tips */}
            {rInfo?.tip && <Tipbox>💡 <strong>Dica de Ouro para {result.region}:</strong> {rInfo.tip}</Tipbox>}
            {result.tip && <Tipbox variant="green" style={{ marginTop:'.5rem' }}>✈️ <strong>Sobre {result.city}:</strong> {result.tip}</Tipbox>}
            {result.exec && (
              <Tipbox variant="green" style={{ marginTop:'.5rem' }}>
                💺 <strong>Executiva disponível!</strong> Verifique no{' '}
                <a href="https://www.seat.aero" target="_blank" rel="noreferrer" style={{ color:'#1a5c38', fontWeight:700 }}>Seats.aero</a>.{' '}
                Programa recomendado: <strong>{result.programs}</strong>
              </Tipbox>
            )}

            {/* Related airlines */}
            <div style={{ marginTop:'1.25rem' }}>
              <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'1rem', fontWeight:700, color:C.navy, marginBottom:'.55rem' }}>
                ✈️ Companhias relevantes para {result.region}
              </div>
              {relAirlines.map(a => (
                <div key={a.name} style={{ background:C.white, border:`1px solid ${C.cream2}`, borderLeft:`4px solid ${C.navy}`, borderRadius:12, padding:'1rem 1.2rem', marginBottom:'.65rem' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:'.55rem', flexWrap:'wrap', marginBottom:'.5rem' }}>
                    <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'1.05rem', fontWeight:700 }}>{a.name}</span>
                    <Badge alliance={a.alliance} />
                  </div>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:'.3rem', marginBottom:'.4rem' }}>
                    {a.programs.map((p, i) => <Tag key={p} highlight={i < 2}>{p}</Tag>)}
                  </div>
                  <div style={{ fontSize:'.8rem', color:C.muted }}>💡 {a.tip}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
