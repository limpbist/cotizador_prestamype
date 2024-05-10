import './App.css'
import { Route, Routes } from 'react-router-dom'
import CotizationScreen from './modules/cotization/pages/Cotization/CotizationScreen'
import useRates from './modules/cotization/hooks/useRates'

function App() {

  const { rates } = useRates();

  return (
    <>
    <Routes>
      <Route path='/' element= { <CotizationScreen />}></Route>
    </Routes>
    </>
  )
}

export default App
