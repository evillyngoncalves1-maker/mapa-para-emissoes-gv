import { PageHead, ICard, C } from './UI'
const STEPS = [
  {title:'Definição de Rota',body:'Use o <a href="https://www.flightconnections.com" target="_blank" style="color:#E8A720;font-weight:700">FlightConnections</a> para mapear rotas disponíveis origem→destino. Identifique quais companhias e hubs são necessários.'},
  {title:'Cotação da Pagante (Referência)',body:'Pesquise o valor em dinheiro: <strong>Google Voos</strong> (datas flexíveis), <strong>ITA Matrix</strong> (tarifas avançadas), Kiwi / Skyscanner / Decolar.'},
  {title:'Identificar Aliança da Cia Operadora',body:'⭐ <strong>Star Alliance</strong> → Busque via <strong>United</strong><br>💎 <strong>OneWorld</strong> → Busque via <strong>American Airlines</strong><br>🌐 <strong>SkyTeam</strong> → Busque via <strong>Virgin / Air France</strong><br>✈️ <strong>Independente</strong> → Site da própria cia ou Seats.aero'},
  {title:'Verificar Disponibilidade Award',body:'Use o <a href="https://www.seat.aero" target="_blank" style="color:#E8A720;font-weight:700">Seats.aero</a> (aba Advanced para filtrar por cia e programa). Identifique disponibilidade eco, executiva e primeira. Anote o programa que libera a rota.'},
  {title:'Escolher o Melhor Programa',body:'<strong>Nacionais:</strong> Ibéria, AA, British, Copa, TAP, Avianca, Air Canada, United.<br><strong>Internacionais:</strong> TF TAP, TF Latam, Award Azul/GOL, TF Copa, TF AA, TF Avianca.<br>Multiplique o milheiro de resgate pelo seu milheiro médio de compra.'},
  {title:'Emitir!',body:'Confirme taxas de embarque, validade e regras de alteração antes de emitir.<br>⚠️ <strong>Último recurso — Skiplagged:</strong> Desembarque na conexão como destino final. Não permite despachar bagagem.'},
]
const PROGRAMAS = ['Smiles — GOL','TudoAzul / Azulpelomundo — Azul','LatamPass — LATAM','Miles&Go / Tap Miles&Go — TAP','AAdvantage — American Airlines','MileagePlus — United','Aeroplan — Air Canada','ConnectMiles — Avianca/Copa','FlyingBlue — Air France/KLM','Avios — British/Iberia/Qatar','KrisFlyer — Singapore Airlines','MileagePlan — Alaska Airlines']
export default function ComoEmitir() {
  return (
    <div>
      <PageHead title="🔢 Como Emitir Passo a Passo" subtitle="Metodologia Gonex para qualquer cotação com milhas." />
      <div style={{ background:'#fff', borderRadius:14, padding:'1.5rem', boxShadow:'0 2px 10px rgba(11,29,58,.07)', marginBottom:'1rem' }}>
        {STEPS.map((s, i) => (
          <div key={i} style={{ display:'flex', gap:'1rem', marginBottom:'1.1rem', alignItems:'flex-start' }}>
            <div style={{ background:C.navy, color:C.gold, width:34, height:34, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700, flexShrink:0, fontFamily:"'Cormorant Garamond',serif", fontSize:'1rem' }}>{i+1}</div>
            <div>
              <h4 style={{ fontWeight:700, marginBottom:'.3rem', fontSize:'.95rem' }}>{s.title}</h4>
              <p style={{ color:'#5A6A82', fontSize:'.85rem', lineHeight:1.6, margin:0 }} dangerouslySetInnerHTML={{ __html: s.body }} />
            </div>
          </div>
        ))}
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
        <ICard title="📊 Tipos de Tarifa"><ul style={{ listStyle:'none', padding:0 }}>{['Comercial/Pública: Passagem em dinheiro','Comercial em Milhas: Desconto em milhas no valor','Award: Preço fixo em milhas (melhores amigos)','Tabela Fixa: Preço fixo por companhia parceira','Consolidadores: Emissão recoupante com margem ~10%'].map((t, i) => <li key={i} style={{ padding:'.28rem 0', borderBottom:'1px solid #EDE8DC', fontSize:'.84rem', display:'flex', gap:'.4rem' }}><span style={{ color:'#E8A720' }}>✦</span>{t}</li>)}</ul></ICard>
        <ICard title="💳 Programas de Milhas"><ul style={{ listStyle:'none', padding:0 }}>{PROGRAMAS.map((p, i) => <li key={i} style={{ padding:'.28rem 0', borderBottom:'1px solid #EDE8DC', fontSize:'.84rem', display:'flex', gap:'.4rem' }}><span style={{ color:'#E8A720' }}>✦</span>{p}</li>)}</ul></ICard>
      </div>
    </div>
  )
}
