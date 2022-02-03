import { Routes, Route } from 'react-router-dom'
import Navbar from '../../components/Navbar'

//pages
import Home from '../../Pages/Home'
import Contato from '../../Pages/Contato'

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contato' element={<Contato />} />
      </Routes>
    </div>
  );
}

export default App;
