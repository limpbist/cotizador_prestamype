import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from './firebase/config'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    async function fetchPrestamype() {
      // const ratesRef = collection(db, "rates");

      // getDocs(ratesRef).then((resp) => {
      //   console.log(resp.docs[0].id);
      // })
      // getDocs(ratesRef).then((resp) => {
      //   console.log(resp.docs[0].data());
      // })

      const rates = await getDocs(collection(db, "rates"));
      rates.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    }
    fetchPrestamype()
  },[]);
  return (
    <>
    <Routes>
      <Route path='/' element= {<CotizationScreen/>}></Route>
    </Routes>
    </>
  )
}

export default App
