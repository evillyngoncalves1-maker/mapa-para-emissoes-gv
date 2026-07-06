import { useState } from 'react'
import Logo from '../components/Logo'
import BuscadorIATA from '../components/BuscadorIATA'
import BuscadorCia from '../components/BuscadorCia'
import MapaHubs from '../components/MapaHubs'
import PorRegiao from '../components/PorRegiao'
import Aliancas from '../components/Aliancas'
import TabelasFixas from '../components/TabelasFixas'
import ComoEmitir from '../components/ComoEmitir'
import CiasNacionais from '../components/CiasNacionais'
import Telefones from '../components/Telefones'
import SitesUteis from '../components/SitesUteis'
import Executivas from '../components/Executivas'

const TABS = [
  { id:'iata',    label:'🛫 Buscar IATA',   component: BuscadorIATA },
  { id:'hubs',    label:'🌐 Mapa de Hubs',  component: MapaHubs },
  { id:'cias',    label:'✈️ Buscar Cia',     component: BuscadorCia },
  { id:'regioes', label:'🗺️ Por Região',     component: PorRegiao },
  { id:'Aliancas',label:'🤝 Aliancas',       component: Aliancas },
  { id:'exec',    label:'💺 Executivas',     component: Executivas },
  { id:'tabelas', label:'📋 Tabelas Fixas',  component: TabelasFixas },
  { id:'como',    label:'🔢 Como Emitir',    component: ComoEmitir },
  { id:'nac',     label:'🇧🇷 Cias Nacionais', component: CiasNacionais },
  { id:'tel',     label:'📞 Telefones',      component: Telefones },
  { id:'sites',   label:'💻 Sites Úteis',    component: SitesUteis },
]

export default function MapaEmissoes({ onLogout }) {
  const [activeTab, setActiveTab] = useState('iata')
  const ActiveComponent = TABS.find(t => t.id === activeTab)?.component

  return (
    <div style={s.wrap}>
      {/* HEADER */}
      <header style={s.header}>
        <div style={s.headerInner}>
          <Logo size={56} variant="dark" />
          <div style={s.headerText}>
            <div style={s.headerTitle}>Gonex Viagens — Mapa de Emissões</div>
            <div style={s.headerSub}>Busca por IATA · Rotas · Hubs · Aliancas · Executivas</div>
          </div>
          <div style={s.headerRight}>
            <span style={s.badge}>USO INTERNO</span>
            <button onClick={onLogout} style={s.logoutBtn} title="Sair">⎋ Sair</button>
          </div>
        </div>

        {/* NAV */}
        <nav style={s.nav}>
          <div style={s.navInner}>
            {TABS.map(t => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                style={{...s.navTab, ...(activeTab === t.id ? s.navTabActive : {})}}
              >
                {t.label}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* MAIN */}
      <main style={s.main}>
        {ActiveComponent && <ActiveComponent />}
      </main>

      <footer style={s.footer}>
        Gonex Viagens — <span style={{color:'#F5C842',fontWeight:700}}>Mapa de Emissões</span> — Uso Interno · 2026
      </footer>
    </div>
  )
}

const s = {
  wrap: { minHeight:'100vh', display:'flex', flexDirection:'column', fontFamily:"'Inter',sans-serif", background:'#F8F4EC', color:'#0B1D3A' },
  header: { background:'#0B1D3A', position:'sticky', top:0, zIndex:1000, boxShadow:'0 4px 32px rgba(0,0,0,.4)' },
  headerInner: { maxWidth:1400, margin:'0 auto', padding:'.8rem 1.5rem', display:'flex', alignItems:'center', gap:'1rem' },
  headerText: { flex:1 },
  headerTitle: { fontFamily:"'Cormorant Garamond',serif", fontSize:'1.45rem', fontWeight:700, color:'#F5C842', letterSpacing:.5, lineHeight:1.15 },
  headerSub: { fontSize:'.72rem', color:'rgba(255,255,255,.5)', letterSpacing:.3, marginTop:2 },
  headerRight: { display:'flex', alignItems:'center', gap:'.65rem' },
  badge: { background:'rgba(245,200,66,.15)', border:'1px solid rgba(245,200,66,.35)', color:'#F5C842', fontSize:'.67rem', fontWeight:700, padding:'.2rem .6rem', borderRadius:20, letterSpacing:.4, whiteSpace:'nowrap' },
  logoutBtn: { background:'rgba(255,255,255,.08)', border:'1px solid rgba(255,255,255,.15)', color:'rgba(255,255,255,.6)', fontSize:'.72rem', padding:'.3rem .7rem', borderRadius:8, cursor:'pointer', fontFamily:'Inter,sans-serif', whiteSpace:'nowrap' },
  nav: { background:'rgba(0,0,0,.2)', borderTop:'1px solid rgba(255,255,255,.07)' },
  navInner: { maxWidth:1400, margin:'0 auto', padding:'0 1.5rem', display:'flex', gap:'.1rem', overflowX:'auto', scrollbarWidth:'none' },
  navTab: { background:'transparent', border:'none', borderBottom:'3px solid transparent', color:'rgba(255,255,255,.5)', padding:'.62rem .8rem', cursor:'pointer', fontSize:'.75rem', fontWeight:500, fontFamily:'Inter,sans-serif', whiteSpace:'nowrap', transition:'all .18s', letterSpacing:.2 },
  navTabActive: { color:'#F5C842', borderBottomColor:'#F5C842', fontWeight:700 },
  main: { flex:1, maxWidth:1400, margin:'0 auto', width:'100%', padding:'1.5rem 1.5rem 3rem' },
  footer: { background:'#0B1D3A', textAlign:'center', padding:'.85rem', color:'rgba(255,255,255,.35)', fontSize:'.72rem', letterSpacing:.3 },
}
