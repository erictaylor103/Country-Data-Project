import React from 'react';
import styled from 'styled-components';


const Container = styled.div`


    background-color:white;
    transition: 0.3s;
    width: 30%;
    display: flex;
    flex-direction: column;    
    padding: 40px 16px;
    text-align: center;
    transition: all 0.3s;
    border: 1px gray solid;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    margin: 4px;
    
    
    .caption {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    opacity: 0;
    transition: all 0.3s;
    background-color: rgba(0, 0, 0, 0);
}

.caption h1 {
    text-transform: uppercase;
    margin: 0;
}

.caption p {
    font-size: 25px;
    text-transform: capitalize;
}

    &:hover{
    box-shadow: 0 8px 45px 0 rgba(0,0,0,0.2);
    
    
    }


.country-flag{
    width: 100%;
    
}

.container#card2 .caption {
    transform: translateX(-100%);
    opacity: 1;
}

.container#card2:hover .caption {
    background-color: rgba(0, 0, 0, 0.8);
    transform: translateX(0);
}

.container#card2:hover img {
    transform: scale(1.8) rotate(15deg);
    transition: all 0.3s;
}


`

function Country(props){
    return(
        
        <Container>
            <div className="container" id="card2">
            <h1><b></b>{props.countryData.name}<b/></h1>
                    <img className="country-flag" alt="country-flag" src={props.countryData.flag} />
                    <div className="caption">
                    <h1><b></b>{props.countryData.name}<b/></h1>
                    <p>Capital: {props.countryData.capital}</p>
                    <p>Region: {props.countryData.region}</p>
                    <p>Population: {props.countryData.population}</p>
                    <p>Calling Code: {props.countryData.callingCodes}</p>
                    </div>
                    
            </div>                    
        </Container>
    )
}


export default Country;