'use strict';
let main=document.getElementById('sales');
let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let i=0;
let total=0;

function Shop(cityName, minCus, maxCus, avgSale){
    this.cityName=cityName;
    this.minCus=minCus;
    this.maxCus=maxCus;
    this.avgSale=avgSale;
    this.cookiesEachHour=[];
    this.customerNumber=0;
    this.cookiesPerHour=0;
}

Shop.prototype.randomGenerator=function(min,max){
    min=this.minCus;
    max=this.maxCus;
    return Math.floor(Math.random()*(max-min)+min);
};

Shop.prototype.customersHour=function(){
    let number=this.customerNumber;
        number=Math.floor(this.randomGenerator(this.minCus,this.maxCus));
        return number;
};
        
Shop.prototype.cookiesHour=function(){
    let Hour=Math.floor(this.randomGenerator(this.minCus,this.maxCus)*this.avgSale);
    return Hour;
};

Shop.prototype.cookiesEachHourFn= function(){
    for (let i=0; i<hours.length; i++){
        let a= Math.floor(this.randomGenerator(this.minCus,this.maxCus)*this.avgSale);
        this.cookiesEachHour.push(a);
    }
    total+=this.cookiesEachHour[i];
    this.cookiesEachHour.push(total);
    return this.cookiesEachHour ;
};






let seattle=new Shop('Seattle', 23, 65, 6.3);
console.log ( seattle.cookiesEachHourFn())

let tokyo=new Shop('Tokyo', 3, 24, 1.2);
console.log ( tokyo.cookiesEachHourFn())

let dubai=new Shop('Dubai', 11, 38, 3.7);
console.log ( dubai.cookiesEachHourFn())

let paris=new Shop('Paris', 20, 38, 2.3);
console.log (paris.cookiesEachHourFn())

let lima=new Shop('Lima', 2, 16, 4.6);
console.log ( lima.cookiesEachHourFn())




function getTable(){
    let body= document.getElementsByTagName('body') [0];
    let myTable=document.createElement('table');
    let tableBody=document.createElement('tbody');

    for (let i=0; i<hours ; i++){
        let row=document.createElement('tr');

        for (let x=0; x<hours; x++){
            let cell=document.createElement('td');
            let cellText= document.createTextNode('cell in row' +i+ ', column'+j);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }
    myTable.appendChild(tableBody);
    body.appendChild(myTable);
    myTable.setAttribute('border', '2');

}





// function createTable(tableData) {
//     let table = document.createElement('table');
//     let tableBody = document.createElement('tbody');
  
//     tableData.forEach(function(cityData) {
//       let row = document.createElement('tr');
  
//       cityData.forEach(function(cellData) {
//         let cell = document.createElement('td');
//         cell.appendChild(document.createTextNode(cellData));
//         row.appendChild(cell);
//       });
  
//       tableBody.appendChild(row);
//     });
  
//     table.appendChild(tableBody);
//     document.body.appendChild(table);
//   }
  
// createTable([['Branch', hours], [seattle.cityName, (seattle.cookiesEachHourFn())], [tokyo.cityName, tokyo.cookiesEachHourFn()], [dubai.cityName, dubai.cookiesEachHourFn()], [paris.cityName, paris.cookiesEachHourFn()], [lima.cityName, lima.cookiesEachHourFn()]]);

// let theCity= document.createElement('h3')
// theCity.innerText=this.cityName;
// main.appendChild(theCity);
// let unorderedList= document.createElement('ul');
// let count= document.createElement('li');
// count.innerText=this.cookiesEachHour;
// unorderedList.appendChild(count);
// main.appendChild(unorderedList);

// let render=function(){
//     let unorderedList= document.createElement('ul');
//     let type= document.createElement('li');
//     type.innerText=lima.cookiesEachHourFn();
//     main.appendChild(unorderedList);
    
// }




// let shopsTable=document.createElement('table');
// let tableRow=document.createElement('tr')
// let theCity= document.createElement('td')
// theCity.innerText=lima.cityName;
// main.appendChild(theCity);












// let seattle={
//     cityName: 'Seattle',
//     minCus:23,
//     maxCus:65,
//     avgSale:6.3,
//     hours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//     cookiesPerHour:[],
//     customerNumber:0,
//     randomGenerator: function(min,max){
//         return Math.floor(Math.random()*(max-min+1)+min);
//     },
    
//     customersHour:function(){
//       let number=this.customerNumber;
//       number=randomGenerator(23,65);
//       return number;
//     },
//     cookiesHour: function(){
//         let Hour= this.onehHour;
//         Hour= randomGenerator(23,65)*this.avgSale;
//         return Hour;
//     },
//     // eachHour: function (){
//     //     let sum=0;
//     //     let element = document.getElementById(this.cityName);
//     //     for (let i=0; i<this.hours.length; i++){
//     //         this.cookies.push(this.cookiesHour());
//     //         sum=sum+this.cookies[i];
//     //         sales.innerHTML = this.hours[i] + ':' + this.cookies[i];
            
//     //     };
        
//     // },
   

// };



// // console.log(seattle);
// console.log(seattle.customersHour());
// console.log(seattle.cookiesHour());
// // console.log(seattle.eachHour());
// // console.log(seattle.hours, seattle.cookiesHour());
// for (let i=0; i<seattle.hours.length; i++){
//     console.log(seattle.hours[i] + ':' + seattle.cookiesHour());
// };


// let tokyo={
//     minCus:3,
//     maxCus:24,
//     avgSale:1.2,
    

// }

// let dubai={
//     minCus:11,
//     maxCus:38,
//     avgSale:3.7,
    

// }

// let paris={
//     minCus:20,
//     maxCus:38,
//     avgSale:2.3,
    

// }

// let lima={
//     minCus:2,
//     maxCus:16,
//     avgSale:4.6,
    

// }



// let unorderedList= document.createElement('ul');
// main.appendChild(unorderedList);
// let eachHourCookies= document.createElement('li');
// eachHourCookies.innerText=seattle.
// unorderedList.appendChild(eachHourCookies);