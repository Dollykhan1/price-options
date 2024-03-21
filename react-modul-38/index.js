// Welcome To Dolly website 

// Big Dream
// —---------------------
// Assignment 4 javascript
//1


function calculateMoney(ticketSale){
    let totalTicketSale = ticketSale;
    let result =(totalTicketSale*120)-(500+(8*50));
    if(result>0){
         return result;
         }
    else{
         return  "Negative";
         }
     }
console.log(calculateMoney(5));




function checkName(name){
        if(typeof name !=="string"){
            return "invalid"
        }
        else{
            const lastCharecter = ['a','y','i','e','o','u','w'];
        if(lastCharecter.includes(name.slice(-1).toLocaleLowerCase)){
                return"Good Name"
            }
        else{
                return"Bad Name"
            }
        }
}
console.log(checkName('Salman'));
   








   
function deleteInvalids(Array){
    let txt=[];
    for (let x in Array){
        if(typeof Array[x]=="number" && Array[x]!="NaN"){
            txt.push(Array)[x];
            }
    }
        return"my result Invalid Array";
    }
const Array = [1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
console.log(deleteInvalids(Array));
ob
function password (Obj){
        const getObj = Obj;
   
        const userName = getObj.name;
        const birthyear = getObj.birthyear;
        const siteName = getObj.siteName;
   
        const password = siteName+'#'+userName+'@'+birthyear;
   
        return password;
    }
  
     let myObject = {name: "kalimuddin", birthyear: 1999, siteName: "Google"};
console.log(password(myObject));


function monthlySavings(arr,livingCost){
    let totalIncome = 0;
    for(const salary of arr){
        totalIncome += salary;
        if(salary>=3000){
            const tax =salary * 20/100;
            console.log(tax)
            const totalCost = tax+livingCost;
            totalIncome -= totalCost;
        }
    }
    if(totalIncome <=0) {
        return"earn more";
       
    } else {
        return totalIncome;
    }
}
const earnMore = monthlySavings([1000,2000,2500,],5000)
console.log('earn more',earnMore)
   



—----------------------------

//###### problem 01 ######
function calculateMoney(ticketSale){
	let totalTicketSale = ticketSale;
    let result = (totalTicketSale*120)-(500+(8*50));
    
    if(result > 0){
    	return result;
    }else{
    	return "Negative";
    }
}
//console.log(calculateMoney(5));


//###### problem 02 ######
const vowels = ["a", "e", "i", "o", "u"]

function checkName(name) {

    if(typeof name == "string"){
        let count = 0;
        for (let letter of name.toLowerCase()) {
            if (vowels.includes(letter)) {
                count++;
            }
        }
        if(count > 0){
            return "Good Name";
        }else{
            return "Bad Name";
        }
    }else{
        return "Invalid"
    }
}

//console.log(checkName('Salman'));



//###### problem 03 ######
function delete_invalids(Array){
    let txt = [];
    for (let x in Array) {
        if(typeof Array[x]=="number" && Array[x] != "NaN"){
            txt.push(Array[x]);
        }
    }
    return txt;
}


const Array = [1,null, undefined,18, -19,NaN,'12',[1,2],{Ob:'lala'}];

console.log(delete_invalids(Array));



//###### problem 04 ######
function password (Obj){
    const getObj = Obj;

    const user_name = getObj.name;
    const birth_year = getObj.birth_year;
    const siteName = getObj.siteName;

    const my_password = siteName+'#'+user_name+'@'+birth_year;

    return my_password;
}
let myObject = {name: "kolimuddin", birth_year: 1999, siteName: "google"};

//console.log(password(myObject));


//###### problem 05 ######
function MonthlySavings(earning, lvingCost){
    let total_earn = 0;
    for(let x=0; x<earning.length; x++){
        total_earn += earning[x];
    }
    return total_earn;
}

const earning = [1000, 2000, 3000];
const lvingCost = 5400;

console.log(MonthlySavings(earning, lvingCost));
