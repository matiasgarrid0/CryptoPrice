import React from 'react';
import CoinRaw from '../CoinRaw.js/CoinRaw'

const Table = ({coins, search}) =>{
    const title = ['#', 'Coin', 'Price', 'Price Change'];
    const filteredCoins = coins.filter((coin)=>coin.name.toLowerCase().includes(search.toLowerCase()))
    
    return(
      <div style={{ height: "100vh" }}>
         <table className="table black">
          <thead>
            <tr className="white">
              {title.map((title) => (
                <td>{title}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredCoins.map((coin, index) => (
              <CoinRaw coin={coin} key={index} index={index + 1} />
            ))}
          </tbody>
        </table>
      </div>
    )
}

export default Table;
