import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryCard from './components/CountryCard';

function App() {

  const[countryList, setCountryList] = useState([]);
  const[apiUrl, setApiUrl] = useState("https://restcountries.eu/rest/v2/all");
  const[countrySearch, setCountrySearch] = useState("");
  

  useEffect(()=>{
    axios
      .get(apiUrl)
      .then(res =>{
        console.log(res.data);
                
        setCountryList(res.data)        
      })
      
  }, [apiUrl]);

  const handleSearch = e => {
    setCountrySearch(e.target.value);
    console.log(countrySearch);
    
  };

  const fetchCountry = e => {
    setApiUrl(`https://restcountries.eu/rest/v2/name/${countrySearch}`);
  }



  return (
    <div className="App">
      <input type="text" placeholder="enter country name" onChange={handleSearch}></input>
      <button onClick={fetchCountry}>Submit</button>
      <br/>
      <br/>
      <br/>
      <CountryCard countryList={countryList}/>
      
    </div>
  );
}

export default App;
