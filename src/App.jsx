import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Layout from './pages/Layout'

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path='*' element={<p>Erro Pagina não encontrada</p>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
