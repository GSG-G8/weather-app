
const checkResponse = response => {
    if (response.status !== 200) {
      console.log("error", response.status);
      return;
    }
    return response.json();
  };

  export const getCity = (city) =>
    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=e0622d0b56604ababa2b4219302bd58d`)
    .then(checkResponse)
    .catch(err => {
      console.log(err);
    });
