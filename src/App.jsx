import MapaEmissoes from './pages/MapaEmissoes'

export default function App() {
  // Removida a verificação do Supabase temporariamente para o app carregar
  return <MapaEmissoes onLogout={() => {}} />
}
