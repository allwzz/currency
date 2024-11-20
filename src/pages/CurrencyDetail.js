import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './CurrencyDetail.css';

const CurrencyDetail = () => {
  const { currency } = useParams();  
  const [currencyInfo, setCurrencyInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrencyDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/currency/${currency}`
        );
        const data = response.data[0];
        const info = {
          name: data.name.common,
          symbol: data.currencies[currency]?.symbol,
          countries: data.currencies[currency]?.name,
          region: data.region,
          flag: data.flags?.svg, // Flag image URL
        };
        setCurrencyInfo(info);
      } catch (err) {
        setError("Failed to fetch currency details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCurrencyDetails();
  }, [currency]);

  return (
    <div className="currency-detail">
      <h1>Details for {currency}</h1>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {!loading && currencyInfo && (
        <div>
          <h2>{currencyInfo.name}</h2>
          {currencyInfo.flag && (
            <img
              src={currencyInfo.flag}
              alt={`Flag of ${currencyInfo.countries}`}
              className="country-flag"
            />
          )}
          <p><strong>Symbol:</strong> {currencyInfo.symbol || "N/A"}</p>
          <p><strong>Countries Using:</strong> {currencyInfo.countries || "N/A"}</p>
          <p><strong>Region:</strong> {currencyInfo.region || "N/A"}</p>
        </div>
      )}
    </div>
  );
};

export default CurrencyDetail;
