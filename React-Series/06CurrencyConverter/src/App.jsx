import { useState } from 'react'
import InputBox from './components/InputBox.jsx'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'


function App() {
  const [amount, setAmount] = useState(87.5); // default amount in INR
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(1.05); // default converted amount in USD

  const currInfo = useCurrencyInfo(from);
  // const currInfoTo = useCurrencyInfo(to);

  const options = Object.keys(currInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => {
    setConvertedAmount(amount * currInfo[to])
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover"
      style={{
        backgroundImage: `url('https://wallpaperaccess.com/full/1347872.jpg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency)=>{
                  setFrom(currency);
                }}
                selectCurrency={from}
                onAmountChange={(value) => setAmount(value)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 hover:bg-blue-700 transition-colors duration-300 transform"
                onClick={swap} //why we pass swap as a reference and not call it directly? because we want to call it when the button is clicked, not when the component is rendered
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency)=>{
                  setTo(currency)
                }}
                selectCurrency={to}
                onAmountChange={(value) => setAmount(value)}
                amountDisabled
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg
             hover:bg-blue-700 transition-colors duration-300 transform text-md font-semibold">
              Convert {from.toUpperCase()} To {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
