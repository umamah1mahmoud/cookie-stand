'use strict';
// >>>>>>>>>>>>>>>>>>>>>>>>>> GLOBAL

let shopsSales=document.getElementById('shopTable');
let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

// >>>>>>>>>>>>>>>>>>>>>>>> Creating Constructor

function Shop(city, minHourlyCus, maxHourlyCus, avgCookiesPerCus){
    this.city=city;
    this.minHourlyCus=minHourlyCus;
    this.maxHourlyCus=maxHourlyCus;
    this.avgCookiesPerCus=avgCookiesPerCus;
    this.customersEachHour=[];
    this.cookiesEachHour=[];
    this.totalCookiesDaily=0;    
};

// >>>>>>>>>>>>>>>>>>>>>>>> Creating Methods

Shop.prototype.randomGenerator=function(min,max){
    min=this.minHourlyCus;
    max=this.maxHourlyCus;
    return Math.floor(Math.random()*(max-min)+min);
};

Shop.prototype.calCustomersEachHour=function(){
    for (let i=0; i< hours.length; i++){
        this.customersEachHour.push(this.randomGenerator(this.minHourlyCus, this.maxHourlyCus));
    }
    
};

Shop.prototype.calCookiesEachHour=function(){
    this.calCustomersEachHour();
    for (let i = 0; i < hours.length; i++){
        let eachHour= Math.floor(this.customersEachHour[i] * this.avgCookiesPerCus);
        this.cookiesEachHour.push(eachHour);
        this.totalCookiesDaily += eachHour;
    }
};

// >>>>>>>>>>>>>>>>>>>>>>>> Creating The Render Method To Put Values Into Table


Shop.prototype.render= function(){
    this.calCookiesEachHour();
    let tRow= document.createElement('tr');
    let tData= document.createElement('td');
    tData.textContent= this.city;
    tRow.appendChild(tData);

    for(let i=0; i<hours.length; i++){
        tData= document.createElement('td');
        tData.textContent= this.cookiesEachHour[i];
        tRow.appendChild(tData);
    }
    let tHeader= document.createElement ('th');
    tHeader.textContent= this.totalCookiesDaily;
    tRow.appendChild(tHeader);
    shopsSales.appendChild(tRow);
};


// >>>>>>>>>>>>>>>>>>>>>>>> Setting Values For The Shops


let seattle=new Shop('Seattle', 23, 65, 6.3);
let tokyo=new Shop('Tokyo', 3, 24, 1.2);
let dubai=new Shop('Dubai', 11, 38, 3.7);
let paris=new Shop('Paris', 20, 38, 2.3);
let lima=new Shop('Lima', 2, 16, 4.6);
let citiesList=[seattle, tokyo, dubai, paris, lima];


// >>>>>>>>>>>>>>>>>>>>>>>> Creating Table Header


function getHeader(){
    let tRow= document.createElement('tr');
    let tHeader= document.createElement ('th');
    tHeader.textContent= 'Branches';
    tRow.appendChild(tHeader);
    
    for (let i=0; i< hours.length; i++){
        tHeader= document.createElement ('th');
        tHeader.textContent= hours[i];
        tRow.appendChild(tHeader);
    }
    tHeader= document.createElement('th');
    tHeader.textContent= 'Branches Total Sales'
    tRow.appendChild(tHeader);
    shopsSales.appendChild(tRow);
};

// >>>>>>>>>>>>>>>>>>>>>>>> Creating Table Footer

function getFooter(){
    let tRow= document.createElement('tr');
    let tHeader= document.createElement ('th');
    tHeader.textContent= 'Hourly Total Sales for All Branches';
    tRow.appendChild(tHeader);
    let totalOfTotals= 0;
    for (let i=0; i< hours.length; i++){
        let hourlyTotal= 0;
        for (let k=0; k< citiesList.length; k++){
            hourlyTotal += citiesList[k].cookiesEachHour[i];
            totalOfTotals += citiesList[k].cookiesEachHour[i];
        }
        tHeader = document.createElement('th');
        tHeader.textContent = hourlyTotal;
        tRow.appendChild(tHeader);
    }
    tHeader= document.createElement('th');
    tHeader.textContent= totalOfTotals;
    tRow.appendChild(tHeader);
    shopsSales.appendChild(tRow);
};

// >>>>>>>>>>>>>>>>>>>>>>>> RENDERING THE TABLE!

(function renderTable(){
    getHeader();
    for( let i= 0; i< citiesList.length; i++){
        citiesList[i].render();
    }
    getFooter();
})();