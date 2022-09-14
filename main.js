import data from './data.json' assert{type: 'json'};

const chartBarConteiner = document.querySelector('.chart__bars-container');
const chartTotal = document.getElementById('chart__total');

let valorMayor = 0;
const maximoPixel = 200;
data.forEach(Element => {
    if(Element.amount > valorMayor) valorMayor = Element.amount; 
});

// Regla de 3
// valorMayor -> 200px
// valorN -> x
// x = (valorN * 200px)/valorMayor

let totalAmout = 0;
data.forEach(Element => {
    let height =  (Element.amount * maximoPixel) / valorMayor;
    chartBarConteiner.innerHTML += `<div style="height: ${height}px ;" class="chart__bar" >
    <div class="chart__bar-label">$<span>${Element.amount}</span></div>
    <div class="chart__bar-day">${Element.day}</div>
  </div>`
  totalAmout += Element.amount
});
chartTotal.textContent = totalAmout;

let bars = document.querySelectorAll('.chart__bar .chart__bar-label span');
bars = [...bars];


let barsMayor;
bars.forEach(Element => {
     if(parseFloat(Element.textContent) === valorMayor){
        barsMayor = Element.parentNode.parentNode;
     }
})

//barsMayor.setAttribute("style", "background-color: hsl(186, 34%, 60%);");
barsMayor.style.background = 'hsl(186, 34%, 60%)'