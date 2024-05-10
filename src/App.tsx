import './App.css'
import { Route, Routes } from 'react-router-dom'
import CotizationScreen from './modules/cotization/pages/Cotization/CotizationScreen'
import { getRates } from './modules/cotization/redux/ratesSlice'
import { useDispatch } from 'react-redux'
import useRates from './modules/cotization/hooks/useRates'

function App() {
  const dispatch = useDispatch();
  const { rates } = useRates();

  dispatch(getRates(rates));
  return (
    <>
    <Routes>
      <Route path='/' element= { <CotizationScreen ratesTotal= {rates} />}></Route>
    </Routes>
    </>
  )
}

export default App
