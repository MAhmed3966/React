import { AllCountries, SelectiveCountries } from "../../constants";
import React, { useEffect, useState } from "react";
import List from "../list/list";
export default function Input() {
  const [countries, setCountries] = useState([]);
  const [countriesDisplay, setCountriesDisplay] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState()
  useEffect(() => {console.log('hello',countriesDisplay)}, [countriesDisplay]);
  const onBlur = (event) => {
    let name = event.target.value;
    name = SelectiveCountries + "" + name;
    fetch(name)
      .then((response) => {
        if (!response) {
          return "no response found";
        }
        return response.json();
      })
      .then((data) => {
        setCountries(data.map((country) => country.name.common));
      });
  };
  
  const onSelect= (event) =>{
   if(event.target.value != 'false') 
   setSelectedCountries(event.target.value);
  }

  const onClick = () => {
    console.log("selected country is", selectedCountries);
    let country = [selectedCountries];
    setCountriesDisplay(...countriesDisplay, country);
    console.log("selected country 2", countriesDisplay);
    setSelectedCountries("");
  };
  useEffect(()=>{onClick()}, selectedCountries)
  return (
    <div className="input">
      <input
        type="text"
        onBlur={(event) => onBlur(event)}
        value={selectedCountries !== "" ? selectedCountries : null}
      ></input>
      <button
        className="btn"
        onClick={onClick}
      >
        Add
      </button>
      {countriesDisplay.length != 0 && (
        <List
          countriesDisplay={countriesDisplay}
          setCountriesDisplay={setCountriesDisplay}
        />
      )}

      <div>
        <select
          onChange={(event) => {
            onSelect(event);
          }}
        >
          <option key="selectCountries" value={false}>
            {" "}
            Select Countries
          </option>
          {countries &&
            countries.map((country, index) => {
              return (
                <option value={country} key={index}>
                  {country}
                </option>
              );
            })}
          )
        </select>
      </div>
    </div>
  );
}
