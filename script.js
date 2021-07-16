let submit = document.querySelector("#submit");
let temp = document.querySelector("#temp");

let place = document.querySelector('#place');


let rain = document.querySelector('#info-rain');

submit.onclick = () => {

    let input = document.querySelector('input');

let value = input.value;



const apiKey = 'c242866c3f51ab661a06ba9bf9ac659f';


const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const {main,name,sys,weather} = data;
        let con = sys.country;

        place.textContent = name+','+con;
       temp.textContent = main.temp+'°C';
      
       

       rain.textContent = weather[0]["description"];

    

    
   

})

}





