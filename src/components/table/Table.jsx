import {React, useEffect, useState} from 'react'
import inch from '../../img/coins/1icnh.png'
import btc from '../../img/coins/btc.png'
import bnb from '../../img/coins/bnb.png'
import busd from '../../img/coins/busd.png'
import eth from '../../img/coins/eth.png'
import matic from '../../img/coins/matic.png'
import axios from 'axios'

const Table = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:4000/crypto-prices');
          const cryptos = response.data.data;
          const relevantCryptos = cryptos.filter(crypto =>
            ['bitcoin', 'ethereum', '1inch', 'polygon', 'binance-coin', 'binance-usd'].includes(crypto.id)
          );
          console.log(response)
          const transformedData = relevantCryptos.map(crypto => ({
            asset: crypto.name,
            symbol: crypto.symbol,
            price: parseFloat(crypto.priceUsd).toFixed(2),
            change: parseFloat(crypto.changePercent24Hr).toFixed(2),
            volume: (parseFloat(crypto.volumeUsd24Hr) / 1e9).toFixed(2) + 'B',
            logo: getLogo(crypto.symbol)
          }));
          setData(transformedData)
        } catch (error) {

        }
      };
    
      const getLogo = (symbol) => {
        switch(symbol.toLowerCase()) {
          case 'btc': return btc;
          case 'eth': return eth;
          case '1inch': return inch;
          case 'bnb': return bnb;
          case 'busd': return busd;
          case 'matic': return matic;
          default: return '';
        }
      };
    
      useEffect(() => {
        fetchData();
        const interval = setInterval(() => {
          fetchData();
        }, 5000);
    
        return () => clearInterval(interval); // Clear the interval when component unmounts
      }, []);

  return (
    

<div className="relative overflow-x-auto rounded-lg border border-[#222D3E]" style={{background: `radial-gradient(100% 100% at 50% 0%, #26314E 0%, #131820 0.01%, #0F151E 100%)`}}>
    <table className="w-full text-left">
        <thead className="text-[16px] text-[#6D799C] border-b border-[#222D3E]">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Assets
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Change
                </th>
                <th scope="col" className="px-6 py-3">
                    Volume
                </th>
                <th scope="col" className="px-6 py-3">
                    
                </th>
            </tr>
        </thead>
        <tbody>
            {data.map(data => {
                return (
                    <tr key={data.asset}>
                        <th className='px-[24px] py-[20px]'>
                            <div className='flex items-center gap-[20px]'>
                                <img src={data.logo}/>
                                <div className='flex gap-[8px] items-center'>
                                    <p className='font-medium text-[20px] text-[#C7E1FF]'>{data.asset}</p>
                                    <p className='text-[#525A71] text-[16px] font-normal'>{data.symbol}</p>
                                </div>
                            </div>
                        </th>
                        <th className='px-[24px] py-[20px]'>
                            <p className='font-normal font-[16px] text-[#C7E1FF]'>$ {data.price}</p>
                        </th>
                        <th className='px-[24px] py-[20px]'>
                            <p className={`font-normal font-[16px] ${data.change > 0 ? 'text-[#58F0A7]' : 'text-[#F94B55]'}`}>{data.change} %</p>
                        </th>
                        <th className='px-[24px] py-[20px]'>
                            <p className='font-normal font-[16px] text-[#C7E1FF]'>{data.volume}</p>
                        </th>
                        <th className='px-[24px] py-[20px]'>
                            <button className='px-[16px] py-[6px] border border-[#2FBDFC] rounded-[6px] text-[#2FBDFC] hover:text-white hover:bg-[#2FBDFC] transition-all'>Trade</button>
                        </th>
                    </tr>
                )
            })}
        </tbody>
    </table>
</div>

  )
}

export default Table