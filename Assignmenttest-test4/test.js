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

function password (Obj){
        const getObj = Obj;
    
        const userName = getObj.name;
        const birthyear = getObj.birthyear;
        const siteName = getObj.siteName;
    
        const password = siteName+'#'+userName+'@'+birthyear;
    
        return password;
    }
    let myObject = {name: "kolimuddin", birthyear: 1999, siteName: "Google"};
    
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
   