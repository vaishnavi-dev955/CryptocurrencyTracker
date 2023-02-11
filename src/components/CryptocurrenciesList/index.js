// Write your JS code here
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  render() {
    const {cryptocurrenciesDataList} = this.props
    return (
      <div className="mini-black-background ">
        <div>
          <h1 className="crypto-heading">Cryptocurrency Tracker</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
          />
        </div>
        <ul className="list-background1">
          <div className="blue-background">
            <p className="title1">Coin Type</p>
            <div className="container1">
              <p className="title1">USD</p>
              <p className="title2">EURO</p>
            </div>
          </div>
          {cryptocurrenciesDataList.map(eachItem => (
            <CryptocurrencyItem CurrencyItemData={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default CryptocurrenciesList
