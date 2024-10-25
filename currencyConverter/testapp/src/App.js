 import { useState} from 'react';
import './App.css';
import useCurrencyInfo from './hooks/useCurrencyInfo';
function App() {
  let [from,setFrom]  = useState("usd")
  let [to,setTo]  = useState("inr")
  let [amount,setAmount] = useState()
  let [rate,setRate] = useState(0)

  let currencyInfo = useCurrencyInfo(from);
  let options = Object.keys(currencyInfo)
//  console.log(currencyInfo[to])
function convertIt(){
      setRate(currencyInfo[to] * amount);   
}
  
  return (
   <>
   <div className='flex flex-col items-center text-center text-xl border-black border-2 w-full h-screen bg-cover bg-no-repeat bg-center blur-background' 
   style={{backgroundImage: 'url(https://media.istockphoto.com/id/478627080/photo/evening-view-of-ama-dablam.jpg?s=612x612&w=0&k=20&c=GLKvtQt1JVoOB4yR2WI86_fYOmG8WObeZP_QV_gFG_0='}}>
    <div className=' w-[30vw]  rounded-xl py-9 fixed  top-44 bg-orange-200 bg-opacity-70 shadow-2xl'>
<h1 className='text-xl font-bold '>
    Currency Converter
  </h1>
  {/* First input */}
      <label htmlFor='From'>From</label>
    <div className=''>
      <input
      type='text'
      className='bg-red-300 outline-none mb-2'
      value={amount}
      onChange={(e)=>{setAmount(e.target.value)}}
      />
    <select
    value={from}
    onChange={(e)=>setFrom(e.target.value) }
  >
    
     { options.map((idx)=>
    <option value={idx}>
    {idx.toUpperCase()}
    </option>
      )
    }
    </select> 
    </div>

    {/* Second Input */}
    <label htmlFor='To'>To</label>
    <div className=''>
      <input
      type='text'
      className='bg-red-300 outline-none'
      value={rate.toFixed(4)}
       disabled      
      />
    <select
    value={to}
    onChange={(e)=>setTo(e.target.value) }
    >
    
     { options.map((idx)=>
    <option value={idx}>      
    {idx.toUpperCase()}
    </option>
      )
    }
    </select>
    </div>
 
    <div >
<button className='mt-2 p-2 bg-orange-400 text-black rounded-2xl'
onClick={convertIt}
>Convert</button>
    </div>
    </div>
    </div>
   </>
  );
}

export default App;