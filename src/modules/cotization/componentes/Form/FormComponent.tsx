import { Button } from '@mui/material';
import './FormComponent.css';
import { SlRefresh } from "react-icons/sl";

function FormComponent ({dataCotization}:any) {

    const purchasePrice = () => {
        console.log('purchasePrice')
      };
    
    const salePrice = () => {
        console.log('salePrice')
      };
    
    const initOperation = () => {
        console.log('initOperation')
      };

    const updateOperation = () => {
        console.log('updateOperation')
    };

    return (
        <div className="containerForm">
            <div className='price'>
            <button onClick={purchasePrice} className='purchasePrice'>
                <p className='textButtonCardList'>Dolár venta 3.999</p>
            </button>
            <button onClick={salePrice} className='salePrice'>
                <p className='textButtonCardList'>Dolár venta 3.999</p>
            </button>
            </div>
            <div className='formPrice'>
                <input className='inputSol' type='text' />
                <div className='updateOperation'>
                <button onClick={updateOperation} className='buttonCardList'>
                <img src="Group 1370.svg"/>                
                </button>
                </div>
                <input className='inputDollar' type='text' />
            </div>
            <div className='buttonFooter'>
            <button onClick={initOperation} className='buttonOperationInit'>
                <p className='textOperationInit'>Iniciar operación</p>
            </button>
            </div>
        </div>
    )
}

export default FormComponent;