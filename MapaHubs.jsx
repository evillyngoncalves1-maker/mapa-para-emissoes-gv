import { PageHead, ICard, Tipbox, C, SectionTitle } from './UI'

function HubCard({ flag, title, body, tip, color }) {
  return (
    <div style={{ borderRadius:12, overflow:'hidden', boxShadow:'0 2px 10px rgba(11,29,58,.07)', marginBottom:'.85rem' }}>
      <div style={{ background: color || '#0B1D3A', padding:'.85rem 1.1rem', color:'#fff', fontFamily:"'Cormorant Garamond',serif", fontSize:'1.1rem', fontWeight:700 }}>{flag} {title}</div>
      <div style={{ background:C.cream, padding:'.9rem 1.1rem' }}>
        {body && <p style={{ fontSize:'.83rem', color:C.muted, marginBottom:'.5rem' }}>{body}</p>}
        <Tipbox style={{ marginTop:0 }}>🛫 <strong>Do Brasil:</strong> {tip}</Tipbox>
      </div>
    </div>
  )
}

export default function MapaHubs() {
  return (
    <div>
      <PageHead title="🌐 Mapa de Hubs Mundiais" subtitle="Os principais hubs de conexão organizados por aliança — e como chegar saindo do Brasil." />
      <div style={{ background:C.white, borderRadius:14, padding:'1.25rem', boxShadow:'0 2px 10px rgba(11,29,58,.07)', marginBottom:'1rem' }}>
        <SectionTitle>⭐ Star Alliance — Principais Hubs</SectionTitle>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:'.85rem' }}>
          <HubCard flag="🇺🇸" title="Newark (EWR) — United" body="Conexão para toda América do Norte, Ásia e Europa." tip="Azul voa VCP→EWR direto! Ou LATAM/GOL via GRU. Emitir: Azulpelomundo ou Miles&Go" color="linear-gradient(135deg,#7A5000,#C28000)" />
          <HubCard flag="🇩🇪" title="Frankfurt (FRA) — Lufthansa" body="Maior hub da Europa Central. Conexão para 100+ destinos." tip="LATAM voa GRU→FRA direto. Emitir: Miles&Go, LatamPass ou Azulpelomundo" color="linear-gradient(135deg,#7A5000,#C28000)" />
          <HubCard flag="🇵🇹" title="Lisboa (LIS) — TAP" body="Gateway Brasil-Europa. Mais cidades do Brasil com voo direto." tip="TAP voa GRU, GIG, FOR, REC, BSB→LIS. Emitir: Miles&Go, Smiles ou Azulpelomundo" color="linear-gradient(135deg,#7A5000,#C28000)" />
          <HubCard flag="🇹🇷" title="Istambul (IST) — Turkish" body="Maior hub do mundo em nº de destinos: 340+. Ásia, África, Europa." tip="Turkish voa GRU→IST. Emitir: Smiles (30k CC), Azulpelomundo" color="linear-gradient(135deg,#7A5000,#C28000)" />
          <HubCard flag="🇸🇬" title="Singapura (SIN) — Singapore" body="Hub Ásia-Pacífico. Executiva #1 do mundo." tip="Via DXB ou LAX. Emitir: KrisFlyer ou Miles&Go" color="linear-gradient(135deg,#7A5000,#C28000)" />
          <HubCard flag="🇪🇹" title="Adis Abeba (ADD) — Ethiopian" body="Maior hub da África. 60+ destinos africanos." tip="LATAM voa GRU→ADD direto! Emitir: Miles&Go ou Smiles" color="linear-gradient(135deg,#7A5000,#C28000)" />
        </div>
      </div>
      <div style={{ background:C.white, borderRadius:14, padding:'1.25rem', boxShadow:'0 2px 10px rgba(11,29,58,.07)', marginBottom:'1rem' }}>
        <SectionTitle>💎 OneWorld — Principais Hubs</SectionTitle>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:'.85rem' }}>
          <HubCard flag="🇺🇸" title="Miami (MIA) — American" body="Principal hub AA para América do Sul." tip="LATAM, GOL e Azul voam GRU→MIA. Emitir AA: Smiles 7,5k/trecho" color="linear-gradient(135deg,#7B0000,#B01010)" />
          <HubCard flag="🇬🇧" title="Londres Heathrow (LHR) — British" body="Hub mais movimentado da Europa." tip="LATAM/GOL→LHR direto. Emitir BA: Avios (variável) ou Smiles" color="linear-gradient(135deg,#7B0000,#B01010)" />
          <HubCard flag="🇶🇦" title="Doha (DOH) — Qatar" body="Executiva top 4. Conexão Ásia, África e Oceania." tip="LATAM voa GRU→DOH. Emitir: LatamPass ou Avios" color="linear-gradient(135deg,#7B0000,#B01010)" />
          <HubCard flag="🇭🇰" title="Hong Kong (HKG) — Cathay" body="Executiva top 3. Conexão toda a Ásia." tip="Via LHR ou DXB. Emitir Cathay: Avios ou AAdvantage" color="linear-gradient(135deg,#7B0000,#B01010)" />
          <HubCard flag="🇫🇮" title="Helsinki (HEL) — Finnair" body="Rota mais curta Europa→Ásia via polo norte." tip="Via FRA ou LHR. Emitir Finnair: Avios" color="linear-gradient(135deg,#7B0000,#B01010)" />
        </div>
      </div>
      <div style={{ background:C.white, borderRadius:14, padding:'1.25rem', boxShadow:'0 2px 10px rgba(11,29,58,.07)', marginBottom:'1rem' }}>
        <SectionTitle>🌐 SkyTeam — Principais Hubs</SectionTitle>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:'.85rem' }}>
          <HubCard flag="🇫🇷" title="Paris CDG (CDG) — Air France" body="Hub Air France/KLM. FlyingBlue com promoções mensais." tip="Air France e LATAM voam GRU/GIG→CDG. Emitir: FlyingBlue" color="linear-gradient(135deg,#00377C,#005AA8)" />
          <HubCard flag="🇳🇱" title="Amsterdã (AMS) — KLM" body="Hub KLM. LATAM voa direto do Brasil." tip="LATAM voa GRU→AMS. Emitir KLM: FlyingBlue" color="linear-gradient(135deg,#00377C,#005AA8)" />
          <HubCard flag="🇺🇸" title="Atlanta (ATL) — Delta" body="Maior hub Delta do mundo." tip="Via MIA ou CDG. Emitir Delta: FlyingBlue ou TF Latam (N O)" color="linear-gradient(135deg,#00377C,#005AA8)" />
        </div>
      </div>
      <div style={{ background:C.white, borderRadius:14, padding:'1.25rem', boxShadow:'0 2px 10px rgba(11,29,58,.07)', marginBottom:'1rem' }}>
        <SectionTitle>✈️ Hubs Independentes — Essenciais</SectionTitle>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:'.85rem' }}>
          <HubCard flag="🇦🇪" title="Dubai (DXB) — Emirates" body="Hub global estratégico. Conecta quase tudo. Executiva premium." tip="Emirates voa GRU→DXB. ⭐ Mais barato de Buenos Aires (EZE)! Emitir: Smiles ou Azulpelomundo" color="linear-gradient(135deg,#1A3A2A,#2A6A4A)" />
          <HubCard flag="🇵🇦" title="Panamá (PTY) — Copa" body="Hub das Américas. Conexão toda a América Central e Caribe." tip="Copa voa GRU/GIG→PTY. Emitir: Smiles, Azulpelomundo ou ConnectMiles" color="linear-gradient(135deg,#1A3A2A,#2A6A4A)" />
          <HubCard flag="🇦🇷" title="Buenos Aires (EZE) — 5ª Liberdade" body="Ponto crítico! Emirates, British, Swiss, Turkish, Air Canada, Ethiopian saem MAIS BARATOS daqui." tip="Voo doméstico BR→EZE + Executiva saindo de EZE. Vale o esforço para executiva!" color="linear-gradient(135deg,#1A3A2A,#2A6A4A)" />
        </div>
      </div>
    </div>
  )
}
