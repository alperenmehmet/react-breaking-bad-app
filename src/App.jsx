import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Characters from './components/Characters'
import Quotes from './components/Quotes'
import Error from './pages/Error'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </>
  )
}

export default App
