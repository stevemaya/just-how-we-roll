/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/*******************************************************************
 * Helper Functions*
 ******************************************************************/

const getRandomNumber = function(max) {
  const rand = Math.random();
  const range = rand * max;
  const result = Math.ceil(range);

  return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

const getImagePathD6 = function(roll) {
  return `./images/d6/${roll}.png`;
}

const getImagePathNumbers = function(roll) {
  return `./images/numbers/${roll}.png`;
}

const setText = function(selector, text) {
  document.querySelector(selector).innerText = text;
}

const setSrc = function(selector, src) {
  document.querySelector(selector).src = src;
}

const addClickEventHandler = function(selector, func) {
  document.querySelector(selector).addEventListener('click', func);
}

const addThing = function(selector, value, type) {
  const node = document.querySelector(selector);
  if (type === 'src') {
    node.src = value;
  } else if (type === 'text') {
    node.innerText = value;
  } else if (type === 'click') {
    node.addEventListener('click', value);
  }
}

/******************
 * QUERIES*
 ******************/

const d6Button = document.querySelector('#d6-roll');
const doubleD6Button1 = document.querySelector('#double-d6-roll-1');
const doubleD6Button2 = document.querySelector('#double-d6-roll-2');
const d12Button = document.querySelector('#d12-roll');
const d20Button = document.querySelector('#d20-roll');
const resetButton = document.querySelector('#reset-button');


const d6Mean = document.querySelector('#d6-rolls-mean');
const d6Median = document.querySelector('#d6-rolls-median');
const d6Mode = document.querySelector('#d6-rolls-mode');
const doubleD6Mean = document.querySelector('#double-d6-rolls-mean');
const doubleD6Median = document.querySelector('#double-d6-rolls-median');
const doubleD6Mode = document.querySelector('#double-d6-rolls-mode');
const d12Mean = document.querySelector('#d12-rolls-mean');
const d12Median = document.querySelector('#d12-rolls-median');
const d12Mode = document.querySelector('#d12-rolls-mode');
const d20Mean = document.querySelector('#d20-rolls-mean');
const d20Median = document.querySelector('#d20-rolls-median');
const d20Mode = document.querySelector('#d20-rolls-mode');


/***************************
 * CLICK HANDLER FUNCTIONS *
 ***************************/

const rollD6 = function() {
  const roll = getRandomNumber(6);
  sixes.push(roll);
  const median = getMedian(sixes);
  const mean = getMean(sixes);
  const mode = getMode(sixes);

  d6Button.src = getImagePathD6(roll);
  d6Mean.innerText = mean;
  d6Median.innerText = median;
  d6Mode.innerText = mode;
}

const rollDoubleD6 = function() {
  const roll1 = getRandomNumber(6);
  const roll2 = getRandomNumber(6);Z
  doubleSixes.push(roll1 + roll2);
  const median = getMedian(doubleSixes);
  const mean = getMean(doubleSixes);
  const mode = getMode(doubleSixes);

  doubleD6Button1.src = getImagePathD6(roll1);
  doubleD6Button2.src = getImagePathD6(roll2);
  doubleD6Mean.innerText = mean;
  doubleD6Median.innerText = median;
  doubleD6Mode.innerText = mode;
}

const rollD12 = function() {
  const roll = getRandomNumber(12);
  twelves.push(roll);
  const median = getMedian(twelves);
  const mean = getMean(twelves);
  const mode = getMode(twelves);

  d12Button.src = getImagePathNumbers(roll);
  d12Mean.innerText = mean;
  d12Median.innerText = median;
  d12Mode.innerText = mode;
}

const rollD20 = function() {
  const roll = getRandomNumber(20);
  twenties.push(roll);
  const median = getMedian(twenties);
  const mean = getMean(twenties);
  const mode = getMode(twenties);

  d20Button.src = getImagePathNumbers(roll);
  d20Mean.innerText = mean;
  d20Median.innerText = median;
  d20Mode.innerText = mode;
}

/******************
 * RESET FUNCTION *
 ******************/


const resetAll = function() {
  sixes.splice(0)
  doubleSixes.splice(0)
  twelves.splice(0)
  twenties.splice(0)

  d6Button.src = './images/start/d6.png';
  doubleD6Button1.src = './images/start/d6.png';
  doubleD6Button2.src = './images/start/d6.png';
  d12Button.src = './images/start/d12.jpeg';
  d20Button.src = './images/start/d20.jpg';

  d6Mean.innerText = 'NA';
  d6Median.innerText = 'NA';
  d6Mode.innerText = 'NA';
  doubleD6Mean.innerText = 'NA';
  doubleD6Median.innerText = 'NA';
  doubleD6Mode.innerText = 'NA';
  d12Mean.innerText = 'NA';
  d12Median.innerText = 'NA';
  d12Mode.innerText = 'NA';
  d20Mean.innerText = 'NA';
  d20Median.innerText = 'NA';
  d20Mode.innerText = 'NA';
}

d6Button.src = './images/start/d6.png';
doubleD6Button1.src = './images/start/d6.png';
doubleD6Button2.src = './images/start/d6.png';
d12Button.src = './images/start/d12.jpeg';
d20Button.src = './images/start/d20.jpg';

d6Mean.innerText = 'NA';
d6Median.innerText = 'NA';
d6Mode.innerText = 'NA';
doubleD6Mean.innerText = 'NA';
doubleD6Median.innerText = 'NA';
doubleD6Mode.innerText = 'NA';
d12Mean.innerText = 'NA';
d12Median.innerText = 'NA';
d12Mode.innerText = 'NA';
d20Mean.innerText = 'NA';
d20Median.innerText = 'NA';
d20Mode.innerText = 'NA';

/*******************
 * EVENT LISTENERS *
 *******************/


d6Button.addEventListener('click', rollD6);
doubleD6Button1.addEventListener('click', rollDoubleD6);
doubleD6Button2.addEventListener('click', rollDoubleD6);
d12Button.addEventListener('click', rollD12);
d20Button.addEventListener('click', rollD20);
resetButton.addEventListener('click', resetAll);

/****************
 * MATH SECTION *
 ****************/


const getMean = (arr) => {
  let result = 0
  for(let i = 0; i<arr.length; i++){
      result += arr[i]
  } return (result / arr.length).toFixed(2)
}

const getMedian = (arr) => {
  if(arr.length <= 1){
      return arr;
  }
  if(arr.length%2===0){
      return arr.sort((a,b)=>{return a-b}).slice(Math.floor(arr.length/2),(Math.floor(arr.length/2)+1))
  }
      return arr.sort((a,b)=>{return a-b}).slice(Math.floor(arr.length/2),(Math.floor(arr.length/2) *-1))
}

const getMode = (arr) => {
  let currentResult = 0;
  let secondResult = 0;
  let answer = '';
  for(let i = 0; i<arr.length; i++){
      for(let j = 0; j<arr.length; j++){
          if(i<1){
              if(arr[i]===arr[j]){
              currentResult++
              answer = arr[i]
              }
          } else{
              if(arr[i]===arr[j]){
              secondResult++
              }
          }
          }
          if(currentResult >= secondResult){
              secondResult=0;
          } else {
              answer = arr[i]
              currentResult = secondResult;
              secondResult=0
      }
  }
  return answer;
}
