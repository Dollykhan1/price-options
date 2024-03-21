const sentence = 'I am learning web dev'
//const result = '.ved bew gninrael ma i


for(const letter of sentence){
   // console.log(letter);
   //revers = letter + revers;
}
//console.log(revers);
let rev = ''
for(let i =0; i<sentence.length; i++){
   // console.log(i);
    //console.log(sentence[i]);
    const letter = sentence[i];
   // rev = letter + rev;
}
//console.log(rev);
//shortcut
const reversed = sentence.split('').reverse().join('');
console.log(reversed);