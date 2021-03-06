// JavaScript Document

//vars

//numbers initialized at 0
var numTotalHearts=0, numRate=0, numTotalPSB=0, numPFail=0, numP0=0, numP1=0, numP2=0, numP3=0, numFail=0, num0=0, num1=0, num2=0, num3=0;
//doc fields organized by row
//row 1
var totalHearts=document.getElementById("totalHearts"), rate=document.getElementById("rate"), totalPSB=document.getElementById("totalPSB");
//row 2
var pFail=document.getElementById("pFail"), p0=document.getElementById("p0"), p1=document.getElementById("p1"), p2=document.getElementById("p2"), p3=document.getElementById("p3");
//row 3
var eleNumFail=document.getElementById("numFail"), eleNum0=document.getElementById("num0"), eleNum1=document.getElementById("num1"), eleNum2=document.getElementById("num2"), eleNum3=document.getElementById("num3");
//buttons - get from doc
var btnFail=document.getElementById("btnFail"), btn0=document.getElementById("btn0"), btn1=document.getElementById("btn1"), btn2=document.getElementById("btn2"), btn3=document.getElementById("btn3"), btnReset=document.getElementById("btnReset");
//buttons "-" get from doc
var btnFailM=document.getElementById("btnFail-"), btn0M=document.getElementById("btn0-"), btn1M=document.getElementById("btn1-"), btn2M=document.getElementById("btn2-"), btn3M=document.getElementById("btn3-");

//event listeners increment
btnFail.addEventListener("click", incFail);
btn0.addEventListener("click", inc0);
btn1.addEventListener("click", inc1);
btn2.addEventListener("click", inc2);
btn3.addEventListener("click", inc3);
//event listener reset
btnReset.addEventListener("click", clear);
//event listeners decrement
btnFailM.addEventListener("click", decFail);
btn0M.addEventListener("click", dec0);
btn1M.addEventListener("click", dec1);
btn2M.addEventListener("click", dec2);
btn3M.addEventListener("click", dec3);

//functions
//calc calculates the percentages, rate, etc. of all values
function calc(){
"use strict";
numPFail = (numFail/numTotalHearts)*100;
numP0 = (num0/numTotalHearts)*100;
numP1 = (num1/numTotalHearts)*100;
numP2 = (num2/numTotalHearts)*100;
numP3 = (num3/numTotalHearts)*100;
numRate = numTotalPSB/numTotalHearts;
}
//update changes all values in document to reflect the changes from pressing the "+" key of any option
function update(){
"use strict";
totalHearts.textContent="Total Hearts: " + numTotalHearts;
rate.textContent="PSB per Heart: " + numRate.toFixed(2);
totalPSB.textContent="Total PSB: " + numTotalPSB;
pFail.textContent= numPFail.toFixed(2)+"%";
p0.textContent= numP0.toFixed(2)+"%";
p1.textContent= numP1.toFixed(2)+"%";
p2.textContent= numP2.toFixed(2)+"%";
p3.textContent= numP3.toFixed(2)+"%";
eleNumFail.textContent=numFail;
eleNum0.textContent=num0;
eleNum1.textContent=num1;
eleNum2.textContent=num2;
eleNum3.textContent=num3;
}
//functions for each specific button
//increments
//Fail Button
function incFail(){
"use strict";
numFail++;
numTotalHearts++;
calc();
update();	
}
//0 PSB Button
function inc0(){
"use strict";
num0++;
numTotalHearts++;
calc();
update();	
}
//1 PSB Button
function inc1(){
"use strict";
num1++;
numTotalHearts++;
numTotalPSB++;
calc();
update();	
}
//2 PSB Button
function inc2(){
"use strict";
num2++;
numTotalHearts++;
numTotalPSB+=2;
calc();
update();	
}
//3 PSB Button
function inc3(){
"use strict";
num3++;
numTotalHearts++;
numTotalPSB+=3;
calc();
update();	
}
//reset
function clear(){
	"use strict";
numTotalHearts=0;
numRate=0;
numTotalPSB=0;
numPFail=0;
numP0=0;
numP1=0;
numP2=0;
numP3=0;
numFail=0;
num0=0;
num1=0;
num2=0;
num3=0;
update();
}

//decrements
//check if okay to decrement
/*
var valid=true;
function decValid(){
	"use strict";
	if(numTotalHearts>0){
		valid=true;
	}

	else{
		valid=false;
	}
}
*/
function decFail(){
	"use strict";
	//decValid();
	if(numTotalHearts>1 && numFail>0){
		numTotalHearts--;
		numFail--;
		calc();
		update();
	}
	else if(numTotalHearts==1 && numFail>0){
		clear();
	}
	else{
		alert("Cannot decrement if runs is less than 0");
	}
}
function dec0(){
	"use strict";
	//decValid();
	if(numTotalHearts>1 && num0>0){
		numTotalHearts--;
		num0--;
		calc();
		update();
	}
	else if(numTotalHearts==1 && num0>0){
		clear();
	}
	else{
		alert("Cannot decrement if runs is less than 0");
	}
}
function dec1(){
	"use strict";
	//decValid();
	if(numTotalHearts>1 && num1>0){
		numTotalHearts--;
		num1--;
		numTotalPSB--;
		calc();
		update();
	}
	else if(numTotalHearts==1 && num1>0){
		clear();
	}
	else{
		alert("Cannot decrement if runs is less than 0");
	}
}
function dec2(){
	"use strict";
	//decValid();
	if(numTotalHearts>1 && num2>0){
		numTotalHearts--;
		num2--;
		numTotalPSB-=2;
		calc();
		update();
	}
	else if(numTotalHearts==1 && num2>0){
		clear();
	}
	else{
		alert("Cannot decrement if runs is less than 0");
	}
}
function dec3(){
	"use strict";
	//decValid();
	if(numTotalHearts>1 && num3>0){
		numTotalHearts--;
		num3--;
		numTotalPSB-=3;
		calc();
		update();
	}
	else if(numTotalHearts==1 && num3>0){
		clear();
	}
	else{
		alert("Cannot decrement if runs is less than 0");
	}
}
