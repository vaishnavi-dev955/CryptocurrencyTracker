/* eslint-disable react/no-unknown-property */
// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {isLoading: true, cryptoList: []}

  componentDidMount() {
    this.getCurrrencyData()
  }

  getCurrrencyData = async () => {
    const apiUrl = 'https://apis.ccbp.in/crypto-currency-converter'
    const response = await fetch(apiUrl)
    const data = await response.json()
    const updatedData = data.map(each => ({
      id: each.id,
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      currencyLogo: each.currency_logo,
    }))
    this.setState({cryptoList: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, cryptoList} = this.state
    return (
      <div className="Black-background">
        {isLoading ? (
          // eslint-disable-next-line react/no-unknown-property
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList cryptocurrenciesDataList={cryptoList} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
