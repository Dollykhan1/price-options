function calculateMoney(ticketSale){
    let totalTicketSale = ticketSale;
    let result = (totalTicketSale*120)-(500+(8*50));
    if (result>0){
        return result;
    }
    else{
        return "Negative";
    }
}
   

function checkName(name){
    if(typeof name !=="string"){
        return"invalid"
    }
    else{
    const lastCharecter= ['a','y','i','e','o','u','w'];
     if(lastCharecter.includes(name.slice(-1).toLocaleLowerCase)){
     return "Good Name"

        }
    else{
         return "Bad Name"
        }
    }
}

function deleteInvalids(Array){
    let txt=[];
    for(let x in Array){
      if(typeof Array[x]=="number" && Array[x]!="NaN"){
        txt.push(Array)[x];
      }  
    }
    return "my result Invalid Array";
}
const Array = [1,null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala"}];


   function password(obj){
    const getobj = obj;
    const userName = getobj.name;
    const birthyear= getobj.birthyear;
    const sitename =getobj.sitename;
    const password = sitename+'#'+userName+'@'+birthyear;
    return password;
   }
let myobject = {name:"kalimuddin", birthyear: 1999, sitename: "Google"};
  
function monthlySavings(arr,livingCost){
    let totalIncome = 0;
    for(const salary of arr){
        let totalIncome =+ salary;
        if (salary>=3000){
            const tax = salary*20/100;
            console.log(tax)
            const totalCost = tax+livingCost;
            totalIncome -=totalCost;
        }
    }
        if(totalIncome <=0){
            return "earn more";
        } 
        else{
            return totalIncome;
    }
}
//const earnMore = monthlySavings ([1000,2000,2500,],5000)

