// Home.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";  // Impor Link dari react-router-dom
import './Home.css';

const Home = () => {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(750);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch available currencies
    const fetchCurrencies = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get("https://api.exchangerate-api.com/v4/latest/USD");
        setCurrencies(Object.keys(response.data.rates));
      } catch (err) {
        setError("Failed to fetch currencies. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCurrencies();
  }, []);

  const convertCurrency = async () => {
    setLoading(true);
    setError(null);
    setConvertedAmount(null);

    const options = {
      method: "GET",
      url: "https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert",
      params: { from: fromCurrency, to: toCurrency, amount },
      headers: {
        "x-rapidapi-key": "5e93e58f7cmsh7a6bb1335f6c664p18b435jsn1dd953d3451f",
        "x-rapidapi-host": "currency-conversion-and-exchange-rates.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setConvertedAmount(response.data.result);
    } catch (err) {
      setError("Failed to fetch conversion. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h1>Currency Converter</h1>
      <div>
        <label>From:</label>
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <label>To:</label>
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={convertCurrency}>Convert</button>
      </div>
      
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      
      {convertedAmount && (
        <div>
          <p>{amount} {fromCurrency} = {convertedAmount} {toCurrency}</p>
          <Link to={`/currencies/${toCurrency}`} className="currency-detail-link">
            <button>See Details for {toCurrency}</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
