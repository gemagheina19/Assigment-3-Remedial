const form = document.getElementById("form-country");

const country = document.getElementById("select-country").value;
const getCountry = document.getElementById("get-countries");


form.addEventListener('submit', function(e){
	e.preventDefault()

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '011699553dmsh35755e25e6db18ap16a71ajsn294d20ed15b1',
			'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
		}
	};
	fetch (`https://covid-193.p.rapidapi.com/statistics?country=${country}`,options)
		.then((response)=> response.json())
		.then((data)=> {
			console.log(data)
			
			document.getElementById('active-cases').innerHTML = data.response[0].cases.active
			document.getElementById('total-cases').innerHTML = data.response[0].cases.total
			document.getElementById('new-cases').innerHTML = data.response[0].cases.new
			document.getElementById('recovered').innerHTML = data.response[0].cases.recovered
			document.getElementById('deaths').innerHTML =data.response[0].deaths.total
			document.getElementById('test').innerHTML =data.response[0].tests.total
		
		})

})
