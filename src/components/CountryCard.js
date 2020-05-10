import React from 'react';
import App from '../App';
import styled from 'styled-components';
import Country from './Country';

const MainContainer = styled.div`

    *{
        box-sizing: border-box;
    }

    margin: 0 auto;
    justify-content: center;
    

    width: 90%;
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    
    


`


function CountryCard(props){
    
    return(
        <MainContainer>
            {props.countryList.map(country =>{
                return(
                    
                    <Country countryData={country}/>
                
                )
            })
            }
        </MainContainer>
    )
    
}

export default CountryCard;