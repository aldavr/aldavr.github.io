// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// First solution 
function reverse(str) {
    let reversed = '';

    for(let character of str){
        reversed = character + reversed;
    }

}

// Second solution
// function reverse(str) {
//     return str
//         .split('')
//         .reverse()
//         .join('');
// }

module.exports = reverse;