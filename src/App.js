import React from 'react';
import './App.css';
import { getCity } from './components/fetch';

export default class App extends React.Component {
  
  state = {
    result: 'gaza',
    Alldata: {
    city_name: "Raleigh",
    lon: "-78.63861",
    timezone: "America/New_York",
    lat: "35.7721",
    country_code: "US",
    state_code: "NC",
    data: [
      {
        moonrise_ts: 1584521571,
        wind_cdir: "ESE",
        rh: 83,
        pres: 1013.7,
        high_temp: 16.8,
        sunset_ts: 1584573697,
        ozone: 295.937,
        moon_phase: 0.183961,
        wind_gust_spd: 9.61373,
        snow_depth: 0,
        clouds: 60,
        ts: 1584504060,
        sunrise_ts: 1584530045,
        app_min_temp: 10.3,
        wind_spd: 2.99151,
        pop: 0,
        wind_cdir_full: "east-southeast",
        slp: 1027.97,
        valid_date: "2020-03-18",
        app_max_temp: 16.8,
        vis: 24.135,
        dewpt: 10.5,
        snow: 0,
        uv: 2.89824,
        weather: {
        icon: "c03d",
        code: 803,
        description: "Broken clouds"
        },
        wind_dir: 121,
        max_dhi: null,
        clouds_hi: 31,
        precip: 0,
        low_temp: 10.3,
        max_temp: 16.9,
        moonset_ts: 1584558397,
        datetime: "2020-03-18",
        temp: 13.3,
        min_temp: 10.2,
        clouds_mid: 0,
        clouds_low: 55
        },
        {
        moonrise_ts: 1584610364,
        wind_cdir: "SSW",
        rh: 79,
        pres: 1010.31,
        high_temp: 26.9,
        sunset_ts: 1584660145,
        ozone: 276.003,
        moon_phase: 0.113175,
        wind_gust_spd: 13.0232,
        snow_depth: 0,
        clouds: 77,
        ts: 1584590460,
        sunrise_ts: 1584616361,
        app_min_temp: 14.5,
        wind_spd: 4.08089,
        pop: 20,
        wind_cdir_full: "south-southwest",
        slp: 1024.15,
        valid_date: "2020-03-19",
        app_max_temp: 27.5,
        vis: 23.9425,
        dewpt: 15.6,
        snow: 0,
        uv: 5.71187,
        weather: {
        icon: "c04d",
        code: 804,
        description: "Overcast clouds"
        },
        wind_dir: 207,
        max_dhi: null,
        clouds_hi: 43,
        precip: 0.6875,
        low_temp: 15.2,
        max_temp: 27.1,
        moonset_ts: 1584648251,
        datetime: "2020-03-19",
        temp: 19.8,
        min_temp: 14.4,
        clouds_mid: 48,
        clouds_low: 54
        },
        {
        moonrise_ts: 1584698862,
        wind_cdir: "SW",
        rh: 67,
        pres: 1007.56,
        high_temp: 27.9,
        sunset_ts: 1584746594,
        ozone: 279.038,
        moon_phase: 0.0585674,
        wind_gust_spd: 14.5362,
        snow_depth: 0,
        clouds: 91,
        ts: 1584676860,
        sunrise_ts: 1584702677,
        app_min_temp: 18.8,
        wind_spd: 6.09318,
        pop: 10,
        wind_cdir_full: "southwest",
        slp: 1021.12,
        valid_date: "2020-03-20",
        app_max_temp: 28,
        vis: 23.8119,
        dewpt: 15.4,
        snow: 0,
        uv: 2.35124,
        weather: {
        icon: "c04d",
        code: 804,
        description: "Overcast clouds"
        },
        wind_dir: 230,
        max_dhi: null,
        clouds_hi: 76,
        precip: 0.25,
        low_temp: 16.3,
        max_temp: 27.9,
        moonset_ts: 1584738071,
        datetime: "2020-03-20",
        temp: 22.2,
        min_temp: 18.4,
        clouds_mid: 37,
        clouds_low: 19
        },
        {
        moonrise_ts: 1584787136,
        wind_cdir: "SSE",
        rh: 69,
        pres: 1009.1,
        high_temp: 19.8,
        sunset_ts: 1584833042,
        ozone: 300.486,
        moon_phase: 0.0216969,
        wind_gust_spd: 8.30074,
        snow_depth: 0,
        clouds: 96,
        ts: 1584763260,
        sunrise_ts: 1584788992,
        app_min_temp: 11.2,
        wind_spd: 3.49869,
        pop: 25,
        wind_cdir_full: "south-southeast",
        slp: 1022.54,
        valid_date: "2020-03-21",
        app_max_temp: 19.5,
        vis: 23.7591,
        dewpt: 10.8,
        snow: 0,
        uv: 3.41146,
        weather: {
        icon: "c04d",
        code: 804,
        description: "Overcast clouds"
        },
        wind_dir: 154,
        max_dhi: null,
        clouds_hi: 84,
        precip: 0.875,
        low_temp: 8.8,
        max_temp: 21.1,
        moonset_ts: 1584827835,
        datetime: "2020-03-21",
        temp: 16.6,
        min_temp: 10.8,
        clouds_mid: 36,
        clouds_low: 85
        }
    ],
  }

  };
  
  resultInput = e => this.setState({result: e.target.value.trim().replace(/\s+/g, ' ')});

  
  searchButton = () =>  getCity(this.state.result).then(res =>
    this.setState({Alldata: res})
    );
    renderLi = () => this.state.Alldata.data.map(
      ({wind_cdir, wind_cdir_full, weather:{description, icon}, valid_date }) => {
        return(
          <ul>
             <li>{wind_cdir}</li>
             <li>{wind_cdir_full}</li>
             <li>{description}</li>
             <li>{valid_date}</li>             
          </ul>
        )
      });

    data = () => {
      const {Alldata:{city_name, timezone, country_code, data}} = this.state;
      return(
        <div>
         <h1>{city_name}</h1>
         <h1>{timezone}</h1>
         <h1>{country_code}</h1>
        </div>
      )
    };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>hi </h1>
          <input type='text' onChange={this.resultInput} /> <br/>
          <button type='text' onClick={(this.searchButton)} > search </button>
          <this.data />
          <this.renderLi />
        </header>
      </div>
    );
  }
}

