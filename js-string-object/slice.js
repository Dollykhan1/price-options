const address = 'jamaica';
const part = address.slice(2,5);
console.log(part);

const sentence = 'I am a good working parson';
//console.log(sentence.split(' '))
//console.log(sentence.split('a'));

const friendStr = 'dolly,koly,moly,baly shuly,marea';
const friends = friendStr.split(',');
console.log(friends);
const realfriend = ['dolly','koly','moly','baly','shuly','marea'];
console.log(realfriend.join());
console.log(realfriend.join('|'));
