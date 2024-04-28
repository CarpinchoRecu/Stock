import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Dashbord from './screens/Dashbord'
import { AuthRouter } from './modules/Auth/libs/AuthRouter'
import GenerarAlta from './modules/GenerarAlta/GenerarAlta'
import Auth from './modules/Auth/Auth'
import Register from './modules/Register/Register'
import { useEffect } from 'react'
function App() {
  useEffect(() => {
    // Configurar la CSP aquí
    const cspMetaTag = document.createElement('meta')
    cspMetaTag.setAttribute('http-equiv', 'Content-Security-Policy')
    cspMetaTag.setAttribute(
      'content',
      "default-src 'self'; connect-src 'self' *"
    )
    document.head.appendChild(cspMetaTag)
  }, [])

  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route element={<AuthRouter />}>
        <Route path="/dashbord" element={<Dashbord />} />
        <Route path="/generaralta" element={<GenerarAlta />} />
      </Route>
      <Route element={<AuthRouter requireAuth={false} />}>
        <Route path="/auth" element={<Auth />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  )
}

export default App
