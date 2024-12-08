const url = "https://restcountries.com/v2/all";
fetch(url).then((response)=>response.json()).then((data)=>console.log(data)).catch((error)=>console.log(error))