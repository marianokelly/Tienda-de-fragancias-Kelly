import React from 'react';
import './CartWidget.css'
import { FaShoppingCart } from 'react-icons/fa';

class CartWidget extends React.Component {
  render() {
    return <a className='carro' href='#'  id='CartWidget'><FaShoppingCart /> </a>
  }
}

export default CartWidget

