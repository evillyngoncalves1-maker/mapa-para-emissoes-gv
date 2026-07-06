import { PageHead, C } from './UI'
const PHONES = [
  ['🟠 GOL (Smiles)','0300 115 2121 / +55 11 3471 2973','24h','https://www.voegol.com.br/atendimento/telefones','voegol.com.br'],
  ['💙 AZUL','0800 887 1118','24h','https://www.tudoazul.com','tudoazul.com'],
  ['🔴 LATAM','0800 0123 200 / 0300 570 5700','24h','https://www.latamairlines.com/br/pt/sobre-latam/contact-center','latamairlines.com'],
  ['🇺🇸 American Airlines','—','—','https://www.aa.com/i18n/customer-service/contact-american/american-customer-service.jsp','aa.com'],
  ['🇺🇸 United Airlines','0800 16 23 232 / 11 3145 4200','24h','https://www.united.com/ual/pt/br/fly/anac.html','united.com'],
  ['🇩🇪 Lufthansa','0800 595 0728 / WhatsApp (11) 5196-2359','24h','https://www.lufthansa.com/br/pt/local-page/lufthansa-in-brazil/sac','lufthansa.com'],
  ['🇵🇹 TAP Air Portugal','0800 888 2099','24h','https://www.flytap.com/pt-br/suporte/contatos','flytap.com'],
  ['🇶🇦 Qatar Airways','11 5108 0475','09:00–17:00','https://www.qatarairways.com/pt-br/inspire/call-center.html','qatarairways.com'],
  ['🇵🇦 Copa Airlines','55 11 4933 2399','06:00–00:00','https://www.copaair.com/pt-us/atendimento-ao-cliente/centro-de-chamadas/','copaair.com'],
  ['✈️ Delta Air Lines','0800 761 0035','24h','https://pt.delta.com/br/pt/need-help/overview#br-contact-us','delta.com'],
  ['✈️ Ethiopian Airlines','+55 11 4063 5199','09:00–18:00','https://www.ethiopianairlines.com/ao/pt','ethiopianairlines.com'],
  ['🇦🇷 FlyBondi','0800 891 2754','08:00–18:00','https://flybondi.com/br/canalesdeconsulta','flybondi.com'],
  ['🇪🇸 Ibéria','11 3956 5999 / WA +34676676004 / 0800 886 82 66','24h','https://www.iberia.com/br/contato/','iberia.com'],
  ['🇮🇹 ITA Airways','0800 8913756','24h','https://www.ita-airways.com/pt_br/support/contact-assistance/customer-center.html','ita-airways.com'],
  ['🇿🇦 South African','+55 11 3174 1500 / WA +55 11 94558 3180','—','https://www.flysaa.com/pt_BR/help/customer-support/contact-us','flysaa.com'],
  ['🇨🇭 Swiss','+55 11 4700 8910','09:00–18:00','https://www.swiss.com/pt/pt/customer-support/contact-us','swiss.com'],
  ['🇦🇴 TAAG Angola','+55 11 4200 2004','08:00–22:00','https://www.taag.com/pt-pt/','taag.com'],
  ['🇹🇷 Turkish Airlines','+55 11 3878 8199','06:00–15:00','https://www.turkishairlines.com/pt-int/any-questions/get-in-touch/','turkishairlines.com'],
  ['🇬🇧 Virgin Atlantic','+5 08007248112','09:00–18:00','https://help.virginatlantic.com/eu/en/contact-us/calling-from-outside-uk.html','virginatlantic.com'],
]
export default function Telefones() {
  return (
    <div>
      <PageHead title="📞 Telefones e Contatos" subtitle="Todos os contatos das companhias no Brasil com horários." />
      <div style={{ background:'#fff', borderRadius:16, overflow:'hidden', boxShadow:'0 2px 10px rgba(11,29,58,.07)', overflowX:'auto' }}>
        <table style={{ width:'100%', borderCollapse:'collapse', fontSize:'.84rem' }}>
          <thead><tr>{['Companhia','Telefone(s)','Horário','Site'].map(h => <th key={h} style={{ background:C.navy, color:C.gold, padding:'.65rem .9rem', textAlign:'left', fontSize:'.78rem', whiteSpace:'nowrap' }}>{h}</th>)}</tr></thead>
          <tbody>{PHONES.map(([cia, tel, hora, url, site], i) => (
            <tr key={i} style={{ background: i%2===0 ? '#fff' : C.cream }}>
              <td style={{ padding:'.6rem .9rem', fontWeight:700, color:C.navy, whiteSpace:'nowrap' }}>{cia}</td>
              <td style={{ padding:'.6rem .9rem' }}>{tel}</td>
              <td style={{ padding:'.6rem .9rem', whiteSpace:'nowrap' }}>{hora}</td>
              <td style={{ padding:'.6rem .9rem' }}><a href={url} target="_blank" rel="noreferrer" style={{ color:C.gold2, textDecoration:'none', fontWeight:600, fontSize:'.79rem' }}>{site}</a></td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  )
}
