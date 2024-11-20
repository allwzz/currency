import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './CurrenciesList.css';

const CurrenciesList = () => {
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrencies = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          "https://api.exchangerate-api.com/v4/latest/USD"
        );
        const exchangeRates = response.data.rates;
        const currencyList = Object.keys(exchangeRates).map((currency) => ({
          currency,
          rate: exchangeRates[currency],
        }));
        setCurrencies(currencyList);
      } catch (err) {
        setError("Failed to fetch exchange rates. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCurrencies();
  }, []);

  return (
    <div className="currency-table-container">
      <h1>Currency Exchange Rates</h1>

      {loading && <p>Loading exchange rates...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
        <table className="currency-table">
          <thead>
            <tr>
              <th>Currency</th>
              <th>Exchange Rate (USD)</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {currencies.map(({ currency, rate }) => (
              <tr key={currency}>
                <td>{currency}</td>
                <td>{rate}</td>
                <td>
                  <Link to={`/currencies/${currency}`}>View Details</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CurrenciesList;
