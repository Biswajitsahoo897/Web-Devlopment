import { useId } from 'react'


function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  selectCurrency=["usd"],
  currencyOptions=["usd", "eur", "gbp"],//default currency options
  amountDisabled = false,
  currencyDisabled = false,
  // className = "",
}) {
  const amountInputId=useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}//js takes string as input so we need to convert it to number
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency)=>(
            <option value={currency} key={currency}>
              {/* using key as currency for the better performance of the engine */}
              {currency.toUpperCase()}
            </option>
          ))}

        </select>
      </div>
    </div>
  );
}

export default InputBox;

