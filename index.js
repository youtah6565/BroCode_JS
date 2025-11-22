// console.log(`hello`);
// console.log(`i like pizza`);
// window.alert(`this is an alert`);
// window.alert(`i like pizza`);
// document.getElementById("myH1").textContent = `hello`;
// document.getElementById("myP").textContent = `i like pizza`;

// @@@@@@@@@@@@@@@@@@@@
// let x;
// x = 100;
// console.log(x);
// let age = 25;
// let price = 10.99;
// let = gpa = 2.1;
// let firstname = "bro";
// console.log(typeof firstname);
// console.log(`toy are ${age} years old`);
// console.log(`the price is ${price}`);
// console.log(`your gpa is : ${gpa}`);
// console.log(firstname);
// let favoritfood = "pizza";
// console.log(`you like ${favoritfood}`);
// let email = "bro@gmail.com";
// console.log(`your email is : ${email}`);
// let online = true;
// console.log(typeof online);
// console.log(`bro is online : ${online}`);
// let forsale = false;
// console.log(`is this car for sale : ${forsale}`);
// let fullname = "bro code";
// let age = 25;
// let isstudent = false;
// document.getElementById("p1").textContent = `your name is : ${fullname}`;
// document.getElementById("p2").textContent = `you are ${age} years old`;
// document.getElementById("p3").textContent = `enrolld : ${isstudent}`;

// @@@@@@@@@@@@@@@
// let students = 30;
// students = students + 0 ;
// students = students ** 2 ;
// students += 1;
// students++;
// console.log(students);
// let result = 1 + 2 * 3 + 4 ** 2;
// console.log(result);

// @@@@@@@@@@@@@@@
// let username;
// username = window.prompt("whats's your username?");
// console.log(username);
// let username;
// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("mytext").value;
//     document.getElementById("myH1").textContent = `hello ${username}`
//     console.log(username);
// }

// @@@@@@@@@@@@@
// let age = window.prompt("how old are you?")
// age = Number(age);
// age+=1;
// console.log(age , typeof age);
// let x = "pizza";
// let y = "pizza";
// let z = "pizza";
// x = Number(x);
// y = String(y);
// z = Boolean(z);
// console.log(x , typeof x);
// console.log(y , typeof y);
// console.log(z , typeof z);

// @@@@@@@@@@@@@
// const pi = 3.14159;
// let radius;
// let circum;
// document.getElementById("mysubmit").onclick = function(){
//     radius = document.getElementById("mytext").value;
//     radius = Number(radius);
//     circum = 2 * pi * radius;
//     document.getElementById("myH3").textContent = circum + "cm";
// }

// @@@@@@@@@@@@52
// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countlabel = document.getElementById("countlabel");
// let count =0;
// increaseBtn.onclick = function(){
//     count++;
//     countlabel.textContent = count;
// }
// decreaseBtn.onclick = function(){
//     count--;
//     countlabel.textContent = count;
// }
// resetBtn.onclick = function(){
//     count=0;
//     countlabel.textContent = count;
// }

// @@@@@@@@@@@@@01:01
// console.log(Math.PI);
// console.log(Math.E);
// let x = 3.21;
// let y = 2;
// let z1,z2,z3,z4,z5;
// z1 = Math.round(x);
// z2 = Math.floor(x);
// z3 = Math.ceil(x);
// z4 = Math.trunc(x);
// z5 = Math.pow(x,y);
// let max = Math.max(x,y);
// let min = Math.min(x,y);
// console.log(z1);
// console.log(z2);
// console.log(z3);
// console.log(z4);
// console.log(z5);
// console.log(max);
// console.log(min);

// @@@@@@@@@@@01:07
// const min = 50;
// const max = 100;
// let randomNum = Math.floor(Math.random() * (max - min)) +min ;
// console.log(randomNum);
// const myButton = document.getElementById("myButton");
// const myLabel1 = document.getElementById("myLabel1");
// const myLabel2 = document.getElementById("myLabel2");
// const myLabel3 = document.getElementById("myLabel3");
// const min = 1;
// const max = 6;
// let randomNum1;
// let randomNum2;
// let randomNum3;
// myButton.onclick = function(){
//     randomNum1 = Math.floor(Math.random() * max) + min;
//     randomNum2 = Math.floor(Math.random() * max) + min;
//     randomNum3 = Math.floor(Math.random() * max) + min;
//     myLabel1.textContent = randomNum1;   
//     myLabel2.textContent = randomNum2;   
//     myLabel3.textContent = randomNum3;   
// }

// @@@@@@@@@@@@@@@@01:16
// let age = 25;
// if(age >= 18){
//     console.log("you are old enough to enter this site");
// }
// else{
//     console.log("you are not old enough to enter this site");
// }
// let time = 9;
// if(tim < 12){
//     console.log("good morning");    
// }
// else{
//     console.log("good afternoon");
// }
// let isstudent = false;
// if(isstudent){
//     console.log("you are a student");
// }
// else{
//     console.log("you are not a studebt");
// }
// let age = 25;
// let haslicense = false;
// if(age >= 16){
//     console.log("you are old enough to drive");
//     if(haslicense){
//         console.log("you have your license");
//     }
//     else{
//         console.log("you do not have your licnse yet");
//     }
// }
// else{
//     console.log("you must be 16+ to have a license");
// }
// const mytext = document.getElementById("mytext");
// const  mysubmit = document.getElementById("mysubmit");
// const resultelement = document.getElementById("resultelement");
// let age;
// mysubmit.onclick = function(){
//     age = mytext.value;
//     age = Number(age);
//     if(age >= 100){
//         resultelement.textContent = `you are too old to enter this site`;
//     }
//     else if(age == 0){
//         resultelement.textContent = `you can not enter , you were just born`;
//     }
//     else if(age >= 18){
//         resultelement.textContent = `you are old enough to enter this site`;
//     }
//     else if(age < 0){
//         resultelement.textContent = `your age can not bellow 0`;
//     }
//     else{
//         resultelement.textContent = `you must be 18+ to enter this site`;
//     }
// }

// @@@@@@@@@@@@@@@@@01:31
// const mycheckbox = document.getElementById("mycheckbox");
// const visabtn = document.getElementById("visabtn");
// const mastercard = document.getElementById("mastercardbtn");
// const paypalbtn = document.getElementById("paypalbtn");
// const mysubmit = document.getElementById("mysubmit");
// const subresult = document.getElementById("subresult");
// const paymentresult = document.getElementById("paymentresult");
// mysubmit.onclick = function() {
//     if(mycheckbox.checked){
//         subresult.textContent = "you are subscribed";
//     }
//     else{
//         subresult.textContent = "you are not subscribed";
//     }
//     if(visabtn.checked){
//         paymentresult.textContent = "you are paying with visa";
//     }
//         else if(mastercardbtn.checked){
//             paymentresult.textContent = "you are paying with master card";
//     }
//     else if(paypalbtn.checked){
//         paymentresult.textContent = "you are paying with PayPal";
//     }
//     else{
//         paymentresult.textContent = "you must select a payment type";
//     }
// }

// @@@@@@@@@@@@@@@@01:42
// let age = 21;
// let message = age >= 18 ? "u r adult" : "u r a minor";
// console.log(message);
// let time = 16;
// let greeting = time <= 12 ? "good morning" : "good afternoon";
// console.log(greeting);
// let isstudent = true;
// let messssage = isstudent ? "u r a student" : "u r net a student";
// console.log(messssage);
// let purchaseamount = 125;
// let discount = purchaseamount >= 100 ? 10 : 0;
// console.log(`your total is $${purchaseamount - purchaseamount * (discount/100)}`);

// @@@@@@@@@@@@01:48
// let day = 1;
// switch(day){
//     case 1:
//         console.log("it is monday");
//         break;
//     case 2:
//         console.log("it is tuseday");
//         break;
//     case 3:
//         console.log("it is wednesday");
//         break;
//     case 4:
//         console.log("it is thursday");
//         break;
//     case 5:
//         console.log("it is friday");
//         break;
//     case 6:
//         console.log("it is saterday");
//         break;
//     case 7:
//         console.log("it is sunday");
//         break;
//     default :
//     console.log(`${day} is not a day`);
// }
// let testscore = 92;
// let lettergrade;
// switch(true){
//     case testscore >= 90:
//     lettergrade = "A";
//     break;
//     case testscore >= 80:
//     lettergrade = "B";
//     break;
//     case testscore >= 70:
//     lettergrade = "C";
//     break;
//     case testscore >= 60:
//     lettergrade = "D";
//     break;
//     default:
//         lettergrade = "F";
// }
// console.log(lettergrade);

// @@@@@@@@@@@@@@01:55
// let username = "Brocode";
// console.log(username.charAt(0));
// console.log(username.indexOf("o"));
// console.log(username.lastIndexOf("e"));
// console.log(username.length);
// username = username.trim();
// console.log(username);
// username = username.toUpperCase();
// console.log(username);
// username = username.toLocaleLowerCase();
// console.log(username);
// username = username.repeat(3);
// console.log(username);
// let result = username.startsWith(" ");
// console.log(result);
// if(result){
//     console.log("ur username can not begin with ' '");
// }
// else{
//     console.log(username);
// }
// let result = username.endsWith(" ");
// console.log(result);
// if(result){
//     console.log("ur username can not end with ' '");
// }
// else{
//     console.log(username);
// }
// let result = username.includes(" ");
// console.log(result);
// if(result){
//     console.log("ur username can not include ' '");
// }
// else{
//     console.log(username);
// }
// let phonenumber = "123-456-7890";
// phonenumber = phonenumber.replaceAll("-","/");
// console.log(phonenumber);
// let phonenumber = "123-456-7890";
// phonenumber = phonenumber.padStart(15, "0");
// console.log(phonenumber);
// let phonenumber = "123-456-7890";
// phonenumber = phonenumber.padEnd(15, "0");
// console.log(phonenumber);

// @@@@@@@@@@@@@02:03
// const fullname = "bro code";
// let firstname = fullname.slice(0, 3);
// let lastname = fullname.slice(4, 8);
// let firstchar = fullname.slice(0, 1);
// let lastchar = fullname.slice(-1);
// let firstname = fullname.slice(0, fullname.indexOf(" "));
// let lastname = fullname.slice(fullname.indexOf(" ")+1);
// console.log(firstname);
// console.log(lastname);
// console.log(firstchar);
// console.log(lastchar);
// const email = "bro1@gmail.com";
// let username = email.slice(0, email.indexOf("@"));
// let extention = email.slice(email.indexOf("@")+1);
// console.log(username);
// console.log(extention);

// @@@@@@@@@@@@@@02:11
// let username = window.prompt("enter ur username");
// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();
// let extrachars = username.slice(1);
// extrachars = extrachars.toLowerCase();
// username = letter + extrachars;
// console.log(username);
// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(username);

// @@@@@@@@@@@@@@@@02:17
// const temp = 20;
// if (temp > 0 && temp <= 30){
//     console.log("the weather is good");    
// }
// else {
//     console.log("the weather is bad");   
// }
// const issunny = true;
// if(!issunny){
//     console.log("it is cloudy");
// }
// else {
//     console.log("it is sunny");
// }
// @@@@@@@@@@02:22
// const pi = 3.14;
// if (pi == "3.14"){
//     console.log("this is pi");
// }
// else{
//     console.log("this is not pi");
// }

// @@@@@@@@@@@@02:26
// let username = "";
// do{
//     username = window.prompt(`enter ur name`);
// }    while(username === "" || username === null)
//     console.log(`hello ${username}`);
// let loggendin = false;
// let username;
// let password;
// while(!loggendin){
//     username = window.prompt(`enter ur username`);
//     password = window.prompt(`enter ur password`);
//     if(username ==="myusename" && password === "mypassword"){
//         loggendin = true;
//         console.log("ur loggendin");
//     }
//     else{
//         console.log("pls try again");
        
//     }
// }

// @@@@@@@@@@@02:34
// for(let i = 0; i<=2; i++){
//     console.log("hello");
    
// }
// for(let i = 1; i<=20 ; i++){
//     if(i == 13){
//         continue;
//     }
//     else {
//         console.log(i);
//     }
// }

// @@@@@@@@@@@02:40
// const minnum = 1;
// const maxnum = 100;
// const answer = Math.floor(Math.random() * (maxnum - minnum + 1)) + minnum;
// console.log(answer);
// let attempts = 0;
// let guess;
// let running = true;
// while(running){
//     guess = window.prompt(`guess a number between ${minnum} - ${maxnum}`);
//     guess = Number(guess);
//     if(isNaN(guess)){
//         window.alert("pls enter a valid number")
//     }
//     else if(guess < minnum || guess > maxnum){
//         window.alert("pls enter a vaild number")
//     }
//     else {
//         attempts++;
//         if(guess < answer){
//             window.alert("too low , try again");
//         }
//         else if(guess > answer){
//             window.alert("too high , try again");
//         }
//         else {
//             window.alert(`correct the answer was ${answer} , it took you ${attempts} attempts `);
//             running = false;
//         }
//     }
// }

// @@@@@@@@@@@@02:49
// function happybirthday(username , age){
//     console.log("happy birthday to you");
//     console.log("happy birthday to you");
//     console.log(`happy birthday dear ${username} `);
//     console.log("happy birthday to you");
//     console.log(`u r ${age} years old`);
// }
// happybirthday("brocode" , 25);
// happybirthday("spongebob" , 30);
// happybirthday("patrik" , 37);
// function add(x,y){
//     let result = x+y;
//     return result;
// }
// let answer = add(2,3);
// console.log(answer);
// function add(x,y){
//     return x+y;
// }
// function subtract(x,y){
//     return x-y;
// }
// function multiply(x,y){
//     return x*y;
// }
// function divide(x,y){
//     return x/y;
// }
// console.log(add(2,3));
// console.log(subtract(2,3));
// console.log(multiply(2,3));
// console.log(divide(2,3));
// function iseven(number){
//     return number % 2 ==0 ? true : false ;
// }
// console.log(iseven(10));
// function isvalidemail(email){
//     if(email.includes("@")){
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(isvalidemail("brocode@gmail.com"));
// console.log(isvalidemail("brocode+gmail.com"));
// function isvalidemail(email){
//     return email.includes("@") ? true : false;
// }
// console.log(isvalidemail("thesame@gmail.com"));
// console.log(isvalidemail("thesame+gmail.com"));

// @@@@@@@@@@@@@@03:01
// let x = 5;
// function function1(){
//     let x = 1;
//     console.log(x);
// }
// function function2(){
//     let x = 2;
//     console.log(x);
// }
// function function3(){
//     console.log(x);
// }
// function1();
// function2();
// function3();

// @@@@@@@@@@@@@03:07
// const textbox = document.getElementById("textbox");
// const tofahrenheit = document.getElementById("tofahrenheit");
// const tocelsius = document.getElementById("tocelsius");
// const result = document.getElementById("result");
// let temp;
// function convert(){
//     if(tofahrenheit.checked){
//         temp = Number(textbox.value);
//         temp = temp + 9 / 5 + 32;
//         result.textContent = temp.toFixed(1) + "F";
//     }
//     else if(tocelsius.checked){
//         temp = Number(textbox.value);
//         temp = (temp - 32)*(5/9);
//         result.textContent = temp.toFixed(1) + "C";
//         }
//     else{
//         result.textContent = "select a unit";
//     }
// }

// @@@@@@@@@@@@03:23
// let fruits = ["apple" , "orange", "banana" , "cocnout"];
// fruits.push("cocount");
// fruits.pop();
// fruits.unshift("mango");
// fruits.shift();
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// let numoffruit = fruits.length;
// let index = fruits.indexOf("apple");
// console.log(index);
// console.log(numoffruit);
// for(let i = 0; i < fruits.length ; i++){
//     console.log(fruits[i]);
//     }
// fruits.sort().reverse();
// for(let fruit of fruits){
//     console.log(fruit);
//     }

// @@@@@@@@@@@@@@03:31
// let numbers = [1,2,3,4,5];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);
// console.log(numbers);
// console.log(minimum);
// console.log(maximum);
// let username = "brocode";
// let letters = [...username].join("-");
// console.log(letters);
// let fruits = ["apple", "orange", "banana"];
// let vegetabels  = ["carrots" , "celery" , "potatos"];
// let food = [...fruits , ...vegetabels , "eggs" , "milk"];
// console.log(food);

// @@@@@@@@@@@@@@@03:36
// function openfridge(...foods){
//     console.log(foods);
// }
// function getfood(...foods){
//     return foods;
// }
// const food1 = "pizza";
// const food2 = "humburger";
// const food3 = "hotdog";
// const food4 = "sushi";
// const food5 = "ramen";
// openfridge(food1 , food2 , food3 , food4 , food5);
// const foods = getfood(food1 , food2 , food3 , food4 , food5);
// console.log(foods);
// function sum(...numbers){
//     result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result;
// }
// const total = sum(1,2,3,4,5);
// console.log(`ur total is $${total}`);
// function getaverage(...numbers){
//     result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result / numbers.length;
// }
// const total = getaverage(75 , 100 , 85 , 90 , 50);
// console.log(total);
// function combinestrings(...strings){
//     return strings.join(" ");
// }
// const fullname = combinestrings("mr.", "spongebob","squarepants","III");
// console.log(fullname);

// @@@@@@@@@@03:44
// function rolldice(){
//     const numofdice = document.getElementById("numofdice").value;
//     const diceresult = document.getElementById("diceresult");
//     const diceimages = document.getElementById("diceimage");
//     const values = [];
//     const images = [];
//     for(let i = 0 ; i < numofdice ; i++) {
//         const value = Math.floor(Math.random()*6) + 1;
//         values.push(value);
//         images.push(`<img src="imggg/${value}.jpg" alt="dice ${value}">`);
//     }    
//     diceresult.textContent = `dice ${values.join(', ')}`;
//     diceimages.innerHTML = images.join('');
// }

// @@@@@@@@@@@@03:58
// function generatepssword(length , includelowecase , includeuppercase , includenumbers , includesymbols){
//     const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
//     const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numberchars = "0123456789";
//     const symbolschars = "!@#$%^&*()_+-=";
//     let allowedchars = "";
//     let password = "";
//     allowedchars += includelowecase ? lowercasechars : "";   
//     allowedchars += includeuppercase ? uppercasechars : "";   
//     allowedchars += includenumbers ? numberchars : "";   
//     allowedchars += includesymbols ? symbolschars : ""; 
//     if(length <= 0){
//         return `(password lenrth must be at least 1)`
//     }
//     if(allowedchars.length === 0){
//         return `(at least 1 set of character need to be selected)`;
//     }
//     for (let i = 0; i < length ; i++){
//         const randomindex = Math.floor(Math.random() * allowedchars.length);
//         password += allowedchars[randomindex];
//     }
//     return password;
// }
// const passwordlength = 12;
// const includelowecase = true;
// const includeuppercase = true;
// const includenumbers = true;
// const includesymbols = true;
// const password = generatepssword(passwordlength,
//                                 includelowecase,
//                                 includeuppercase,
//                                 includenumbers,
//                                 includesymbols);
// console.log(`generated password : ${password}`);

// @@@@@@@@@@@@@@@04:10
// hello();
// goodbye();
// function hello(){
//     setTimeout(function(){
//         console.log("hello!");},3000);}
// function goodbye(){
//     console.log("goodbye");}
// hello(wait);
// function hello(callback){
//     console.log("hello");
//     callback();
// }
// function wait(){
//     console.log("wait");
// }
// function leave(){
//     console.log("leave");
// }
// function goodbey(){
//     console.log("goodbey");
// }
// sum(displaypage , 1 ,2);
// sum(displayconsole , 1 ,2);
// function sum(callback, x , y){
//     let result = x + y;
//     callback(result);
// }
// function displayconsole(result){
//     console.log(result);
// }
// function displaypage(result){
//     document.getElementById("myh1").textContent = result;
// }

// @@@@@@@@@@@@@@04:18
// let numbers = [1, 2 , 3 , 4 , 5];
// numbers.forEach(cube);
// numbers.forEach(display);
// function double(element , index , array){
//     array[index] = element * 2;
// }
// function triple(element , index , array){
//     array[index] = element * 3;
// }
// function square(element , index , array){
//     array[index]=Math.pow(element , 2);
// }
// function cube(element , index , array){
//     array[index]=Math.pow(element , 3);
// }
// function display(element){
//     console.log(element);
// }
// let fruits = ["apple" , "orange" , "banana" , "cocount"];
// fruits.forEach(capitalize);
// fruits.forEach(display);
// function upperCase(element , index , array){
//     array[index] = element.toUpperCase();
// }
// function capitalize(element , index , array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }
// function display(element){
//     console.log(element);
// }

// @@@@@@@@@@@@@@@04:26
// const numbers = [1,2,3,4,5];
// const squares = numbers.map(square);
// const cubes = numbers.map(cube);
// console.log(squares);
// console.log(cubes);
// function square(element){
//     return Math.pow(element , 2);}
// function cube(element){
//     return Math.pow(element , 3);}
// const students = ["SB" , "pK" , "Sw" , "sa"];
// const studentuppercase = students.map(upperCase);
// const studentlowercase = students.map(lowerCase);
// console.log(studentuppercase);
// console.log(studentlowercase);
// function upperCase(element){
//     return element.toUpperCase();}
// function lowerCase(element){
//     return element.toLowerCase();}
// const dates = ["2024-1-10" , "2025-2-20" , "2026-3-30"];
// const formattedDates = dates.map(formatDates);
// console.log(formattedDates);
// function formatDates(element){
//     const parts = element.split("-");
//     return `${parts[1]}/${parts[2]}/${parts[0]}`;}

// @@@@@@@@@@@@04:33
// let numbers = [1,2,3,4,5,6,7];
// let evenNums = numbers.filter(isEven);
// let oddNums = numbers.filter(isOdd);
// console.log(evenNums);
// console.log(oddNums);
// function isEven(element){
//     return element % 2 ===  0 ;}
// function isOdd(element){
//     return element % 2 !== 0 ;}
// const ages = [16,17,18,19,20,60];
// const adults = ages.filter(isAdult);
// const childs = ages.filter(isChild);
// console.log(adults);
// console.log(childs);
// function isAdult(element){
//     return element >= 18;}
//     function isChild(element){
//         return element < 18;}
// const words = ["apple","orange","banana","kiwi","pomegranate","coconut"];
// const shortwords = words.filter(getShortWords);
// const longwords = words.filter(getLongWords);
// console.log(shortwords);
// console.log(longwords);
// function getShortWords(element){
//     return element.length <= 6;}
// function getLongWords(element){
//     return element.length > 6;}

// @@@@@@@@@@@@04:39
// const prices= [5,30,10,25,15,20];
// const total = prices.reduce(sum);
// console.log(`$${total.toFixed(2)}`);
// function sum(accumulator, element){
//     return accumulator + element;}
// const grades = [75,50,90,80,65,95];
// const maximum = grades.reduce(getMax);
// const minimum = grades.reduce(getmin);
// console.log(maximum);
// console.log(minimum);
// function getMax(accumulator, element){
//     return Math.max(accumulator, element);}
// function getmin(accumulator, element){
//     return Math.min(accumulator, element);}

// @@@@@@@@@@@@@@@@04:45
// const hello = function(){
//     console.log("hello");
// }
// hello();
// const numbers = [1,2,3,4,5,6];
// const squares = numbers.map(square);
// console.log(squares);
// function square(element){
//     return Math.pow(element,2);
// }
// const numbers = [1,2,3,4,5,6];
// const squares = numbers.map(function(element){
//     return Math.pow(element,2);
// });
// console.log(squares);
// const cubes = numbers.map(function(element){
//     return Math.pow(element,3);
// });
// console.log(cubes);
// const evenNums = numbers.filter(function(element){
//     return element % 2 == 0 ;});
// console.log(evenNums);
// const oddNums = numbers.filter(function(element){
//     return element % 2 !== 0 ;});
// console.log(oddNums);
// const total = numbers.reduce(function(accumulator,element){
//     return accumulator + element;});
// console.log(total);

// @@@@@@@@@@@@04:52
// const hello = (name , age) => {console.log(`hello ${name}`)
//                                 console.log(`you are ${age} years old`)};
// hello("bro" , 25);
// setTimeout(function(){
//     console.log("hello");},3000);
// setTimeout( ()=>console.log("hello"),3000);
// const numbers = [1,2,3,4,5,6];
// const squares = numbers.map((element)=>Math.pow(element,2));
// const cubes = numbers.map((element)=>Math.pow(element,3));
// const evenNums = numbers.filter((element)=> element % 2 == 0 );
// const oddNums = numbers.filter((element)=> element % 2 !== 0 );
// const total = numbers.reduce((accumulator,element)=> accumulator + element);
// console.log(squares);
// console.log(cubes);
// console.log(evenNums);
// console.log(oddNums);
// console.log(total);

// @@@@@@@@@@@@@05:00
// const person1 = {
//     firstname: "sb",
//     lastname: "sp",
//     age: 30,
//     isEmployed: true,
//     sayHello: function(){console.log("hi iam sb")},
//     eat: function(){console.log("iam eating a lalala")},}
// const person2 = {
//     firstname: "pat",
//     lastname: "str",
//     age: 42,
//     isEmployed: true,
//     sayHello: ()=> console.log("hi iam pat"),
//     eat: () => console.log("iam eating any"),}
// person1.eat();
// person2.eat();

// @@@@@@@@@@@@05:07
// const person1 = {
//     name: "sp",
//     favfood: "humbergers",
//     sayhello: function(){console.log(`hi iam ${this.name}`)},
//     eat: function(){console.log(`${person1.name} is eating ${this.favfood}`)}
// }
// const person2 = {
//     name: "pat",
//     favfood: "pizza",
//     sayhello: ()=>{console.log(`hi iam ${this.name}`)},
//     eat: function(){console.log(`${person2.name} is eating ${this.favfood}`)}
// }
// person1.sayhello();
// person2.sayhello();
// person1.eat();
// person2.eat();

// @@@@@@@@@@@@05:12
// function Car(a, b, c, d){
//     this.make = a,
//     this.model = b,
//     this.year = c,
//     this.color = d,
//     this.drive = function(){console.log(`you drive the ${this.model}`)}
// }
// const car1 = new Car("ford","mustang",2024,"red");
// const car2 = new Car("choverlet","camaro",2025,"blue");
// const car3 = new Car("dodge","charger",2026,"silver");
// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);
// console.log(car2.make);
// console.log(car2.model);
// console.log(car2.year);
// console.log(car2.color);
// console.log(car3.make);
// console.log(car3.model);
// console.log(car3.year);
// console.log(car3.color);
// car1.drive();
// car2.drive();
// car3.drive();

// @@@@@@@@@@@@@@@@05:17
// class Product{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }
//     displayProduct(){
//         console.log(`product: ${this.name}`);
//         console.log(`price: $${this.price.toFixed(2)}`);
//     }
//     calculateTotal(saleTax){
//         return this.price + (this.price * saleTax);
//     }
// }
// const saleTax = 0.05;
// const product1 = new Product("shirt", 19.99);
// const product2 = new Product("pants", 22.50);
// const product3 = new Product("underwear", 100.00);
// product1.displayProduct();
// product2.displayProduct();
// product3.displayProduct();
// const total1 = product1.calculateTotal(saleTax);
// console.log(`total price (with tax): ${total1.toFixed(2)}`);
// const total2 = product2.calculateTotal(saleTax);
// console.log(`total price (with tax): ${total2.toFixed(2)}`);
// const total3 = product3.calculateTotal(saleTax);
// console.log(`total price (with tax): ${total3.toFixed(2)}`);

// @@@@@@@@@@@@05:23
// class MathUtil{
//     static PI = 3.14159;
//     static getDiameter(radius){
//         return radius * 2;
//     }
//     static getcircumference(radius){
//         return 2 * this.PI * radius;
//     }
//     static getArea(radius){
//         return this.PI * radius * radius;
//     }
// }
// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getcircumference(10));
// console.log(MathUtil.getArea(10));
// class User{
//     static userCount = 0;
//     constructor(username){
//         this.username = username ;
//         User.userCount++;
//     }
//     static getUserCount(){
//         console.log(`there are ${this.userCount} users online`);
//     }
//     sayhello(){
//         console.log();
//         console.log(`hello , my username is ${this.username}`);
//     }
// }
// const user1 = new User("spongebob");
// const user2 = new User("patrick");
// const user3 = new User("sandy");
// console.log(user1.username);
// console.log(user2.username);
// console.log(user3.username);
// console.log(User.userCount);
// user1.sayhello();
// user2.sayhello();
// user3.sayhello();
// User.getUserCount();

// @@@@@@@@@@@@@05:31
// class Animal {
//     alive = true;
//     eat(){
//         console.log(`this ${this.name} is eating`);
//     }
//     sleep(){
//         console.log(`this ${this.name} is sleeping`);
//     }
// }
// class Rabbit extends Animal{
//     name = "rabbit";
//     run(){
//         console.log(`this ${this.name} is running`);
//     }
// }
// class Fish extends Animal{
//     name = "fish";
//     swim(){
//         console.log(`this ${this.name} is swimming`);
//     }
// }
// class Hawk extends Animal{
//     name = "hawk";
//     fly(){
//         console.log(`this ${this.name} is flying`);
//     }
// }
// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();
// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.sleep();
// rabbit.run();
// console.log(fish.alive);
// fish.eat();
// fish.sleep();
// fish.swim();
// hawk.alive = false;
// console.log(hawk.alive);
// hawk.eat();
// hawk.sleep();
// hawk.fly();

// @@@@@@@@@@@@@05:38
// class Animal{
//     constructor(name , age){
//     this.name = name;
//     this.age = age;
//     }
//     move(speed){
//         console.log(`the ${this.name} moves at a speed of ${speed}km`);
//     }
// }
// class Rabbit extends Animal{
//     constructor(name , age , runspeed){
//     super(name , age);
//     this.runspeed = runspeed;
//     }
//     run(){
//         console.log(`this ${this.name} can run`);
//         super.move(this.runspeed);
//     }
// }
// class Fish extends Animal{
//     constructor(name , age , swimspeed){
//     super(name , age);
//     this.swimspeed = swimspeed;
//     }
//     swim(){
//     console.log(`this ${this.name} can swim`);
//     super.move(this.swimspeed);
//     }
// }
// class Hawk extends Animal{
//     constructor(name , age , flyspeed){
//     super(name , age);
//     this.flyspeed = flyspeed;
//     }
//     fly(){
//     console.log(`this ${this.name} can fly`);
//     super.move(this.flyspeed);
//     }
// }
// const rabbit = new Rabbit("rabbit" , 1 , 25);
// const fish = new Fish("fish" , 2 , 12);
// const hawk = new Hawk("hawk" , 3 , 50);
// console.log(rabbit.name);
// console.log(rabbit.age);
// console.log(rabbit.runspeed);
// console.log(fish.name);
// console.log(fish.age);
// console.log(fish.swimspeed);
// console.log(hawk.name);
// console.log(hawk.age);
// console.log(hawk.flyspeed);
// rabbit.run();
// fish.swim();
// hawk.fly();

// @@@@@@@@@@@@05:48
// class Rectangle{
//     constructor(width , heigth){
//         this.width = width;
//         this.heigth = heigth;
//     }
//     set width(newwidth){
//         if(newwidth > 0){
//             this._width = newwidth;
//         }
//         else{
//             console.error("width must be a positive number");
//         }
//     }
//     set heigth(newheigth){
//         if(newheigth > 0){
//             this._heigth = newheigth;
//         }
//         else{
//             console.error("heigth must be a positive number");
//         }
//     }
//     get width(){
//         return `${this._width.toFixed(1)}cm`;
//     }
//     get heigth(){
//         return `${this._heigth.toFixed(1)}cm`;
//     }
//     get area(){
//         return `${(this._width * this._heigth).toFixed(1)}cm`;
//     }
// }
// const rectangle = new Rectangle(3 , 4);
// console.log(rectangle.width);
// console.log(rectangle.heigth);
// console.log(rectangle.area);
// class Person{
//     constructor(firstname , lastname , age){
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.age = age;
//     }
//     set firstname(newfirstname){
//         if (typeof newfirstname === "string" && newfirstname.length > 0){
//             this._firstname = newfirstname;
//         }
//         else{
//             console.error("first name must be a non-empty string");
//         }
//     }
//     set lastname(newlastname){
//         if (typeof newlastname === "string" && newlastname.length > 0){
//             this._lastname = newlastname;
//         }
//         else{
//             console.error("last name must be a non-empty string");
//         }
//     }
//     set age(newage){
//         if(typeof newage === "number" && newage >= 0){
//             this._age = newage ;
//         }
//         else{
//             console.log("age must be a non-negative number");
//         }
//     }
//     get firstname(){
//         return this._firstname;
//     }
//     get lastname(){
//         return this._lastname;
//     }
//     get fullname(){
//         return this._firstname +" "+ this._lastname;
//     }
//     get age(){
//         return this._age;
//     }
// }
// const person = new Person("good" , "man" , 30);
// console.log(person.firstname);
// console.log(person.lastname);
// console.log(person.fullname);
// console.log(person.age);

// @@@@@@@@@@@@@@@06:01
// let a = 1;
// let b =2;
// [a,b] = [b,a];
// console.log(a);
// console.log(b);
// const colors = ["red","green","blue","black","white"];
// [colors[0],colors[4]]=[colors[4],colors[0]];
// console.log(colors);
// const [firstcolor,secondcolor,thirdcolor,...extracolors] = colors;
// console.log(firstcolor);
// console.log(secondcolor);
// console.log(thirdcolor);
// console.log(extracolors);
// function displayperson({firstname,lastname,age,job="unemployed"}){
//     console.log(`name : ${firstname} ${lastname}`);
//     console.log(`age : ${age}`);
//     console.log(`job : ${job}`);
// }
// const person1 ={
//     firstname : "sb",
//     lastname : "sp",
//     age : 30,
//     job: "fry cook",
// }
// const person2 ={
//     firstname : "pat",
//     lastname : "pre",
//     age : 40,
// }
// const{firstname,lastname,age,job="unemployed"} = person2;
// console.log(firstname);
// console.log(lastname);
// console.log(age);
// console.log(job);
// displayperson(person1);
// displayperson(person2);

// @@@@@@@@@@@@@06:10
// const person = {
//     fullname: "spg bob",
//     age :30,
//     isstudent : true,
//     hobbies: ["karate" , "jelly" , "cooking"],
//     address:{
//         street:"124 conch st.",
//         city:"bikini",
//         country:"int. water"
//     }
// }
// console.log(person.fullname);
// console.log(person.age);
// console.log(person.isstudent);
// console.log(person.hobbies[2]);
// console.log(person.address.country);
// for(const property in person.address){
//     console.log(person.address[property]);
// }
// class Person {
//     constructor(name , age , ...address){
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);
//     }
// }
// class Address {
//     constructor(street , city , country){
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }
// const person1 = new Person("spongebob" , 30,"124 conch st.",
//                                             "bikini bottom",
//                                             "int. waters");
// const person2 = new Person("patrick" , 37,"128 conch st.",
//                                             "bikini bottom",
//                                             "int. waters");
// const person3 = new Person("squid" , 45,"126 conch st.",
//                                             "bikini bottom",
//                                             "int. waters");
// console.log(person1.name);
// console.log(person1.age);
// console.log(person1.address.street);
// console.log(person1.address.city);
// console.log(person1.address.country);
// console.log(person3.name);
// console.log(person3.age);
// console.log(person3.address.street);
// console.log(person3.address.city);
// console.log(person3.address.country);

// @@@@@@@@@@@@@06:19
// const fruits = [{name:"apple" , color:"red", calories:95},
//                 {name:"orage" , color:"orange", calories:45},
//                 {name:"banana" , color:"yellow", calories:105},
//                 {name:"cocnout" , color:"white", calories:159},
//                 {name:"pineapple" , color:"yellow", calories:37}];
// console.log(fruits[0].name);
// console.log(fruits[1].color);
// console.log(fruits[2].calories);
// fruits.push({name:"grapes" , color:"purple" , calories:62});
// fruits.pop();
// fruits.splice(1,2);
// console.log(fruits);
// fruits.forEach(fruit => console.log(fruit.name));
// fruits.forEach(fruit => console.log(fruit.color));
// const fruitnames = fruits.map(fruit => fruit.name);
// const fruitcolors = fruits.map(fruit => fruit.color);
// const fruitcalories = fruits.map(fruit => fruit.calories);
// console.log(fruitnames);
// console.log(fruitcolors);
// console.log(fruitcalories);
// const yellowfruits = fruits.filter(fruit => fruit.color === "yellow");
// const lowcalfruits = fruits.filter(fruit => fruit.calories < 100);
// console.log(yellowfruits);
// console.log(lowcalfruits);
// const maxfruit = fruits.reduce( (max , fruit)=>
//                                 fruit.calories > max.calories ?
//                                 fruit : max);
// console.log(maxfruit.calories);

// @@@@@@@@@@@@@06:29
// let numbers = [1,10,2,9,3,8,4,7,5,6];
// numbers.sort((a,b)=>a - b);
// console.log(numbers);
// const people = [{name:"spongebob" , age:30 , gpa:3.0},
//                 {name:"patrick" , age:37 , gpa:1.5},
//                 {name:"squidward" , age:51 , gpa:25},
//                 {name:"sandy" , age:27 , gpa:4.0}];
// people.sort((a,b)=>a.age - b.age);
// console.log(people);
// people.sort((a,b)=>a.name.localeCompare(b.name));
// console.log(people);

// @@@@@@@@@@@@@06:36
// const cards = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];
// shuffle(cards);
// console.log(cards);
// function shuffle(array){
//     for(let i = array.length - 1 ; i>0 ; i--){
//         const random = Math.floor(Math.random() * (i+1));
//         [array[i], array[random]] = [array[random], array[i]];
//     }
// }

// @@@@@@@@@@@@@06:40
// const date = new Date(2024,0,1,2,3,4,5);
// const date = new Date("2024-01-02T12:00:00Z");
// const date = new Date(0);
// const date = new Date(1700000000000);
// console.log(date);
// const date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();
// const dayofweek = date.getDay();
// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minutes);
// console.log(seconds);
// console.log(dayofweek);
// date.setFullYear(2024);
// date.setMonth(0);
// date.setDate(1);
// date.setHours(2);
// console.log(date);
// const date1 = new Date("2023-12-31");
// const date2 = new Date("2024-01-01");
// if(date2 > date1){
//     console.log("happy new year");
// }

// @@@@@@@@@@@@@@06:48
// function outer(){
//     let message = "hello";
//     function inner(){
//         console.log(message);
//     }
//     inner();
// }
// message = "goodbey";
// outer();
// function increament(){
//     let count =0;
//     count++;
//     console.log(`count increased to ${count}`);
// }
// increament();
// increament();
// function createcounter(){
//     let count =0;
// count = 1000000;
// function increament(){
//     count++;
//     console.log(`count increased to ${count}`);
// }
// function getcount(){
//     return count;
// }
// return{increament , getcount};
// }
// const counter = createcounter();
// counter.increament();
// counter.increament();
// console.log(`the current count is ${counter.getcount()}`);
// function creategame(){
// let score = 0;
// function increasescore(points){
//     score += points;
//     console.log(`+${points}pts`);
// }
// function decreasescore(points){
//     score -= points;
//     console.log(`-${points}pts`);
// }
// function getscore(){
//     return score;
// }
// return {increasescore , decreasescore , getscore};
// }
// const gane = creategame();
// game.increasescore(5);
// game.increasescore(6);
// game.decreasescore(3);
// console.log(`the final score is ${game.getscore()}pts`);

// @@@@@@@@@@@@@@@@06:59
// function sayhello(){
//     window.alert("hello");
// }
// setTimeout(sayhello , 3000);
// setTimeout(function(){window.alert("hello")} , 3000);
// const timeoutid = setTimeout(() => window.alert("hello"),3000);
// clearTimeout(timeoutid);
// let timeoutid;
// function startTimer(){
//     timeoutid = setTimeout(()=> window.alert("hello") , 3000);
//     console.log("started");
    
// }
// function cleartimer(){
//     clearTimeout(timeoutid);
//     console.log("cleared");
    
// }

// @@@@@@@@@@@07:05
// function updateClock(){
//     const now = new Date();
//     let hours = now.getHours();
//     const meridiem = hours >= 12 ? "pm" : "am";
//     hours = hours % 12 || 12 ;
//     hours = hours.toString().padStart(2,0);
//     const minutes= now.getMinutes().toString().padStart(2,0);
//     const seconds = now.getSeconds().toString().padStart(2,0);
//     const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
//     document.getElementById("clock").textContent = timeString;
// }
// updateClock();
// setInterval(updateClock , 1000);

// @@@@@@@@@@@@07:16
// const display = document.getElementById("display");
// let timer = null;
// let starttime = 0;
// let elapsedtime = 0;
// let isRunning = false;
// function start(){
//     if(!isRunning){
//         starttime = Date.now() - elapsedtime;
//         timer = setInterval(update , 10);
//         isRunning =true;
//     }
// }
// function stop(){
//     if(isRunning){
//         clearInterval(timer);
//         elapsedtime = Date.now() - starttime;
//         isRunning = false;
//     }
// }
// function reset(){
//     clearInterval(timer);
//     starttime = 0;
//     elapsedtime = 0;
//     isRunning = false;
//     display.textContent = "00:00:00:00";
// }
// function update(){
//     const currentTime = Date.now();
//     elapsedtime = currentTime - starttime;
//     let hours = Math.floor(elapsedtime / (1000 * 60 * 60));
//     let minutes= Math.floor(elapsedtime / (1000 * 60) % 60);
//     let seconds = Math.floor(elapsedtime / 1000 % 60);
//     let millisecond = Math.floor(elapsedtime % 100 / 10);
//     hours = String(hours).padStart(2,"0");
//     minutes = String(minutes).padStart(2,"0");
//     seconds = String(seconds).padStart(2,"0");
//     millisecond = String(millisecond).padStart(2,"0");
//     display.textContent = `${hours}:${minutes}:${seconds}:${millisecond}`;
// }

// @@@@@@@@@@@@@@@07:34
// import {PI , getcircumference , getArea , getVolume} from './mathUtil.js';
// console.log(PI);
// const circumference = getcircumference(10);
// const area = getArea(10);
// const volume = getVolume(10);
// console.log(`${circumference.toFixed(2)}cm`);
// console.log(`${area.toFixed(2)}cm^2`);
// console.log(`${volume.toFixed(2)}cm^3`);


// @@@@@@@@@@@@07:40
// function func1(callback){
//     setTimeout(()=> {console.log("task1");
//                     callback()},3000);
// }
// function func2(){
// console.log("task2");
// console.log("task3");
// console.log("task4");
// }
// func1(func2);

// @@@@@@@@@@@@@@07:45
// try {
//     console.log("hello");
// }
// catch(error){
//     console.log(error);
// }
// finally{
//     console.log("this always excutes");
// }
// console.log("you have rached the end!");
// try {
// const dividend = Number(window.prompt("enter a dividend  :"));
// const divisor = Number(window.prompt("enter a divisor  :"));
// if(divisor == 0){
//     throw new Error("you cannot divide by zero!")
// }
// if(isNaN(dividend) || isNaN(divisor)){
//     throw new Error("values must be a number");
// }
// const result = dividend / divisor;
// console.log(result);
// }
// catch(error){
//     console.error(error);
// }
// console.log("you have rached the end!");

// @@@@@@@@@@@@07:54
// const display = document.getElementById("display");
// function appendToDisplay(input){
//     display.value += input;
// }
// function clearDisplay(){
//     display.value = "";
// }
// function calculate(){
//     try{
//         display.value  = eval(display.value);
//     }
//     catch(error){
//         display.value = "error";
//     }
// }

// @@@@@@@@@@@@@@08:09
// document.title = "my website";
// document.body.style.backgroundColor = "black";
// console.dir(document);
// const username = "";
// const welcomeMsg = document.getElementById("welcome-msg");
// welcomeMsg.textContent += username === "" ? `guest ` : username;

// @@@@@@@@@@@@08:14
// const myHeading = document.getElementById("my-heading");
// myHeading.style.backgroundColor = "yellow";
// myHeading.style.textAlign = "center";
// console.log(myHeading);
// const fruits = document.getElementsByClassName("fruits");
// fruits[0].style.backgroundColor = "yellow";
// fruits[1].style.backgroundColor = "orange";
// for(let fruit of fruits){
//     fruit.style.backgroundColor = "yellow";
// }
// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "yellow";
// });
// console.log(fruits);
// const h4elements = document.getElementsByTagName("h4");
// const lielements = document.getElementsByTagName("li")
// h4elements[0].style.backgroundColor = "yellow";
// for(let h4element of h4elements) {
//     h4element.style.backgroundColor = "yellow";
// }
// for(let lielement of lielements){
//     lielement.style.backgroundColor = "lightgreen";
// }
// Array.from(h4elements).forEach(h4element =>{
//     h4element.style.backgroundColor = "yellow";
// });
// Array.from(lielements).forEach(lielement =>{
//     lielement.style.backgroundColor = "lightgreen";
// });
// const element = document.querySelector(".fruits");
// element.style.backgroundColor = "yellow";
// const foods = document.querySelectorAll("li");
// foods[3].style.backgroundColor = "yellow";
// console.log(foods);
// foods.forEach(food =>{
//     food.style.backgroundColor = "yellow";
// });

// @@@@@@@@@@@@@08:32
// const element = document.getElementById("vegetabels");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";
// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach(ulElement => {
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.backgroundColor = "yellow";
// });
// const element = document.getElementById("fruits");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "yellow";
// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach(ulElement => {
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = "yellow";
// });
// const element = document.getElementById("pie");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow";
// const ele = document.getElementById("pie");
// const previousSibling = ele.previousElementSibling;
// previousSibling.style.backgroundColor = "green";
// const element = document.getElementById("carrots");
// const parent = element.parentElement;
// parent.style.backgroundColor = "yellow";
// const element = document.getElementById("vegetabels");
// const children = element.children;
// Array.from(children).forEach(child =>{
//     child.style.backgroundColor = "yellow";
// });
// children[1].style.backgroundColor = "yellow";

// @@@@@@@@@@@@08:47
// const newH1 = document.createElement("h1");
// newH1.textContent = "I like pizza";
// newH1.id="myH1";
// newH1.style.color = "tomato";
// newH1.style.textAlign = "center";
// document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById("box1").append(newH1);
// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1 , box2);
// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1 , boxes[1]);
// document.getElementById("box1").removeChild(newH1);
// const newListItem = document.createElement("li");
// newListItem.textContent = "cocnout";
// newListItem.id = "cocnout";
// newListItem.style.fontWeight = "bold";
// newListItem.style.backgroundColor = "lightgreen";
// document.body.append(newListItem);
// document.body.prepend(newListItem);
// document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").prepend(newListItem);
// const orange = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem , orange);
// const listItems = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem , listItems[0]);

// @@@@@@@@@@@@@@@@@09:03
// const myBox = document.getElementById("myBox");
// const myBotton = document.getElementById("myBotton");
// function changeColor(event){
//     console.log(event);
//     event.target.style.backgroundColor = "red";
//     event.target.textContent = "ouch! 😒";
// }
// myBox.addEventListener("click" , cangeColor)
// myBox.addEventListener("click" , function(event){
//     event.target.style.backgroundColor = "red";
//     event.target.textContent = "ouch! 😒";
// });
// myBotton.addEventListener("click" , event =>{
//     myBox.style.backgroundColor = "red";
//     myBox.textContent = "ouch! 😒";
// });
// myBotton.addEventListener("mouseover" , event => {
//     myBox.style.backgroundColor = "yellow";
//     myBox.textContent = "donot do it 🫥";
// });
// myBotton.addEventListener("mouseout" , event => {
//     myBox.style.backgroundColor = "lightgreen";
//     myBox.textContent = "Click me 😁";
// });

// @@@@@@@@@@@@09:13
// const myBox = document.getElementById("myBox");
// document.addEventListener("keydown" , event =>{
//     myBox.textContent = "🫥";
//     myBox.style.backgroundColor = "tomato";
//     console.log(`key down = ${event.key}`);
// });
// document.addEventListener("keyup" , event =>{
//     myBox.textContent = "😍";
//     myBox.style.backgroundColor = "lightblue";
//     console.log(`key up = ${event.key}`);
// });
// const moveAmount = 10;
// let x = 0;
// let y = 0;
// document.addEventListener("keydown" , event =>{
//     myBox.textContent = "🫥";
//     myBox.style.backgroundColor = "tomato";
// });
// document.addEventListener("keyup" , event =>{
//     myBox.textContent = "😍";
//     myBox.style.backgroundColor = "lightblue";
// });
// document.addEventListener("keydown" , event => {
//     if(event.key.startsWith("Arrow")){
//         event.preventDefault();
//         switch(event.key){
//             case "ArrowUp":
//                 y -= moveAmount;
//                 break;
//             case "ArrowDown":
//                 y += moveAmount;
//                 break;
//             case "ArrowLeft":
//                 x -= moveAmount;
//                 break;
//             case "ArrowRight":
//                 x += moveAmount;
//                 break;
//         }
//         myBox.style.top = `${y}px`;
//         myBox.style.left = `${x}px`;
//     }
// });

// @@@@@@@@@@@@@09:24
// const myButton = document.getElementById("myButton");
// const myImg = document.getElementById("myImg");
// myButton.addEventListener("click" , event => {
//     if(myImg.style.visibility === "hidden"){
//         myImg.style.visibility = "visible";
//         myButton.textContent = "hide";
//     }
//     else {
//         myImg.style.visibility = "hidden";
//         myButton.textContent = "show";
//     }
// });

// @@@@@@@@@@@09:30
// let buttons = document.querySelectorAll(".myButtons");
// buttons.forEach(button =>{
//     button.style.backgroundColor = "green";
//     button.textContent += "😁";
// });
// buttons.forEach(button =>{
//     button.addEventListener("click" , event =>{
//         event.target.style.backgroundColor = "tomato";
//     });
// });
// buttons.forEach(button =>{
//     button.addEventListener("mouseover" , event =>{
//         event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
//     });
// });
// buttons.forEach(button =>{
//     button.addEventListener("mouseout" , event =>{
//         event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
//     });
// });
// const newButton = document.createElement("button");
// newButton.textContent = "Button 5";
// newButton.classList = "myButtons";
// document.body.appendChild(newButton);
// buttons = document.querySelectorAll(".myButtons");
// console.log(buttons);
// buttons.forEach(button =>{
//     button.addEventListener("click" , event =>{
//         event.target.remove();
//         buttons = document.querySelectorAll(".myButtons");
//     });
// });

// @@@@@@@@@@@@@09:43
// const myButton = document.getElementById("myButton");
// myButton.classList.add("enabled");
// myButton.classList.remove("enabled");
// myButton.addEventListener("mouseover", event => {
//     event.target.classList.add("hover");
// });
// myButton.addEventListener("mouseout" , event => {
//     event.target.classList.remove("hover");
// });
// myButton.addEventListener("mouseover", event => {
//     event.target.classList.toggle("hover");
// });
// myButton.addEventListener("mouseout" , event => {
//     event.target.classList.toggle("hover");
// });
// myButton.classList.add("enabled");
// myButton.addEventListener("click" , event =>{
//     event.target.classList.replace("enabled" , "disabled");
// });
// const myH1 = document.getElementById("myH1");
// myH1.classList.add("enabled");
// myButton.classList.add("enabled");
// myButton.addEventListener("click" , event =>{
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "🤬"

//     }
//     else {
//     event.target.classList.replace("enabled" , "disabled");
//     }
// });
// myH1.classList.add("enabled");
// myH1.addEventListener("click" , event =>{
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "🤬"

//     }
//     else {
//     event.target.classList.replace("enabled" , "disabled");
//     }
// });
// let buttons = document.querySelectorAll(".myButtons");
// buttons.forEach(button =>{
//     button.classList.add("enabled");
// });
// buttons.forEach(button =>{
//     button.addEventListener("mouseover" , event =>{
//         event.target.classList.toggle("hover");
//     });
// });
// buttons.forEach(button =>{
//     button.addEventListener("mouseout" , event =>{
//         event.target.classList.toggle("hover");
//     });
// });
// buttons.forEach(button =>{
//     button.addEventListener("click" , event =>{
//         if(event.target.classList.contains("disabled")){
//             event.target.textContent += "🤬";
//         }
//         else{
//                     event.target.classList.replace("enabled" , "disabled");
//         }
//     });
// });

// @@@@@@@@@@@09:59
// const slides = document.querySelectorAll(".slides img");
// let slideIndex = 0;
// let intervaId = null;
// initializeSlider();
// document.addEventListener("DOMContentLoaded" , initializeSlider)
// function initializeSlider(){
//     if(slides.length > 0){
//             slides[slideIndex].classList.add("displaySlide");
//     intervalId = setInterval(nextSlide , 5000);
//     }
// }
// function showSlide(index){
//     if(index >= slides.length){
//         slideIndex = 0;
//     }
//     else if(index < 0){
//         slideIndex = slides.length - 1;
//     }
//     slides.forEach(slide => {
//         slide.classList.remove("displaySlide");
//     });
//     slides[slideIndex].classList.add("displaySlide");
// }
// function prevSlide(){
//     clearInterval(intervalId);
//     slideIndex--;
//     showSlide(slideIndex);
// }
// function nextSlide(){
//     slideIndex++;
//     showSlide(slideIndex);
// }

// @@@@@@@@@@@@@@@@10:34
function task1(){
    setTimeout(() =>{
        console.log("task 1 complete");
    },2000);
    console.log("task 1 complete");
}
function task2(){
    console.log("task 2 complete");
}
function task3(){
    console.log("task 3 complete");
}
function task4(){
    console.log("task 4complete");    
}
task1();
task2();
task3();
task4();
console.log("all tasks    comlete");