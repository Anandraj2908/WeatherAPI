




//api call
const apiKey='5021de3fdd784ce78b465350231208'
const searchBtn=document.querySelector('#search')
const tempBtn=document.querySelector('#temp');
const locBtn=document.querySelector('#loc');
const humBtn=document.querySelector('#humid')
const timebtn=document.querySelector('#time')
async function getWeather(city,apiKey){
    const response=await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);
    const res=await response.json();
    
    tempBtn.innerHTML=`TEMP: ${res.current.temp_c} C`
    humBtn.innerHTML=`Humidity: ${res.current.condition.text}`
    locBtn.innerHTML=`${city}`
    timebtn.innerHTML=`${res.location.localtime}`
}

searchBtn.addEventListener('click',function(){
    const textKey=document.querySelector('#textInp').value
    getWeather(textKey,apiKey)
    
},false)