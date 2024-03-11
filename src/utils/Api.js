import axios from "axios" ;

export async function getWeatherData( city  ) {
  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: {q:city},
    headers: {
      'X-RapidAPI-Key': '15f1623b3bmshe8ee42041e0a654p102db9jsn734228227335',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    return(response.data);
  } catch (error) {
    console.error(error);
  }

 


}


 



