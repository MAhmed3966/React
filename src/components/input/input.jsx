import { AllCountries, SelectiveCountries } from "../../constants";
import React, { useEffect, useState } from "react";
import List from "../list/list";
export default function Input() {
  const [countries, setCountries] = useState([]);
  const [countriesDisplay, setCountriesDisplay] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState("")
  const [selected, setSelected] = useState(false)
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
      setSelected(true)
  };
  
  const onSelect= (event) =>{
   if(event.target.value !== "false") 
   setSelectedCountries(event.target.value);
  }

  const onClick = () => {
    setCountriesDisplay([...countriesDisplay, selectedCountries]);
    setSelectedCountries("");
    setSelected(true);
    if(countries.length >= 2){
    setCountries(countries.filter((country) => {
      return country != selectedCountries;
    }))
  }
    else {
      setCountries([])
    }
    setSelected(true);
  };
  useEffect(()=>{
    console.log("countries rendered are", countries)
  },[countries])
  useEffect(()=> {},[selected])
  return (
    <div className="input">
      <input
        type="text"
        onBlur={(event) => onBlur(event)}
        value={selectedCountries !== "" ? selectedCountries : null}
      ></input>
      <button className="btn" onClick={onClick}>
        Add
      </button>
      {countriesDisplay.length != 0 && (
        <List
          countriesDisplay={countriesDisplay}
          setCountriesDisplay={setCountriesDisplay}
        />
      )}

      <div>
        {countries && (
          <select value={selectedCountries}
            onChange={(event) => {
              onSelect(event);
            }}
          >
            <option key="selectCountries" value="select countries" >
                  Select Countries
                </option>
            {countries.length > 0 && 
              countries.map((country, index) => {
                return (
                  <option value={country} key={index}>
                    {country}
                  </option>
                );
              })}
            )
          </select>
        )}
      </div>
    </div>
  );
}
