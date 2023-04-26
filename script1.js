// const options2 = {
//     method: 'GET',
//     headers: {
//         'content-type': 'application/octet-stream',
//         'X-RapidAPI-Key': '50b74be4abmsh3612e33a5aa0344p120b8ejsn2a83698e62d4',
//         'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
//     }
// };

// const airquality=()=>{
// fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=london')
//  .then(response=> response.json())
//  .then((response) =>{
//            console.log(response)

//  }). catch (error => 
//     console.error(error));
//  }

//  airquality();


const options = {
    method: 'GET',
	headers: {
        'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': '50b74be4abmsh3612e33a5aa0344p120b8ejsn2a83698e62d4',
		'X-RapidAPI-Host': 'exerciseapi3.p.rapidapi.com'
	}
};

fetch('https://exerciseapi3.p.rapidapi.com/search/muscles/')
.then(response=> response.json())
.then((response)=>{
    console.log(response)
}).catch ((e)=>{ 
	console.error(e)
});
