import { Route, Routes } from 'react-router-dom'
import './App.css'
import { MyProvider } from './Context'
import SidBar from './Components/SidBar'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Animes from './Pages/Anime/Animes'

function App() {
  return (
    <div className='flex'>
      <MyProvider>
        <SidBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/A" element={<Animes />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/howto" element={<HowTo />} /> */}
        </Routes>
      </MyProvider>
    </div>
  )
}

export default App
