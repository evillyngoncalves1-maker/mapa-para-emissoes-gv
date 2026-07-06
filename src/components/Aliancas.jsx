import { PageHead, Tipbox, Tag, C } from './UI'

function AlCard({ hColor, title, stats, members, howTo, tip }) {
  return (
    <div style={{ background:'#fff', borderRadius:14, overflow:'hidden', boxShadow:'0 2px 10px rgba(11,29,58,.07)', marginBottom:'1.25rem' }}>
      <div style={{ background:hColor, padding:'.9rem 1.25rem', display:'flex', alignItems:'center', gap:'.65rem', flexWrap:'wrap' }}>
        <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'1.1rem', fontWeight:700, color:'#fff', margin:0 }}>{title}</h3>
        {stats.map(s => <span key={s} style={{ background:'rgba(255,255,255,.2)', padding:'.2rem .65rem', borderRadius:12, fontSize:'.73rem', color:'rgba(255,255,255,.9)', fontWeight:500 }}>{s}</span>)}
      </div>
      <div style={{ padding:'1rem 1.25rem' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
          <div>
            <div style={{ fontWeight:700, color:C.navy, marginBottom:'.5rem', fontSize:'.85rem' }}>✈ Membros Principais</div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'.3rem' }}>{members.map(m => <Tag key={m}>{m}</Tag>)}</div>
          </div>
          <div>
            <div style={{ fontWeight:700, color:C.navy, marginBottom:'.5rem', fontSize:'.85rem' }}>💳 Como Emitir</div>
            <ul style={{ listStyle:'none', padding:0, margin:0 }}>
              {howTo.map((h, i) => <li key={i} style={{ fontSize:'.83rem', padding:'.25rem 0', borderBottom:'1px solid #EDE8DC', display:'flex', gap:'.4rem' }}><span style={{ color:C.gold2 }}>✦</span><span dangerouslySetInnerHTML={{ __html: h }} /></li>)}
            </ul>
          </div>
        </div>
        <Tipbox>{tip}</Tipbox>
      </div>
    </div>
  )
}

export default function Aliancas() {
  return (
    <div>
      <PageHead title="🤝 Aliancas Aéreas" subtitle="Como emitir em cada aliança saindo do Brasil." />
      <AlCard
        hColor="linear-gradient(135deg,#7A5000,#C28000)"
        title="⭐ Star Alliance"
        stats={['165 países','Busque via: United']}
        members={['United','Lufthansa','Swiss','TAP Air Portugal','Turkish Airlines','Ethiopian Airlines','South African','Air Canada','Copa Airlines','Avianca','Singapore Airlines','ANA','Air India','EVA Air','LOT']}
        howTo={['Busque disponibilidade no site da <strong>United</strong> (MileagePlus)','Emita com <strong>Azulpelomundo</strong>, <strong>Smiles</strong> ou <strong>Aeroplan</strong>','TAP tem tabela fixa: 35k/trecho eco via Call Center','Turkish: 30k milhas eco via Call Center (Smiles)']}
        tip="⭐ Dica de Ouro: Encontrou no Seats.aero disponibilidade Star Alliance → emita com Azulpelomundo (United) ou Miles&Go (TAP). Para TAP direto, Gol e Azul têm tabela fixa!"
      />
      <AlCard
        hColor="linear-gradient(135deg,#7B0000,#B01010)"
        title="💎 OneWorld"
        stats={['900+ destinos','Busque via: American Airlines']}
        members={['American Airlines','British Airways','Iberia','Qatar Airways','LATAM Airlines','Qantas','Japan Airlines','Cathay Pacific','Finnair','Royal Air Maroc','Alaska Airlines','SriLankan','Aer Lingus','Malaysia Airlines']}
        howTo={['Busque disponibilidade via <strong>American Airlines</strong>','Emita com <strong>Smiles</strong> (AA 7,5k por trecho eco)','Use <strong>Avios</strong> para British, Iberia, Qatar e Finnair','MileagePlan (Alaska) para JAL é excelente!']}
        tip="💎 Dica de Ouro: Smiles para AA é a pedida clássica. Para executiva JAL/Cathay, Alaska MileagePlan tem as melhores tabelas! Site Alaska para buscar voos LATAM."
      />
      <AlCard
        hColor="linear-gradient(135deg,#00377C,#0060A8)"
        title="🌐 SkyTeam"
        stats={['170+ países','Busque via: Air France / Virgin']}
        members={['Air France','KLM','Delta','Aeromexico','Virgin Atlantic','Korean Air','Aerolineas Argentinas','China Southern','ITA Airways','Garuda Indonesia','Saudia','EgyptAir','Kenya Airways']}
        howTo={['Busque via <strong>Air France</strong> ou <strong>Virgin Atlantic</strong>','Emita com <strong>FlyingBlue</strong> (Air France/KLM)','Delta: <strong>tabela fixa LATAM</strong> (regra tarifária N O)','Korean Air: <strong>Smiles</strong> aceita direto!','Garuda Indonesia: <strong>Smiles</strong> aceita!']}
        tip="🌐 Dica de Ouro: FlyingBlue tem promoções mensais incríveis (Flash Sales). Delta via TF Latam é muito vantajoso. Smiles aceita Korean Air e Garuda!"
      />
    </div>
  )
}
