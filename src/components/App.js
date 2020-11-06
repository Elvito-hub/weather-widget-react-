import React,{useState} from 'react';
import SearchBar from './SearchBar';
import Weather from './Weather';
import axios from 'axios';
import styles from './styles/App.css';



const App =()=>{
    const [results,setResults]= useState([]);
    const [countryInfo, setCountryInfo]= useState('');
    const [temp, setTemp]= useState('');
    const [weather, setWeather]= useState('');
    const [flagsrc,setFlagsrc]= useState('')
    const onTermSubmit= async (term)=>{
        const response = await Weather.get('/weather',{
            params : {
                q: term,
                units:'metric'
            }
        });
        setResults(response.data);
        setTemp(response.data.main.temp);
        setWeather(response.data.weather.[0].main);
        //console.log(response.data);
        if(response.data){
            setFlagsrc(`https://www.countryflags.io/${response.data.sys.country}/shiny/48.png`);
            const countryGet = async ()=>{
                //console.log(results);
                const Coresponse = await axios.get( `https://restcountries.eu/rest/v2/alpha/${response.data.sys.country}`);
                //console.log(Coresponse.data);
                setCountryInfo(Coresponse.data)
            }
            countryGet();
        }
    }
        return (
            <div className="thebox">
              <div className="boxin theImage">
              <img className="image" src="https://images.unsplash.com/photo-1574781481375-74a09eba71e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" />
              </div>
              <div className="boxin Weatherinformations">
                  <div className="information input">
                       <SearchBar onFormSubmit={onTermSubmit} />
                  </div>
                  <div className="information left">
                      <p>Name:</p>
                  </div>
                  <div className="information right">
                    {results.name}
                  </div>
                  <div className="information left">
                       <p>Country:</p>
                  </div>
                  <div className="information right" style={{display:"flex", textAlign:"center", alignItems:"center"}}>
                     {countryInfo.name}
                     <img style={{marginLeft: "5px" }} src={flagsrc}></img>
                  </div>
                  <div className="information left">
                         <p>Region:</p>
                  </div>
                  <div className="information right">
                     {countryInfo.region}
                  </div>
                  <div className="information left">
                        <p>Sub-region</p>
                  </div>
                  <div className="information right">
                       {countryInfo.subregion}
                  </div>
                  <div className="information left">
                       <p>Temperature:</p>
                  </div>
                  <div className="information right">
                       {temp}&#8451;
                  </div>
                  <div className="information left">
                        <p>Weather:</p>
                  </div>
                  <div className="information right">
                        {weather}
                  </div>
              </div>
            </div>
        );
}

export default App;