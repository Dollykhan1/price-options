//Task -1:
//Find the lowest number in the array below.
//const heights2 = [167, 190, 120, 165, 137];


function smallestNumber(number){
    let min = number[0];
    for(let i = 0; i < number.length; i++){
        let element = number[i];
        if( element < min ){
            min = element
        }
    }
    return min;
}


let totalNum = [25,50,75,56,11,50,7,9,12];
let result = smallestNumber(totalNum);
console.log('The small number is : ',result);







/*const prices = [167, 190, 120, 165, 137];
function getMin(numbers){
    let min = numbers[0];
    for(const number of numbers){
        if(num<min){
            min =num;
        }
    }
    return min;
}
const cheap = getMin(prices);
console.log('cheapest one is cheap', cheap); */
 