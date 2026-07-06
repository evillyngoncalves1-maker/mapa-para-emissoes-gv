import { PageHead, Tipbox, C } from './UI'
const CIAS = [
  { color:'#0071C5', emoji:'💙', name:'Azul Linhas Aéreas', items:['Voos nacionais: TudoAzul (Voucher)','Voos internacionais: Azulpelomundo','Award direto: Air Canada, Emirates, Copa, Turkish, TAP, United','Voos VCP→EWR, VCP→MCO e VCP→FLL diretos!','Parceiros comerciais: Air France, British, Cathay, Ethiopian, Garuda, Iberia, JAL, KLM, Korean, Lufthansa, Qantas, Qatar, SAA, Singapore, Swiss, TAAG'] },
  { color:'#F37021', emoji:'🟠', name:'GOL (Smiles)', items:['Voos nacionais e internacionais: Smiles','Award: AA 7,5k/trecho · Copa 12,5k · TAP 35k · Avianca 12k','Emirates e Turkish ⚠️ taxa de combustível','Aceito por 35+ parceiros internacionais','Tabela fixa TAP disponível'] },
  { color:'#C8102E', emoji:'🔴', name:'LATAM (LatamPass)', items:['Voos nacionais e internacionais: LatamPass','Parceiros award: Qatar, Ibéria, Qantas, Delta (TF)','Aceita Avios (Ibéria/British/Qatar)','Aceita MileagePlus (United) e Miles&Go (TAP)','15 parceiros com tabela fixa'] },
]
export default function CiasNacionais() {
  return (
    <div>
      <PageHead title="🇧🇷 Companhias Nacionais" subtitle="Guia completo de emissão com Azul, GOL e LATAM." />
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:'1rem', marginBottom:'1rem' }}>
        {CIAS.map(c => (
          <div key={c.name} style={{ background:'#fff', borderRadius:12, padding:'1.1rem', boxShadow:'0 2px 10px rgba(11,29,58,.07)', borderTop:`4px solid ${c.color}` }}>
            <h3 style={{ color:c.color, marginBottom:'.65rem', fontFamily:"'Cormorant Garamond',serif", fontSize:'1.2rem' }}>{c.emoji} {c.name}</h3>
            <ul style={{ listStyle:'none', padding:0 }}>
              {c.items.map((item, i) => <li key={i} style={{ padding:'.28rem 0', borderBottom:'1px solid #EDE8DC', fontSize:'.84rem', display:'flex', gap:'.4rem', lineHeight:1.45 }}><span style={{ color:'#E8A720' }}>✦</span><span dangerouslySetInnerHTML={{ __html: item }} /></li>)}
            </ul>
          </div>
        ))}
      </div>
      <Tipbox>📋 <strong>Saindo do Brasil:</strong> Star Alliance → via United | OneWorld → via American Airlines | SkyTeam → via Delta/Virgin | Independentes → Smiles, Azulpelomundo ou site da cia</Tipbox>
    </div>
  )
}
