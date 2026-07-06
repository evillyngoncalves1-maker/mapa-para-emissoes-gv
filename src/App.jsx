import MapaEmissoes from './pages/MapaEmissoes'

export default function App() {
  // Verificação do Supabase removida temporariamente para o app carregar direto
  return <MapaEmissoes onLogout={() => {}} />
}
