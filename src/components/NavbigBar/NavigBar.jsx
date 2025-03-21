import React, { useContext } from 'react';
import './NavigBar.css';
import arrow_icon from '../../assets/arrow_icon.png';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';

const NavigBar = () => {

  const {setCurrency} = useContext(CoinContext);

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case 'usd': {
        setCurrency({name: "usd", symbol: "$"});
        break;
      }
      case 'eur': {
        setCurrency({name: "eur", symbol: "€"});
        break;
      }
      case 'rub': {
        setCurrency({name: "rub", symbol: "₽"});
        break;
      }
      default: {
        setCurrency({name: "usd", symbol: "$"});
        break;
      }
      
    }
  }

  return (
    <div className='navbar'>
      <Link to={'/'}> <p className='logo'>Crypto Palace </p></Link>
        <ul>
            <Link to={'/'}><li>Home</li></Link>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
            <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="rub">RUB</option>
            </select>
        </div>
    </div>
  )
}

export default NavigBar