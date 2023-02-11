// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {CurrencyItemData} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = CurrencyItemData

  return (
    <li className="Item-container">
      <div className="Horizon-container1">
        <img src={currencyLogo} alt={currencyName} className="currency-style" />
        <p className="paragraph">{currencyName}</p>
      </div>
      <div className="Horizon-container2">
        <p className="paragraph">{usdValue}</p>
        <p className="paragraph">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
