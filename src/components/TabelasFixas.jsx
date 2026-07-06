import { PageHead, Tipbox, MilhasBadge, C, SectionTitle } from './UI'
const TF_LATAM = [
  ['Delta','Virgin / Air France / Seats.aero','N O','SkyTeam'],
  ['Aeromexico','Virgin / Air France / Seats.aero','X U','SkyTeam'],
  ['Alaska Airlines','American Airlines / Seats.aero','X U Z','OneWorld'],
  ['Austrian','Seats.aero / United','X I O','Star Alliance'],
  ['British Airways','Seats.aero / American Airlines','X U Z','OneWorld'],
  ['Cathay Pacific','Seats.aero / American Airlines','X U Z','OneWorld'],
  ['Finnair','Seats.aero / American Airlines','X U Z','OneWorld'],
  ['Iberia','Seats.aero / American Airlines','X U Z','OneWorld'],
  ['Japan Airlines','Seats.aero / American Airlines','T U A','OneWorld'],
  ['Lufthansa','Seats.aero / United','X I O','Star Alliance'],
  ['Malaysia Airlines','Seats.aero / American Airlines','X U Z','OneWorld'],
  ['Qantas','Seats.aero / AA / British','X U Z','OneWorld'],
  ['Qatar Airways','Seats.aero / British','X U Z','OneWorld'],
  ['Swiss','Seats.aero / United','X I O','Star Alliance'],
]
export default function TabelasFixas() {
  return (
    <div>
      <PageHead title="📋 Tabelas Fixas & Emissões Award" subtitle="Preços fixos em milhas por companhia e programa." />
      <div style={{ marginBottom:'2rem' }}>
        <SectionTitle>🟠 GOL (Smiles) — Award por Companhia</SectionTitle>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:'1rem' }}>
          <div style={{ background:'#fff', borderRadius:12, padding:'1.1rem', boxShadow:'0 2px 10px rgba(11,29,58,.07)' }}>
            <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'1.05rem', fontWeight:700, color:C.navy, marginBottom:'.6rem' }}>🏆 Emissões Award Smiles</div>
            <ul style={{ listStyle:'none', padding:0 }}>{[
              ['American Airlines','7.500 por trecho'],['Copa Airlines','12.500 por trecho'],
              ['Avianca','12.000 (via site)'],['TAP Air Portugal','35.000 por trecho'],
              ['Air France / KLM',null],['Emirates','⚠️ taxa combustível'],
              ['Turkish Airlines','⚠️ taxa combustível'],['Korean Air',null],
            ].map(([n,v], i) => (
              <li key={i} style={{ padding:'.28rem 0', borderBottom:'1px solid #EDE8DC', fontSize:'.84rem', display:'flex', justifyContent:'space-between', alignItems:'center', gap:'.4rem' }}>
                <span>✦ {n}</span>{v && <MilhasBadge>{v}</MilhasBadge>}
              </li>
            ))}</ul>
          </div>
          <div style={{ background:'#fff', borderRadius:12, padding:'1.1rem', boxShadow:'0 2px 10px rgba(11,29,58,.07)' }}>
            <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'1.05rem', fontWeight:700, color:C.navy, marginBottom:'.6rem' }}>🤝 Parceiros Comerciais Smiles</div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'.25rem' }}>
              {['Aegean','Aer Lingus','Aerolíneas Arg.','Aeroméxico','Air Baltic','Air Canada','Air India','Air Europa','Air France','American Airlines','ANA','Avianca','British Airways','Copa Airlines','Emirates','Ethiopian','Etihad','Flybondi','Garuda','Ibéria','ITA Airways','Kenya Airways','KLM','Korean Air','Malaysia','Royal Air Maroc','Saudia','South African','TAAG','TAP Portugal','Turkish','Virgin Atlantic','Vueling'].map(p => (
                <span key={p} style={{ background:'rgba(245,200,66,.2)', color:'#5A3A00', border:'1px solid rgba(245,200,66,.5)', padding:'.18rem .5rem', borderRadius:6, fontSize:'.72rem', fontWeight:500 }}>{p}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom:'2rem' }}>
        <SectionTitle>🔴 LATAM — Tabela Fixa e Regras Tarifárias</SectionTitle>
        <div style={{ overflowX:'auto' }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:'.83rem', marginBottom:'.75rem' }}>
            <thead><tr>{['Companhia','Onde Buscar Disponibilidade','Regra Tarifária','Aliança'].map(h => <th key={h} style={{ background:C.navy, color:C.gold, padding:'.6rem .9rem', textAlign:'left', fontSize:'.78rem' }}>{h}</th>)}</tr></thead>
            <tbody>{TF_LATAM.map(([n,b,r,a], i) => (
              <tr key={i}><td style={{ padding:'.55rem .9rem', borderBottom:'1px solid #EDE8DC', fontWeight:600, color:C.navy }}>{n}</td><td style={{ padding:'.55rem .9rem', borderBottom:'1px solid #EDE8DC', background: i%2===0 ? C.cream : '#fff' }}>{b}</td><td style={{ padding:'.55rem .9rem', borderBottom:'1px solid #EDE8DC', fontFamily:'monospace', fontWeight:700, color:C.gold2, background: i%2===0 ? C.cream : '#fff' }}>{r}</td><td style={{ padding:'.55rem .9rem', borderBottom:'1px solid #EDE8DC', background: i%2===0 ? C.cream : '#fff' }}>{a}</td></tr>
            ))}</tbody>
          </table>
        </div>
        <Tipbox>🔑 <strong>Regra:</strong> SkyTeam → busque via Air France/Virgin | OneWorld → via British/AA | Star Alliance → via United/Aeroplan</Tipbox>
      </div>
      <Tipbox>🔗 <strong>Links Oficiais:</strong> <a href="https://www.aa.com/i18n/aadvantage-program/miles/redeem/award-travel/flight-award-chart.jsp" target="_blank" rel="noreferrer" style={{ color:C.navy2, fontWeight:600 }}>AAdvantage</a> · <a href="https://latampass.latam.com/pt_br/viagem/usar-pontos-para-voar/regras-de-resgate/latam/classe-economica" target="_blank" rel="noreferrer" style={{ color:C.navy2, fontWeight:600 }}>LatamPass</a> · <a href="https://www.flytap.com/pt-br/miles-and-go/utilizar-milhas/comprar-bilhete" target="_blank" rel="noreferrer" style={{ color:C.navy2, fontWeight:600 }}>TAP Miles&Go</a> · <a href="https://www.iberia.com/br/iberiaplus/partners/voo/" target="_blank" rel="noreferrer" style={{ color:C.navy2, fontWeight:600 }}>Ibéria Plus</a></Tipbox>
    </div>
  )
}
