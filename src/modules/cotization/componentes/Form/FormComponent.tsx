import { useSelector } from 'react-redux';
import './FormComponent.css';

function FormComponent () {
    const rates = useSelector((state:any) => state.user);
    const {sale_price,purchase_price} = rates;

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
                <p className='textButtonCardList'>Dolár venta {purchase_price}</p>
            </button>
            <button onClick={salePrice} className='salePrice'>
                <p className='textButtonCardList'>Dolár venta {sale_price}</p>
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