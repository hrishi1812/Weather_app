async function fetchWhetherData(cityName){
	let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a1a95ae641f94b2d2e21105c7b21823e`
	let response=await fetch(url)
	const data=await response.json()
	let city=document.getElementById("city");
	city.innerHTML=data.name;
	let wind=document.getElementById("wind");
	wind.innerHTML=data.wind.speed+" km/h";
	let humidity=document.getElementById("humidity");
	humidity.innerHTML=data.main.humidity+" g/kg";
	let temp=document.getElementById("temp");
	temp.innerHTML=Math.round(data.main.temp-(273.15))+" °C";
	console.log(data);

}
function fetchCity(){
	let cityName=document.getElementById("city_name")
     if(cityName.value===""){
     	alert("Enter the city")
     }else{
     	fetchWhetherData(cityName.value)
     	cityName.value="";
     }
}