import { PageHead, C } from './UI'
const SITES = [
  {name:'🎫 SEAT.AERO',desc:'Buscador de disponibilidade award em múltiplos programas. Use a aba Advanced para filtrar por cia e cabine.',url:'https://www.seat.aero',link:'seat.aero →'},
  {name:'🌐 FlightConnections',desc:'Mapa visual de conexões de voos. Essencial para definir a rota antes de buscar disponibilidade.',url:'https://www.flightconnections.com',link:'flightconnections.com →'},
  {name:'🔍 Google Voos',desc:'Pesquisa de voos com datas flexíveis. Use para ter o valor pagante de referência.',url:'https://www.google.com/travel/flights',link:'google.com/travel/flights →'},
  {name:'📊 ITA Matrix',desc:'Ferramenta avançada para busca de tarifas com filtros de companhia e escala.',url:'https://matrix.itasoftware.com',link:'matrix.itasoftware.com →'},
  {name:'💰 TripMilhas',desc:'Buscador de disponibilidade em milhas focado no mercado brasileiro.',url:'https://www.tripmilhas.com.br',link:'tripmilhas.com.br →'},
  {name:'🗺️ ViajaFlux',desc:'Buscador especializado em tarifas award e disponibilidade de milhas.',url:'https://www.viajaflux.com',link:'viajaflux.com →'},
  {name:'💺 SeatGuru',desc:'Mapa de assentos de aeronaves — escolha o melhor assento antes de emitir.',url:'https://www.seatguru.com',link:'seatguru.com →'},
  {name:'✈️ FlightRadar24',desc:'Rastreamento de voos em tempo real e verificação de rotas operadas.',url:'https://www.flightradar24.com',link:'flightradar24.com →'},
  {name:'🐇 Skiplagged',desc:'Último recurso — desembarque na conexão como destino final. ⚠️ Não permite despacho de bagagem.',url:'https://skiplagged.com',link:'skiplagged.com →'},
]
export default function SitesUteis() {
  return (
    <div>
      <PageHead title="💻 Sites Essenciais" subtitle="Ferramentas que todo assessor Gonex precisa conhecer." />
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:'1rem' }}>
        {SITES.map(s => (
          <div key={s.name} style={{ background:'#fff', borderRadius:12, padding:'1.1rem', boxShadow:'0 2px 10px rgba(11,29,58,.07)', display:'flex', flexDirection:'column', gap:'.4rem', borderTop:`3px solid ${C.gold}` }}>
            <h3 style={{ color:C.navy, fontSize:'.93rem', fontWeight:700 }}>{s.name}</h3>
            <p style={{ color:'#5A6A82', fontSize:'.82rem', lineHeight:1.45, flex:1 }}>{s.desc}</p>
            <a href={s.url} target="_blank" rel="noreferrer" style={{ color:C.gold2, fontWeight:700, textDecoration:'none', fontSize:'.81rem' }}>{s.link}</a>
          </div>
        ))}
      </div>
    </div>
  )
}
