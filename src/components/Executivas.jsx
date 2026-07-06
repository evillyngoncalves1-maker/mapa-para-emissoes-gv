import { PageHead, ICard, Tipbox, C, SectionTitle } from './UI'

const TOP12 = [
  {pos:'1ª',name:'Singapore Airlines',sub:'KrisFlyer · Star Alliance',gold:true},
  {pos:'2ª',name:'Emirates',sub:'Skywards · Independente'},
  {pos:'3ª',name:'Cathay Pacific',sub:'Avios/AAdvantage · OneWorld'},
  {pos:'4ª',name:'Qatar Airways',sub:'Avios/LatamPass · OneWorld'},
  {pos:'5ª',name:'ANA',sub:'Azulpelomundo · Star'},
  {pos:'6ª',name:'Japan Airlines',sub:'MileagePlan (Alaska) · OneWorld'},
  {pos:'7ª',name:'Virgin Atlantic',sub:'Flying Club · SkyTeam'},
  {pos:'8ª',name:'Air France',sub:'FlyingBlue · SkyTeam'},
  {pos:'9ª',name:'Qantas',sub:'LatamPass/Avios · OneWorld'},
  {pos:'10ª',name:'LATAM',sub:'LatamPass · OneWorld'},
  {pos:'11ª',name:'United Polaris',sub:'Azulpelomundo · Star'},
  {pos:'12ª',name:'TAP Air Portugal',sub:"Miles&Go · Star"},
]

const PROGRAMS = [
  {name:'AAdvantage (American Airlines)',url:'https://passageirodeprimeira.com/as-10-melhores-emissoes-em-classe-executiva-no-aadvantage/'},
  {name:'Aeroplan (Air Canada)',url:'https://passageirodeprimeira.com/as-10-melhores-emissoes-em-classe-executiva-no-aeroplan-da-air-canada/'},
  {name:'ConnectMiles (Copa)',url:'https://passageirodeprimeira.com/as-10-melhores-emissoes-em-classe-executiva-no-connectmiles-da-copa-airlines/'},
  {name:'Executive Club (British)',url:'https://passageirodeprimeira.com/as-10-melhores-emissoes-em-classe-executiva-no-executive-club/'},
  {name:'Flying Blue (AF/KLM)',url:'https://passageirodeprimeira.com/as-10-melhores-emissoes-em-classe-executiva-no-flying-blue/'},
  {name:'Flying Club (Virgin)',url:'https://passageirodeprimeira.com/as-10-melhores-emissoes-em-classe-executiva-no-flying-club/'},
  {name:'Iberia Plus',url:'https://passageirodeprimeira.com/as-10-melhores-emissoes-em-classe-executiva-no-iberia-plus/'},
  {name:'KrisFlyer (Singapore)',url:'https://passageirodeprimeira.com/as-10-melhores-emissoes-em-classe-executiva-no-krisflyer-da-singapore-airlines/'},
  {name:'Lifemiles (Avianca)',url:'https://passageirodeprimeira.com/as-10-melhores-emissoes-em-classe-executiva-no-avianca-lifemiles/'},
  {name:'Mileage Plan (Alaska)',url:'https://passageirodeprimeira.com/as-10-melhores-emissoes-em-classe-executiva-no-mileage-plan-da-alaska-airlines/'},
  {name:'MileagePlus (United)',url:'https://passageirodeprimeira.com/as-10-melhores-emissoes-em-classe-executiva-no-mileageplus-da-united/'},
  {name:'Privilege Club (Qatar)',url:'https://passageirodeprimeira.com/as-10-melhores-emissoes-em-classe-executiva-no-privilege-club/'},
  {name:'SkyMiles (Delta)',url:'https://passageirodeprimeira.com/as-10-melhores-emissoes-em-classe-executiva-no-delta-skymiles/'},
  {name:'Skywards (Emirates)',url:'https://passageirodeprimeira.com/as-10-melhores-emissoes-em-classe-executiva-no-emirates-skywards/'},
  {name:'Suma (Air Europa)',url:'https://passageirodeprimeira.com/as-10-melhores-emissoes-em-classe-executiva-no-suma-da-air-europa/'},
]

export default function Executivas() {
  return (
    <div>
      <PageHead title="💺 As Melhores Executivas do Mundo" subtitle="Ranking e guia completo de emissão. Fonte: Passageiro de Primeira." />
      <SectionTitle>🏆 Top 12 Melhores Executivas</SectionTitle>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(195px,1fr))', gap:'.8rem', marginBottom:'1.5rem' }}>
        {TOP12.map(e => (
          <div key={e.pos} style={{ background: e.gold ? 'linear-gradient(135deg,#FFF3CC,#FFF8E6)' : '#fff', border: e.gold ? `2px solid ${C.gold}` : `1px solid ${C.cream2}`, borderRadius:12, padding:'.9rem', boxShadow:'0 2px 10px rgba(11,29,58,.07)', display:'flex', alignItems:'center', gap:'.6rem' }}>
            <div style={{ background: e.gold ? C.gold : C.navy, color: e.gold ? C.navy : C.gold, width:32, height:32, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700, fontSize:'.85rem', fontFamily:"'Cormorant Garamond',serif", flexShrink:0 }}>{e.pos}</div>
            <div>
              <div style={{ fontWeight:700, fontSize:'.88rem', color:C.navy }}>{e.name}</div>
              <div style={{ fontSize:'.7rem', color:C.muted, fontWeight:400 }}>{e.sub}</div>
            </div>
          </div>
        ))}
      </div>
      <SectionTitle>🌎 5ª Liberdade — Executiva Mais Barata</SectionTitle>
      <Tipbox variant="green">💡 <strong>O que são Voos de 5ª Liberdade?</strong> São voos onde uma cia estrangeira opera entre dois países diferentes do seu país de origem. Saindo de Buenos Aires (EZE), você acessa executivas premium por muito menos que saindo de GRU.</Tipbox>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem', margin:'1rem 0' }}>
        <ICard title="🛫 De Buenos Aires (EZE)"><ul style={{ listStyle:'none', padding:0 }}>{['Emirates — EZE→JNB, EZE→DXB','British Airways — EZE→LHR','Air Canada — EZE→YYZ','Ethiopian Airlines — EZE→ADD','Swiss — EZE→ZRH','Turkish Airlines — EZE→IST'].map((i,x) => <li key={x} style={{ padding:'.28rem 0', borderBottom:'1px solid #EDE8DC', fontSize:'.84rem', display:'flex', gap:'.4rem' }}><span style={{ color:C.gold2 }}>✦</span>{i}</li>)}</ul></ICard>
        <ICard title="💳 Como Emitir 5ª Liberdade"><ul style={{ listStyle:'none', padding:0 }}>{['Pesquise no Seats.aero saindo de EZE','Emirates EZE: Smiles ou Azulpelomundo','British EZE: Avios ou Smiles','Turkish EZE: Smiles (30k eco CC)','Compre voo BR→EZE separado (pagante)','Despache a mala só até o destino final'].map((i,x) => <li key={x} style={{ padding:'.28rem 0', borderBottom:'1px solid #EDE8DC', fontSize:'.84rem', display:'flex', gap:'.4rem' }}><span style={{ color:C.gold2 }}>✦</span>{i}</li>)}</ul></ICard>
      </div>
      <SectionTitle>📚 Top 10 Emissões por Programa</SectionTitle>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(230px,1fr))', gap:'.8rem' }}>
        {PROGRAMS.map(p => (
          <div key={p.name} style={{ background:'#fff', borderRadius:12, padding:'.95rem', boxShadow:'0 2px 10px rgba(11,29,58,.07)', borderLeft:`3px solid ${C.gold}` }}>
            <div style={{ fontWeight:700, fontSize:'.88rem', color:C.navy, marginBottom:'.35rem' }}>{p.name}</div>
            <a href={p.url} target="_blank" rel="noreferrer" style={{ color:C.gold2, textDecoration:'none', fontSize:'.8rem', fontWeight:600 }}>Ver as 10 melhores →</a>
          </div>
        ))}
      </div>
    </div>
  )
}
