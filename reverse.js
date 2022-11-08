



function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}


function reverseStr(string){
    const result=reverseString(string);
    return result;
}

module.exports.reverseStr=reverseStr;
