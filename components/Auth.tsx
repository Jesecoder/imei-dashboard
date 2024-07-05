// components/Auth.tsx
import { supabase } from '../utils/supabaseClient'

const handleLogin = async () => {
  try {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
    if (error) throw error
  } catch (error: any) {
    alert(error.error_description || error.message)
  }
}

return (
  <button onClick={handleLogin}>Login con Google</button>
)
