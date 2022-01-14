function cuberoot() {
    try {
        result.value =  Math.cbrt(result.value)
    } catch (error) {
        alert('Enter Valid Inputs');
    }
}

function square() {
    try {
        result.value = Math.pow(result.value, 2);
    } catch (error) {
        alert('Enter Valid Inputs');
    }
}
function cls() {
     result.value = '';
}
  
  function del() {
    result.value = result.value.slice(0, -1);
   }
function claculate() {
  try {
    let processInput = result.value;
    result.value = eval(processInput);
    // let result = document.querySelector('#prevresults');
  
    //oldcalucation.innerHTML = oldcalucation.innerHTML  + `<div>`+processInput+`  = ` +  result.value +`</div>`;
    // result.innerHTML = oldcalucation;   
    document.body.append(oldcalucation);
   } catch (error) {
    console.log(error);
    alert('Invalid inputs');
  }
}

const oldcalucation =  document.createElement('div');
oldcalucation.className = 'container';
const calculator = document.createElement('div');
calculator.className = 'container';
calculator.innerHTML = `
<div class="calculator">
    <h2 class="text-center">Basic Calculator</h2>
     
    <input type="text" placeholder="0" a = "onkeydown(z)" id="result">
    <button class= "button" class= "button" onclick="display('7')">7</button>
    <button class= "button" onclick="display('8')">8</button>
    <button class= "button" onclick="display('9')">9</button>
    <button class= "button" onclick="display('/')">/</button>
    <button class= "button" onclick="del()">DEL</button>
    <button class= "button" onclick="cls()">C</button>
    <button class= "button" onclick="display('4')">4</button>
    <button class= "button" onclick="display('5')">5</button>
    <button class= "button" onclick="display('6')">6</button>
    <button class= "button" onclick="display('*')">*</button>
    <button class= "button" onclick="display('(')">(</button>
    <button class= "button" onclick="display(')')">)</button>
    <button class= "button" onclick="display('1')">1</button>
    <button class= "button" onclick="display('2')">2</button>
    <button class= "button" onclick="display('3')">3</button>
    <button class= "button" onclick="display('-')">-</button>
     <button class= "button" onclick="square()">X<sup>2</sup> </button>

    <button class= "button" onclick="cuberoot()">&#8730;</button>
    <button class= "button" onclick="display('0')">0</button>
    <button class= "button" onclick="display('.')">.</button>
    <button class= "button" onclick="display('%')">%</button>
    <button class= "button" onclick="display('+')">+</button>
 
 
    <button class= "equal" onclick="claculate()">=</button>
</div>
    `;

document.body.append(calculator);

let result = document.querySelector('#result');

function display(num) {
  result.value += num;
 }


