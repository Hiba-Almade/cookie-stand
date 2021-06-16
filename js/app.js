'use strict';

function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random()*(max + 1 - min))
  }
let salesElement=document.getElementById('sales');
let hours =['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let allTotal=0;
this.cookiesHours = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let newCity=document.getElementById('newCity');

// Table footer
let table = document.createElement('table');
function makeTablefooter(){
salesElement.appendChild(table);

let footerRow = document.createElement('tr');
table.appendChild(footerRow);

let th1= document.createElement('th');
footerRow.appendChild(th1);
th1.textContent= " ";

for(let i = 0 ; i < hours.length ; i++){
    let th= document.createElement('th');
    footerRow.appendChild(th);
    th.textContent= hours[i];
}
let th2= document.createElement('th');
footerRow.appendChild(th2);
th2.textContent= 'Daily Location Total';
}

// Object
function Sales(location, minCustomer,maxCustomer,avgCookies){
this.location=location;
this.minCustomer=minCustomer;
this.maxCustomer=maxCustomer;
this.avgCookies=avgCookies;
this.cookies = new Array(14); // to save the number of cookeies in each hour
   this.total = 0;
}

Sales.prototype.cookiesNumber=function(){
    for(let i = 0 ; i < hours.length; i++){
        let randomNumber = generateRandomInteger(this.minCustomer, this.maxCustomer);
        this.cookies[i] = Math.floor(this.avgCookies*randomNumber);
        this.total+=this.cookies[i];
        cookiesHours[i]+=this.cookies[i];
}
allTotal +=this.total;
}
Sales.prototype.render=function(){
    let row = document.createElement('tr');
    table.appendChild(row);

    let td1= document.createElement('td');
    row.appendChild(td1);
    td1.textContent=this.location;

       for(let i = 0 ; i <hours.length; i++){
           let td= document.createElement('td');
           row.appendChild(td);
           td.textContent= this.cookies[i];
       }
       let td2= document.createElement('td');
           row.appendChild(td2);
           td2.textContent= this.total;
   }



function makeTableFooter(){
   
    let footerRow = document.createElement('tr');
    table.appendChild(footerRow);
    
    let th1= document.createElement('th');
    footerRow.appendChild(th1);
    th1.textContent= 'Totals';
    
    for(let i = 0 ; i < hours.length ; i++){
        let th= document.createElement('th');
        footerRow.appendChild(th);
        th.textContent=cookiesHours[i];
    }
    let th2= document.createElement('th');
    footerRow.appendChild(th2);
    th2.textContent= allTotal;
    }

let seattle = new Sales('Seattle',23,65,6.3);
let tokyo = new Sales('Tokyo',3,24,1.2);
let dubai = new Sales('Dubai',11,38,3.7);
let paris = new Sales('Paris',20,38,2.3);
let lima = new Sales('Lima',2,16,4.6);


makeTablefooter();
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
makeTableFooter();



function addCity(event) {
    event.preventDefault();
    let location = event.target.name.value;
    let min = event.target.min.value;
    let max = event.target.max.value;
    let avg = event.target.avg.value;
  
    let newLocation = new Sales(location,min,max,avg);

    newLocation.cookiesNumber();
    newLocation.render();

    var rowCount = table.rows.length;
    table.deleteRow(rowCount -2);
     makeTableFooter();
   
   
  }
  
  newCity.addEventListener('submit', addCity);


