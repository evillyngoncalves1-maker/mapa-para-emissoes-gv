import { useState } from 'react'
import { checkEmailAccess, submitAccessRequest } from '../lib/supabase'
import Logo from '../components/Logo'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showRequest, setShowRequest] = useState(false)
  const [req, setReq] = useState({ nome: '', email: '', mensagem: '' })
  const [reqLoading, setReqLoading] = useState(false)
  const [reqOk, setReqOk] = useState(false)
  const [reqError, setReqError] = useState('')

  async function handleLogin(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    const ok = await checkEmailAccess(email)
    if (ok) {
      sessionStorage.setItem('gonex_auth_email', email.toLowerCase().trim())
      onLogin()
    } else {
      setError('E-mail não autorizado. Solicite acesso abaixo.')
      setShowRequest(true)
    }
    setLoading(false)
  }

  async function handleRequest(e) {
    e.preventDefault()
    setReqError('')
    if (!req.nome || !req.email) { setReqError('Preencha nome e e-mail.'); return }
    setReqLoading(true)
    const ok = await submitAccessRequest(req.nome, req.email, req.mensagem)
    if (ok) setReqOk(true)
    else setReqError('Erro ao enviar. Tente novamente.')
    setReqLoading(false)
  }

  return (
    <div style={styles.bg}>
      {/* Decorative orbs */}
      <div style={styles.orb1} />
      <div style={styles.orb2} />

      <div style={styles.card}>
        {/* Logo */}
        <div style={styles.logoWrap}>
          <Logo size={68} />
        </div>

        <div style={styles.brand}>Gonex Viagens</div>
        <div style={styles.subtitle}>Mapa de Emissões</div>
        <div style={styles.tagline}>Acesso restrito à equipe</div>

        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="email"
            placeholder="Seu e-mail cadastrado"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" disabled={loading} style={styles.btn}>
            {loading ? 'Verificando...' : 'Entrar →'}
          </button>
        </form>

        {error && <div style={styles.error}>{error}</div>}

        {/* Request access toggle */}
        {!reqOk && (
          <button
            onClick={() => setShowRequest(v => !v)}
            style={styles.linkBtn}
          >
            {showRequest ? 'Fechar formulário' : 'Não tenho acesso — solicitar'}
          </button>
        )}

        {showRequest && !reqOk && (
          <form onSubmit={handleRequest} style={styles.reqForm}>
            <div style={styles.reqTitle}>Solicitar Acesso</div>
            <input
              placeholder="Seu nome"
              value={req.nome}
              onChange={e => setReq(r => ({...r, nome: e.target.value}))}
              style={styles.inputSm}
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              value={req.email}
              onChange={e => setReq(r => ({...r, email: e.target.value}))}
              style={styles.inputSm}
            />
            <textarea
              placeholder="Por que você precisa de acesso? (opcional)"
              value={req.mensagem}
              onChange={e => setReq(r => ({...r, mensagem: e.target.value}))}
              rows={2}
              style={{...styles.inputSm, resize:'vertical'}}
            />
            {reqError && <div style={styles.error}>{reqError}</div>}
            <button type="submit" disabled={reqLoading} style={styles.btnGold}>
              {reqLoading ? 'Enviando...' : 'Enviar solicitação'}
            </button>
          </form>
        )}

        {reqOk && (
          <div style={styles.success}>
            ✅ Solicitação enviada! A Evillyn irá analisar e te avisar quando liberado.
          </div>
        )}

        <div style={styles.footer}>gonexviagens.com.br</div>
      </div>
    </div>
  )
}

const styles = {
  bg: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0B1D3A 0%, #1B2D5B 60%, #0D2545 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: "'Inter', sans-serif",
  },
  orb1: {
    position: 'absolute', width: 400, height: 400,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(245,200,66,0.08) 0%, transparent 70%)',
    top: -100, right: -100, pointerEvents: 'none',
  },
  orb2: {
    position: 'absolute', width: 300, height: 300,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(245,200,66,0.05) 0%, transparent 70%)',
    bottom: -80, left: -80, pointerEvents: 'none',
  },
  card: {
    background: '#fff',
    borderRadius: 24,
    padding: '2.5rem 2rem 2rem',
    maxWidth: 400,
    width: '100%',
    boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
  },
  logoWrap: { display: 'flex', justifyContent: 'center', marginBottom: '1rem' },
  brand: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.6rem', fontWeight: 700,
    color: '#0B1D3A', letterSpacing: 0.5, lineHeight: 1.1,
  },
  subtitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1rem', fontWeight: 600,
    color: '#E8A720', letterSpacing: 1, marginTop: 2,
  },
  tagline: {
    fontSize: '.75rem', color: '#8A9AB0',
    letterSpacing: .5, marginTop: 4, marginBottom: '1.75rem',
  },
  form: { display: 'flex', flexDirection: 'column', gap: '.65rem' },
  input: {
    padding: '.75rem 1rem',
    border: '2px solid #EDE8DC',
    borderRadius: 12,
    fontSize: '.92rem',
    fontFamily: 'Inter, sans-serif',
    outline: 'none',
    color: '#0B1D3A',
    background: '#FAFAF8',
    transition: 'border-color .2s',
    width: '100%',
    boxSizing: 'border-box',
  },
  btn: {
    background: '#0B1D3A',
    color: '#F5C842',
    border: 'none',
    padding: '.82rem',
    borderRadius: 12,
    fontWeight: 700,
    fontSize: '.95rem',
    cursor: 'pointer',
    fontFamily: 'Inter, sans-serif',
    letterSpacing: .3,
    transition: 'background .18s, transform .1s',
  },
  btnGold: {
    background: '#F5C842',
    color: '#0B1D3A',
    border: 'none',
    padding: '.72rem',
    borderRadius: 12,
    fontWeight: 700,
    fontSize: '.88rem',
    cursor: 'pointer',
    fontFamily: 'Inter, sans-serif',
    width: '100%',
    marginTop: '.25rem',
  },
  error: {
    color: '#c0392b',
    fontSize: '.8rem',
    marginTop: '.6rem',
    background: '#FFF5F5',
    borderRadius: 8,
    padding: '.5rem .75rem',
    border: '1px solid #FADADD',
  },
  success: {
    color: '#1a5c38',
    fontSize: '.82rem',
    marginTop: '.75rem',
    background: '#F0FFF5',
    borderRadius: 8,
    padding: '.6rem .75rem',
    border: '1px solid #A8E6BF',
  },
  linkBtn: {
    background: 'none', border: 'none',
    color: '#8A9AB0', fontSize: '.78rem',
    cursor: 'pointer', textDecoration: 'underline',
    marginTop: '1rem', fontFamily: 'Inter, sans-serif',
  },
  reqForm: {
    marginTop: '1rem',
    padding: '1rem',
    background: '#F8F4EC',
    borderRadius: 12,
    display: 'flex', flexDirection: 'column', gap: '.5rem',
    textAlign: 'left',
  },
  reqTitle: {
    fontWeight: 700, fontSize: '.85rem',
    color: '#0B1D3A', marginBottom: '.25rem',
  },
  inputSm: {
    padding: '.6rem .85rem',
    border: '1.5px solid #EDE8DC',
    borderRadius: 8,
    fontSize: '.85rem',
    fontFamily: 'Inter, sans-serif',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
    background: '#fff',
  },
  footer: {
    marginTop: '1.5rem',
    fontSize: '.7rem',
    color: '#BCC5D0',
    letterSpacing: .5,
  },
}
