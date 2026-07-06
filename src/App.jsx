import { useState, useEffect } from 'react'
import Login from './pages/Login'
import MapaEmissoes from './pages/MapaEmissoes'

export default function App() {
  const [authed, setAuthed] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const saved = sessionStorage.getItem('gonex_auth_email')
    if (saved) setAuthed(true)
    setLoading(false)
  }, [])

  if (loading) return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#0B1D3A'}}>
      <div style={{width:48,height:48,border:'3px solid rgba(245,200,66,.3)',borderTopColor:'#F5C842',borderRadius:'50%',animation:'spin 0.8s linear infinite'}} />
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  )

  if (!authed) return <Login onLogin={() => setAuthed(true)} />
  return <MapaEmissoes onLogout={() => { sessionStorage.removeItem('gonex_auth_email'); setAuthed(false) }} />
}
