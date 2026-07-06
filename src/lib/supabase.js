import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

export async function checkEmailAccess(email) {
  const { data, error } = await supabase
    .from('mapa_emissoes_acesso')
    .select('email')
    .eq('email', email.toLowerCase().trim())
    .eq('ativo', true)
    .single()
  if (error) return false
  return !!data
}

export async function submitAccessRequest(nome, email, mensagem) {
  const { error } = await supabase
    .from('mapa_emissoes_solicitacoes')
    .insert([{ nome, email: email.toLowerCase().trim(), mensagem }])
  return !error
}
