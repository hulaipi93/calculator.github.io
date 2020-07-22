var tombol = document.querySelector(".calculator-keys");
var layar = document.querySelector(".calculator-screen");
var operators = document.querySelectorAll(".operator");
var decimal = document.querySelector(".decimal");
let currentNumber = '0';
let prevNumber = '';
let calculationOperator='';
let pisah;

operators.forEach((operator)=>{
operator.addEventListener("click", (event)=>{
		angka(event.target.value);
	})
})

const angka = (operator)=>{
		prevNumber = currentNumber;
		calculationOperator=operator;
		
}

tombol.addEventListener("click", function(e){
	var tombolClick = e.target;
	var nilaiTombol = tombolClick.innerText;

    if(nilaiTombol== "AC"){
		layar.value='0';
	}else if(currentNumber=='0'){
		layar.value=nilaiTombol;
	}else if(nilaiTombol=="%"){
		layar.value=layar.value/100;
	}
	else if(nilaiTombol== "="){
		hitung(calculationOperator);
		
	}
	else{
		layar.value+=nilaiTombol;
	}
	currentNumber=layar.value;
	pisah = currentNumber.split(calculationOperator);
	// console.log(currentNumber);
	
});

function hitung(operator){	
	if(operator=="+"){
		layar.value=parseFloat(prevNumber)+parseFloat(pisah[1]);
	}else if(operator=="-"){
		layar.value=prevNumber-pisah[1];
	}else if(operator=="x"){
		layar.value=prevNumber*pisah[1];
	}else{
		layar.value=prevNumber/pisah[1];
	}
}
