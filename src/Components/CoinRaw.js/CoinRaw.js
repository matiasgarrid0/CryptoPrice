import React from"react";
import './CoinRaw.css'
const CoinRaw = ({coin, index}) =>{
    return(
        <tr className='black white'>
            <td>{index}</td>
            <td><span><img src={coin.image} style = {{width: '3%'}} alt="coin_image"/></span>{coin.name}<span className="separate whiteSpan">{coin.symbol}</span></td>
            <td>{coin.current_price}</td>
            <td>{coin.price_change_percentage_24h < 0 ? <div className='priceNegative'>{coin.price_change_percentage_24h}</div>:<div  className='pricePositive'>{coin.price_change_percentage_24h}</div>}</td>
        </tr>
    )
}
export default CoinRaw;