import React, { useState } from 'react'
import { FaCar} from "react-icons/fa";
import Order from './Order';


const showOrders = (props) => {
    let summa = 0
    props.orders.forEach(el => summa += Number.parseFloat(el.price))
    return (
        <div>
        
            {props.orders.map(el => (
                <Order onDelete={props.onDelete}  key={el.id} item={el} />
            ))}
            <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)} 000 </p>
        </div>
    )
}

const showNothing = () => {
    return (
        <div className='empty'>
            <h2>Вы не выбрали машинy</h2>
        </div>
    )
}


export default function Header(props) {
    let[carOpen, setCarOpen] = useState(false)


  return (
        <header>
            <div>
                <span className='logo'>Cars</span>
                <ul className='nav'>
                    

                </ul>
                <FaCar onClick={() => setCarOpen(carOpen = !carOpen)} className = {`car-button ${carOpen && 'active'}`} />
           

           {carOpen && (
                    <div className='shop-car'>
                     {props.orders.length > 0 ? showOrders(props) : showNothing()}

                    </div>
           )}
           
            </div>
            <div className='presentation'>

            </div>
        </header>
    )
}
