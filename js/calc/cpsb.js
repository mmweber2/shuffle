// JavaScript Document

//vars

//numbers initialized at 0
var numTotalCoins=0, numTotalRuns=0, numRate=0, numTotalPSB=0, numPFail=0, numP0=0, numP1=0, numP2=0, numP3=0, numFail=0, num0=0, num1=0, num2=0, num3=0;
//doc fields organized by row
//row 1
var totalCoins=document.getElementById("totalCoins"), rate=document.getElementById("rate"), totalPSB=document.getElementById("totalPSB"), totalRuns=document.getElementById("totalRuns");
//row 2
var pFail=document.getElementById("pFail"), p0=document.getElementById("p0"), p1=document.getElementById("p1"), p2=document.getElementById("p2"), p3=document.getElementById("p3");
//row 3
var eleNumFail=document.getElementById("numFail"), eleNum0=document.getElementById("num0"), eleNum1=document.getElementById("num1"), eleNum2=document.getElementById("num2"), eleNum3=document.getElementById("num3");
//buttons - get from doc
var btnFail=document.getElementById("btnFail"), btn0=document.getElementById("btn0"), btn1=document.getElementById("btn1"), btn2=document.getElementById("btn2"), btn3=document.getElementById("btn3"), btnReset=document.getElementById("btnReset");
//buttons "-" get from doc
var btnFailM=document.getElementById("btnFail-"), btn0M=document.getElementById("btn0-"), btn1M=document.getElementById("btn1-"), btn2M=document.getElementById("btn2-"), btn3M=document.getElementById("btn3-");


//radio elements
var c300=document.getElementById("c300"), c400=document.getElementById("c400"), c500=document.getElementById("c500");

var costCoins=0;

var valid=true;


//event listeners
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
numPFail = (numFail/numTotalRuns)*100;
numP0 = (num0/numTotalRuns)*100;
numP1 = (num1/numTotalRuns)*100;
numP2 = (num2/numTotalRuns)*100;
numP3 = (num3/numTotalRuns)*100;
numRate = numTotalPSB/numTotalRuns;
}
//update changes all values in document to reflect the changes from pressing the "+" key of any option
function update(){
"use strict";
totalCoins.textContent="Total Coins: " + numTotalCoins;
rate.textContent="PSB Per Run: " + numRate.toFixed(2);
totalPSB.textContent="Total PSB: " + numTotalPSB;
totalRuns.textContent="Total Runs: " + numTotalRuns;
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
//check coin costs
function check(){
"use strict";
//if statements to determine costCoins
if(c300.checked===true){
	costCoins=300;
	valid=true;
}
else if(c400.checked===true){
	costCoins=400;
	valid=true;
}
else if(c500.checked===true){
	costCoins=500;
	valid=true;
}
else{
	alert("Please select cost");
	valid=false;
}
}
//function to calc costs
function costs(){
"use strict";
if (numFail==numTotalRuns)
	{
		numTotalCoins += costCoins;
	}
	else
	{
		numTotalCoins = costCoins * numTotalRuns - 30 * (numTotalRuns - 1) + 30 * (numFail) - 200;
	}
}
function decCosts(){
"use strict";
if (numFail==numTotalRuns)
	{
		numTotalCoins = costCoins*numFail;
	}
	else
	{
		numTotalCoins = costCoins * numTotalRuns - 30 * (numTotalRuns - 1) + 30 * (numFail) - 200;
	}
}


//functions for each specific button
//Fail Button
function incFail(){
"use strict";
check();
if(valid==true){
	numFail++;
	numTotalRuns++;
	calc();
	costs();
	update();
	}
}
//0 PSB Button
function inc0(){
"use strict";
check();
if(valid==true){
	num0++;
	numTotalRuns++;
	calc();
	costs();
	update();
	}	
}
//1 PSB Button
function inc1(){
"use strict";
check();
if(valid==true){
	num1++;
	numTotalRuns++;
	numTotalPSB++;
	calc();
	costs();
	update();
	}
}
//2 PSB Button
function inc2(){
"use strict";
check();
if(valid==true){
	num2++;
	numTotalRuns++;
	numTotalPSB+=2;
	calc();
	costs();
	update();
	}	
}
//3 PSB Button
function inc3(){
"use strict";
check();
if(valid==true){
	num3++;
	numTotalRuns++;
	numTotalPSB+=3;
	calc();
	costs();
	update();
	}	
}
//reset
function clear(){
"use strict";
numTotalCoins=0;
numTotalRuns=0;
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
c300.checked=false;
c400.checked=false;
c500.checked=false;
valid=true;
update();
}

//decrement clear
function decClear(){
"use strict";
numTotalCoins=0;
numTotalRuns=0;
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
valid=true;
update();
}
//decrements

function decFail(){
"use strict";
check();
if(valid==true && numTotalRuns>0 && numTotalRuns!=1 && numFail>0){
	numFail--;
	numTotalRuns--;
	calc();
	decCosts();
	update();
	}
else if(valid==true && numTotalRuns==1 && numFail>0){
	decClear();
	}
else{
	alert("Cannot decrement if runs is less than 0");
	}
}

function dec0(){
"use strict";
check();
if(valid==true && numTotalRuns>0 && numTotalRuns!=1 && num0>0){
	num0--;
	numTotalRuns--;
	calc();
	decCosts();
	update();
	}
else if(valid==true && numTotalRuns==1 && num0>0){
	decClear();
	}
else{
	alert("Cannot decrement if runs is less than 0");
	}
}

function dec1(){
"use strict";
check();
if(valid==true && numTotalRuns>0 && numTotalRuns!=1 && num1>0){
	num1--;
	numTotalRuns--;
	numTotalPSB--;
	calc();
	decCosts();
	update();
	}
else if(valid==true && numTotalRuns==1 && num1>0){
	decClear();
	}
else{
	alert("Cannot decrement if runs is less than 0");
	}
}

function dec2(){
"use strict";
check();
if(valid==true && numTotalRuns>0 && numTotalRuns!=1 && num2>0){
	num2--;
	numTotalRuns--;
	numTotalPSB-=2;
	calc();
	decCosts();
	update();
	}
else if(valid==true && numTotalRuns==1 && num2>0){
	decClear();
	}
else{
	alert("Cannot decrement if runs is less than 0");
	}
}

function dec3(){
"use strict";
check();
if(valid==true && numTotalRuns>0 && numTotalRuns!=1 && num3>0){
	num3--;
	numTotalRuns--;
	numTotalPSB-=3;
	calc();
	decCosts();
	update();
	}
else if(valid==true && numTotalRuns==1 && num3>0){
	decClear();
	}
else{
	alert("Cannot decrement if runs is less than 0");
	}
}