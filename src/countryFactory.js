//Add imports here

const URL ="http://localhost:3333/labels";
const link="http://localhost:3333/countries";
class CountryFactory {
 
 constructor() {
    this.labels = [];
    this.countries = [];
   }

   getLabels = (cb) => {
     fetch(URL)
     .then(function (res){
      return this.labels; 
     }).then(function(data){
       if(cb){
         cb(data.value.labels)
       }
     });
   }
   
   getCountries = (cb) => {
    fetch(link)
    .then(function (res){
     return this.countries;
    }).then(function(data){
      if(cb){
        cb(data.value.countries)
      }
    });
   }
  }

export default new CountryFactory();