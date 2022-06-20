import React, {MouseEvent, ChangeEvent, useState, useEffect} from 'react';
import { getContinentCountryMap, ContinentCountryMap } from './api';
import './App.css'

export default function App() {
  const [continentCountryMap, setContinentCountryMap] = useState<ContinentCountryMap>({})
  const [selectedcontinent, setSelectedcontinent] = useState<string>('')
  const [selectedCountries, setSelectedCountries] = useState<string[]>([])

  useEffect(() => {
    getContinentCountryMap().then((data) => setContinentCountryMap(data))
  }, [])

  const handlecontinentClick = (event: MouseEvent<HTMLButtonElement>) => {
    setSelectedcontinent(event.currentTarget.id)
    setSelectedCountries([])
  }

  const handleCountryClick = (event: ChangeEvent<HTMLInputElement>) => {
    const selected = !event.currentTarget.checked ? selectedCountries.filter(c => c !== event.currentTarget.name) : [...selectedCountries, event.currentTarget.name].sort()
    setSelectedCountries(selected)
  }

  return (
    <>
      <header>
        <h1>Utopia Country Highlighter</h1>
        <span className="logo">
          <img src="https://utopiamusic.com/logo.png" alt=""/>
        </span>
      </header>
      <main>
        <h2>Select a continent and click on the countries you want to highlight.</h2>
        <div className="continent-picker">
          {Object.keys(continentCountryMap).sort().map((continent) => (
            <button id={continent} className={`continent-button${selectedcontinent === continent ? ' selected' : ''}`} onClick={handlecontinentClick} key={continent}>{continent}</button>
          ))}
        </div>
        <div className="country-picker">
          {continentCountryMap[selectedcontinent] ? continentCountryMap[selectedcontinent].map((country) => (
            <label key={country} className={`country-button${selectedCountries.includes(country) ? ' selected' : ''}`}>
              <input
                checked={selectedCountries.includes(country)}
                aria-checked={selectedCountries.includes(country)}
                role="checkbox"
                type="checkbox"
                name={country}
                onChange={handleCountryClick}
              />
              {country}
            </label>
            )) : <></>}
        </div>
      </main>
    </>
  );
}
