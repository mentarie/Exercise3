function fetchPerson(id){

  fetch(`http://swapi.co/api/people/${id}`)
    .then( function(response){
      return response.json()
    })
    .then(function(json){
      console.log("data", json)

      if (!json.name){
        return;
      }

      const name = json.name;
      const birth_year = json.birth_year;

      const html = `
        <div class="character">
          <div class="name">
            <a href="${json.url}">${name}</a>
          </div>
          <div class="year">${birth_year}</div>
        </div>
      
      document.querySelector("#characters").insertAdjacentHTML('afterbegin', html)
    })
}
for (var i = 1; i <= 100; i++) {
  fetchPerson(i)
}