import { useSelector } from 'react-redux';
import './FormComponent.css';
import { useState } from 'react';

function FormComponent () {
    const rates = useSelector((state:any) => state.user);
    const {sale_price,purchase_price} = rates;
    const [activate,setActivate] = useState(true);
    const [activate2,setActivate2] = useState(false);
    //const purchasePriceActual = Number(purchase_price)
    let [soles, setSoles] = useState(0);
    //let [dolar,setDolar] = useState(0);

    const purchasePrice = () => {
        setActivate(true)
        setActivate2(false)
      };
    
    const salePrice = () => {
        setActivate(false)
        setActivate2(true)
        //const salesPrice = Number(sale_price)
      };
    
    const initOperation = () => {
        console.log('initOperation')
      };

    const updateOperation = () => {
        updateCurrency();
    };

    const updateCurrency = () => {
        if(activate2 === false ){
            setActivate2(true)
            setActivate(false)
        } else {
            setActivate2(false)
            setActivate(true)
        }
    }

    const onchangeHandler = (e:any) => {
        setSoles(e.target.value); 
    }

    return (
        <div className="containerForm">
            <div className='price'>
            <button onClick={purchasePrice} className={activate ? 'purchasePrice':'purchasePriceDisabled'} disabled={activate}>
                <p className='textButtonCardList'>Dolár compra {purchase_price}</p>
            </button>

            <button onClick={salePrice} className={activate2?'salePrice':'salePriceDisabled'} disabled={activate2}>
                <p className='textButtonCardList'>Dolár venta {sale_price}</p>
                
            </button>
            </div>

            <div className='formPrice'>
                <input className={activate ? 'inputDollar': 'inputSol'}
                type='number'
                onChange={onchangeHandler}
                />
                <div className='updateOperation'>
                <button onClick={updateOperation} className='buttonCardList'>
                <img src="Group 1370.svg"/>              
                </button>
                </div>
                <input className={activate2 ? 'inputDollar': 'inputSol'}
                
                type= 'number'
                value = {soles * purchase_price}
                />
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