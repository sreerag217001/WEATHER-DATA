
    function Search() {
        state = c_Name.value;  //state=kerala
        console.log(state);


        fetch(`http://api.weatherapi.com/v1/current.json?key=5cf602f497334a0d96b21541220912&q=${state}`)
            .then(res => res.json())
        .then(data => displayData(data)) //2nd function call

            .catch(error => {
                alert('Failed to fetch weather data')
            })
    }

    //display data as card

    function displayData(weatherDetails) {
        name = weatherDetails['location'].name
        humidity = weatherDetails['current'].humidity
        temp_c = weatherDetails['current'].temp_c
        temp_f = weatherDetails['current'].temp_f
        let htmlData = `<div class="card" style="width: 18rem;">
  
  <div class="card-body">
    <h5 class="card-title">My country</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">name: ${name}</li>
    <li class="list-group-item">humidity: ${humidity}</li>
    <li class="list-group-item">temp_c: ${ temp_c }</li>
    <li class="list-group-item"> temp_f : ${temp_f}</li>
  </ul>
  
</div>`
    result.innerHTML = htmlData
    }
