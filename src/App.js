import './App.css';
import axios from "axios";
import {CRYPTO_URL} from './utils/constants'
import {useEffect, useState} from 'react';
import Table from './Components/Table/Table'
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('')
   
  const getCripto = async()=>{
    try{
        const res = await axios.get(CRYPTO_URL);
        setCoins(res.data);
        console.log(res.data)
    }catch(err){
        console.error(err);
    }
  }

  useEffect(()=>{
    getCripto();
  }, [])

  return (
  <div className="black white">

      <div className="">
          <h1 className="center">Crypto Price</h1>
      </div>
      <div></div>
      <div className="center">
        <input className=" black white searchBar" type="text" placeholder="Search a Coin..." onChange={e=>setSearch(e.target.value)}/>
      </div>

      <div>
        <Table
          coins={coins}
          search={search}
        />
      </div>
  </div>
    
  );
}

export default App;
