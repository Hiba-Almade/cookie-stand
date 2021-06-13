'use strict';

function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random()*(max + 1 - min))
  }
let salesElement=document.getElementById('sales');

let seattle = {
    location:'Seattle',
    minCustomer : 23,
    maxCustomer : 65,
    avgCookies : 6.3,
    hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
   cookies : new Array(14), // to save the number of cookeies in each hour
   total : 0,
   cookiesNumber : function(){
       for(let i = 0 ; i < this.hours.length; i++){
           let randomNumber = generateRandomInteger(this.minCustomer, this.maxCustomer);
           this.cookies[i] = Math.floor(this.avgCookies*randomNumber);
           this.total+=this.cookies[i];
       }
   },
   render : function(){
       let divElement = document.createElement('div');
       salesElement.appendChild(divElement);

       let title = document.createElement('h3');
       divElement.appendChild(title);
       title.textContent = this.location;

       let list = document.createElement('ul');
       divElement.appendChild(list);

       for(let i = 0 ; i < this.hours.length; i++){
           let itemList= document.createElement('li');
           list.appendChild(itemList);
           itemList.textContent= `${this.hours[i]}: ${this.cookies[i]} cookies`
       }
       let totalList= document.createElement('li');
           list.appendChild(totalList);
           totalList.textContent= `Total: ${this.total} cookies`


   }

}


let tokyo = {
    location:'Tokyo',
    minCustomer : 3,
    maxCustomer : 24,
    avgCookies : 1.2,
    hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
   cookies : new Array(14), // to save the number of cookeies in each hour
   total : 0,
   cookiesNumber : function(){
       for(let i = 0 ; i < this.hours.length; i++){
           let randomNumber = generateRandomInteger(this.minCustomer, this.maxCustomer);
           this.cookies[i] = Math.floor(this.avgCookies*randomNumber);
           this.total+=this.cookies[i];

       }
   },
   render : function(){
       let divElement = document.createElement('div');
       salesElement.appendChild(divElement);

       let title = document.createElement('h3');
       divElement.appendChild(title);
       title.textContent = this.location;

       let list = document.createElement('ul');
       divElement.appendChild(list);

       for(let i = 0 ; i < this.hours.length; i++){
           let itemList= document.createElement('li');
           list.appendChild(itemList);
           itemList.textContent= `${this.hours[i]}: ${this.cookies[i]} cookies`
       }
       let totalList= document.createElement('li');
           list.appendChild(totalList);
           totalList.textContent= `Total: ${this.total} cookies`


   }

}



let dubai = {
    location:'Dubai',
    minCustomer : 11,
    maxCustomer : 38,
    avgCookies : 3.7,
    hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
   cookies : new Array(14), // to save the number of cookeies in each hour
   total : 0,
   cookiesNumber : function(){
       for(let i = 0 ; i < this.hours.length; i++){
           let randomNumber = generateRandomInteger(this.minCustomer, this.maxCustomer);
           this.cookies[i] = Math.floor(this.avgCookies*randomNumber);
           this.total+=this.cookies[i];

       }
   },
   render : function(){
       let divElement = document.createElement('div');
       salesElement.appendChild(divElement);

       let title = document.createElement('h3');
       divElement.appendChild(title);
       title.textContent = this.location;

       let list = document.createElement('ul');
       divElement.appendChild(list);

       for(let i = 0 ; i < this.hours.length; i++){
           let itemList= document.createElement('li');
           list.appendChild(itemList);
           itemList.textContent= `${this.hours[i]}: ${this.cookies[i]} cookies`
       }
       let totalList= document.createElement('li');
           list.appendChild(totalList);
           totalList.textContent= `Total: ${this.total} cookies`


   }

}



let paris = {
    location:'Paris',
    minCustomer : 20,
    maxCustomer : 38,
    avgCookies : 2.3,
    hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
   cookies : new Array(14), // to save the number of cookeies in each hour
   total : 0,
   cookiesNumber : function(){
       for(let i = 0 ; i < this.hours.length; i++){
           let randomNumber = generateRandomInteger(this.minCustomer, this.maxCustomer);
           this.cookies[i] = Math.floor(this.avgCookies*randomNumber);
           this.total+=this.cookies[i];

       }
   },
   render : function(){
       let divElement = document.createElement('div');
       salesElement.appendChild(divElement);

       let title = document.createElement('h3');
       divElement.appendChild(title);
       title.textContent = this.location;

       let list = document.createElement('ul');
       divElement.appendChild(list);

       for(let i = 0 ; i < this.hours.length; i++){
           let itemList= document.createElement('li');
           list.appendChild(itemList);
           itemList.textContent= `${this.hours[i]}: ${this.cookies[i]} cookies`
       }
       let totalList= document.createElement('li');
           list.appendChild(totalList);
           totalList.textContent= `Total: ${this.total} cookies`


   }

}



let lima = {
    location:'Lima',
    minCustomer : 2,
    maxCustomer : 16,
    avgCookies : 4.6,
    hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
   cookies : new Array(14), // to save the number of cookeies in each hour
   total : 0,
   cookiesNumber : function(){
       for(let i = 0 ; i < this.hours.length; i++){
           let randomNumber = generateRandomInteger(this.minCustomer, this.maxCustomer);
           this.cookies[i] = Math.floor(this.avgCookies*randomNumber);
           this.total+=this.cookies[i];

       }
   },
   render : function(){
       let divElement = document.createElement('div').className = "mystyle";
       salesElement.appendChild(divElement);

       let title = document.createElement('h3');
       divElement.appendChild(title);
       title.textContent = this.location;

       let list = document.createElement('ul');
       divElement.appendChild(list);

       for(let i = 0 ; i < this.hours.length; i++){
           let itemList= document.createElement('li');
           list.appendChild(itemList);
           itemList.textContent= `${this.hours[i]}: ${this.cookies[i]} cookies`
       }
       let totalList= document.createElement('li');
           list.appendChild(totalList);
           totalList.textContent= `Total: ${this.total} cookies`


   }

}



seattle.cookiesNumber();
seattle.render();
tokyo.cookiesNumber();
tokyo.render();
dubai.cookiesNumber();
dubai.render();
paris.cookiesNumber();
paris.render();
lima.cookiesNumber();
lima.render();