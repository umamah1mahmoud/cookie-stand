'use strict';
let main=document.getElementById('sales');

function randomGenerator(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

let seattle={
    cityName: 'Seattle',
    minCus:23,
    maxCus:65,
    avgSale:6.3,
    oneHour:0,
    hours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    cookies:[],
    customerNumber:0,
    customersHour:function(){
      let number=this.customerNumber;
      number=randomGenerator(23,65);
      return number;
    },
    cookiesHour: function(){
        let Hour= this.onehHour;
        Hour= randomGenerator(23,65)*this.avgSale;
        return Hour;
    },
    // eachHour: function (){
    //     let sum=0;
    //     let element = document.getElementById(this.cityName);
    //     for (let i=0; i<this.hours.length; i++){
    //         this.cookies.push(this.cookiesHour());
    //         sum=sum+this.cookies[i];
    //         sales.innerHTML = this.hours[i] + ':' + this.cookies[i];
            
    //     };
        
    // },
   

};



// console.log(seattle);
console.log(seattle.customersHour());
console.log(seattle.cookiesHour());
// console.log(seattle.eachHour());
// console.log(seattle.hours, seattle.cookiesHour());
for (let i=0; i<seattle.hours.length; i++){
    console.log(seattle.hours[i] + ':' + seattle.cookiesHour());
};


let tokyo={
    minCus:3,
    maxCus:24,
    avgSale:1.2,
    

}

let dubai={
    minCus:11,
    maxCus:38,
    avgSale:3.7,
    

}

let paris={
    minCus:20,
    maxCus:38,
    avgSale:2.3,
    

}

let lima={
    minCus:2,
    maxCus:16,
    avgSale:4.6,
    

}



let unorderedList= document.createElement('ul');
main.appendChild(unorderedList);
let eachHourCookies= document.createElement('li');
eachHourCookies.innerText=seattle.
unorderedList.appendChild(eachHourCookies);