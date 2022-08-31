let nestedObject = {
    speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
    data: {
      continents: {
        europe: {
          countries: {
            switzerland: {
              capital: "Bern",
              population: 8000000
            }
          }
        }
      },
      languages: {
        spanish: {
            hello: "Hola"
        },
        french: {
            hello: "Bonjour"
        }
      }
    }
}

/*function addSpeaker(key,value){
   let dataSpeaker=nestedObject.speakers;
   dataSpeaker[key]=value;
   return dataSpeaker;
    
}
console.log(addSpeaker("name","Kim"));*/


/*function addLanguage(key,value){
    let dataLanguage=nestedObject.speakers.data.languages.spanish.french;
    dataLanguage[key]=value;
  }
  console.log(addLanguage("korea","hello")) */ 

  /*function addCountry(name, capital, population){
    nestedObject.data.continents.europe.countries[name] = {
      capital: capital,
      population: population
    }
  }
  console.log(addCountry("HY","20000"))*/


 