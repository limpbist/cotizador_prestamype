import FormComponent from '../../componentes/Form/FormComponent';
import './CotizationScreen.css';

function CotizationScreen({ratesTotal}:any) {

    console.log('ratesTotal', ratesTotal)
    return(
        <section className="container">
            <header className='header'>
                <h1 className='header-h1'>El mejor tipo de cambio</h1>
                <p className='header-p'>para cambiar dólares y soles online en Perú</p>
            </header>
            <main className='main'>
                <FormComponent />
            </main>
        </section>
    )
}

export default CotizationScreen;