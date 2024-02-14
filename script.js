async function fetchWhetherData(cityName){
	let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a1a95ae641f94b2d2e21105c7b21823e`
	let response=await fetch(url)
	const data=await response.json()
	console.log(data.name)
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