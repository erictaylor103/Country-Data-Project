import React from 'react';
import App from '../App';
import styled from 'styled-components';

const CardContainer = styled.div`

.country-flag{
    width: 130px;
}

`


function CountryCard(props){
    
    return(
        <div>
            {props.countryList.map(country =>{
                return(
                <CardContainer>
                <img className="country-flag" alt="country-flag" src={country.flag}/>
                <p>{country.name}</p>
                <p>Capital: {country.capital}</p>                
                <hr />
                <hr />
                </CardContainer>
                
                
                
                
                )
            })
            }
        </div>
    )
    
}

export default CountryCard;