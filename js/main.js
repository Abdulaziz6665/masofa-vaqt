var piyodaSpeed = 3.6;
var bikeSpeed = 20.1;
var carSpeed = 70;
var planeSpeed = 800;

var btn = document.querySelector('.press');
var elMinuts = document.querySelector('.minut');


btn.addEventListener('click', function (e) {
  e.preventDefault();
  
  var input = document.querySelector('.km-hour').value;
  
  
  var resultP = parseFloat((input / piyodaSpeed), 10).toFixed(2);
  var a = resultP - Math.floor(resultP);
  var w = 60 * a;
  
  var resultB = parseFloat((input / bikeSpeed), 10).toFixed(2);
  var b = resultB - Math.floor(resultB);
  var x = 60 * b;
  
  var resultC = parseFloat((input / carSpeed), 10).toFixed(2);
  var c = resultC - Math.floor(resultC);
  var y = 60 * c;
  
  var resultPl = parseFloat((input / planeSpeed), 10).toFixed(2);
  var d = resultPl - Math.floor(resultPl);
  var z = 60 * d;
  
  
  document.querySelector('.foot-text').textContent = Math.floor(resultP) + ' ';
  document.querySelector('.bikeSpeed-text').textContent = Math.floor(resultB) + ' ';
  document.querySelector('.carSpeed-text').textContent = Math.floor(resultC) + ' ';
  document.querySelector('.planeSpeed-text').textContent = Math.floor(resultPl) + ' ';
  
  document.querySelector('.minutsP').textContent = Math.round(w) + ' '
  document.querySelector('.minutsB').textContent = Math.round(x) + ' '
  document.querySelector('.minutsC').textContent = Math.round(y) + ' '
  document.querySelector('.minutsPl').textContent = Math.round(z) + ' '
});
