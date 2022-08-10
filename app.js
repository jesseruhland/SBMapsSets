//Quick Question #1
//new Set([1,1,2,2,3,4])
// answer:  This returns a new set containing {1,2,3,4}

//Quick Question #2
//[...new Set("referee")].join("")
// answer:  This returns the string 'ref'

//Quick Question #3
/* let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false); */
/* answer: m = {
    0: {Array(3) => true}
    1: {Array(3) => false}
}
*/


const hasDuplicate = (arr) => {
    let arrSet = new Set(arr);
    if (arrSet.size < arr.length) {
        return true
    } else {return false}
}

const vowelCount = (str) => {
    let vowelRegEx = /[aeiou]/;
    let resultMap = new Map();
    for (let letter of str.toLowerCase()){
        if (vowelRegEx.test(letter)){
            if (!resultMap.has(letter)) {
                resultMap.set(letter, 1)
            } else if (resultMap.has(letter)) {
                resultMap.set(letter, (resultMap.get(letter) + 1))
            }
        }
    } return resultMap
    
}