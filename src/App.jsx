import React from 'react'
import NavigBar from './components/NavbigBar/NavigBar'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Coin from './pages/Coin/Coin';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='app'>
      <NavigBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/coin/:coinId' element={<Coin/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App